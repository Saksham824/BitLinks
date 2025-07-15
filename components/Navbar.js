'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "My URLs", href: "/urls" },
    ];

    const handleShortenClick = () => {
    router.push("/shorten"); // Redirect to shorten page
  };

    return (
        <nav className="rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white fixed w-full z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image className="rounded-3xl" src="/logo.png" alt="Logo" width={40} height={40} />
                    <span className="text-2xl font-bold tracking-wide drop-shadow-sm">
                        Shor<span className="text-yellow-200">tify</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-lg px-3 py-1 transition-all duration-300 text-white font-medium hover:text-yellow-100 hover:underline underline-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                    onClick={handleShortenClick}
                        type="button"
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-lg px-4 py-2 text-center"
                    >
                        Shorten
                    </button>
                    <button
                    target="_blank"
                        href='https://github.com/Saksham824'
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-lg px-4 py-2 text-center"
                    >
                        GitHub
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-yellow-100 transition">
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden text-center px-6 py-6 space-y-4 bg-gradient-to-b from-pink-500 via-yellow-400 to-white rounded-b-lg shadow-md animate-slide-down">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            onClick={toggleMenu}
                            href={link.href}
                            className="relative block text-lg px-3 py-2 transition-all duration-300 text-white font-medium hover:text-yellow-100 hover:underline underline-offset-4 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-300 hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={handleShortenClick}
                        type="button"
                        className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-lg px-5 py-2"
                    >
                        Shorten
                    </button>

                    <button
                        onClick={toggleMenu}
                        href='https://github.com/Saksham824'
                        className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-lg text-lg px-5 py-2"
                    >
                        GitHub
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
