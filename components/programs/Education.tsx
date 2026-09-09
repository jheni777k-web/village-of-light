"use client";

import Image from "next/image";
import { GraduationCap, BookOpen, School, Users } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Education() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Education",

      description1:
        "Education is a key area of focus for the Village of Light for Children and the Elderly. Believing that education is essential for overcoming many of society's challenges, VLCE supports families who are unable to afford their children's education.",

      description2:
        "The organization helps children enroll in school, provides tutorial and remedial classes to improve academic performance, and supplies educational materials and school supplies.",

      studentsSupported: "Students supported to date",
      currentlySupported: "Students currently supported",

      features: [
        {
          icon: School,
          title: "School Enrollment & Support",
          description:
            "Helping children from families who cannot afford their education enroll in school and continue their studies.",
        },
        {
          icon: BookOpen,
          title: "Educational Materials",
          description:
            "Providing students with educational materials and school supplies to support their learning.",
        },
        {
          icon: Users,
          title: "Tutorial & Remedial Classes",
          description:
            "Providing tutorial and remedial classes to help students improve their academic performance.",
        },
      ],

      imageAlt: "VLCE Education Program",
    },

    am: {
      title: "ትምህርት",

      description1:
        "ትምህርት የብርሃን ልጆች እና አረጋውያን ማህበር ዋና ትኩረት ከሚያደርግባቸው ዘርፎች አንዱ ነው። ትምህርት ብዙ የማህበረሰብ ችግሮችን ለመፍታት መሠረታዊ መሆኑን በማመን፣ VLCE የልጆቻቸውን ትምህርት ለመሸፈን አቅም የሌላቸውን ቤተሰቦች ይደግፋል።",

      description2:
        "ድርጅቱ ህፃናት ትምህርት ቤት እንዲመዘገቡ ያግዛል፣ የትምህርት ውጤታቸውን ለማሻሻል የአጋዥ እና የማስተካከያ ትምህርቶችን ይሰጣል፣ እንዲሁም የትምህርት መርጃዎችንና የትምህርት ቤት ቁሳቁሶችን ያቀርባል።",

      studentsSupported: "እስካሁን የተደገፉ ተማሪዎች",
      currentlySupported: "በአሁኑ ጊዜ የሚደገፉ ተማሪዎች",

      features: [
        {
          icon: School,
          title: "የትምህርት ቤት ምዝገባ እና ድጋፍ",
          description:
            "ትምህርታቸውን ለመሸፈን አቅም ከሌላቸው ቤተሰቦች የሚመጡ ህፃናት ትምህርት ቤት እንዲመዘገቡና ትምህርታቸውን እንዲቀጥሉ መርዳት።",
        },
        {
          icon: BookOpen,
          title: "የትምህርት መርጃዎች",
          description:
            "ተማሪዎች ትምህርታቸውን እንዲያሻሽሉ የትምህርት መርጃዎችንና የትምህርት ቤት ቁሳቁሶችን ማቅረብ።",
        },
        {
          icon: Users,
          title: "የአጋዥ እና የማስተካከያ ትምህርት",
          description:
            "ተማሪዎች የትምህርት ውጤታቸውን እንዲያሻሽሉ የአጋዥ እና የማስተካከያ ትምህርቶችን መስጠት።",
        },
      ],

      imageAlt: "የVLCE የትምህርት ፕሮግራም",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10">
              <GraduationCap
                size={32}
                className="text-accent-gold"
              />
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

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-primary/10 rounded-xl p-5">
                <div className="text-3xl font-bold text-primary">
                  2,000+
                </div>
                <p className="text-sm text-foreground/70 mt-1">
                  {t.studentsSupported}
                </p>
              </div>

              <div className="bg-accent-gold/10 rounded-xl p-5">
                <div className="text-3xl font-bold text-accent-gold">
                  625
                </div>
                <p className="text-sm text-foreground/70 mt-1">
                  {t.currentlySupported}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon
                        size={24}
                        className="text-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>

                    <p className="text-foreground/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/Education.jpg"
              alt={t.imageAlt}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}