"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b-2 border-black z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-bold text-xl tracking-tight hover:text-black/70 transition-colors"
        >
          Taksh Shah
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-wider">
          <a href="#home" className="hover:text-black/60 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-black/60 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-black/60 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-black/60 transition-colors">
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-white">
          <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium uppercase tracking-wider">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black/60 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black/60 transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black/60 transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-black/60 transition-colors py-2"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white text-center border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
