"use client";

import { useEffect, useState } from "react";

const useResize = () => {
    const [width, setWidth] = useState(0);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width;
};

export default useResize;
