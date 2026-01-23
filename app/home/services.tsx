"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";

export function Services() {
    return (
        <section id="services" className="max-w-7xl 2xl:max-w-screen-xl mx-auto px-8 py-20">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12"
            >
                Our Services
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <HoverEffect items={projects} />
            </motion.div>
        </section>
    );
}

export const projects = [
    {
        title: "Media Solutions",
        description:
            "Comprehensive media strategies including branding, advertising, and digital presence management to elevate your business identity.",
        link: "/demo-service",
    },
    {
        title: "Multimedia Animations",
        description:
            "Engaging 2D and 3D animations, motion graphics, and visual effects to bring your stories and marketing campaigns to life.",
        link: "/demo-service",
    },
    {
        title: "SEO/SMO",
        description:
            "Data-driven Search Engine Optimization and Social Media Optimization to boost your visibility, rankings, and audience engagement.",
        link: "/demo-service",
    },
    {
        title: "Software & Website Development",
        description:
            "Custom software solutions and responsive, high-performance websites tailored to meet your specific business requirements.",
        link: "/demo-service",
    },
    {
        title: "Mobile Application Development",
        description:
            "Native and cross-platform mobile apps for iOS and Android, designed for seamless user experience and high functionality.",
        link: "/demo-service",
    },
    {
        title: "Web Hosting",
        description:
            "Secure, reliable, and high-speed web hosting services ensuring your digital assets are always accessible and performing optimally.",
        link: "/demo-service",
    },
];
