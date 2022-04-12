import Zelda64 from "zelda64";
import {ProgressFn} from "zelda64/dist/compressor";

export interface StartMessage {
    romData: ArrayBuffer;
    patchData: ArrayBuffer;
}

const exclusions: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 942, 944, 946, 948, 950, 952, 954,
    956, 958, 960, 962, 964, 966, 968, 970, 972, 974, 976, 978, 980, 982, 984, 986, 988, 990, 992, 994, 996, 998, 1000,
    1002, 1004, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514,
    1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525
];

function decompressRom(rom: ArrayBuffer): { data: ArrayBuffer, exclusions: number[] } {
    if (rom.byteLength > 0x2000000) {
        return {
            data: rom,
            exclusions: exclusions,
        };
    } else {
        const decompressor = new Zelda64.Decompressor(rom);
        return decompressor.inflate();
    }
}

self.onmessage = (e: MessageEvent<StartMessage>) => {
    const logMessage = (msg: string) => {
        self.postMessage({
            type: "MESSAGE",
            message: msg,
        });
    }

    const logError = (msg: string) => {
        self.postMessage({
            type: "ERROR",
            message: msg,
        });
    }

    const progressCallback: ProgressFn = (file, totalFiles, operation, size, compSize) => {
        size = size || 0;
        compSize = compSize || 0;

        const sizeKb = Math.floor((size / 1024 * 10)) / 10;
        const compSizeKb = Math.floor((compSize / 1024 * 10)) / 10;

        switch (operation) {
            case Zelda64.Operation.COMPRESS: {
                const r = Math.floor((100 - (compSize / size * 100)) * 10) / 10;
                logMessage(`[${file}/${totalFiles}] Compressed (${sizeKb} KB -> ${compSizeKb} KB; ${r}%) `);
                break;
            }

            case Zelda64.Operation.COPY: {
                logMessage(`[${file}/${totalFiles}] Copied ${sizeKb} KB`);
                break;
            }

            case Zelda64.Operation.NULL: {
                logMessage(`[${file}/${totalFiles}] Ignored`);
                break;
            }
        }
    }

    const rom = e.data.romData;
    const patch = e.data.patchData;

    // If this ROM is over 32 MB it's probably uncompressed.
    try {
        logMessage("Decompressing ROM");
        const decompressionResult = decompressRom(rom);

        logMessage("Applying patch data to decompressed ROM");
        const patcher = new Zelda64.Patcher(patch);
        const patchedRom = patcher.patch(decompressionResult.data);

        logMessage("Compressing, this may take a while!")
        const compressor = new Zelda64.Compressor(patchedRom, decompressionResult.exclusions);
        compressor.onprogress = progressCallback;
        const result = compressor.deflate();

        self.postMessage({
            type: "FINISHED",
            result: result,
        });
    } catch (e) {
        logError((e as Error).message);
    }
}
