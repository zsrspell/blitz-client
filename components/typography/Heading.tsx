import React from "react";

export default function Heading(props: React.PropsWithChildren<any>) {
    return (
        <h1 className="font-heading text-yellow-300 text-4xl tracking-wide font-bold">{props.children}</h1>
    )
}
