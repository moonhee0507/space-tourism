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

    const sudoElement =
        "relative after:absolute after:content-[''] after:w-full after:h-[3px] after:-translate-x-2/4 after:bottom-[-39px] after:left-2/4 after:bg-white";
    const linkStyle =
        "barlow-condensed text-[14px] not-italic font-normal leading-normal tracking-[2.362px] uppercase desktop:text-[16px] desktop:tracking-[2.7px]";

    const MenuList = (path: string, idx: number) => (
        <li className={currentPath === `/${path}` ? sudoElement : ""}>
            <p className="barlow-condensed hidden desktop:inline desktop:mr-[11px] desktop:text-[16px] desktop:font-[700] desktop:tracking-[2.7px]">
                {String(idx).padStart(2, "0")}
            </p>
            <Link href={`/${path}`} className={linkStyle}>
                {path === "" ? "home" : path}
            </Link>
        </li>
    );

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
                <nav className="hidden md:block md:absolute md:top-[-24px] md:right-[-39px] desktop:right-[-55px] desktop:relative desktop:after:content-[''] desktop:after:absolute desktop:after:w-[calc(100vw-55px-48px-800px)] desktop:after:h-[1px] desktop:after:top-[47%] desktop:after:left-[calc(-100vw+55px+48px+800px+30px)] desktop:after:opacity-[0.2515] desktop:after:bg-white desktop:after:z-10">
                    <ul className="px-[calc(48px)] py-[39px] flex justify-evenly gap-[37px] bg-[rgba(255,255,255,0.04)] desktop:pl-[123px] desktop:pr-[167px] desktop:backdrop-blur-[40.774227142333984px]">
                        {["", "destination", "crew", "technology"].map(
                            (str, i) => {
                                return MenuList(str, i);
                            }
                        )}
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
