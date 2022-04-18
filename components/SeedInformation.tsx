import React from "react";
import {Seed} from "../lib/seed";
import Heading from "./typography/Heading";
import Datetime from "./ui/Datetime";

interface SeedInformationProps {
    seed: Seed;
}

export default function SeedInformation(props: SeedInformationProps) {
    return (
        <div className="mb-12">
            <Heading>Seed Information</Heading>

            <div className="grid grid-cols-5 text-white text-lg">
                <div className="col-span-1 font-bold">Seed/ID</div>
                <div className="col-span-4 font-mono">{props.seed.id}</div>

                <div className="col-span-1 font-bold">Hash</div>
                <div className="col-span-4 font-mono">{props.seed.hash.join(", ")}</div>

                <div className="col-span-full h-4"/>

                <div className="col-span-1 font-bold">Settings</div>
                <div className="col-span-4 font-mono break-words">{props.seed.settingsString}</div>

                <div className="col-span-1 font-bold">Version</div>
                <div className="col-span-4 font-mono">{props.seed.randomizerVersion}</div>

                <div className="col-span-1 font-bold">Requested At</div>
                <div className="col-span-4 font-mono">
                    <Datetime datetime={props.seed.requestedOn}/>
                </div>

                <div className="col-span-1 font-bold">Generated At</div>
                <div className="col-span-4 font-mono">
                    <Datetime datetime={props.seed.generatedOn}/>
                </div>
            </div>
        </div>
    )
}