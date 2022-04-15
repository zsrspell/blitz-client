import React from "react";
import {useLog} from "../hooks/useLog";
import {getPatchData} from "../lib/seed";
import Subheading from "./typography/Subheading";
import Paragraph from "./typography/Paragraph";
import Button from "./ui/Button";
import {sanitizeFilename} from "../lib/util";
import LogOutput from "./LogOutput";

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

    const downloadRom = (blob: Blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = sanitizeFilename(props.outFilename) + ".z64";
        link.click();
    }

    const downloadPatchedRom = () => {
        if (outRom !== null) {
            downloadRom(outRom);
        }
    }

    const patchRom = async () => {
        if (fileInput.current && fileInput.current.files) {
            const file = fileInput.current.files[0];
            if (file === null) {
                throw new Error("You must upload a file.");
            }

            setWorking(true);
            setOutRom(null);

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
                    downloadRom(blob);
                    setWorking(false);
                }
            };
        }
    }

    return (
        <div>
            <Paragraph>
                If you are playing on an emulator, you can use the patcher to apply this seed to a ROM. If you
                are using the Wii Virtual Console, you can either inject the patched ROM into a WAD file or
                download the Patch file and use the official patcher.
            </Paragraph>

            {!working ? (
                <React.Fragment>
                    <div className="flex flex-row align-middle">
                        <input ref={fileInput} type="file"
                               className="bg-gray-600 px-4 py-2 rounded font-heading text-white text-2xl mr-4 w-1/2"/>
                        <Button onClick={patchRom}>Patch ROM</Button>
                    </div>
                    <Paragraph>Must be a valid Ocarina of Time 1.0 (US) ROM.</Paragraph>
                </React.Fragment>
            ) : (
                <LogOutput/>
            )}

            {outRom !== null && (
                <Button onClick={downloadPatchedRom}>Download ROM</Button>
            )}
        </div>
    );
}
