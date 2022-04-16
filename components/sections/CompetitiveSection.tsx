import React from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from "next/image";


export default function CompetitiveSection() {
    return (
        <div className="flex lg:flex-row flex-col items-center my-8">
            <div>
                <Heading>Competitive Design</Heading>
                <Paragraph>
                    Triforce Blitz was designed to provide a twist on Ocarina of Time Randomizer that is less volatile
                    and better suited to competitive play. While we think Triforce Blitz is great fun to play casually
                    as well, it is our hope that Triforce Blitz will allow for a more competitive environment to form
                    around Ocarina of Time Randomizer, as well as putting a greater emphasis on skill expression.
                </Paragraph>
            </div>
        </div>
    );
}
