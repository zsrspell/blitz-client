import React from "react";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";

export default function PowerfulHintsSection() {
    return (
        <div className="flex lg:flex-row flex-col items-center my-8">
            <div className="lg:mr-4 mr-0">
                <Heading>Powerful Hints</Heading>
                <Paragraph>
                    In Triforce Blitz you are tasked with location the three triforce pieces of Power, Courage and
                    Wisdom which are each hidden in one of Hyrule&apos;s dangerous dungeons. Fortunately, you are
                    not without help in this task. Just outside of the Temple of Time, Link can find some Gossip
                    Stones that tell him how many steps are on the road to each piece.
                </Paragraph>

                <Paragraph>
                    There are also many more Gossip Stones to be found hidden throughout all of Hyrule that will
                    tell you where to look for items that help you reach those Triforce Pieces. There is a total of
                    10 hints telling you where to look, and a total of 5 hints telling you where not to look.
                </Paragraph>
            </div>
            <div className="flex flex-col xl:py-0 py-8">
                <div
                    className="rounded-2xl bg-gray-600 px-6 py-3 text-lg sm:text-xl my-2 italic font-semibold text-white w-72 sm:w-96">
                    They say that the <span className="text-green-400">path of courage</span> requires <span
                    className="text-blue-400">16</span> steps.
                </div>

                <div
                    className="rounded-2xl bg-gray-600 px-6 py-3 my-2 text-lg sm:text-xl italic font-semibold text-white w-72 sm:w-96">
                    They say that <span className="text-red-400">the Graveyard</span> is on the <span
                    className="text-blue-400">path of wisdom</span>.
                </div>
            </div>
        </div>
    )
}