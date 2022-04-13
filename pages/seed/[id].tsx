import React from "react";
import {GetServerSideProps} from "next";
import {getSeed, getSpoilerLog, Seed} from "../../lib/seed";
import SeedInformation from "../../components/SeedInformation";
import Patcher from "../../components/Patcher";
import SpoilerLog from "../../components/spoiler-log";

export interface SeedPageProps {
    seed: Seed;
    spoilerLog: Record<string, any> | null;
}

export default function SeedPage(props: SeedPageProps) {
    return (
        <div>
            <Patcher seed={props.seed} />
            <SeedInformation seed={props.seed}/>
            <SpoilerLog spoilerLog={props.spoilerLog} />
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