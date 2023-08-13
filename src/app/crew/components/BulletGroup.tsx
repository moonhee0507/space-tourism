import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import { Crew } from "../types";

const BulletGroup = ({
    crews,
    crewIdx,
    setCrewIdx,
}: {
    crews: Crew[];
    crewIdx: number;
    setCrewIdx: Dispatch<SetStateAction<number>>;
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        setCrewIdx(Number(button.value));
    };

    const hoverStyle = "hover:opacity-[0.500094]";

    return (
        <div className="flex gap-[16px] justify-center desktop:gap-[24px] desktop:justify-start">
            {crews.map((_, i) => (
                <button
                    type="button"
                    className={`${
                        crewIdx === i ? "" : "opacity-[0.174363]"
                    } bg-white rounded-full w-[10px] h-[10px] desktop:w-[15px] desktop:h-[15px] ${hoverStyle}`}
                    value={i}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default BulletGroup;
