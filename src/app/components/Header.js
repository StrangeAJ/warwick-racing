"use client";

import React, { useState } from 'react';
// import Image from 'next/image';
import GreenButton from './GreenButton';
import { Bebas_Neue } from "next/font/google";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Next.js hook to get current route

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Formula Student', path: '/formula_student' },
    { name: 'Cars', path: '/cars' },
    { name: 'Our Team', path: '/our_team' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Sponsors', path: '/our_sponsors' },
    { name: 'Contact Us', path: '/contact_us' },
  ];

  return (
    <header className={`bg-black text-white p-3 ${bebas_Neue.className}`}>
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="logo">
          <div src="/logo.png" alt="Warwick Racing" 
          style={{
            backgroundImage: "url('logo.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "36px"
          }}
          />
        </div>

        {/* Navigation menu (centered on desktop) */}
        <nav className={`flex-grow ${isMenuOpen ? 'block' : 'hidden'} lg:flex sm:justify-end`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 lg:justify-center flex-grow lg:mt-3">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <Link href={path} className={`hover:text-[#43B02A] text-lg ${pathname === path ? 'text-[#43B02A]' : ''}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Green button aligned to the right */}
          <div className="mt-1 lg:mt-0">
            <GreenButton>
              <p className="text-lg">Subcribe to our Newsletter</p>
            </GreenButton>
          </div>
        </nav>

        {/* Hamburger menu icon */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
