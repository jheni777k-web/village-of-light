"use client";

import {
  Heart,
  Utensils,
  Users,
  CalendarDays,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

const mealServices = [
  {
    date: "May 15",
    people: "50",
    partner: "Mimisho Catering",
  },
  {
    date: "June 20",
    people: "60",
    partner: "Blen Agelgil",
  },
  {
    date: "July 13",
    people: "50",
    partner: "Blen Agelgil",
  },
  {
    date: "July 14",
    people: "150",
    partner: "Gebeta Catering",
  },
  {
    date: "July 26",
    people: "100",
    partner: "Gebeta Catering",
  },
  {
    date: "July 29",
    people: "180",
    partner: "Gebeta Catering",
  },
  {
    date: "August 22",
    people: "70",
    partner: "Blen Agelgil",
  },
  {
    date: "August 23",
    people: "320",
    partner: "Gebeta Catering",
  },
  {
    date: "August 25",
    people: "150",
    partner: "Kidane Mihret Mahiber",
  },
];

export default function AgapeProgram() {
  const { language } = useLanguage();

  const text = {
    en: {
      title: "Agape Program",

      description:
        "The Agape meal service program organized by Birhan Lijoch is gaining good momentum, bringing meals to elderly people and community members through the support of catering organizations and community groups.",

      loveFeast: "Agape Love Feast Program",

      celebration:
        "Celebrate your weddings, birthdays, and memorial gatherings with the children and elderly of Village of Light.",

      peopleServed:
        "People served through completed Agape meal services",

      activities: "Meal Service Activities",

      people: "people",

      servedThrough: "Served through",

      inviteTitle: "Invite the Agape Program to Your Event",

      inviteDescription:
        "You, too, can invite Birhan Lijoch's Agape Program to provide meals for weddings, birthdays, memorial feasts, or association gatherings.",
    },

    am: {
      title: "አጋፔ ፕሮግራም",

      description:
        "በብርሃን ልጆች የተዘጋጀው የአጋፔ የምግብ አገልግሎት ፕሮግራም ጥሩ እድገት እያሳየ ሲሆን፣ በምግብ አቅራቢ ድርጅቶችና በማህበረሰብ ቡድኖች ድጋፍ ለአረጋውያንና ለማህበረሰቡ አባላት ምግብ ያቀርባል።",

      loveFeast: "የአጋፔ የፍቅር ማዕድ ፕሮግራም",

      celebration:
        "የሠርግ፣ የልደት እና የመታሰቢያ ዝግጅቶቻችሁን ከብርሃን ልጆች እና አረጋውያን ጋር ያክብሩ።",

      peopleServed:
        "በተጠናቀቁ የአጋፔ የምግብ አገልግሎቶች ምግብ ያገኙ ሰዎች",

      activities: "የምግብ አገልግሎት እንቅስቃሴዎች",

      people: "ሰዎች",

      servedThrough: "ያቀረበው",

      inviteTitle: "አጋፔ ፕሮግራሙን ወደ ዝግጅትዎ ይጋብዙ",

      inviteDescription:
        "እርስዎም የብርሃን ልጆች አጋፔ ፕሮግራምን ወደ ሠርግ፣ የልደት በዓል፣ የመታሰቢያ ምሳ ወይም የማህበር ዝግጅትዎ በመጋበዝ ምግብ እንዲያቀርብ ማድረግ ይችላሉፀ",
    },
  };

  const t = text[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
            <Heart size={32} className="text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            {t.title}
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          <div className="mt-6 space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {t.loveFeast}
            </h3>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t.celebration}
            </p>
          </div>
        </div>

        {/* Impact Highlight */}
        <div className="bg-primary rounded-3xl p-8 md:p-10 mb-14 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
            <Utensils size={28} className="text-background" />
          </div>

          <div className="text-4xl md:text-5xl font-bold text-background mb-2">
            1,130
          </div>

          <p className="text-background/90 text-lg">
            {t.peopleServed}
          </p>
        </div>

        {/* Meal Service History */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <CalendarDays size={28} className="text-primary" />

            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t.activities}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mealServices.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-primary">
                    {service.date}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70">
                    <Users size={16} />
                    {service.people} {t.people}
                  </span>
                </div>

                <p className="text-foreground/70">
                  {t.servedThrough}{" "}
                  <span className="font-semibold text-foreground">
                    {service.partner}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Invite Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.inviteTitle}
            </h3>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {t.inviteDescription}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}