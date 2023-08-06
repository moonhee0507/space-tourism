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

    return (
        <div className="flex gap-[16px] justify-center">
            {crews.map((_, i) => (
                <button
                    type="button"
                    className={`${
                        crewIdx === i ? "" : "opacity-[0.174363]"
                    } bg-white rounded w-[10px] h-[10px]`}
                    value={i}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default BulletGroup;
