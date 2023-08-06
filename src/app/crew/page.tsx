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

    useEffect(() => {
        console.log(crews);
    }, [crews]);

    return (
        <div className="w-screen h-screen overflow-x-hidden bg-cover bg-crew page-std">
            <div className="px-[24px] py-[25px]">
                <Header />
                <main className="mt-[24px]">
                    <h2 className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase flex justify-center gap-[18px]">
                        <span className="font-bold opacity-25">02</span>
                        <p>Meet your crew</p>
                    </h2>
                    <InfoSection crews={crews} />
                </main>
            </div>
        </div>
    );
}
