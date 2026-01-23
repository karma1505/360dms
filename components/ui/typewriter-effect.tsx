"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
    words,
}: {
    words: {
        text: string;
        className?: string;
    }[];
}) => {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(""),
        };
    });

    const renderWords = () => {
        return (
            <div className="inline-flex items-center">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <span
                                    key={`char-${index}`}
                                    className={`dark:text-white text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-extrabold tracking-tight ${word.className}`}
                                >
                                    {char}
                                </span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex items-center justify-center">
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                whileInView={{
                    width: "fit-content",
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    delay: 1,
                }}
            >
                <div
                    className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}
                </div>{" "}
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="block rounded-sm w-[4px] h-[1.2em] bg-blue-500 ml-1"
            ></motion.span>
        </div>
    );
};

// Adapted component for cycling phrases
export const SmoothTypingLoop = ({
    phrases,
    className,
}: {
    phrases: string[];
    className?: string;
}) => {
    const [index, setIndex] = useState(0);

    return (
        <div className={`flex items-center ${className}`}>
            <motion.div
                key={index} // Remount on phrase change to restart animation
                className="overflow-hidden whitespace-nowrap"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                exit={{ width: "0%" }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: 0 // Do not repeat internally
                }}
                onAnimationComplete={() => {
                    // Wait a bit then switch? 
                    // Framer motion simple animation complete doesn't cover the "delete" phase easily with simple props.
                    // We need a sequence: 0 -> 100 (wait) -> 0 -> switch.
                }}
            >
                <span className="block">{phrases[index]}</span>
            </motion.div>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
            />
        </div>
    );
};


// Robust implementation handling the loop cycle with width masking
export const SmoothCycler = ({
    phrases,
    className
}: {
    phrases: string[];
    className?: string;
}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Using width motion value? No, easier to just control width directly via animate
    // But we need to handle the "backspace" effect which is narrowing width.

    // Let's use a pure Framer Motion component that animates width from 0 to 100% and back

    return (
        <div className={`inline-flex items-center ${className} relative`}>
            <CyclingPhrase
                key={index}
                text={phrases[index]}
                onComplete={() => setIndex((prev) => (prev + 1) % phrases.length)}
            />
        </div>
    )
}

const CyclingPhrase = ({ text, onComplete }: { text: string, onComplete: () => void }) => {
    return (
        <div className="flex items-center">
            <motion.div
                className="overflow-hidden whitespace-nowrap"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                onAnimationComplete={() => {
                    setTimeout(() => {
                        // How to trigger reverse? 
                        // Changing props/variants is cleaner.
                    }, 1500)
                }}
            >
                {text}
            </motion.div>
            {/* This implementation is tricky to reverse purely with onAnimationComplete logic without state.
                 Let's go for the full orchestrated component below which is what we'll export.
              */}
        </div>
    )
}

export function TypingEffectSmooth({
    phrases,
    className,
}: {
    phrases: string[];
    className?: string;
}) {
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Current text to display
    const text = phrases[index];

    return (
        <div className={`inline-flex items-center justify-start ${className}`}>
            <motion.div
                className="overflow-hidden whitespace-nowrap pb-6"
                initial={{ width: "0%" }}
                animate={{ width: isDeleting ? "0%" : "100%" }}
                transition={{
                    duration: isDeleting ? 1 : 1.5, // Delete faster
                    ease: "easeInOut",
                    delay: isDeleting ? 0 : 0.2 // Small delay before starting
                }}
                onAnimationComplete={(definition) => {
                    // When width animation completes
                    if (!isDeleting && (definition as any).width === "100%") {
                        // Typing finished, wait then delete
                        setTimeout(() => setIsDeleting(true), 2000);
                    } else if (isDeleting && (definition as any).width === "0%") {
                        // Deleting finished, switch phrase and type
                        setIndex((prev) => (prev + 1) % phrases.length);
                        setIsDeleting(false);
                    }
                }}
            >
                {text}
            </motion.div>

            {/* Cursor */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="inline-block rounded-sm w-[4px] h-[1.1em] bg-primary ml-1"
            ></motion.span>
        </div>
    );
}
