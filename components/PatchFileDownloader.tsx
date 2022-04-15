import React from "react";
import Button from "./ui/Button";
import Paragraph from "./typography/Paragraph";
import {getPatchData} from "../lib/seed";
import {sanitizeFilename} from "../lib/util";

interface PatchFileDownloaderProps {
    seedId: string;
    outFilename: string;
}

export default function PatchFileDownloader(props: PatchFileDownloaderProps) {
    const downloadPatchFile = async () => {
        const patch = await getPatchData(props.seedId);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(new Blob([patch]));
        link.download = sanitizeFilename(props.outFilename) + ".zpf";
        link.click();
    }

    return (
        <div className="flex items-center">
            <div className="flex-grow min-w-fit mr-4">
                <Button onClick={downloadPatchFile}>Download Patch</Button>
            </div>
            <Paragraph>
                You can use this patch file with the official patcher at{" "}
                <a className="text-blue-400" href="https://ootrandomizer.com/generator">OoTRandomizer.com</a>
                {" "}to patch a WAD file if you are playing on Wii Virtual Console, or if you prefer to use
                the official patcher.
            </Paragraph>
        </div>
    );
}
