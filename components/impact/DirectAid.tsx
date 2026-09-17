"use client";

import { Heart } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function DirectAid() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Direct Support for People in Need",
      description1:
        "VLCE provides practical support to vulnerable children and older people through food, clothing, healthcare, education, holiday assistance, and sponsorship.",
      description2:
        "Through programs such as the Agape feeding program and Bego Maed sponsorship, the organization continues to provide ongoing assistance to people facing difficult circumstances.",
      areas: [
        "Food assistance",
        "Healthcare",
        "Education",
        "Clothing support",
      ],
    },

    am: {
      title: "በእርዳታ ለሚፈልጉ ሰዎች ቀጥተኛ ድጋፍ",
      description1:
        "VLCE ተጋላጭ የሆኑ ህፃናትንና አረጋውያንን በምግብ፣ በልብስ፣ በጤና አገልግሎት፣ በትምህርት፣ በበዓል ድጋፍ እና በስፖንሰርሺፕ ተግባራዊ ድጋፍ ያደርጋል።",
      description2:
        "እንደ አጋፔ የምግብ አገልግሎት ፕሮግራም እና የቤጎ ማዕድ ስፖንሰርሺፕ ፕሮጀክት ባሉ ፕሮግራሞች አማካኝነት ድርጅቱ አስቸጋሪ ሁኔታ ላይ ላሉ ሰዎች ቀጣይነት ያለው ድጋፍ መስጠቱን ቀጥሏል።",
      areas: [
        "የምግብ ድጋፍ",
        "የጤና አገልግሎት",
        "ትምህርት",
        "የልብስ ድጋፍ",
      ],
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Heart size={32} className="text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-foreground/70 leading-relaxed">
            {t.description1}
          </p>

          <p className="text-lg text-foreground/70 leading-relaxed">
            {t.description2}
          </p>

          {/* Support Areas */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
            {t.areas.map((area, index) => (
              <p key={index} className="text-foreground font-medium">
                • {area}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
