"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Technology } from "./types";
import InfoSection from "./components/InfoSection";

export default function Page() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);

    useEffect(() => {
        const getTechnologyData: () => Promise<
            Technology | Error
        > = async () => {
            const res = await fetch(`/data.json`, {
                headers: {
                    "Cache-Control": "max-age=31536000",
                },
            });
            const data = await res.json();

            return data.technology;
        };

        getTechnologyData().then((data) => {
            if (Array.isArray(data)) setTechnologies(data);
        });
    }, []);

    return (
        <div className="w-screen h-screen bg-cover bg-technology">
            <div className="px-[24px] py-[25px]">
                <Header />
                <main className="mt-[24px]">
                    <h2 className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase flex justify-center gap-[18px]">
                        <span className="font-bold opacity-25">03</span>
                        <p>Space launch 101</p>
                    </h2>
                    <InfoSection technologies={technologies} />
                </main>
            </div>
        </div>
    );
}
