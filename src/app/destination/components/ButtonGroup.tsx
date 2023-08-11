import { Dispatch, MouseEvent, SetStateAction } from "react";
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const commonBtnStyle =
        "uppercase tracking-[2.362px] barlow-condensed text-sm not-italic font-normal relative text-light-purple md:text-[16px] md:tracking-[2.7px] ";
    const activeBtnStyle =
        "text-white after:absolute after:content-[''] after:w-full after:h-[3px] after:left-[-1px] after:bottom-[-8px] after:bg-[white] md:after:bottom-[-12px]";

    return (
        <div className="flex gap-[26px] justify-center">
            <button
                type="button"
                value="Moon"
                onClick={handleClick}
                className={
                    commonBtnStyle +
                    `${destination === "Moon" && activeBtnStyle}`
                }
            >
                Moon
            </button>
            <button
                type="button"
                value="Mars"
                onClick={handleClick}
                className={
                    commonBtnStyle +
                    `${destination === "Mars" && activeBtnStyle}`
                }
            >
                Mars
            </button>
            <button
                type="button"
                value="Europa"
                onClick={handleClick}
                className={
                    commonBtnStyle +
                    `${destination === "Europa" && activeBtnStyle}`
                }
            >
                Europa
            </button>
            <button
                type="button"
                value="Titan"
                onClick={handleClick}
                className={
                    commonBtnStyle +
                    `${destination === "Titan" && activeBtnStyle}`
                }
            >
                Titan
            </button>
        </div>
    );
};

export default ButtonGroup;
