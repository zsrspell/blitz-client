import React from "react";
import {useLog} from "../hooks/useLog";

export default function LogOutput() {
    const output = React.useRef<HTMLDivElement>(null);
    const {log} = useLog();

    React.useEffect(() => {
        if (output.current) {
            output.current.scrollTop = output.current.scrollHeight;
        }
    }, [log]);

    return (
        <div className="leading-6 font-mono text-gray-200 bg-gray-800 rounded-xl w-full h-48 my-8 p-4 overflow-hidden"
             ref={output}>
            {log.flatMap((l, i) => <pre key={i} className={l.error ? "text-red-600" : "text-gray-200"}>{l.message}</pre>)}
        </div>
    );
}