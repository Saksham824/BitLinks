"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ShortenPage = () => {
    const [url, setUrl] = useState("");
    const [shorturl, setShorturl] = useState("");
    const [shortLink, setShortLink] = useState("");
    const [generated, setGenerated] = useState(false);

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const fullShortUrl = `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`;
                setShortLink(fullShortUrl);
                setGenerated(true);
                setUrl("");
                setShorturl("");
                console.log("Shortened URL:", fullShortUrl);
            })
            .catch((error) => {
                console.error("Error:", error);
                setGenerated(false);
            });
    };

    return (
        <main className="min-h-screen rounded-xl pt-24 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Blurred animated blobs */}
            <div className="absolute -top-32 -left-20 w-80 h-80 bg-purple-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-200 opacity-10 rounded-full blur-3xl animate-pulse"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 mt-5 mb-8 max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl px-6 sm:px-8 py-10 sm:py-12 text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                    Paste your long URL and <span className="text-yellow-200">Shortify</span> it!
                </h1>

                <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto">
                    Generate short, trackable links instantly. Great for sharing on social media, messages, or anywhere!
                </p>

                {/* Input form */}
                <form
                    className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/20 rounded-full p-2"
                >
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter your long URL here..."
                        className="flex-1 px-4 py-3 rounded-full bg-transparent text-white placeholder-white/70 outline-none w-full"
                        required
                    />
                </form>
                <div className="bg-white/20 mt-3 rounded-full p-2">
                    <input
                        type="text"
                        value={shorturl}
                        onChange={(e) => setShorturl(e.target.value)}
                        placeholder="Write the short URL name here..."
                        className="flex-1 px-4 py-3 rounded-full bg-transparent text-white placeholder-white/70 outline-none w-full"
                        required
                    />
                </div>
                <button
                    onClick={generate}
                    type="button"
                    className="w-full mt-3 sm:w-auto bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-200 transition"
                >
                    Generate
                </button>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm text-white/90">
                    <span className="bg-white/20 px-4 py-2 rounded-full shadow">🔗 One-click Links</span>
                    <span className="bg-white/20 px-4 py-2 rounded-full shadow">📊 Track Clicks</span>
                    <span className="bg-white/20 px-4 py-2 rounded-full shadow">🚀 Fast & Reliable</span>
                </div>

                {/* Result */}
                {generated && shortLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-10"
                    >
                        <p className="text-lg mb-2">Here’s your shortened link:</p>
                        <a
                            href={shortLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-200 font-bold text-lg underline break-words"
                        >
                            {shortLink}
                        </a>
                    </motion.div>
                )}

                {/* Footer note */}
                <p className="mt-10 text-xs text-white/70 italic">
                    ✨ Trusted by 10,000+ users worldwide. Privacy-first. No spam.
                </p>
            </motion.div>
        </main>
    );
};

export default ShortenPage;
