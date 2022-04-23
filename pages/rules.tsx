import React from "react";
import Heading from "../components/typography/Heading";
import Paragraph from "../components/typography/Paragraph";
import Subheading from "../components/typography/Subheading";
import Head from "next/head";

export default function RulesPage() {
    return (
        <div>
            <Head>
                <title>Triforce Blitz Rules</title>

                <meta property="og:url"
                      content="https://blitz.c0hesion.com/rules"/>
                <meta property="og:site_name" content="Triforce Blitz" />
                <meta property="og:title" content="Triforce Blitz Ruleset"/>
                <meta property="og:description" content="Competitive ruleset for Triforce Blitz."/>
            </Head>

            <Heading>Triforce Blitz Rules</Heading>
            <Paragraph>
                The Triforce Blitz Standard ruleset follows the same rules as the{" "}
                <a className="text-blue-400 hover:underline"
                   href="https://wiki.ootrandomizer.com/index.php?title=Standard">
                    Ocarina of Time Randomizer Standard Ruleset
                </a>.
            </Paragraph>

            <Subheading>2 Hour Time Limit</Subheading>

            <Paragraph>
                Triforce Blitz can be raced under an optional but recommended time limit. Although Triforce Blitz
                generally generates short seeds, the algorithm can occasionally produce a monstrosity. Using a time
                limit can help bring a race to its conclusion and declare a winner without forcing the contestants
                to finish a seed that is no longer interesting.
            </Paragraph>

            <Subheading>Determining a Winner when Using the Time Limit</Subheading>


            <div className="flex flex-row">
                <div className="flex-grow">
                    <Paragraph>
                        If a race reaches the time limit, use the following criteria to determine a winner:
                    </Paragraph>

                    <ol className="list-decimal list-outside text-yellow-100 my-10 ml-16">
                        <li>The number of Triforce pieces found.</li>
                        <li>Time when the last Triforce piece was found.</li>
                    </ol>

                    <Paragraph>
                        For example, consider the table to the right. In this race, Racer B and Racer C have both found
                        two triforce pieces before the time limit. Because Racer B found their last triforce piece
                        faster than Racer C (1:45 vs 1:50), Racer B would be the winner.
                    </Paragraph>
                </div>

                <table className="min-w-fit ml-8">
                    <tbody>
                    <tr>
                        <td></td>
                        <th className="border border-yellow-300 p-2 bg-gray-700 text-yellow-300">Racer A</th>
                        <th className="border border-yellow-300 p-2 bg-gray-700 text-yellow-300">Racer B</th>
                        <th className="border border-yellow-300 p-2 bg-gray-700 text-yellow-300">Racer C</th>
                    </tr>
                    <tr>
                        <th className="border border-yellow-300 p-2 bg-gray-700 text-yellow-300">Power</th>
                        <td className="border border-yellow-300 p-2 bg-gray-700">Not Found</td>
                        <td className="border border-yellow-300 p-2 bg-gray-700">0:45:00</td>
                        <td className="border border-yellow-300 p-2 bg-gray-700">0:30:00</td>
                    </tr>
                    <tr>
                        <th className="border border-yellow-300 p-2 bg-gray-700 text-yellow-300">Wisdom</th>
                        <td className="border border-yellow-300 p-2 bg-gray-700">0:20:00</td>
                        <td className="border border-yellow-300 p-2 bg-gray-700">Not Found</td>
                        <td className="border border-yellow-300 p-2 bg-gray-700">1:50:00</td>
                    </tr>
                    <tr>
                        <th className="border border-yellow-300 p-2 bg-gray-700 text-yellow-300">Courage</th>
                        <td className="border border-yellow-300 p-2 bg-gray-700">Not Found</td>
                        <td className="border border-yellow-300 p-2 bg-gray-700">1:45:00</td>
                        <td className="border border-yellow-300 p-2 bg-gray-700">Not Found</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
