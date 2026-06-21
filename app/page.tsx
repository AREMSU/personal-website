"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Gamepad2, Code2 } from "lucide-react";

export default function Home() {
  const [konamiIdx, setKonamiIdx] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  // A subtle easter egg: clicking the name 5 times unlocks a "developer mode" secret
  const handleNameClick = () => {
    if (unlocked) return;
    if (konamiIdx >= 4) {
      setUnlocked(true);
    } else {
      setKonamiIdx((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-muted text-slate px-3 py-1 rounded-full text-sm font-mono mb-8 border border-border"
        >
          <Terminal className="w-4 h-4" />
          <span>console.log(&quot;Hello, World!&quot;);</span>
        </motion.div>

        <h1
          onClick={handleNameClick}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 cursor-default select-none relative group text-ink"
        >
          Hey, I&apos;m{" "}
          <span className="text-primary-500">
            Aarnav Dahal
          </span>
          {/* Subtle hover easter egg */}
          <span className="absolute -top-8 right-0 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Lv. 99
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate mb-10 max-w-2xl mx-auto leading-relaxed">
          I build clean, modern front-end interfaces and the products behind them.
          Currently looking for internship opportunities to put that into practice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(47,95,246,0.25)] hover:shadow-[0_0_30px_rgba(47,95,246,0.4)] transition-shadow"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/about"
            className="px-8 py-3 bg-surface text-ink rounded-full font-semibold border border-border hover:border-primary-500/40 transition-colors flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            About Me
          </motion.a>
        </div>

        {/* Easter Egg Content */}
        {unlocked && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-12 p-6 bg-ink text-left inline-block max-w-lg rounded-xl border border-accent/30 font-mono"
          >
            <div className="flex items-center gap-3 mb-2 text-accent">
              <Gamepad2 className="w-6 h-6" />
              <h3 className="text-lg font-bold font-display">Achievement Unlocked!</h3>
            </div>
            <p className="text-sm text-background/90">
              &quot;It&apos;s dangerous to go alone! Take this.&quot; You&apos;ve found the hidden terminal. More secrets are buried around this site...
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
