"use client"

import React, { useState, useEffect } from "react"

export interface TypingEffectProps {
    phrases: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
    className?: string
    minLength?: number
}

export function TypingEffect({
    phrases,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500,
    className = "",
    minLength = 0,
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState(phrases[0].slice(0, minLength))

    // Internal state to track logic without causing re-renders
    const stateRef = React.useRef({
        text: phrases[0].slice(0, minLength),
        phraseIndex: 0,
        mode: "typing" as "typing" | "deleting" | "pausing",
        lastUpdate: 0
    })

    useEffect(() => {
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            const state = stateRef.current;

            // Initialize start time
            if (!state.lastUpdate) state.lastUpdate = timestamp;

            const now = timestamp;
            const elapsed = now - state.lastUpdate;

            // Determine target delay based on mode
            let targetDelay = typingSpeed;
            if (state.mode === "deleting") targetDelay = deletingSpeed;
            if (state.mode === "pausing") targetDelay = pauseDuration;

            if (elapsed >= targetDelay) {
                const currentPhrase = phrases[state.phraseIndex];

                if (state.mode === "typing") {
                    if (state.text.length < currentPhrase.length) {
                        state.text = currentPhrase.slice(0, state.text.length + 1);
                        setDisplayedText(state.text);
                        state.lastUpdate = now; // Reset timer
                    } else {
                        // Finished typing, switch to pause
                        state.mode = "pausing";
                        state.lastUpdate = now;
                    }
                } else if (state.mode === "deleting") {
                    if (state.text.length > minLength) {
                        state.text = state.text.slice(0, -1);
                        setDisplayedText(state.text);
                        state.lastUpdate = now;
                    } else {
                        // Finished deleting, switch to next phrase
                        state.phraseIndex = (state.phraseIndex + 1) % phrases.length;
                        state.mode = "typing";
                        state.lastUpdate = now;
                    }
                } else if (state.mode === "pausing") {
                    // Pause complete, switch to deleting
                    state.mode = "deleting";
                    state.lastUpdate = now;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [phrases, typingSpeed, deletingSpeed, pauseDuration, minLength]);

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    )
}
