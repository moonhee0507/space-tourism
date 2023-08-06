import { Dispatch, SetStateAction, MouseEvent } from "react";
import { Technology } from "../types";

const ButtonGroup = ({
    technologies,
    technologyIdx,
    setTechnologyIdx,
}: {
    technologies: Technology[];
    technologyIdx: number;
    setTechnologyIdx: Dispatch<SetStateAction<number>>;
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        setTechnologyIdx(Number(button.value) - 1);
    };

    return (
        <div className="flex gap-[16px] justify-center">
            {technologies.map((_, i) => (
                <button
                    type="button"
                    className={`${
                        technologyIdx === i
                            ? "bg-white border-white text-[#0B0D17]"
                            : "bg-transparent border-[rgba(255,255,255,.25)] text-white"
                    }  rounded-full w-[40px] h-[40px] border`}
                    value={i + 1}
                    onClick={handleClick}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default ButtonGroup;
