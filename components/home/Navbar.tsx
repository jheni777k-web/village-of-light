"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = {
    en: {
      home: "Home",
      about: "About",
      programs: "Programs",
      impact: "Impact",
      contact: "Contact",
      donate: "Donate Now",
    },
    am: {
      home: "መነሻ",
      about: "ስለ እኛ",
      programs: "ፕሮግራሞች",
      impact: "ተፅዕኖ",
      contact: "ያግኙን",
      donate: "አሁን ይለግሱ",
    },
  };

  const t = text[language];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-white shadow-sm" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logo.jpg"
              alt="Village of Light for Children and the Elderly Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">

            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              {t.home}
            </Link>

            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              {t.about}
            </Link>

            <Link
              href="/programs"
              className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              {t.programs}
            </Link>

            <Link
              href="/impact"
              className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              {t.impact}
            </Link>

            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
            >
              {t.contact}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-full p-1">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  language === "en"
                    ? "bg-primary text-black"
                    : "text-foreground hover:bg-gray-100"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLanguage("am")}
                className={`px-2.5 xl:px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  language === "am"
                    ? "bg-primary text-black"
                    : "text-foreground hover:bg-gray-100"
                }`}
              >
                አማርኛ
              </button>
            </div>
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-5 xl:px-6 py-2.5 rounded-full font-medium transition-colors bg-primary text-black hover:bg-primary-dark whitespace-nowrap text-sm xl:text-base"
            >
              {t.donate}
            </Link>
          </div>

          {/* Tablet & Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 text-foreground flex-shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Tablet & Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white border-slate-200 shadow-sm">
          <div className="px-4 py-4 space-y-3">

            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>

            <Link
              href="/about"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </Link>

            <Link
              href="/programs"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.programs}
            </Link>

            <Link
              href="/impact"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.impact}
            </Link>

            <Link
              href="/contact"
              className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center justify-center gap-2 pt-3">
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-primary text-black"
                    : "border border-gray-200 text-foreground"
                }`}
              >
                English
              </button>

              <button
                onClick={() => setLanguage("am")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  language === "am"
                    ? "bg-primary text-black"
                    : "border border-gray-200 text-foreground"
                }`}
              >
                አማርኛ
              </button>
            </div>

            {/* Mobile & Tablet Donate Button */}
            <Link
              href="/donate"
              className="flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-black px-6 py-3 rounded-full font-medium transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.donate}
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}