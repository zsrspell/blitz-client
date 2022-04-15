import React from "react";

export default function Subheading(props: React.PropsWithChildren<any>) {
    return (
        <h2 className="font-heading text-yellow-400 text-2xl my-4">{props.children}</h2>
    );
}