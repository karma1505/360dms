"use client"

import React, { useState, useEffect } from "react"

interface TypingEffectProps {
    phrases: string[]
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
    className?: string
}

export function TypingEffect({
    phrases,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 1500,
    className = "",
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]
        let timer: NodeJS.Timeout

        if (!isDeleting) {
            // Typing phase
            if (displayedText.length < currentPhrase.length) {
                timer = setTimeout(() => {
                    setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
                }, typingSpeed)
            } else {
                // Pause at end of phrase
                timer = setTimeout(() => {
                    setIsDeleting(true)
                }, pauseDuration)
            }
        } else {
            // Deleting phase
            if (displayedText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1))
                }, deletingSpeed)
            } else {
                // Move to next phrase
                setPhraseIndex((prev) => (prev + 1) % phrases.length)
                setIsDeleting(false)
            }
        }

        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    )
}
