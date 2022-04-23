import React from "react";
import SeedGenerator from "../components/SeedGenerator";
import PowerfulHintsSection from "../components/sections/PowerfulHintsSection";
import CompetitiveSection from "../components/sections/CompetitiveSection";
import QuickTurnoverSection from "../components/sections/QuickTurnoverSection";
import Head from "next/head";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Triforce Blitz</title>

                <meta property="og:url"
                      content="https://blitz.c0hesion.com"/>
                <meta property="og:site_name" content="Triforce Blitz" />
                <meta property="og:title" content="Triforce Blitz"/>
                <meta property="og:description" content="A fast-paced, competitive, exciting take on Ocarina of Time randomizer."/>
            </Head>

            <SeedGenerator/>
            <PowerfulHintsSection/>
            <QuickTurnoverSection/>
            <CompetitiveSection/>
        </div>
    );
}
