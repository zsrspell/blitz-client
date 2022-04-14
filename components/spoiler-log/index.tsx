import React from "react";
import Heading from "../typography/Heading";
import SpoilerLogCategory from "./SpoilerLogCategory";

interface SpoilerLogProps {
    spoilerLog: object | null;
}

export default function SpoilerLog(props: SpoilerLogProps) {
    const [visible, setVisible] = React.useState<boolean>(false);

    if (props.spoilerLog !== null) {
        return (
            <div>
                <Heading>Spoiler Log</Heading>
                {visible ? (
                    <React.Fragment>
                        <button
                            className="bg-yellow-300 border-4 border-yellow-500 px-4 py-2 rounded font-heading text-2xl text-gray-900"
                            onClick={() => setVisible(false)}>
                            Click to hide the Spoiler Log
                        </button>

                        {Object.keys(props.spoilerLog).map(key => (
                            // @ts-ignore
                            <SpoilerLogCategory key={key} name={key} category={props.spoilerLog[key]}/>
                        ))}
                    </React.Fragment>
                ) : (
                    <button
                        className="bg-yellow-300 border-4 border-yellow-500 px-4 py-2 rounded font-heading text-2xl text-gray-900"
                        onClick={() => setVisible(true)}>
                        Click to view the Spoiler Log
                    </button>
                )}
            </div>
        );
    } else {
        return (
            <div>
                <Heading>Spoiler Log</Heading>
                <div className="text-white font-semibold">A spoiler log is not available for this seed.</div>
            </div>
        )
    }
}