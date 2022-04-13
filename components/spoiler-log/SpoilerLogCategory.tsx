import React from "react";
import SpoilerLogEntry from "./SpoilerLogEntry";

interface SpoilerLogProps {
    name: string;
    category: any;
}

export default function SpoilerLogCategory(props: SpoilerLogProps) {
    // Fix the category name first!
    const name = props.name
        .replaceAll("_", " ")
        .replaceAll(":", "");

    if (typeof props.category === "object" && props.name !== "file_hash") {
        return (
            <div className="rounded bg-gray-700 p-4 my-4">
                <h2 className="text-white text-2xl font-heading capitalize text-yellow-400 ">{name}</h2>
                {Object.keys(props.category).map(k =>
                    <SpoilerLogEntry key={k} name={k} item={props.category[k]}/>)}
            </div>
        );
    }

    return <React.Fragment/>;
}