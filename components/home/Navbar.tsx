"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled
          ? "bg-white shadow-sm"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-primary/90"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-primary/90"
              }`}
            >
              About
            </Link>
            <Link
              href="/programs"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-primary/90"
              }`}
            >
              Programs
            </Link>
            <Link
              href="/impact"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-primary/90"
              }`}
            >
              Impact
            </Link>
            <Link
              href="/contact"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-primary/90"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                isScrolled
                  ? "bg-primary text-background hover:bg-primary-dark"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/20"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t transition-colors duration-200 ${
          isScrolled ? "bg-white/95 border-slate-200" : "bg-black/80 border-white/20"
        }`}>
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-primary transition-colors font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/programs"
              className="block text-white hover:text-primary transition-colors font-medium py-2"
            >
              Programs
            </Link>
            <Link
              href="/impact"
              className="block text-white hover:text-primary transition-colors font-medium py-2"
            >
              Impact
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </Link>
            <button className="w-full bg-primary hover:bg-primary-dark text-background px-6 py-2.5 rounded-full font-medium transition-colors mt-4">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
