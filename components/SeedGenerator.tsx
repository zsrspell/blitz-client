import React from "react";
import {generateSeed, Seed} from "../lib/seed";
import {useRouter} from "next/router";

export default function SeedGenerator() {
    const router = useRouter();

    const [working, setWorking] = React.useState(false);

    const onButtonClicked = async () => {
        if (!working) {
            setWorking(true);

            const seed = await generateSeed();
            await router.push(`/seed/${seed.id}`);
        }
    }

    return (
        <div className="my-8">
            <h1 className="font-heading text-yellow-300 text-4xl tracking-wide font-bold">
                Welcome to Triforce Blitz!
            </h1>

            <p className="text-white text-lg leading-8 my-4 text-justify">
                Triforce Blitz is a fresh, fast-paced take on Ocarina of Time Randomizer. In Triforce Blitz, you must
                help Link find the triforces of Wisdom, Courage and Power that are hidden somewhere in Hyrule!
                Fortunately, the Gossip Stones across Hyrule will help you locate them with very powerful hints.
            </p>

            <div className="text-center mt-8">
                {!working ? (
                    <button onClick={onButtonClicked}
                            className="bg-yellow-300 border-4 border-white px-4 py-2 rounded font-heading text-2xl text-gray-900">
                        Play Triforce Blitz now!
                    </button>
                ) : (
                    <div className="font-heading text-3xl text-yellow-300 tracking-wide">Please wait, generating your seed...</div>
                )}
            </div>
        </div>
    )
}
