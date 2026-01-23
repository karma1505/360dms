"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactFormPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-purple-500/10 rounded-full blur-[100px] opacity-40"></div>
            </div>

            <section className="py-20 lg:py-32 container px-4 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Let's Start a <span className="text-primary">Conversation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-muted-foreground text-lg"
                    >
                        Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-10 shadow-xl"
                >
                    {isSubmitted ? (
                        <div className="text-center py-16">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-500 mb-6"
                            >
                                <FaCheckCircle size={40} />
                            </motion.div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">
                                Thank you for reaching out. We'll get back to you shortly.
                            </p>
                            <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                    <Input id="name" placeholder="John Doe" required className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone (Optional)</label>
                                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Service Interest</label>
                                    <select
                                        id="service"
                                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="">Select a service...</option>
                                        <option value="web-dev">Web Development</option>
                                        <option value="app-dev">Mobile App Development</option>
                                        <option value="seo">SEO / Digital Marketing</option>
                                        <option value="branding">Branding & Identity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message <FaPaperPlane size={14} />
                                    </span>
                                )}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </section>
        </main>
    );
}
