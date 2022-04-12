import React from "react";
import {useLog} from "../hooks/useLog";
import {getPatchData} from "../lib/seed";

interface RomPatcherProps {
    seedId: string;
    outFilename: string;
    onStart?: () => void;
}

export default function RomPatcher(props: RomPatcherProps) {
    const {writeMessage} = useLog();
    const fileInput = React.useRef<HTMLInputElement>(null);
    const [outRom, setOutRom] = React.useState<Blob | null>(null);
    const [working, setWorking] = React.useState(false);

    const downloadPatchedRom = () => {
        if (outRom !== null) {
            const objectUrl = URL.createObjectURL(outRom);
            const link = document.createElement("a");
            link.href = objectUrl;
            link.download = props.outFilename + ".z64";
            link.click();
        }
    }

    const patchRom = async () => {
        if (fileInput.current && fileInput.current.files) {
            const file = fileInput.current.files[0];
            if (file === null) {
                throw new Error("You must upload a file.");
            }

            setWorking(true);
            if (props.onStart) {
                props.onStart();
            }

            writeMessage("Welcome to the Triforce Blitz patcher, powered by Zelda64.js! (made by Spell)");
            writeMessage("Retrieving patch data...");
            const romData = await file.arrayBuffer();
            const patchData = await getPatchData(props.seedId);

            writeMessage("Spawning Web Worker background thread...");
            const worker = new Worker(new URL("../lib/patcher.worker.ts", import.meta.url));

            const startTime = performance.now();
            worker.postMessage({
                type: "START",
                romData: romData,
                patchData: patchData,
            });

            worker.onmessage = async ev => {
                if (ev.data.type === "MESSAGE") {
                    writeMessage(ev.data.message);
                }

                if (ev.data.type === "ERROR") {
                    writeMessage("\nEncountered an error while patching:", true);
                    writeMessage("\t" + ev.data.message, true);
                    writeMessage("\nAre you using a valid Ocarina of Time 1.0 (US) ROM?", true);
                    setWorking(false);
                }

                if (ev.data.type === "FINISHED") {
                    const blob = new Blob([ev.data.result as ArrayBuffer], {
                        type: "application/octet-stream"
                    });

                    const finishTime = performance.now();
                    const t = Math.floor((finishTime - startTime) / 100) / 10;
                    writeMessage(`Compression finished in ${t} seconds. Enjoy!!`);
                    setOutRom(blob);
                    setWorking(false);
                }
            };
        }
    }

    return (
        <div>
            {outRom === null && !working &&
                <React.Fragment>
                    <div className="flex flex-row align-middle">
                        <input ref={fileInput} type="file"
                               className="bg-white px-4 py-2 rounded font-heading text-2xl mr-4 w-1/2"/>
                        <button
                            className="bg-yellow-300 border-4 border-yellow-500 px-4 py-2 rounded font-heading text-2xl text-gray-900"
                            onClick={patchRom}>Patch ROM
                        </button>
                    </div>

                    <p className="text-white font-semibold py-4 text-lg">Must be a valid Ocarina of Time 1.0 (US) ROM.</p>
                </React.Fragment>
            }

            {outRom !== null &&
                <React.Fragment>
                    <button
                        className="bg-yellow-300 border-4 border-yellow-500 px-4 py-2 rounded font-heading text-2xl text-gray-900"
                        onClick={downloadPatchedRom}>Download ROM
                    </button>

                    <p className="font-semibold text-blue-500 my-2">
                        If you are playing on Wii Virtual Console, you will need to inject the patched ROM into a WAD
                        file yourself using a tool like
                        {" "}
                        <a href="https://github.com/krimtonz/gzinject"
                           className="underline text-yellow-400">gzinject</a>.
                        {" "}
                        We are looking to implement WAD injection in the future. Our apologies for the inconvenience.
                    </p>
                </React.Fragment>
            }
        </div>
    );
}
