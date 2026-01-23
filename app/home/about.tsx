"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="relative w-full py-20 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 text-foreground">
                        About Us
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                        Driven by creativity, grounded in data, and dedicated to elevating your brand.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            360DMS started with a simple idea: that every brand has a unique story waiting to be told.
                            We recognized a gap in the market for a digital agency that truly listens—one that combines
                            creative storytelling with rigorous data analysis to deliver results that matter.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            From our humble beginnings, we have grown into a full-service digital marketing ecosystem,
                            helping businesses of all sizes traverse the complex digital landscape with confidence and style.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-secondary/20"
                    >
                        {/* Placeholder for Story Image - abstract or office shot */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                            <span className="text-muted-foreground/50 font-medium">Our Journey Visualized</span>
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Leadership
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                            Meet the Founders
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Nandita Kumar */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src="/nanditaplaceholder.webp"
                                    alt="Nandita Kumar"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h4 className="text-2xl font-bold text-foreground">Nandita Kumar</h4>
                                    <p className="text-primary font-medium">Founder & CEO</p>
                                </div>
                            </div>
                            <div className="p-6 pt-2">
                                <p className="text-muted-foreground leading-relaxed">
                                    The visionary behind 360DMS, Nandita brings a wealth of experience and a fresh perspective
                                    to digital marketing. Her relentless drive for perfection has steered the agency to become
                                    a trusted partner for brands globally.
                                </p>
                            </div>
                        </motion.div>

                        {/* Aryan Kumar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src="/aryanplaceholder.webp"
                                    alt="Aryan Kumar"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                    <h4 className="text-2xl font-bold text-foreground">Aryan Kumar</h4>
                                    <p className="text-primary font-medium">Co-Founder</p>
                                </div>
                            </div>
                            <div className="p-6 pt-2">
                                <p className="text-muted-foreground leading-relaxed">
                                    As Co-Founder, Aryan combines strategic insight with operational excellence.
                                    His focus on data-driven growth and scalable solutions ensures that 360DMS remains
                                    at the cutting edge of digital innovation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
