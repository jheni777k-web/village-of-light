"use client";

import Image from "next/image";
import { Target } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ProgramsHero() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Our Programs & Initiatives",

      description1:
        "The Village of Light for Children and the Elderly (VLCE) works to improve the lives of children and elderly people through healthcare, education, social support, sponsorship, and employment creation.",

      description2:
        "Our programs provide practical assistance to people experiencing difficult circumstances while helping children access education, supporting elderly people with their basic needs, and creating opportunities for people to build sustainable livelihoods.",

      keyPrograms: "Key Programs",
      founded: "Founded",
      imageAlt: "VLCE Programs and Initiatives",
    },

    am: {
      title: "ፕሮግራሞቻችን እና ተነሳሽነቶቻችን",

      description1:
        "የብርሃን ልጆች እና አረጋውያን ማህበር (VLCE) ህፃናትና አረጋውያን ሰዎች ህይወትን ለማሻሻል በጤና አገልግሎት፣ በትምህርት፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በስራ ፈጠራ ዘርፎች ይሰራል።",

      description2:
        "ፕሮግራሞቻችን አስቸጋሪ ሁኔታዎች ውስጥ ላሉ ሰዎች ተግባራዊ ድጋፍ ይሰጣሉ። በተጨማሪም ህፃናት ትምህርት እንዲያገኙ፣ አረጋውያን መሰረታዊ ፍላጎቶቻቸውን እንዲያሟሉ እና ሰዎች ዘላቂ የኑሮ መሠረት እንዲገነቡ ዕድሎችን ይፈጥራሉ።",

      keyPrograms: "ዋና ፕሮግራሞች",
      founded: "የተመሰረተበት ዓመት",
      imageAlt: "የVLCE ፕሮግራሞች እና ተነሳሽነቶች",
    },
  };

  const t = text[language];

  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Target size={32} className="text-primary" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.description1}
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">
                  5
                </div>

                <div className="text-foreground/70 text-sm">
                  {t.keyPrograms}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">
                  2012
                </div>

                <div className="text-foreground/70 text-sm">
                  {t.founded}
                </div>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_7_2026-08-06_20-40-36.jpg"
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