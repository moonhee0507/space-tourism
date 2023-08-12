"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Technology } from "./types";
import InfoSection from "./components/InfoSection";

export default function Technology() {
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
        <div className="w-screen h-screen overflow-x-hidden bg-cover bg-technology-mobile md:bg-technology-tablet page-std">
            <div className="px-[24px] py-[25px] md:px-[39px]">
                <Header />
                <main className="mt-[24px] md:mt-[calc(24px+40px)]">
                    <h2 className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase flex justify-center gap-[18px] md:justify-start md:text-[20px] md:tracking-[3.375px]">
                        <span className="font-bold opacity-25">03</span>
                        <p>Space launch 101</p>
                    </h2>
                    <InfoSection technologies={technologies} />
                </main>
            </div>
        </div>
    );
}
