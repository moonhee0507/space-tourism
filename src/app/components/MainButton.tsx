"use client";

import Link from "next/link";
import useResize from "../useResize";

const MainButton = () => {
    const width = useResize();

    const hoverStyle =
        "hover:outline hover:outline-[88px] hover:outline-[rgba(255,255,255,0.1036)] transition-[outline] duration-500";

    return (
        <>
            {width && (
                <Link
                    href="/destination"
                    className={`absolute ${
                        width < 1440
                            ? "left-2/4 -translate-x-2/4"
                            : "desktop:right-[164px]"
                    } bottom-[48px] md:bottom-[90px] bg-white rounded-full text-center w-[150px] h-[150px] text-space text-xl not-italic font-normal leading-[150px] tracking-[1.25px] md:w-[242px] md:h-[242px] md:text-[32px] md:leading-[242px] md:tracking-[2px] desktop:w-[274px] desktop:h-[274px] desktop:leading-[274px] desktop:top-[495px] ${hoverStyle}`}
                >
                    EXPLORE
                </Link>
            )}
        </>
    );
};

export default MainButton;
