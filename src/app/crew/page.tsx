"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Crew } from "./types";
import InfoSection from "./components/InfoSection";

export default function Crew() {
    const [crews, setCrews] = useState<Crew[]>([]);

    useEffect(() => {
        const getCrewData: () => Promise<Crew | Error> = async () => {
            const res = await fetch(`/data.json`, {
                headers: {
                    "Cache-Control": "max-age=31536000",
                },
            });
            const data = await res.json();

            return data.crew;
        };

        getCrewData().then((data) => {
            if (Array.isArray(data)) setCrews(data);
        });
    }, []);

    return (
        <div className="w-screen h-screen overflow-x-hidden bg-cover bg-crew-mobile md:bg-crew-tablet desktop:bg-crew-desktop page-std">
            <div className="px-[24px] py-[25px] md:px-[39px] min-h-screen flex flex-col desktop:px-[55px] desktop:pt-[64px] desktop:pb-0">
                <Header />
                <main className="mt-[24px] md:mt-[calc(24px+40px)] flex flex-col flex-grow desktop:px-[calc(166px-24px)]">
                    <h2 className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase flex justify-center gap-[18px] md:justify-start md:text-[20px] md:tracking-[3.375px] desktop:text-[28px] desktop:tracking-[4.725px] desktop:gap-[28px]">
                        <span className="font-bold opacity-25">02</span>
                        <p>Meet your crew</p>
                    </h2>
                    <InfoSection crews={crews} />
                </main>
            </div>
        </div>
    );
}
