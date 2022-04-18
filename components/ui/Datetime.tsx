import React from "react";
import {DateTime, LocaleOptions} from "luxon";

interface DateTimeProps {
    datetime: string;
    formatOpts?: Intl.DateTimeFormatOptions;
}

const defaultFormat: Intl.DateTimeFormatOptions = {
    dateStyle: "long",
    timeStyle: "medium",
};

const defaultLocale: LocaleOptions = {
    locale: "en-US",
}

export default function Datetime(props: DateTimeProps) {
    const format = props.formatOpts === undefined ? defaultFormat : props.formatOpts;
    const [dt, setDt] = React.useState<string>(DateTime.fromISO(props.datetime).toLocaleString(format, defaultLocale));

    React.useEffect(() => {
        setDt(DateTime.fromISO(props.datetime).toLocaleString(format));
    }, [props.datetime, format]);

    return <time dateTime={props.datetime}>{dt}</time>;
}
