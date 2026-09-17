"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function WhyWeDoIt() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Why We Do It",
      description:
        "We believe that everyone deserves access to basic necessities, education, and opportunities to thrive. Our work is driven by the conviction that sustainable change is possible when communities are empowered with the right resources and support.",

      educationTitle: "Education is a fundamental right",
      educationText:
        "We work to ensure every child has access to quality education",

      healthcareTitle: "Healthcare should be accessible",
      healthcareText:
        "We bridge gaps in healthcare access for underserved communities",

      economicTitle: "Economic empowerment creates change",
      economicText:
        "We provide skills training and resources for self-sufficiency",

      sustainabilityTitle: "Sustainability matters",
      sustainabilityText:
        "Our programs are designed for long-term impact and community ownership",
    },

    am: {
      title: "ለምን እንሰራለን?",
      description:
        "ሁሉም ሰው መሰረታዊ ፍላጎቶችን፣ ትምህርትን እና ለማደግ የሚያስችሉ ዕድሎችን የማግኘት መብት አለው ብለን እናምናለን። ማህበረሰቦች ተገቢውን ሀብትና ድጋፍ ሲያገኙ ዘላቂ ለውጥ ማምጣት ይቻላል በሚል እምነት ስራችንን እንመራለን።",

      educationTitle: "ትምህርት መሰረታዊ መብት ነው",
      educationText:
        "እያንዳንዱ ልጅ ጥራት ያለው ትምህርት እንዲያገኝ እንሰራለን",

      healthcareTitle: "የጤና አገልግሎት ለሁሉም ተደራሽ መሆን አለበት",
      healthcareText:
        "በቂ የጤና አገልግሎት በማይደርሳቸው ማህበረሰቦች የጤና አገልግሎት ክፍተቶችን ለመሙላት እንሰራለን",

      economicTitle: "ኢኮኖሚያዊ አቅም ማጎልበት ለውጥን ያመጣል",
      economicText:
        "ራስን ለመቻል የሚያስችሉ የሙያ ክህሎት ስልጠናዎችንና ሀብቶችን እናቀርባለን",

      sustainabilityTitle: "ዘላቂነት አስፈላጊ ነው",
      sustainabilityText:
        "ፕሮግራሞቻችን የረጅም ጊዜ ተፅዕኖን እና የማህበረሰብ ባለቤትነትን ታሳቢ በማድረግ የተነደፉ ናቸው",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/photo_2.jpg"
              alt={t.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
              <Sparkles size={32} className="text-secondary" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.description}
            </p>

            {/* Key Points */}
            <div className="space-y-4">

              {/* Education */}
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    {t.educationTitle}
                  </strong>{" "}
                  - {t.educationText}
                </p>
              </div>

              {/* Healthcare */}
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    {t.healthcareTitle}
                  </strong>{" "}
                  - {t.healthcareText}
                </p>
              </div>

              {/* Economic Empowerment */}
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    {t.economicTitle}
                  </strong>{" "}
                  - {t.economicText}
                </p>
              </div>

              {/* Sustainability */}
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">
                    {t.sustainabilityTitle}
                  </strong>{" "}
                  - {t.sustainabilityText}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}