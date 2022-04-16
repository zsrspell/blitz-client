import React from "react";
import SeedGenerator from "../components/SeedGenerator";
import PowerfulHintsSection from "../components/sections/PowerfulHintsSection";
import CompetitiveSection from "../components/sections/CompetitiveSection";
import QuickTurnoverSection from "../components/sections/QuickTurnoverSection";

export default function HomePage() {
    return (
        <div>
            <SeedGenerator/>
            <PowerfulHintsSection/>
            <QuickTurnoverSection/>
            <CompetitiveSection/>
        </div>
    );
}
