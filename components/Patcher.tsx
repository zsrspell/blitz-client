import React from "react";
import Heading from "./typography/Heading";
import RomPatcher from "./RomPatcher";
import {Seed} from "../lib/seed";
import Subheading from "./typography/Subheading";
import PatchFileDownloader from "./PatchFileDownloader";
import LogProvider from "../hooks/useLog";

interface PatcherProps {
    seed: Seed;
}

export default function Patcher(props: PatcherProps) {
    const filename = "TriforceBlitz_" + props.seed.generatedOn;

    return (
        <div className="mb-8">
            <Heading>Play Triforce Blitz</Heading>

            <div className="mb-12">
                <Subheading>I want to patch a ROM</Subheading>
                <LogProvider>
                    <RomPatcher seedId={props.seed.id} outFilename={filename}/>
                </LogProvider>
            </div>

            <div className="mb-12">
                <Subheading>I want to download the patch file</Subheading>
                <PatchFileDownloader seedId={props.seed.id} outFilename={filename}/>
            </div>
        </div>
    );
}