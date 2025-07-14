"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleShortenClick = () => {
    router.push("/shorten"); // Redirect to shorten page
  };

  return (
    <main className="pt-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-lg mt-10 text-center py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
        >
          Simplify your URLs with <span className="text-yellow-100">Shortify</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl mb-6 opacity-90 max-w-3xl mx-auto"
        >
          Say goodbye to long, ugly links. Shortify helps you create sleek, branded short links
          that are easy to share and track across all your platforms.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.6, staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-6 mb-6"
        >
          {["🔗 Shorten unlimited links", "📊 View real-time analytics", "🚀 Built for performance"].map(
            (text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.2 }}
                className="bg-white/10 p-4 rounded-lg backdrop-blur-sm shadow-md"
              >
                {text}
              </motion.div>
            )
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-sm mb-8 italic opacity-80"
        >
          Trusted by 10K+ developers, marketers, and businesses.
        </motion.p>

        <motion.button
          onClick={() => router.push("/shorten")}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
          className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-200 transition"
        >
          Shorten a Link
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Why Choose Shortify?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "⚡ Fast & Reliable",
              desc: "Instantly shorten and redirect URLs without delay. Blazing fast and scalable.",
              color: "border-purple-500",
            },
            {
              title: "🔒 Secure",
              desc: "Built with security in mind. All links are safe, encrypted, and protected from spam.",
              color: "border-pink-500",
            },
            {
              title: "📈 Trackable",
              desc: "Get analytics and click data for each short link. Know who, where, and when!",
              color: "border-yellow-500",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl border-t-4 ${card.color}
        shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300
        hover:border-purple-600 cursor-pointer group`}
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="rounded-lg py-16 bg-gradient-to-r from-pink-500 via-yellow-400 to-white text-center text-black dark:text-white dark:from-pink-700 dark:via-yellow-500 dark:to-gray-800">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Sign in and start shortening your links for free!</p>
        <a
          href="/dashboard"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Go to Dashboard
        </a>
      </section>
    </main>
  );
}
