"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const faqs = [
    {
        question: "What services does 360DMS offer?",
        answer: "We offer a comprehensive suite of digital services including Website Design & Development, Mobile App Development, SEO/SMO, Brand Identity Creation, Multimedia Animations, and Web Hosting. We are your one-stop shop for all things digital."
    },
    {
        question: "How much does a typical project cost?",
        answer: "Project costs vary depending on complexity and scope. We offer tailored packages to fit different budgets, starting from basic responsive websites to complex enterprise software solutions. Contact us for a free quote tailored to your needs."
    },
    {
        question: "How long does it take to complete a project?",
        answer: "Timelines depend on the project size. A standard business website typically takes 2-4 weeks, while complex custom software or mobile apps may take 8-12 weeks. We provide a detailed timeline at the start of every project."
    },
    {
        question: "Do you provide support after the project is launched?",
        answer: "Yes! We believe in long-term partnerships. We offer various maintenance packages that include security updates, content updates, and technical support to ensure your digital assets continue to perform optimally."
    },
    {
        question: "Can you help with rebranding an existing business?",
        answer: "Absolutely. Rebranding is one of our specialties. We can help refresh your visual identity, logo, and messaging to better align with your current business goals and market positioning."
    },
    {
        question: "Do you specificially work with startups?",
        answer: "Yes, we love startups! We understand the unique challenges startups face and offer scalable solutions that can grow with your business. We have special packages designed to give startups a strong digital foundation."
    },
    {
        question: "What is your payment process?",
        answer: "Typically, we structure payments in milestones: an initial deposit to kickstart the project, a mid-point payment upon approval of designs/prototypes, and a final payment before the live launch. This ensures transparency and mutual commitment."
    },
    {
        question: "How do we get started?",
        answer: "It's simple. Click the 'Get in Touch' button or reach out via our contact form. We'll schedule a discovery call to understand your needs and propose a strategy that works for you."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Header */}
            <section className="py-20 text-center container px-4 mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                    Frequently Asked <span className="text-primary">Questions</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    Everything you need to know about our services and process.
                </motion.p>
            </section>

            {/* Questions List */}
            <section className="pb-20 container px-4 md:px-6 mx-auto max-w-3xl">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="border border-border/50 rounded-2xl overflow-hidden bg-secondary/20 hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="flex-shrink-0 text-primary"
                                >
                                    <FiPlus size={24} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/10 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container px-4 text-center mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Has any of your question gone unanswered?
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8">
                        We'll love to hear it from you.
                    </p>
                    <Button size="lg" className="rounded-full h-12 px-8 text-base" asChild>
                        <Link href="/contact-form">
                            Ask Us Anything <FaArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
