import React from "react";

export default function Paragraph(props: React.PropsWithChildren<any>) {
    return (
        <p className="text-white font-semibold my-4 first:mt-0 last:mb-0 leading-6">
            {props.children}
        </p>
    )
}