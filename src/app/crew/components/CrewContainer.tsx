import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Crew } from "../types";
import BulletGroup from "./BulletGroup";
import ImgArea from "./ImgArea";
import TextArea from "./TextArea";

const CrewContainer = ({
    data,
    crews,
    crewIdx,
    setCrewIdx,
}: {
    data: Crew;
    crews: Crew[];
    crewIdx: number;
    setCrewIdx: Dispatch<SetStateAction<number>>;
}) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {width < 768 ? (
                <ImgArea src={data.images.webp} alt={data.name} />
            ) : (
                <TextArea role={data.role} name={data.name} bio={data.bio} />
            )}
            <BulletGroup
                crews={crews}
                crewIdx={crewIdx}
                setCrewIdx={setCrewIdx}
            />
            {width < 768 ? (
                <TextArea role={data.role} name={data.name} bio={data.bio} />
            ) : (
                <ImgArea src={data.images.webp} alt={data.name} />
            )}
        </>
    );
};

export default CrewContainer;
