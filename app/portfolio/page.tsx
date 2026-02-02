"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Placeholder data for projects
const projects = [
    {
        title: "Neon Horizon",
        category: "Brand Identity",
        description: "A futuristic rebranding for a leading tech startup.",
        gradient: "from-blue-500 to-purple-600"
    },
    {
        title: "EcoSphere",
        category: "Web Development",
        description: "Sustainable e-commerce platform with a carbon footprint tracker.",
        gradient: "from-green-400 to-teal-500"
    },
    {
        title: "Urban Pulse",
        category: "Marketing Campaign",
        description: "City-wide digital activation that increased engagement by 200%.",
        gradient: "from-orange-400 to-red-500"
    },
    {
        title: "FinFlow",
        category: "Mobile App",
        description: "Intelligent personal finance assistant with AI insights.",
        gradient: "from-indigo-500 to-blue-500"
    }
];

// Placeholder data for clients
const clients = [
    "Aircel", "Airtel", "Vodafone", "Idea",
    "Sahara One", "News X", "News 24", "India News", "Mahua"
];

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        Our Portfolio
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        Crafting Digital <span className="text-primary">Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        We don't just build websites; we build brands. Explore our selected works and see how we've helped businesses transform their digital presence.
                    </motion.p>
                </div>
            </section>

            {/* Selected Projects (Portfolio of Work) */}
            <section className="py-20 bg-secondary/20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Selected Work</h2>
                        <p className="text-muted-foreground">A glimpse into our recent success stories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-background border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className={`aspect-[4/3] w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                                            View Case Study
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By (Portfolio of Clients) */}
            <section className="py-20 border-t border-border/50">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-12 text-muted-foreground">Trusted by Industry Leaders</h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-primary transition-colors cursor-default"
                            >
                                {client}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background text-foreground relative overflow-hidden">
                <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start your project?</h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Let's collaborate to create something extraordinary. Your vision, our expertise.
                    </p>
                    <Button size="lg" className="rounded-full h-12 px-8 text-base font-semibold" asChild>
                        <Link href="/contact">
                            Get in Touch <FaArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>

                {/* Background Decor for CTA */}
                {/* Background Decor for CTA */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </section>
        </main>
    );
}
