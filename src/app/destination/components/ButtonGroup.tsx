import {
    Dispatch,
    MouseEvent,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { DestinationName } from "../types";

const ButtonGroup = ({
    destination,
    setDestination,
}: {
    destination: DestinationName;
    setDestination: Dispatch<SetStateAction<DestinationName>>;
}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        setDestination(button.value as DestinationName);
    };

    return (
        <div className="flex gap-[26px] justify-center">
            <button
                type="button"
                value="Moon"
                onClick={handleClick}
                className={`uppercase tracking-[2.362px] barlow-condensed text-sm not-italic font-normal relative ${
                    destination === "Moon" &&
                    "after:absolute after:content-[''] after:w-full after:h-[3px] after:left-[-1px] after:bottom-[-8px] after:bg-[white]"
                }`}
            >
                Moon
            </button>
            <button
                type="button"
                value="Mars"
                onClick={handleClick}
                className={`uppercase tracking-[2.362px] barlow-condensed text-sm not-italic font-normal relative ${
                    destination === "Mars" &&
                    "after:absolute after:content-[''] after:w-full after:h-[3px] after:left-[-1px] after:bottom-[-8px] after:bg-[white]"
                }`}
            >
                Mars
            </button>
            <button
                type="button"
                value="Europa"
                onClick={handleClick}
                className={`uppercase tracking-[2.362px] barlow-condensed text-sm not-italic font-normal relative ${
                    destination === "Europa" &&
                    "after:absolute after:content-[''] after:w-full after:h-[3px] after:left-[-1px] after:bottom-[-8px] after:bg-[white]"
                }`}
            >
                Europa
            </button>
            <button
                type="button"
                value="Titan"
                onClick={handleClick}
                className={`uppercase tracking-[2.362px] barlow-condensed text-sm not-italic font-normal relative ${
                    destination === "Titan" &&
                    "after:absolute after:content-[''] after:w-full after:h-[3px] after:left-[-1px] after:bottom-[-8px] after:bg-[white]"
                }`}
            >
                Titan
            </button>
        </div>
    );
};

export default ButtonGroup;
