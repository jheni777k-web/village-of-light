"use client";

import { TrendingUp } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ImpactHero() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Our Impact & Milestones",
      description:
        "Since 2012, Village of Light for Children and the Elderly has supported vulnerable children and older people through education, healthcare, social assistance, sponsorship, and livelihood opportunities.",
      badge: "Serving communities in Ethiopia since 2012",
    },

    am: {
      title: "ተፅዕኖዎቻችን እና ዋና ዋና ስኬቶቻችን",
      description:
        "ከ2012 ዓ.ም. ጀምሮ የብርሃን ልጆች እና አረጋውያን ማህበር ተጋላጭ የሆኑ ህፃናትንና አረጋውያንን በትምህርት፣ በጤና አገልግሎት፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በኑሮ ማሻሻያ ዕድሎች ድጋፍ እያደረገ ይገኛል።",
      badge: "ከ2012 ዓ.ም. ጀምሮ በኢትዮጵያ ማህበረሰቦችን በማገልገል ላይ",
    },
  };

  const t = text[language];

  return (
    <section className="relative min-h-[60vh] pt-20 flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto">
          <TrendingUp
            size={40}
            className="text-primary"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {t.title}
        </h1>

        {/* Description */}
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mt-8">
          <span className="font-semibold">
            {t.badge}
          </span>
        </div>

      </div>
    </section>
  );
}