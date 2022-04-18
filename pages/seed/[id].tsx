import React from "react";
import {GetServerSideProps} from "next";
import {getSeed, getSpoilerLog, Seed} from "../../lib/seed";
import SeedInformation from "../../components/SeedInformation";
import Patcher from "../../components/Patcher";
import SpoilerLog from "../../components/spoiler-log";
import Head from "next/head";

export interface SeedPageProps {
    seed: Seed;
    spoilerLog: Record<string, any> | null;
}

export default function SeedPage(props: SeedPageProps) {
    const filename = "TriforceBlitz_" + props.seed.generatedOn;

    return (
        <div>
            <Head>
                <title>Triforce Blitz Patcher</title>
            </Head>

            <Patcher seed={props.seed} />
            <SeedInformation seed={props.seed}/>
            <SpoilerLog spoilerLog={props.spoilerLog} outFilename={filename} seedId={props.seed.id}/>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<SeedPageProps> = async context => {
    const id = context.query.id as string;
    const seed = await getSeed(id);
    const spoilerLog = await getSpoilerLog(id);

    return {
        props: {
            seed: seed,
            spoilerLog: spoilerLog,
        }
    }
}