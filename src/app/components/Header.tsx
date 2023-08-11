"use client";

import { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";
import Link from "next/link";
import Menubar from "./Menubar";

const Header = () => {
    const [onMobileMenu, setOnMobileMenu] = useState(false);
    const handleClick = () => {
        setOnMobileMenu((prev) => !prev);
    };

    useEffect(() => {
        const page = document.querySelector(".page-std") as HTMLDivElement;
        if (page) {
            page.style.overflowY = "hidden";
        }

        if (!onMobileMenu) {
            if (page) {
                page.style.overflowY = "visible";
            }
        }
    }, [onMobileMenu]);

    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <>
            <header className="relative flex justify-between bg-transparent">
                <h1>
                    <a href="/">
                        <img
                            src="/images/logo.svg"
                            alt="logo"
                            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
                        />
                    </a>
                </h1>
                <button
                    type="button"
                    onClick={handleClick}
                    className="md:hidden"
                >
                    <img
                        src="/images/icon-menu.svg"
                        alt="menu"
                        className="w-[24px] h-[21px]"
                    />
                </button>
                <nav className="hidden md:block md:absolute md:top-[-24px] md:right-[-39px]">
                    <ul className="px-[calc(48px)] py-[39px] flex justify-evenly gap-[37px] bg-[rgba(255,255,255,0.04)]">
                        <li
                            className={
                                currentPath === "/"
                                    ? "relative after:absolute after:content-[''] after:w-full after:h-[3px] after:-translate-x-2/4 after:bottom-[-39px] after:left-2/4 after:bg-white"
                                    : ""
                            }
                        >
                            <Link
                                href="/"
                                className="barlow-condensed text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase"
                            >
                                Home
                            </Link>
                        </li>
                        <li
                            className={
                                currentPath === "/destination"
                                    ? "relative after:absolute after:content-[''] after:w-full after:h-[3px] after:-translate-x-2/4 after:bottom-[-39px] after:left-2/4 after:bg-white"
                                    : ""
                            }
                        >
                            <Link
                                href="/destination"
                                className="barlow-condensed text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase"
                            >
                                Destination
                            </Link>
                        </li>
                        <li
                            className={
                                currentPath === "/crew"
                                    ? "relative after:absolute after:content-[''] after:w-full after:h-[3px] after:-translate-x-2/4 after:bottom-[-39px] after:left-2/4 after:bg-white"
                                    : ""
                            }
                        >
                            <Link
                                href="/crew"
                                className="barlow-condensed text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase"
                            >
                                Crew
                            </Link>
                        </li>
                        <li
                            className={
                                currentPath === "/technology"
                                    ? "relative after:absolute after:content-[''] after:w-full after:h-[3px] after:-translate-x-2/4 after:bottom-[-39px] after:left-2/4 after:bg-white"
                                    : ""
                            }
                        >
                            <Link
                                href="/technology"
                                className="barlow-condensed text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase"
                            >
                                Technology
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Menubar
                    onMobileMenu={onMobileMenu}
                    setOnMobileMenu={setOnMobileMenu}
                />
            </header>
        </>
    );
};

export default Header;
