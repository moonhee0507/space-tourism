export type Destination = {
    name: DestinationName;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
};

export type DestinationName = "Moon" | "Mars" | "Europa" | "Titan";
