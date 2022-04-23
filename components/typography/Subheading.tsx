import React from "react";

export default function Subheading(props: React.PropsWithChildren<any>) {
    return (
        <h2 className="font-heading text-yellow-300 text-3xl my-5">{props.children}</h2>
    );
}