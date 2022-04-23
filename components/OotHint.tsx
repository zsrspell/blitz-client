import React from "react";

export default function OotHint(props: React.PropsWithChildren<any>) {
    return (
        <div className="rounded-2xl bg-gray-600 px-6 py-3 text-lg sm:text-xl my-2 italic font-semibold text-white w-72 sm:w-96">
            {props.children}
        </div>
    )
}