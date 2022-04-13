import React from "react";
import SpoilerLogCategory from "./SpoilerLogCategory";

interface SpoilerLogProps {
    name: string;
    item: any;
}

export default function SpoilerLogEntry(props: SpoilerLogProps) {
    const name = props.name
        .replaceAll("_", " ")
        .replaceAll(":", "");

    const item = props.item.toString()
        .replaceAll("_", " ")
        .replaceAll(":", "");

    if (typeof props.item === "object") {
        return <SpoilerLogCategory name={props.name} category={props.item} />;
    }

    return (
        <div className="grid grid-cols-5 text-white">
            <div className="col-span-2 capitalize">{name}</div>
            <div className="col-span-3 capitalize">{item}</div>
        </div>
    )
}