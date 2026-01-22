"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (pathname === "/") {
            const element = document.getElementById("services");
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/?target=services");
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container-wrapper flex h-16 items-center justify-between">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <div className="relative h-15 w-100">
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
                    <Link href="/#services" onClick={scrollToServices} className="text-foreground/70 transition-colors hover:text-primary">Services</Link>
                    <Link href="/about" className="text-foreground/70 transition-colors hover:text-primary">About</Link>
                    <Link href="/portfolio" className="text-foreground/70 transition-colors hover:text-primary">Portfolio</Link>
                    <Link href="/contact" className="text-foreground/70 transition-colors hover:text-primary">Contact</Link>
                </nav>
            </div>
        </motion.header>
    )
}
