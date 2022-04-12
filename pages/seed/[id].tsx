import React from "react";
import {GetServerSideProps} from "next";
import {getSeed, Seed} from "../../lib/seed";
import SeedInformation from "../../components/SeedInformation";
import Patcher from "../../components/Patcher";

export interface SeedPageProps {
    seed: Seed;
}

export default function SeedPage(props: SeedPageProps) {
    return (
        <div>
            <Patcher seed={props.seed} />
            <SeedInformation seed={props.seed}/>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<SeedPageProps> = async context => {
    const id = context.query.id as string;
    const seed = await getSeed(id);

    return {
        props: {
            seed: seed,
        }
    }
}