import React from "react";

export default function Paragraph(props: React.PropsWithChildren<any>) {
    return (
        <p className=" my-8 first:mt-0 last:mb-0">
            {props.children}
        </p>
    )
}