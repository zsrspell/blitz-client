import React from "react";
import Heading from "../typography/Heading";
import SpoilerLogCategory from "./SpoilerLogCategory";
import Button from "../ui/Button";
import SpoilerLogDownloader from "./SpoilerLogDownloader";

interface SpoilerLogProps {
    spoilerLog: object | null;
    seedId: string;
    outFilename: string;
}

export default function SpoilerLog(props: SpoilerLogProps) {
    const [visible, setVisible] = React.useState<boolean>(false);

    if (props.spoilerLog !== null) {
        return (
            <div className="mb-12">
                <Heading>Spoiler Log</Heading>
                <div className="grid grid-cols-2 gap-4">
                    {visible ? (
                        <Button onClick={() => setVisible(false)}>
                            Click to hide the Spoiler Log
                        </Button>
                    ) : (
                        <Button onClick={() => setVisible(true)}>
                            Click to view the Spoiler Log
                        </Button>
                    )}

                    <SpoilerLogDownloader seedId={props.seedId} outFilename={props.outFilename} />
                </div>

                {visible && (
                    <React.Fragment>
                        {Object.keys(props.spoilerLog).map(key => (
                            // @ts-ignore
                            <SpoilerLogCategory key={key} name={key} category={props.spoilerLog[key]}/>
                        ))}
                    </React.Fragment>
                )}
            </div>
        );
    } else {
        return (
            <div className="mb-12">
                <Heading>Spoiler Log</Heading>
                <div className="text-white font-semibold">A spoiler log is not available for this seed.</div>
            </div>
        )
    }
}