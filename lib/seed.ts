export interface Seed {
    id: string;
    requestedOn: string;
    generatedOn: string;
    randomizerVersion: string;
    seed: string;
    settingsString: string;
    hash: string[];
}

export async function generateSeed(spoilerLog: boolean = true): Promise<Seed> {
    const response = await fetch("/api/seeds", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            spoilerLogVisible: spoilerLog,
        })
    });

    if (response.status === 200) {
        return await response.json() as Seed;
    } else {
        throw new Error("failed to generate seed");
    }
}

export async function getSeed(id: string): Promise<Seed> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOSTNAME}/api/seeds/${id}`, {
        method: "GET",
    });

    if (response.status === 200) {
        return await response.json() as Seed;
    } else {
        throw new Error("failed to retrieve seed");
    }
}

export async function getPatchData(id: string): Promise<ArrayBuffer> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOSTNAME}/api/seeds/${id}/patch`, {
        method: "GET",
    });

    if (response.status=== 200) {
        return response.arrayBuffer();
    } else {
        throw new Error("failed to retrieve patch data");
    }
}
