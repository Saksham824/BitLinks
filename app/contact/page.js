"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    // You can replace this with an API call
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Blurred blobs */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-5 mb-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl px-6 sm:px-10 py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Contact <span className="text-yellow-200">Us</span>
        </h1>
        <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto">
          Have questions, feedback, or ideas? We&apos;d love to hear from you. Fill out the form below!
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold text-white/80">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-white/80">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-semibold text-white/80">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white outline-none resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-200 transition"
          >
            Send Message
          </motion.button>
        </form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-green-200 font-semibold"
          >
            ✅ Thank you! Your message has been sent.
          </motion.p>
        )}

        <p className="mt-10 text-sm text-white/70 italic">
          📬 We usually respond within 24 hours.
        </p>
      </motion.div>
    </main>
  );
};

export default ContactPage;
