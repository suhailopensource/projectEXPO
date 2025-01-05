// ScrollToTopButton.js
"use client"
import React, { useState, useEffect } from "react";
import { TiArrowUpThick } from "react-icons/ti";
// Create a CSS file for styling

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? "visible" : ""
                } animate-bounce rounded-full p-[10px] bg-[#1f2937]  text-[#a855f7] border text-2xl`}
            onClick={scrollToTop}
        >
            <TiArrowUpThick />
        </button>
    );
};

export default ScrollToTopButton;