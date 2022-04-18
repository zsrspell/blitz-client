import React from "react";
import {GetServerSideProps} from "next";
import {getSeed, getSpoilerLog, Seed} from "../../lib/seed";
import SeedInformation from "../../components/SeedInformation";
import Patcher from "../../components/Patcher";
import SpoilerLog from "../../components/spoiler-log";
import Head from "next/head";
import Heading from "../../components/typography/Heading";

export interface SeedPageProps {
    seedId: string;
}

export default function SeedPage(props: SeedPageProps) {
    const [filename, setFilename] = React.useState("TriforceBlitz");
    const [spoilerLog, setSpoilerLog] = React.useState<Record<string, any> | null>(null);
    const [seed, setSeed] = React.useState<Seed | undefined>(undefined);

    React.useEffect(() => {
        getSpoilerLog(props.seedId)
            .then(log => {
                setSpoilerLog(log);
            });
    }, [props.seedId]);

    React.useEffect(() => {
        getSeed(props.seedId)
            .then(res => {
                setSeed(res);
                setFilename("TriforceBlitz_" + res.generatedOn);
            });
    }, [props.seedId]);

    if (seed === undefined) {
        return (
            <div className="text-center">
                <Heading>Loading seed, please wait...</Heading>
            </div>
        );
    } else {
        return (
            <div>
                <Head>
                    <title>Triforce Blitz Patcher</title>
                </Head>

                <Patcher seed={seed}/>
                <SeedInformation seed={seed}/>
                <SpoilerLog spoilerLog={spoilerLog} outFilename={filename} seedId={props.seedId}/>
            </div>
        );
    }
}

export const getServerSideProps: GetServerSideProps<SeedPageProps> = async context => {
    const id = context.query.id as string;

    return {
        props: {
            seedId: id,
        }
    }
}
