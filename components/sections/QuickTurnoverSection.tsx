import React from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";

export default function QuickTurnoverSection() {
    return (
        <div className="flex lg:flex-row flex-col-reverse my-8">
            <div className="min-w-fit mr-16 flex lg:flex-row flex-col items-center lg:block hidden">
                <Image width={192} height={192} src="/stopwatch.svg" />
            </div>
            <div>
                <Heading>Quick Turnover</Heading>
                <Paragraph>
                    Triforce Blitz is designed to be played competitively in a best-of-threes format, so a major
                    design decision was to make sure that seeds would have a quick completion time. A Triforce Blitz
                    seed averages around only 1 hour and 30 minutes in length! The shorter length means that your
                    decisions carry more weight, but better execution also has a much larger impact, resulting in a
                    mode that rewards higher skill expression in all ways.
                </Paragraph>
            </div>
        </div>
    );
}
