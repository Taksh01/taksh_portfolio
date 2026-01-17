"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Professional Grid Pattern Background - SVG Based */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="none"
                stroke="#000000"
                strokeWidth="0.5"
                opacity="0.1"
              />
            </pattern>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#000000" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-2xl uppercase tracking-widest text-black/80 mb-4 font-semibold"
        >
          Hi, I'm Taksh Shah
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight mb-6"
        >
          Building Software That
          <br />
          <span className="text-black/70">Solves Real Problems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A developer focused on creating solutions that work. I turn ideas into
          functional products that solve real business challenges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-black text-white text-sm font-semibold uppercase tracking-wider hover:bg-black/90 transition-all duration-300 hover:scale-105"
          >
            Check Out My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-black text-black text-sm font-semibold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
