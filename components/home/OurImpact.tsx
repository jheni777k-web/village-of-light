"use client";

import Image from "next/image";
import { Heart, Users, BookOpen, Stethoscope } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const impactStats = [
  {
    icon: BookOpen,
    value: "2,000+",
    label: {
      en: "Students Supported",
      am: "ድጋፍ ያገኙ ተማሪዎች",
    },
    description: {
      en: "Children supported with educational assistance and learning materials",
      am: "የትምህርት ድጋፍና የመማሪያ ግብዓቶችን ያገኙ ልጆች",
    },
  },
  {
    icon: Stethoscope,
    value: "567",
    label: {
      en: "People Treated",
      am: "ሕክምና ያገኙ ሰዎች",
    },
    description: {
      en: "People who have received free medical treatment",
      am: "ነፃ የሕክምና አገልግሎት ያገኙ ሰዎች",
    },
  },
  {
    icon: Users,
    value: "4,200+",
    label: {
      en: "People Supported With Clothing",
      am: "የልብስ ድጋፍ ያገኙ ሰዎች",
    },
    description: {
      en: "Children and older people who have received clothing assistance",
      am: "የልብስ ድጋፍ ያገኙ ልጆችና አረጋውያን",
    },
  },
  {
    icon: Heart,
    value: "6,000+",
    label: {
      en: "Meals Served",
      am: "የተሰጡ ምግቦች",
    },
    description: {
      en: "Meals provided through social support and feeding activities",
      am: "በማህበራዊ ድጋፍና በምገባ እንቅስቃሴዎች የቀረቡ ምግቦች",
    },
  },
];

const impactImages = [
  "/photo_5_2026-08-06_20-40-36.jpg",
  "/photo_6_2026-08-06_20-40-36.jpg",
  "/photo_7_2026-08-06_20-40-36.jpg",
];

export default function OurImpact() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Our Impact",
      description:
        "Supporting children and older people through education, healthcare, and social assistance in Ethiopia.",
    },
    am: {
      title: "የእኛ ተፅዕኖ",
      description:
        "በኢትዮጵያ ላሉ ልጆችና አረጋውያን በትምህርት፣ በጤና አገልግሎትና በማህበራዊ ድጋፍ እየረዳን እንገኛለን።",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon size={32} className="text-primary" />
              </div>

              <h3 className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>

              <p className="text-lg font-semibold text-foreground mb-2">
                {stat.label[language]}
              </p>

              <p className="text-foreground/70">
                {stat.description[language]}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden"
            >
              <Image
                src={image}
                alt={`VLCE impact activity ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}