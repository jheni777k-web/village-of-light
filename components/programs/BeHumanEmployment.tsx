"use client";

import Image from "next/image";
import {
  Briefcase,
  Scissors,
  Wheat,
  Coffee,
  Droplets,
  Store,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function BeHumanEmployment() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: '"Be Human" Employment Creation Project',

      description:
        "The Be Human Employment Creation Project recognizes that sustainable employment is essential for people to become self-reliant. The project creates job opportunities that enable beneficiaries to earn a living using their skills and professions.",

      impact: [
        {
          value: "70",
          description:
            "People experiencing homelessness provided with sustainable employment opportunities",
        },
        {
          value: "50",
          description:
            "Additional people provided with employment opportunities",
        },
        {
          value: "409,000+ ETB",
          description:
            "Invested in employment support for people experiencing homelessness",
        },
        {
          value: "1M+ ETB",
          description:
            "Invested in livelihood initiatives overall",
        },
      ],

      employmentAreas: "Employment Areas",

      areas: [
        {
          icon: Wheat,
          name: "Poultry Farming",
        },
        {
          icon: Droplets,
          name: "Shower & Bathing Services",
        },
        {
          icon: Coffee,
          name: "Tea & Coffee Businesses",
        },
        {
          icon: Store,
          name: "Public Toilet Services",
        },
        {
          icon: Scissors,
          name: "Tailoring",
        },
        {
          icon: Briefcase,
          name: "Men's & Women's Hairdressing",
        },
      ],

      imageAlt: "Be Human Employment Creation Project",
    },

    am: {
      title: "“ሰው ሁን” የሥራ ፈጠራ ፕሮጀክት",

      description:
        "“ሰው ሁን” የሥራ ፈጠራ ፕሮጀክት ሰዎች በራሳቸው እንዲተዳደሩ ዘላቂ የሥራ ዕድል መኖሩ አስፈላጊ መሆኑን ያምናል። ፕሮጀክቱ ተጠቃሚዎች ችሎታቸውንና ሙያቸውን ተጠቅመው ገቢ እንዲያገኙ የሥራ ዕድሎችን ይፈጥራል።",

      impact: [
        {
          value: "70",
          description:
            "ቤት አልባነት የሚያጋጥማቸው ሰዎች ዘላቂ የሥራ ዕድል አግኝተዋል",
        },
        {
          value: "50",
          description:
            "ተጨማሪ ሰዎች የሥራ ዕድል አግኝተዋል",
        },
        {
          value: "409,000+ ብር",
          description:
            "ቤት አልባነት ለሚያጋጥማቸው ሰዎች የሥራ ድጋፍ ላይ የተዋለ",
        },
        {
          value: "1 ሚሊዮን+ ብር",
          description:
            "በአጠቃላይ በኑሮ ማሻሻያ ተነሳሽነቶች ላይ የተዋለ",
        },
      ],

      employmentAreas: "የሥራ ዘርፎች",

      areas: [
        {
          icon: Wheat,
          name: "የዶሮ እርባታ",
        },
        {
          icon: Droplets,
          name: "የመታጠቢያ እና ሻወር አገልግሎቶች",
        },
        {
          icon: Coffee,
          name: "የሻይ እና ቡና ንግድ",
        },
        {
          icon: Store,
          name: "የህዝብ መፀዳጃ ቤት አገልግሎት",
        },
        {
          icon: Scissors,
          name: "ስፌት",
        },
        {
          icon: Briefcase,
          name: "የወንዶች እና የሴቶች ፀጉር ማስተካከያ",
        },
      ],

      imageAlt: "የ“ሰው ሁን” የሥራ ፈጠራ ፕሮጀክት",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10">
              <Briefcase
                size={32}
                className="text-primary"
              />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.description}
            </p>

            {/* Impact Figures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {t.impact.map((item, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary">
                    {item.value}
                  </div>

                  <p className="text-foreground/70 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>

            {/* Image */}
            <div className="relative h-80 lg:h-96 overflow-hidden mb-8">
              <Image
                src="/photo_12_2026-08-06_20-40-36.jpg"
                alt={t.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Employment Areas */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-5">
                {t.employmentAreas}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {t.areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <area.icon
                      size={20}
                      className="text-primary shrink-0"
                    />

                    <span className="text-foreground/80">
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}