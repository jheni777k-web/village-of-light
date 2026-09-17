"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ContactInfo() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Get in Touch",
      addressTitle: "Address",
      address:
        "We are located in the Deru Bolo compound, near Sor Amba Hotel, just up from St. George's Church (Arada) Addis Ababa, Ethiopia",
      phoneTitle: "Phone",
      emailTitle: "Email",
    },
    am: {
      title: "ያግኙን",
      addressTitle: "አድራሻ",
      address:
        "ከ(አራዳ) ቅዱስ ጊዮርጊስ ቤተ ክርስቲያን ከፍ ብሎ ሶር አምባ ሆቴል አጠገብ ደሩ ቦሎ ግቢ እንገኛለን።",
      phoneTitle: "ስልክ",
      emailTitle: "ኢሜይል",
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
            +251911234567
          </p>

          <p className="text-foreground/70">
            +251912345678
          </p>

          <p className="text-foreground/70">
            +251977959595
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
            contact@https://village-of-light.vercel.app/about
          </p>
        </div>
      </div>
    </div>
  );
}