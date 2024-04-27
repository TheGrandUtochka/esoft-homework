import { useState, useEffect } from "react";

function getWindowSize() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function WindowSize()  {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { width, height } = windowSize;

    return (
        <div>
            {width} x {height}
        </div>
    );
}
