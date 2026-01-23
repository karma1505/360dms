"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Link from "next/link";

export default function DemoServicePage() {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                    <div className="absolute top-20 left-[10%] w-[20rem] h-[20rem] bg-primary/10 rounded-full blur-[80px] animate-pulse"></div>
                    <div className="absolute bottom-20 right-[10%] w-[25rem] h-[25rem] bg-purple-500/10 rounded-full blur-[80px] opacity-40"></div>
                </div>

                <div className="container px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6"
                    >
                        <BsStars className="mr-2 h-4 w-4" />
                        <span>Service Demo</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8"
                    >
                        Transforming Ideas into <br className="hidden md:block" />
                        <span className="text-secondary-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                            Digital Reality
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        This is a demonstration of our service capabilities. Whether it's crafting a high-performance website,
                        launching a targeted ad campaign, or building a bespoke mobile app, we bring the same level of
                        passion and precision to every project.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button size="lg" className="rounded-full h-12 px-8 text-base">
                            Start Your Journey <FaArrowRight className="ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" asChild className="rounded-full h-12 px-8 text-base">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Content Placeholder */}
            <section className="py-20 bg-secondary/20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="aspect-video bg-black rounded-2xl shadow-lg border border-border/50 overflow-hidden"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/LXb3EKWsInQ?si=generic_placeholder"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold">Comprehensive Solutions</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We don't just deliver a product; we provide a full-spectrum solution designed to scale with your business.
                                From initial concept to final deployment and maintenance, our team of experts is with you every step of the way.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Custom tailored strategies",
                                    "Data-driven insights",
                                    "Cutting-edge technology stack",
                                    "24/7 dedicated support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
