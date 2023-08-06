"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Link from "next/link";

const Header = () => {
    const [onMobileMenu, setOnMobileMenu] = useState(false);
    const handleClick = () => {
        setOnMobileMenu((prev) => !prev);
    };

    return (
        <>
            <header className="relative flex justify-between bg-transparent">
                <h1>
                    <a href="/">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            className="w-[40px] h-[40px]"
                        />
                    </a>
                </h1>
                <button type="button" onClick={handleClick}>
                    <img
                        src="/images/icon-menu.svg"
                        alt="menu"
                        className="w-[24px] h-[21px]"
                    />
                </button>
                <Menubar
                    onMobileMenu={onMobileMenu}
                    setOnMobileMenu={setOnMobileMenu}
                />
            </header>
        </>
    );
};

export default Header;

const Menubar = ({
    onMobileMenu,
    setOnMobileMenu,
}: {
    onMobileMenu: boolean;
    setOnMobileMenu: Dispatch<SetStateAction<boolean>>;
}) => {
    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <nav
            className={`absolute top-[-25px] h-[100vh] pt-[32px] pl-[32px] pr-[27px] z-10 backdrop-blur-[40.774227142333984px] bg-[rgba(255,255,255,.04)] ${
                onMobileMenu
                    ? "right-[-24px] duration-[1s] transition-[right]"
                    : "right-[-295px] duration-[1s] transition-[right]"
            }`}
        >
            <div className="flex justify-end mb-[65px]">
                <button
                    type="button"
                    onClick={() => setOnMobileMenu(false)}
                    className="w-[19px] h-[19px]"
                >
                    <img
                        src="/images/icon-close.svg"
                        alt="close"
                        className="w-[19px] h-[19px]"
                    />
                </button>
            </div>
            <ul className="min-w-[190px] flex flex-col gap-[32px]">
                <li
                    className={
                        currentPath === "/"
                            ? "relative after:absolute after:content-[''] after:w-1 after:h-[31px] after:-translate-y-2/4 after:right-[-27px] after:top-2/4 after:bg-white"
                            : ""
                    }
                >
                    <Link href="/" className="flex gap-[11px]">
                        <p className="barlow-condensed not-italic font-bold leading-normal tracking-[2.7px]">
                            00
                        </p>
                        <p className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase">
                            Home
                        </p>
                    </Link>
                </li>
                <li
                    className={
                        currentPath === "/destination"
                            ? "relative after:absolute after:content-[''] after:w-1 after:h-[31px] after:-translate-y-2/4 after:right-[-27px] after:top-2/4 after:bg-white"
                            : ""
                    }
                >
                    <Link href="/destination" className="flex gap-[11px]">
                        <p className="barlow-condensed not-italic font-bold leading-normal tracking-[2.7px]">
                            01
                        </p>
                        <p className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase">
                            Destination
                        </p>
                    </Link>
                </li>
                <li
                    className={
                        currentPath === "/crew"
                            ? "relative after:absolute after:content-[''] after:w-1 after:h-[31px] after:-translate-y-2/4 after:right-[-27px] after:top-2/4 after:bg-white"
                            : ""
                    }
                >
                    <Link href="/crew" className="flex gap-[11px]">
                        <p className="barlow-condensed not-italic font-bold leading-normal tracking-[2.7px]">
                            02
                        </p>
                        <p className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase">
                            Crew
                        </p>
                    </Link>
                </li>
                <li
                    className={
                        currentPath === "/technology"
                            ? "relative after:absolute after:content-[''] after:w-1 after:h-[31px] after:-translate-y-2/4 after:right-[-27px] after:top-2/4 after:bg-white"
                            : ""
                    }
                >
                    <Link href="/technology" className="flex gap-[11px]">
                        <p className="barlow-condensed not-italic font-bold leading-normal tracking-[2.7px]">
                            03
                        </p>
                        <p className="barlow-condensed not-italic font-normal leading-normal tracking-[2.7px] uppercase">
                            Technology
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
