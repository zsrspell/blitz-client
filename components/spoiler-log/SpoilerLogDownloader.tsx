import React from "react";
import Button from "../ui/Button";
import {sanitizeFilename} from "../../lib/util";
import {getSpoilerLog} from "../../lib/seed";

interface SpoilerLogDownloaderProps {
    seedId: string;
    outFilename: string;
}

export default function SpoilerLogDownloader(props: SpoilerLogDownloaderProps) {
    const downloadSpoilerLog = async () => {
        const spoilerLog = await getSpoilerLog(props.seedId);
        const json = JSON.stringify(spoilerLog, null, 2);

        const objectUrl = URL.createObjectURL(new Blob([json]));
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = sanitizeFilename(props.outFilename) + "_Spoiler.json";
        link.click();
    }

    return (
        <Button onClick={downloadSpoilerLog}>Download Spoiler Log</Button>
    )
}

