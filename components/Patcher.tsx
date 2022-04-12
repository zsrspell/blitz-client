import React from "react";
import Heading from "./typography/Heading";
import LogProvider from "../hooks/useLog";
import LogOutput from "./LogOutput";
import RomPatcher from "./RomPatcher";
import {Seed} from "../lib/seed";

interface PatcherProps {
    seed: Seed;
}

export default function Patcher(props: PatcherProps) {
    const [isPatching, setIsPatching] = React.useState(false);

    return (
        <LogProvider>
            <div className="mb-8">
                <Heading>Patch ROM</Heading>
                <RomPatcher seedId={props.seed.id}
                            outFilename={"TriforceBlitz_" + props.seed.generatedOn}
                            onStart={() => setIsPatching(true)}/>


                {isPatching &&
                    <React.Fragment>
                        <LogOutput/>
                        <div className="font-semibold text-red-500 my-2">The compression step of the patcher can take a
                            while,
                            our apologies! We are working on making the patcher faster as soon as possible.
                        </div>
                    </React.Fragment>
                }
            </div>
        </LogProvider>
    );
}