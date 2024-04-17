import React, { useRef } from "react";
import history from "./styles/account-history.module.scss";

export default function Account_history() {
    const containerRef = useRef(null);

    const smoothScroll = (targetScroll) => {
        const scrollStep =
            Math.abs(containerRef.current.scrollLeft - targetScroll) / 10; // Adjust smoothness
        if (containerRef.current.scrollLeft !== targetScroll) {
            if (containerRef.current.scrollLeft < targetScroll) {
                containerRef.current.scrollLeft += scrollStep;
            } else {
                containerRef.current.scrollLeft -= scrollStep;
            }
            requestAnimationFrame(() => smoothScroll(targetScroll));
        }
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const delta = Math.sign(e.deltaY); // Get the direction of the scroll
        const targetScroll = containerRef.current.scrollLeft + delta * 400; // Adjust scroll speed
        smoothScroll(targetScroll);
    };

    return (
        <div
            className={history.content}
            ref={containerRef}
            onWheel={handleWheel}
        >
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
            <div className={history.item}>
                <h1>Work in Progress</h1>
            </div>
        </div>
    );
}
