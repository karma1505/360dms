"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { FiMenu, FiX } from "react-icons/fi"

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsOpen(false);
        if (pathname === "/") {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/?target=${targetId}`);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container-wrapper flex h-16 items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="relative h-10 w-32 md:h-12 md:w-40">
                        <Image
                            src="/360-logo.jpg"
                            alt="360DMS Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/#services" onClick={(e) => handleScroll(e, "services")} className="text-foreground/70 transition-colors hover:text-primary">Services</Link>
                    <Link href="/#about" onClick={(e) => handleScroll(e, "about")} className="text-foreground/70 transition-colors hover:text-primary">About</Link>
                    <Link href="/portfolio" className="text-foreground/70 transition-colors hover:text-primary">Portfolio</Link>
                    <Link href="/contact" className="text-foreground/70 transition-colors hover:text-primary">Contact</Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground/70 hover:text-primary focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 right-0 z-[60] border-b border-border/50 bg-background shadow-lg md:hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4 text-sm font-medium">
                            <Link
                                href="/#services"
                                onClick={(e) => handleScroll(e, "services")}
                                className="block px-4 py-2 text-foreground/70 hover:bg-muted rounded-md transition-colors hover:text-primary"
                            >
                                Services
                            </Link>
                            <Link
                                href="/#about"
                                onClick={(e) => handleScroll(e, "about")}
                                className="block px-4 py-2 text-foreground/70 hover:bg-muted rounded-md transition-colors hover:text-primary"
                            >
                                About
                            </Link>
                            <Link
                                href="/portfolio"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-foreground/70 hover:bg-muted rounded-md transition-colors hover:text-primary"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-foreground/70 hover:bg-muted rounded-md transition-colors hover:text-primary"
                            >
                                Contact
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
