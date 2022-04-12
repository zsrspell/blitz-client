import React from "react";

interface LogContextProps {
    log: { message: string, error: boolean }[];
    writeMessage: (msg: string, error?: boolean) => void;
}

const noop = () => {
};

const LogContext = React.createContext<LogContextProps>({
    log: [],
    writeMessage: noop,
});

export const useLog = () => React.useContext(LogContext);

export default function LogProvider(props: React.PropsWithChildren<any>) {
    const [log, setLog] = React.useState<{ message: string, error: boolean }[]>([]);

    const context: LogContextProps = {
        log: log,
        writeMessage: (message: string, error: boolean = false) => {
            setLog(state => [...state, {message, error}]);
        }
    }

    return (
        <LogContext.Provider value={context}>
            {props.children}
        </LogContext.Provider>
    )
}