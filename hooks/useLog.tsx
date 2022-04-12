import React from "react";

interface LogContextProps {
    log: string[];
    writeMessage: (msg: string) => void;
}

const noop = () => {
};

const LogContext = React.createContext<LogContextProps>({
    log: [],
    writeMessage: noop,
});

export const useLog = () => React.useContext(LogContext);

export default function LogProvider(props: React.PropsWithChildren<any>) {
    const [log, setLog] = React.useState<string[]>([]);

    const context: LogContextProps = {
        log: log,
        writeMessage: (message: string) => {
            setLog(state => [...state, message]);
        }
    }

    return (
        <LogContext.Provider value={context}>
            {props.children}
        </LogContext.Provider>
    )
}