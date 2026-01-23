"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        if (pathname === "/") {
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/?target=${targetId}`);
        }
    };

    return (
        <footer className="w-full bg-secondary/30 border-t border-border/50 pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Socials */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-bold text-foreground">360DMS</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Elevating brands through data-driven strategies and creative excellence. Your partner in the digital ecosystem.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 rounded-full bg-background border border-border/50 text-[#E4405F] hover:bg-[#E4405F]/10 transition-colors">
                                <FaInstagram size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-background border border-border/50 text-[#0077B5] hover:bg-[#0077B5]/10 transition-colors">
                                <FaLinkedin size={18} />
                            </Link>
                            {/* X Logo */}
                            <Link href="#" className="p-2 rounded-full bg-background border border-border/50 text-foreground hover:bg-foreground/5 transition-colors">
                                <FaXTwitter size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-background border border-border/50 text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors">
                                <FaFacebook size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Home</Link>
                            <Link href="/#services" onClick={(e) => handleScroll(e, "services")} className="text-muted-foreground hover:text-primary transition-colors text-sm">Services</Link>
                            <Link href="/#about" onClick={(e) => handleScroll(e, "about")} className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
                            <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MdEmail size={18} className="mt-0.5 text-primary" />
                                <span>nanditakumar@360dms.in</span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MdPhone size={18} className="mt-0.5 text-primary" />
                                <span>+91 99999 99999</span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MdLocationOn size={18} className="mt-0.5 text-primary" />
                                <span>123 Digital Avenue,<br />Tech Park, Gurgaon</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-foreground">Have a question?</h4>
                        <p className="text-sm text-muted-foreground">
                            We are here to help. Send us a message and we will respond as soon as possible.
                        </p>
                        <Link
                            href="/contact-form"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                        >
                            Contact Support <FaArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-8 flex flex-col items-center gap-6">
                    {/* Center Bottom Logo */}
                    <div className="relative h-12 w-40 opacity-80 hover:opacity-100 transition-opacity">
                        <Image
                            src="/360-logo.jpg"
                            alt="360DMS Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-muted-foreground">
                        <span>&copy; {new Date().getFullYear()} 360DMS. All rights reserved.</span>
                        <span className="hidden md:inline">|</span>
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <span className="hidden md:inline">|</span>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
