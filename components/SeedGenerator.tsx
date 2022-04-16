import React from "react";
import {generateSeed, Seed} from "../lib/seed";
import {useRouter} from "next/router";
import Heading from "./typography/Heading";
import Paragraph from "./typography/Paragraph";
import Button from "./ui/Button";

export default function SeedGenerator() {
    const router = useRouter();
    const [generateLog, setGenerateLog] = React.useState(true);
    const [working, setWorking] = React.useState(false);

    const onButtonClicked = async () => {
        if (!working) {
            setWorking(true);

            const seed = await generateSeed(generateLog);
            await router.push(`/seed/${seed.id}`);
        }
    }

    return (
        <div className="my-8">
            <Heading>Welcome to Triforce Blitz!</Heading>

            <Paragraph>
                Triforce Blitz is a fresh, fast-paced take on Ocarina of Time Randomizer. In Triforce Blitz, you must
                help Link find the triforces of Wisdom, Courage and Power that are hidden somewhere in Hyrule!
                Fortunately, the Gossip Stones across Hyrule will help you locate them with very powerful hints.
            </Paragraph>

            <div className="text-center mt-8">
                {!working ? (
                    <div className="flex flex-col items-center">
                        <Button onClick={onButtonClicked}>Play Triforce Blitz now!</Button>

                        <label className="text-white font-heading tracking-wide my-3">
                            <input type="checkbox" onChange={ev => setGenerateLog(ev.target.checked)}
                                   checked={generateLog}/>
                            Generate a spoiler log for the seed.
                        </label>
                    </div>
                ) : (
                    <div className="font-heading text-3xl text-yellow-300 tracking-wide">
                        Please wait, generating your seed...
                    </div>
                )}
            </div>
        </div>
    )
}
