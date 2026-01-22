"use client"

import { Button } from "@/components/ui/button"
import { TypingEffect } from "@/components/typing-effect"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
    const typingPhrases = [
        "A Brand New Look",
        "Stunning Websites",
        "Digital Excellence",
        "Creative Solutions",
    ]

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20 pb-32 md:pt-0 md:pb-0">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-20 left-[20%] w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-[20%] w-[25rem] h-[25rem] bg-purple-500/20 rounded-full blur-[100px] opacity-40 dark:opacity-10"></div>
            </div>

            <div className="container-wrapper flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6"
                >
                    <Sparkles className="mr-2 h-4 w-4" />
                    <span>Reimagining Digital Experiences</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl max-w-6xl"
                >
                    Let's Give Your Platform <span className="text-primary whitespace-nowrap">
                        <TypingEffect phrases={typingPhrases} className="text-primary" />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
                >
                    We are 360 Degree Media Solutions. We craft stunning websites, immersive animations, and robust software that your customers will love.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" className="h-12 px-8 text-base rounded-full">
                        Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full bg-background/50 backdrop-blur-sm">
                        View Our Work
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
