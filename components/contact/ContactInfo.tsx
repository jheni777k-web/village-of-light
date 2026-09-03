"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactInfo() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Get in Touch",
      addressTitle: "Address",
      address:
        "Village of Light Community Center, Near St. Mary's Church, Addis Ababa, Ethiopia",
      phoneTitle: "Phone",
      emailTitle: "Email",
      imageAlt: "Community Gathering",
    },
    am: {
      title: "ያግኙን",
      addressTitle: "አድራሻ",
      address:
        "የብርሃን ልጆች እና አረጋውያን ማህበር ማህበረሰብ ማዕከል፣ ከቅድስት ማርያም ቤተክርስቲያን አቅራቢያ፣ አዲስ አበባ፣ ኢትዮጵያ",
      phoneTitle: "ስልክ",
      emailTitle: "ኢሜይል",
      imageAlt: "የማህበረሰብ ስብሰባ",
    },
  };

  const t = text[language];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        {t.title}
      </h2>

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <MapPin size={24} className="text-primary" />
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            {t.addressTitle}
          </h3>

          <p className="text-foreground/70 leading-relaxed">
            {t.address}
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Phone size={24} className="text-primary" />
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            {t.phoneTitle}
          </h3>

          <p className="text-foreground/70">
            +251 11 123 4567
          </p>

          <p className="text-foreground/70">
            +251 91 234 5678
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail size={24} className="text-primary" />
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-1">
            {t.emailTitle}
          </h3>

          <p className="text-foreground/70">
            contact@villageoflight.org
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
        <Image
          src="/photo_4_2026-08-06_20-40-36.jpg"
          alt={t.imageAlt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}