import Zelda64 from "zelda64";

export interface StartMessage {
    romData: ArrayBuffer;
    patchData: ArrayBuffer;
}

self.onmessage = (e: MessageEvent<StartMessage>) => {
    const logMessage = (msg: string) => {
        self.postMessage({
            type: "MESSAGE",
            message: msg,
        });
    }

    const rom = e.data.romData;
    const patch = e.data.patchData;

    logMessage("Decompressing ROM");
    const decompressor = new Zelda64.Decompressor(rom);
    const decompressionResult = decompressor.inflate();

    logMessage("Applying patch data to decompressed ROM");
    const patcher = new Zelda64.Patcher(patch);
    const patchedRom = patcher.patch(decompressionResult.data);

    logMessage("Compressing, this may take a while!")
    const compressor = new Zelda64.Compressor(patchedRom, decompressionResult.exclusions);
    compressor.onprogress = (file, totalFiles, operation, size, compSize) => {
        size = size || 0;
        compSize = compSize || 0;

        const sizeKb = Math.floor((size / 1024 * 10)) / 10;
        const compSizeKb = Math.floor((compSize / 1024 * 10)) / 10;

        switch (operation) {
            case Zelda64.Operation.COMPRESS: {
                const r = Math.floor((100 - (compSize/size * 100)) * 10) / 10;
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

    const result = compressor.deflate();

    self.postMessage({
        type: "FINISHED",
        result: result,
    });
}
