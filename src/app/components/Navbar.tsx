"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import { IconX, IconMenu2 } from '@tabler/icons-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSectionClick = (section: string) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 font-sans">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="360 DMS Logo"
              width={125}
              height={125}
              className="mr-4 cursor-pointer"
            />
          </Link>

          <button
            className="block lg:hidden p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <IconX size={24} className="text-black" /> : <IconMenu2 size={24} className="text-black" />}
          </button>

          {/* Desktop Menu */}
          <ul className={`hidden lg:flex lg:space-x-6 text-gray-800 items-center flex-grow lg:justify-center`}>
            <li className="relative group">
              <button className="flex items-center justify-center hover:text-gray-500">
                E-Commerce
                <FaChevronDown className="ml-1" />
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out flex flex-col items-center">
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Internet Solutions</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Multilanguage Dynamic Websites</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Mobile Websites</Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center justify-center hover:text-gray-500">
                Media Solutions
                <FaChevronDown className="ml-1" />
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out flex flex-col items-center">
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Animation Service</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Multimedia Services</Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <button className="flex items-center justify-center hover:text-gray-500">
                Software Solutions
                <FaChevronDown className="ml-1" />
              </button>
              <ul className="absolute left-0 mt-2 w-72 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out flex flex-col items-center">
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Customized Software Solutions</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Website Design & Development</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Webhosting</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Social Media Marketing</Link>
                </li>
                <li className="w-full text-center px-4 py-2 hover:bg-gray-100">
                  <Link href="#">SEO & Web Promotions</Link>
                </li>
              </ul>
            </li>

            <li className="hover:text-gray-500">
              <Link href="#">Branding Services</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="#">Broadcast Solutions</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="#">About Us</Link>
            </li>
            <li className="hover:text-gray-500">
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 flex flex-col items-center pt-16">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={toggleMenu}
          >
            <IconX size={24} className="text-black" />
          </button>
          <ul className="flex flex-col items-center w-full space-y-4 text-black">
            <li className="text-lg py-4 px-12 w-full text-center cursor-pointer flex justify-between items-center" onClick={() => handleSectionClick('ecommerce')}>
             E-Commerce
            <FaChevronDown className={`ml-2 transition-transform duration-300 ${openSection === 'ecommerce' ? '-rotate-90' : ''}`} />
            {openSection === 'ecommerce' && (
                <ul className="flex flex-col mt-2 w-full">
                <li className="py-2 px-6"><Link href="#">Internet Solutions</Link></li>
                <li className="py-2 px-6"><Link href="#">Multilanguage Dynamic Websites</Link></li>
                <li className="py-2 px-6"><Link href="#">Mobile Websites</Link></li>
                </ul>
            )}
            </li>


            <li className="text-lg py-4 px-12 w-full text-center cursor-pointer flex justify-between items-center" onClick={() => handleSectionClick('media')}>
              Media Solutions
              <FaChevronDown className={`ml-2 transition-transform duration-300 ${openSection === 'media' ? '-rotate-90' : ''}`} />
              {openSection === 'media' && (
                <ul className="flex flex-col mt-2 pl-4">
                  <li className="py-2 px-6"><Link href="#">Animation Service</Link></li>
                  <li className="py-2 px-6"><Link href="#">Multimedia Services</Link></li>
                </ul>
              )}
            </li>

            <li className="text-lg py-4  px-12 w-full text-center cursor-pointer flex justify-between items-center" onClick={() => handleSectionClick('software')}>
              Software Solutions
              <FaChevronDown className={`ml-2 transition-transform duration-300 ${openSection === 'media' ? '-rotate-90' : ''}`} />
              {openSection === 'software' && (
                <ul className="flex flex-col mt-2 pl-4">
                  <li className="py-2 px-6"><Link href="#">Customized Software Solutions</Link></li>
                  <li className="py-2 px-6"><Link href="#">Website Design & Development</Link></li>
                  <li className="py-2 px-6"><Link href="#">Webhosting</Link></li>
                  <li className="py-2 px-6"><Link href="#">Social Media Marketing</Link></li>
                  <li className="py-2 px-6"><Link href="#">SEO & Web Promotions</Link></li>
                </ul>
              )}
            </li>

            <li className="text-lg py-4 px-12 w-full text-center">
              <Link href="#">Branding Services</Link>
            </li>
            <li className="text-lg py-4 px-12 w-full text-center">
              <Link href="#">Broadcast Solutions</Link>
            </li>
            <li className="text-lg py-4 px-12 w-full text-center">
              <Link href="#">About Us</Link>
            </li>
            <li className="text-lg py-4  px-12 w-full text-center">
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
