"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const slides = [
  {
    image: "/bg_logo.jpg",
    en: {
      title: "",
      description: "",
    },
    am: {
      title: "",
      description: "",
    },
  },
  {
    image: "/photo_2.jpg",
    en: {
      title: "Building Hope",
      description: "Creating opportunities for a brighter future",
    },
    am: {
      title: "ተስፋን መገንባት",
      description: "ለተሻለ የወደፊት ሕይወት ዕድሎችን መፍጠር",
    },
  },
  {
    image: "/photo_3.jpg",
    en: {
      title: "Sustainable Impact",
      description: "Long-term solutions for lasting change",
    },
    am: {
      title: "ዘላቂ ተፅዕኖ",
      description: "ዘላቂ ለውጥን ለማምጣት የረጅም ጊዜ መፍትሄዎች",
    },
  },
  {
    image: "/photo_4.jpg",
    en: {
      title: "Wide Impact",
      description: "Making an impact across communities worldwide",
    },
    am: {
      title: "ሰፊ ተደራሽነት",
      description: "በተለያዩ ማህበረሰቦች ላይ አዎንታዊ ተፅዕኖ መፍጠር",
    },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => {
        const content = slide[language];

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={content.title || "Village of Light"}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                {content.title && (
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                    {content.title}
                  </h1>
                )}

                {content.description && (
                  <p className="text-xl md:text-2xl mb-8 text-white">
                    {content.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}