import React from "react";

interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
    return (
        <button onClick={props.onClick}
                className="bg-yellow-300 border-4 border-yellow-500 px-4 py-2 rounded font-heading text-2xl text-gray-900">
            {props.children}
        </button>
    )
}