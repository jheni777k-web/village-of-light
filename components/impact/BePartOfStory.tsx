"use client";

import { Heart, HandHeart } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function BePartOfStory() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Be Part of the Story",

      description:
        "VLCE is supported by three founders, nine executive board members, 600 registered members, five volunteer ambassadors, and five hired volunteers. Together, they work to support vulnerable children and older people across Ethiopia.",

      organization: "Our Organization",

      founders: "Founders",
      boardMembers: "Board Members",
      registeredMembers: "Registered Members",
      volunteerAmbassadors: "Volunteer Ambassadors",
      hiredVolunteers: "Hired Volunteers",

      donate: "Donate",
      getInvolved: "Get Involved",
    },

    am: {
      title: "የታሪኩ አካል ይሁኑ",

      description:
        "VLCE በ3 መስራቾች፣ በ9 የስራ አስፈፃሚ ቦርድ አባላት፣ በ600 የተመዘገቡ አባላት፣ በ5 የበጎ ፈቃድ አምባሳደሮች እና በ5 ተቀጣሪ የበጎ ፈቃድ ሰራተኞች ድጋፍ ያገኛል። በአንድነት በመስራት በመላው ኢትዮጵያ ተጋላጭ የሆኑ ህፃናትንና አረጋውያንን ለመደገፍ ይሰራሉ።",

      organization: "ድርጅታችን",

      founders: "መስራቾች",
      boardMembers: "የቦርድ አባላት",
      registeredMembers: "የተመዘገቡ አባላት",
      volunteerAmbassadors: "የበጎ ፈቃድ አምባሳደሮች",
      hiredVolunteers: "ተቀጣሪ የበጎ ፈቃድ ሰራተኞች",

      donate: "ይለግሱ",
      getInvolved: "ይሳተፉ",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20">
            <Heart
              size={40}
              className="text-background"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-background">
            {t.title}
          </h2>

          {/* Description */}
          <p className="text-xl text-background/90 leading-relaxed max-w-3xl mx-auto">
            {t.description}
          </p>

          {/* Organization Structure */}
          <div className="pt-4">
            <p className="text-background/80 text-sm uppercase tracking-wider mb-4">
              {t.organization}
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-background">

              <span>
                <strong>3</strong> {t.founders}
              </span>

              <span>
                <strong>9</strong> {t.boardMembers}
              </span>

              <span>
                <strong>600</strong> {t.registeredMembers}
              </span>

              <span>
                <strong>5</strong> {t.volunteerAmbassadors}
              </span>

              <span>
                <strong>5</strong> {t.hiredVolunteers}
              </span>

            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">

            <a
              href="/donate"
              className="bg-background hover:bg-gray-100 text-primary px-8 py-4 font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Heart size={20} />
              {t.donate}
            </a>

            <a
              href="/contact"
              className="bg-white/20 hover:bg-white/30 text-background border-2 border-background/30 px-8 py-4 font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <HandHeart size={20} />
              {t.getInvolved}
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}