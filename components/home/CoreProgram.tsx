"use client";

import Image from "next/image";
import {
  BookOpen,
  HeartHandshake,
  Sprout,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

const programs = [
  {
    icon: BookOpen,
    image: "/Education2.jpg",
    en: {
      title: "Education Initiative",
      description:
        "Providing quality education and learning resources to underserved communities",
    },
    am: {
      title: "የትምህርት ተነሳሽነት",
      description:
        "በቂ አገልግሎት ላላገኙ ማህበረሰቦች ጥራት ያለው ትምህርትና የመማሪያ ግብዓቶችን ማቅረብ",
    },
  },
  {
    icon: HeartHandshake,
    image: "/healthcare2.jpg",
    en: {
      title: "Healthcare Access",
      description:
        "Ensuring basic healthcare services and medical support for those in need",
    },
    am: {
      title: "የጤና አገልግሎት ተደራሽነት",
      description:
        "ለሚያስፈልጋቸው ሰዎች መሰረታዊ የጤና አገልግሎትና የህክምና ድጋፍ ማረጋገጥ",
    },
  },
  {
    icon: Sprout,
    image: "/photo_11_2026-08-06_20-40-36.jpg",
    en: {
      title: "Sustainable Development",
      description:
        "Promoting environmental sustainability and community resilience programs",
    },
    am: {
      title: "ዘላቂ ልማት",
      description:
        "የአካባቢ ዘላቂነትንና የማህበረሰብ ተቋቋሚነትን የሚያበረታቱ ፕሮግራሞችን ማካሄድ",
    },
  },
  {
    icon: GraduationCap,
    image: "/training.png",
    en: {
      title: "Skills Training",
      description:
        "Empowering individuals with vocational skills for economic independence",
    },
    am: {
      title: "የክህሎት ስልጠና",
      description:
        "ግለሰቦችን ለኢኮኖሚያዊ ነፃነት የሚያስችሉ የሙያ ክህሎቶችን ማስታጠቅ",
    },
  },
];

export default function CoreProgram() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Core Programs",
      description:
        "Our initiatives focus on sustainable development and community empowerment",
    },
    am: {
      title: "ዋና ዋና ፕሮግራሞቻችን",
      description:
        "ተነሳሽነቶቻችን በዘላቂ ልማትና በማህበረሰብ አቅም ግንባታ ላይ ያተኩራሉ",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const content = program[language];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={content.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <program.icon size={24} className="text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {content.title}
                  </h3>

                  <p className="text-foreground/70">
                    {content.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}