"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutHero() {
  const { language } = useLanguage();

  const text = {
    en: {
      since: "Since 2012",
      title: "Our Story & Mission",
      description:
        "Founded with a vision to create lasting change in communities worldwide, we have grown from a small grassroots initiative into a global organization making measurable impact. Our mission is to empower individuals and communities through sustainable development programs that create opportunities for growth and self-reliance.",
      imageAlt: "Our Story",
    },
    am: {
      since: "ከ2012 ጀምሮ",
      title: "ታሪካችን እና ተልዕኳችን",
      description:
        "በዓለም ዙሪያ ባሉ ማህበረሰቦች ዘላቂ ለውጥ ለመፍጠር በሚል ራዕይ የተመሰረትን ሲሆን፣ ከትንሽ የማህበረሰብ ተነሳሽነት ወደ የሚለካ ተፅዕኖ የሚፈጥር ድርጅት አድገናል። ተልዕኳችን የእድገትና የራስን አቅም የመጠቀም እድሎችን በሚፈጥሩ ዘላቂ የልማት ፕሮግራሞች ግለሰቦችንና ማህበረሰቦችን ማብቃት ነው።",
      imageAlt: "ታሪካችን",
    },
  };

  const t = text[language];

  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
              <Award size={20} />
              <span>{t.since}</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.description}
            </p>

          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_1_2026-08-06_20-40-36.jpg"
              alt={t.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}