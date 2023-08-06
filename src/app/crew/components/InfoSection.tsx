import { useEffect, useState } from "react";
import { Crew } from "../types";
import BulletGroup from "./BulletGroup";

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
        <section>
            <h3 className="sr-only">Crew Information</h3>
            {data && (
                <>
                    <div className="h-[222px] w-full box-content border-b-[#383b4b] border-b border-solid my-[32px]">
                        <img
                            src={data.images.webp}
                            alt={data.name}
                            className="h-full mx-auto my-0"
                        />
                    </div>
                    <BulletGroup
                        crews={crews}
                        crewIdx={crewIdx}
                        setCrewIdx={setCrewIdx}
                    />
                    <div className="text-center my-[32px] text-[0px]">
                        <small className="not-italic font-normal leading-normal text-center uppercase opacity-[0.4951] text-[16px]">
                            {data.role}
                        </small>
                        <h4 className="text-[24px] not-italic font-normal leading-normal uppercase mt-[8px] mb-[16px]">
                            {data.name}
                        </h4>
                        <p className="text-light-purple barlow text-[15px] not-italic font-normal leading-[25px]">
                            {data.bio}
                        </p>
                    </div>
                </>
            )}
        </section>
    );
};

export default InfoSection;
