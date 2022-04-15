import React from "react";

export default function Heading(props: React.PropsWithChildren<any>) {
    return (
        <h1 className="font-heading text-yellow-500 text-4xl tracking-wide font-bold my-4 last:mb-0">
            {props.children}
        </h1>
    )
}
