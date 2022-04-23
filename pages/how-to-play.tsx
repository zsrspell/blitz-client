import React from "react";
import Heading from "../components/typography/Heading";
import Paragraph from "../components/typography/Paragraph";
import Subheading from "../components/typography/Subheading";
import YoutubeEmbed from "../components/ui/YoutubeEmbed";
import OotHint from "../components/OotHint";
import Image from "next/image";
import Head from "next/head";

export default function HowToPlayPage() {
    return (
        <div>
            <Head>
                <title>How to Play</title>
                <meta property="og:url"
                      content="https://blitz.c0hesion.com/how-to-play"/>
                <meta property="og:site_name" content="Triforce Blitz"/>
                <meta property="og:title" content="How to play Triforce Blitz"/>
                <meta property="og:description" content="A beginner's guide to playing Triforce Blitz."/>
            </Head>

            <Heading>How to Play</Heading>

            <Paragraph>
                Triforce Blitz is an exciting, fast-paced take on Ocarina of Time Randomizer that was designed with
                competitive play in mind. However, Triforce Blitz is also very fun to play casually and a lot of
                attention went into making it accessible for new players. This document assumes the reader has some
                familiarity with Ocarina of Time Randomizer already, but we are working on a version of this document
                for complete newcomers who have only played Ocarina of Time.
            </Paragraph>

            <Paragraph>
                This video by
                {" "}<a href="https://twitch.tv/elagatua" className="text-blue-400 hover:underline">Elagatua</a>{" "}
                provides a quick primer on how to play Triforce Blitz as well as some of our
                design rationale and what problems of Ocarina of Time Randomizer&apos;s standard ruleset and settings.
            </Paragraph>

            <div className="flex flex-col items-center my-12">
                <YoutubeEmbed videoId="o1PRTYYv_ZY"/>
            </div>

            <Subheading>Goal</Subheading>

            <Paragraph>
                Unlike Ocarina of Time Randomizer&apos;s Standard goal where Link must defeat Ganondorf, the goal
                in Triforce Blitz is to find the three triforces of Wisdom, Power, and Courage which have each been
                hidden in one of Hyrule&apos;s dungeons. The goal of any Triforce Blitz seed is to find the three
                Triforce pieces, at which point the game will end and display the credits scene.
            </Paragraph>

            <Subheading>How to Find the Triforce Pieces</Subheading>

            <Paragraph>
                The three Triforce Pieces are each hidden in one of Hyrule&apos;s many dungeons, including those that do
                not reward a Spiritual Stone or Medallion. Those being Inside the Deku Tree,
                Dodongo&apos;s Cavern, Inside Jabu-Jabu&apos;s Belly, Forest Temple, Fire Temple, Water
                Temple, Spirit Temple, Shadow Temple, Bottom of the Well, Gerudo Training Grounds, Ice Cavern, and
                Ganon&apos;s Castle.
                The Triforce Piece can be anywhere in its respective dungeon, and isn&apos;t just limited to being
                found on the final boss of the dungeon.
            </Paragraph>

            <Paragraph>
                To help Link in his quest to locate the Triforce pieces, the Gossip Stones outside of the Temple of Time
                will tell him how many items are required to retrieve each of the Triforce Pieces. These so-called Path
                Count hints are the most important and powerful hints available to the player, and are explained in
                greater detail in the section below. Additionally, ten more regular Path Hints can be found across
                Hyrule with one of those ten always being found on the fourth Gossip Stone outside of the Temple of
                Time, these Path Hints tell you where you can find one of the items on a specific Triforce piece&apos;s
                path. Conversely, five Barren hints are hidden around Hyrule which tell you what locations will not
                yield any useful items.
            </Paragraph>

            <Subheading>Path Count and Path Hints</Subheading>

            <div className="flex flex-row">
                <div className="flex-grow">
                    <Paragraph>
                        One of the first things the player will want to do after starting a Triforce Blitz seed is to
                        run out of the Temple of Time where Link spawns, and check the four Gossip Stones outside.
                        Three of these stones will contain a new hint type introduced by Triforce Blitz called the
                        Path Count hint. The Path Count hint tells you how many required items of which no duplicate
                        copies exist are required to get the item, according to the logic used by the randomizer.
                    </Paragraph>

                    <Paragraph>
                        The path count means exactly how many uniquely accessible items are required to reach the
                        Triforce piece. For example, let us say the Triforce of Wisdom is located in the Deku Tree on
                        Queen Gohma. The path might look like this: Hookshot → Slingshot. The path count would thus be
                        2 since there are only two items on it, but that does not mean you only need those 2 items. For
                        example, the Hookshot might be locked behind a bombable boulder. The Bomb Bag might or might
                        not be part of the Path count depending on if there are multiple Bomb Bags available to the
                        player. That is what is meant by &quot;uniquely accessible.&quot;
                    </Paragraph>
                </div>

                <div className="flex flex-col ml-16 min-h-full hidden 2xl:block">
                    <OotHint>
                        They say that the <span className="text-green-500">path of courage</span> requires <span
                        className="text-blue-400">16</span> steps.
                    </OotHint>
                    <OotHint>
                        They say that <span className="text-red-400">the Graveyard</span> is on the <span
                        className="text-blue-400">path of wisdom</span>.
                    </OotHint>
                    <OotHint>
                        They say that <span className="text-green-500">the Forest Temple</span> is on the <span
                        className="text-green-500">path of courage</span>.
                    </OotHint>
                </div>
            </div>

            <Paragraph>
                It is important to remember that the Triforce piece can be in any check located inside the
                dungeon. For example, a Triforce piece in the Spirit Temple may have a very low path
                count if it is located at the start of the child section of Spirit Temple, or a very high Path
                count if it is located on Twinrova. It is therefore more often than not a mistake to guess which
                dungeon the piece might be in based solely on path count.
            </Paragraph>

            <Paragraph>
                To help you figure out where the Triforce piece is located, you will be given ten Path hints,
                one which may be found right outside of the Temple of Time and nine more scattered around
                Hyrule. These path hints will tell you where one of the items on the path of a specific Triforce
                piece can be found, which will help you narrow down the search considerably.
            </Paragraph>

            <Paragraph>
                The following is a video by Elagatua explaining how Path Count hints work exactly and the
                nuances of how to interpret them.
            </Paragraph>

            <div className="flex flex-col items-center my-12">
                <YoutubeEmbed videoId="o6F_msuiY2k"/>
            </div>

            <Subheading>Differences from Ocarina of Time Randomizer</Subheading>

            <Paragraph>
                While the Triforce Blitz settings are based on the standard tournament settings for Ocarina of Time
                Randomizer, to expedite the average completion time of the seed and to accommodate the different goal of
                Triforce Blitz, the following changes have been made to the settings:
            </Paragraph>

            <ul className="list-disc list-outside text-yellow-100 my-10 ml-16">
                <li>The bridge to Ganon&apos;s Castle opens when the player obtains any 2 dungeon rewards
                    (Medallions or Spiritual Stones), that means the player only needs to complete one dungeon to
                    access Ganon&apos;s Castle since you start with one dungeon reward that would normally be
                    rewarded for pulling the Master Sword from the pedestal.
                </li>
                <li>The elevator in the Forest Temple leading to the basement is always up and enabled.</li>
                <li>The platform in Jabu-Jabu&apos;s Belly has been lowered, giving access to the Barinade boss
                    arena.
                </li>
                <li>Boss keys have been removed from the game, allowing Link to immediately enter the boss arena if
                    he can access it.
                </li>
                <li>The adult trading quest has been reduced to merely the Claim Check.</li>
                <li>Link only has to collect 3 cuccos for Anju in Kakariko Village to get her reward.</li>
                <li>The reward for the frog fly-eating minigame (also known as Frogs 2) has been disabled.</li>
                <li>Link will always start as an adult in the Temple of Time.</li>
                <li>The rewards from collecting 30, 40 and 50 Golden Skulltullas have been disabled.</li>
                <li>Checks involving the Skull Mask and Mask of Truth have been disabled.</li>
                <li>The chest in Jabu-Jabu&apos;s Belly that rewards the Boomerang has been disabled.</li>
                <li>The Gold Scale is no longer considered a logical entry to the Water Temple, but it is still
                    allowed for the player to enter the Water Temple with it.
                </li>
            </ul>

            <Subheading>Hint Distribution</Subheading>

            <Paragraph>
                The Triforce Blitz preset distributes hints in the following manner:
            </Paragraph>

            <ul className="list-disc list-outside text-yellow-100 my-10 ml-16">
                <li>3 Path Count hints located outside the Temple of Time.</li>
                <li>Up to 10 Path hints, one of which is always located outside the Temple of Time.</li>
                <li>Up to 5 Barren hints.</li>
                <li>3 always hints: Ocarina of Time song, Nocturne of Shadows song, 20 Skulls.</li>
                <li>At least 1 sometimes hint, with extra being available if there are less than 10 path hints or 5
                    barren hints.
                </li>
                <li>Path hints will always prioritize dungeon locations over Overworld locations.</li>
                <li>Barren hints will always prioritize dungeon locations over Overworld locations.</li>
                <li>There is no limit to the amount of dungeons that may be hinted by Path and Barren hints.</li>
            </ul>

            <Subheading>Tracker Support</Subheading>

            <div className="flex flex-row mb-32">
                <div className="flex flex-col min-h-full justify-center mr-8 shadow-lg shadow-black">
                    <Image src="/gst_preview.png" width={181} height={406}
                           className="rounded"
                           alt="Screenshot of the Gossip Stone Tracker using the Triforce Blitz layout."/>
                </div>

                <div className="flex-grow">
                    <Paragraph>
                        A Triforce Blitz layout for the Gossip Stone Tracker is available for download.
                    </Paragraph>

                    <a href="https://drive.google.com/file/d/1q_IKve7CxcHeaVZetbqmArZj5LLeUq87/view"
                       className="bg-yellow-300 border-4 border-yellow-500 px-4 py-2 rounded font-heading text-2xl text-gray-900">
                        GST Layout for Triforce Blitz
                    </a>
                </div>
            </div>
        </div>
    )
}