"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import InfoSection from "./components/InfoSection";
import { Destination } from "./types";

export default function Destination() {
    const [destinations, setDestinations] = useState<Destination[]>([]);

    useEffect(() => {
        const getDestinationData: () => Promise<
            Destination | Error
        > = async () => {
            const res = await fetch(`/data.json`, {
                headers: {
                    "Cache-Control": "max-age=31536000",
                },
            });
            const data = await res.json();

            return data.destinations;
        };

        getDestinationData().then((data) => {
            if (Array.isArray(data)) setDestinations(data);
        });
    }, []);

    return (
        <div className="w-screen h-screen bg-cover bg-destination">
            <div className="px-[24px] pt-[25px]">
                <Header />
                <main className="mt-[24px]">
                    <h2 className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase flex justify-center gap-[18px]">
                        <span className="font-bold opacity-25">01</span>
                        <p>Pick your destination</p>
                    </h2>
                    <InfoSection destinations={destinations} />
                </main>
            </div>
        </div>
    );
}
