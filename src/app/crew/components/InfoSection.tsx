import { useEffect, useState } from "react";
import { Crew } from "../types";
import CrewContainer from "./CrewContainer";

const InfoSection = ({ crews }: { crews: Crew[] }) => {
    const [crewIdx, setCrewIdx] = useState<number>(0);
    const [data, setData] = useState<Crew | null>(null);

    useEffect(() => {
        if (crews && crews.length !== 0) {
            setData(crews[0]);
        }
    }, [crews]);

    useEffect(() => {
        setData(crews[crewIdx]);
    }, [crewIdx]);

    return (
        <section className="md:flex md:flex-col md:flex-grow">
            <h3 className="sr-only">Crew Information</h3>
            {data && (
                <CrewContainer
                    data={data}
                    crews={crews}
                    crewIdx={crewIdx}
                    setCrewIdx={setCrewIdx}
                />
            )}
        </section>
    );
};

export default InfoSection;
