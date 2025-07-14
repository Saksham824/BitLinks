"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="min-h-screen rounded-xl pt-24 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-8 z-10 mt-5 max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl px-6 sm:px-10 py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          About <span className="text-yellow-200">Shortify</span>
        </h1>

        <p className="text-base sm:text-lg text-white/90 mb-6">
          Shortify is your go-to URL shortening solution — helping you turn long, messy links into short,
          sleek, and shareable URLs. Whether you're a marketer, developer, or just someone who loves
          clean links, Shortify makes it easy and powerful.
        </p>

        <div className="grid gap-6 mt-8 text-left text-white/90">
          <div className="bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-2">🚀 Our Mission</h3>
            <p>
              We aim to simplify the way people share content online. With fast redirects, secure links,
              and real-time analytics — you stay in control.
            </p>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-2">🔒 Privacy First</h3>
            <p>
              We don’t store or track personal data. Your links belong to you — and we ensure your privacy
              is always protected.
            </p>
          </div>

          <div className="bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-2">🌍 Built for Everyone</h3>
            <p>
              Whether you're an individual, startup, or enterprise, Shortify scales with you. Simple UX,
              powerful tools, all in one.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-white/70 italic">
          Made with ❤️ by developers, for everyone who shares links.
        </p>
      </motion.div>
    </main>
  );
};

export default AboutPage;
