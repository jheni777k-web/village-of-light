"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactHero() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "We'd Love to Hear From You",
      description:
        "Have questions, suggestions, or want to get involved? Reach out to us and we'll get back to you as soon as possible. Together, we can make a difference in our community.",
    },
    am: {
      title: "ከእርስዎ መስማት እንወዳለን",
      description:
        "ጥያቄ፣ አስተያየት አለዎት ወይም በሥራችን መሳተፍ ይፈልጋሉ? ያግኙን፤ በተቻለ ፍጥነት ምላሽ እንሰጥዎታለን። በአንድነት በመስራት በማህበረሰባችን ላይ አዎንታዊ ለውጥ ማምጣት እንችላለን።",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto">
          <MessageCircle size={40} className="text-primary" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {t.title}
        </h1>

        {/* Description */}
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>
      </div>
    </section>
  );
}