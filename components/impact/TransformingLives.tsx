"use client";

import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Stethoscope,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function TransformingLives() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "What Our Work Has Achieved",
      description:
        "Our work supports children and older people through education, healthcare, food, clothing, and livelihood opportunities.",

      metrics: [
        {
          icon: UtensilsCrossed,
          value: "6,000+",
          label: "People served meals on various occasions",
        },
        {
          icon: Shirt,
          value: "4,200",
          label: "People provided with clothing assistance",
        },
        {
          icon: GraduationCap,
          value: "2,000+",
          label:
            "Students who have received educational assistance and learning materials",
        },
        {
          icon: GraduationCap,
          value: "625",
          label: "Students currently supported in their education",
        },
        {
          icon: Stethoscope,
          value: "567",
          label: "People who have received free medical treatment",
        },
        {
          icon: Briefcase,
          value: "70",
          label:
            "People experiencing homelessness supported through employment creation",
        },
      ],
    },

    am: {
      title: "ሥራችን ያስመዘገበው ውጤት",
      description:
        "ሥራችን ህፃናትንና አረጋውያንን በትምህርት፣ በጤና አገልግሎት፣ በምግብ፣ በልብስ እና በኑሮ ማሻሻያ ዕድሎች ይደግፋል።",

      metrics: [
        {
          icon: UtensilsCrossed,
          value: "6,000+",
          label: "በተለያዩ አጋጣሚዎች ምግብ ያገኙ ሰዎች",
        },
        {
          icon: Shirt,
          value: "4,200",
          label: "የልብስ ድጋፍ ያገኙ ሰዎች",
        },
        {
          icon: GraduationCap,
          value: "2,000+",
          label:
            "የትምህርት ድጋፍና የትምህርት መርጃዎችን ያገኙ ተማሪዎች",
        },
        {
          icon: GraduationCap,
          value: "625",
          label: "በአሁኑ ጊዜ በትምህርታቸው የሚደገፉ ተማሪዎች",
        },
        {
          icon: Stethoscope,
          value: "567",
          label: "ነፃ የህክምና ህክምና ያገኙ ሰዎች",
        },
        {
          icon: Briefcase,
          value: "70",
          label: "ቤት አልባነት የሚያጋጥማቸው ሰዎች በሥራ ፈጠራ የተደገፉ",
        },
      ],
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-background">
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

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 mb-4">
                <metric.icon
                  size={28}
                  className="text-primary"
                />
              </div>

              <div className="text-4xl font-bold text-foreground mb-2">
                {metric.value}
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}