import React from "react";
import Link from "next/link";
import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white py-8 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Year */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold drop-shadow-sm">Shor<span className="text-yellow-200">tify</span></h2>
          <p className="text-sm mt-2 opacity-90">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline underline-offset-4 hover:text-yellow-100 transition">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4 hover:text-yellow-100 transition">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4 hover:text-yellow-100 transition">Contact </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FiGithub />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FiTwitter />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">
            <FiInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
