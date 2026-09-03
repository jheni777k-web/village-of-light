"use client";

import { CheckCircle2, Users, Target, Heart } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const values = [
  {
    icon: CheckCircle2,
    title: {
      en: "Transparency",
      am: "ግልጽነት",
    },
    description: {
      en: "We maintain complete transparency in our operations and financial reporting",
      am: "በስራችንና በገንዘብ አጠቃቀማችን ላይ ሙሉ ግልጽነትን እንጠብቃለን",
    },
  },
  {
    icon: Users,
    title: {
      en: "Community-First",
      am: "ማህበረሰብ ቀዳሚ",
    },
    description: {
      en: "Our programs are designed with and for the communities we serve",
      am: "ፕሮግራሞቻችን የምናገለግላቸውን ማህበረሰቦች በማሳተፍና ለእነሱ ተብለው የተዘጋጁ ናቸው",
    },
  },
  {
    icon: Target,
    title: {
      en: "Impact-Driven",
      am: "ተፅዕኖ ተኮር",
    },
    description: {
      en: "Every initiative is measured by its tangible impact on people's lives",
      am: "እያንዳንዱ ተነሳሽነት በሰዎች ሕይወት ላይ በሚያመጣው ተጨባጭ ተፅዕኖ ይለካል",
    },
  },
  {
    icon: Heart,
    title: {
      en: "Compassion",
      am: "ርህራሄ",
    },
    description: {
      en: "We approach every challenge with empathy and genuine care for others",
      am: "እያንዳንዱን ችግር በርህራሄና በእውነተኛ እንክብካቤ እንቀርባለን",
    },
  },
];

export default function WhoWeAre() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Who We Are",
      description:
        "We are a dedicated team of passionate individuals committed to creating sustainable change through innovative programs and community partnerships.",
    },
    am: {
      title: "እኛ ማን ነን",
      description:
        "በፈጠራ ፕሮግራሞችና በማህበረሰብ አጋርነት ዘላቂ ለውጥ ለመፍጠር ቁርጠኛ የሆንን ተሰጥኦ ያላቸው ግለሰቦች የተሰባሰብን ቡድን ነን።",
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

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <value.icon size={28} className="text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title[language]}
              </h3>

              <p className="text-foreground/70">
                {value.description[language]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}