"use client";

import Link from "next/link";
import {
  Heart,
  Gift,
  Users,
  ArrowLeft,
  HandHeart,
  Building2,
  Copy,
} from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function DonatePage() {
  const { language } = useLanguage();

  const text = {
    en: {
      badge: "Make a Difference",
      title: "Support Our Mission",
      description:
        "Your support helps Village of Light for Children and the Elderly provide meaningful assistance to vulnerable children and older people across Ethiopia.",

      donateTitle: "Your Support Matters",
      donateText:
        "Every contribution, regardless of its size, can help provide food, clothing, education, healthcare, and livelihood opportunities to people who need them most.",

      financialTitle: "Financial Support",
      financialText:
        "Your financial contribution helps us continue our programs and respond to the needs of vulnerable children and older people.",

      bankTitle: "Bank Account",
      bankName: "Commercial Bank of Ethiopia",
      accountLabel: "Account Number",
      accountNumber: "1000338451079",
      copyAccount: "Copy Account Number",

      inKindTitle: "In-Kind Donations",
      inKindText:
        "You can also support our work by donating useful items such as clothing, educational materials, food, and other essential supplies.",

      volunteerTitle: "Volunteer Your Time",
      volunteerText:
        "Your time and skills can make a meaningful difference. Join our volunteers and help us serve our communities.",

      howTitle: "How to Support VLCE",
      howText:
        "You can support VLCE through our Commercial Bank of Ethiopia account or by contributing items and your time to help our programs.",

      contactButton: "Contact Us",
      backHome: "Back to Home",

      impactTitle: "Together, We Can Make a Difference",
      impactText:
        "From meals and clothing assistance to education, healthcare, sponsorship, and employment creation, your support can help us continue making a lasting difference.",

      copied: "Copied!",
    },

    am: {
      badge: "ለውጥ ያምጡ",
      title: "ለተልዕኮአችን ድጋፍ ያድርጉ",
      description:
        "የሚያደርጉት ድጋፍ የብርሃን ልጆች እና አረጋውያን ማህበር በመላው ኢትዮጵያ ላሉ ተጋላጭ ህፃናትና አረጋውያን ጠቃሚ ድጋፍ እንዲያቀርብ ያግዛል።",

      donateTitle: "ድጋፍዎ ወሳኝ ነው",
      donateText:
        "የሚያደርጉት ማንኛውም መጠን ያለው አስተዋፅኦ ለሚፈልጉት ሰዎች ምግብ፣ ልብስ፣ ትምህርት፣ የጤና አገልግሎት እና የኑሮ ማሻሻያ ዕድሎችን ለማቅረብ ይረዳል።",

      financialTitle: "የገንዘብ ድጋፍ",
      financialText:
        "የገንዘብ ድጋፍዎ ፕሮግራሞቻችንን ለማስቀጠል እና ተጋላጭ ለሆኑ ህፃናትና አረጋውያን ፍላጎቶች ምላሽ ለመስጠት ያግዛል።",

      bankTitle: "የባንክ ሂሳብ",
      bankName: "የኢትዮጵያ ንግድ ባንክ",
      accountLabel: "የሂሳብ ቁጥር",
      accountNumber: "1000338451079",
      copyAccount: "የሂሳብ ቁጥሩን ቅዳ",

      inKindTitle: "የዕቃ ድጋፍ",
      inKindText:
        "እንደ ልብስ፣ የትምህርት መርጃዎች፣ ምግብ እና ሌሎች አስፈላጊ ዕቃዎችን በመለገስም ሥራችንን መደገፍ ይችላሉ።",

      volunteerTitle: "ጊዜዎን ይለግሱ",
      volunteerText:
        "ጊዜዎና ችሎታዎ ትልቅ ለውጥ ማምጣት ይችላል። በጎ ፈቃደኞቻችንን በመቀላቀል ማህበረሰቦቻችንን ይደግፉ።",

      howTitle: "VLCEን እንዴት መደገፍ ይችላሉ?",
      howText:
        "VLCEን በየኢትዮጵያ ንግድ ባንክ ሂሳባችን በመለገስ ወይም ለፕሮግራሞቻችን የሚያገለግሉ ዕቃዎችንና ጊዜዎን በመስጠት መደገፍ ይችላሉ።",

      contactButton: "ያግኙን",
      backHome: "ወደ መነሻ ይመለሱ",

      impactTitle: "በአንድነት ለውጥ ማምጣት እንችላለን",
      impactText:
        "ከምግብና የልብስ ድጋፍ እስከ ትምህርት፣ ጤና፣ ስፖንሰርሺፕ እና የሥራ ፈጠራ ድረስ፣ ድጋፍዎ ዘላቂ ለውጥ ማምጣታችንን እንድንቀጥል ያግዛል።",

      copied: "ተቀድቷል!",
    },
  };

  const t = text[language];

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(t.accountNumber);
      alert(t.copied);
    } catch {
      // Clipboard may be unavailable in some browsers.
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Heart size={40} className="text-primary" />
            </div>

            <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
              {t.badge}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.title}
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>
        </section>

        {/* Why Donate */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                {t.donateTitle}
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                {t.donateText}
              </p>
            </div>

            {/* Support Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Financial Support */}
              <div className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Building2 size={28} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t.financialTitle}
                </h3>

                <p className="text-foreground/70 leading-relaxed mb-6">
                  {t.financialText}
                </p>

                {/* Bank Details */}
                <div className="bg-slate-50 rounded-xl p-5 text-left">
                  <p className="text-sm text-foreground/60 mb-1">
                    {t.bankTitle}
                  </p>

                  <p className="font-semibold text-foreground mb-4">
                    {t.bankName}
                  </p>

                  <p className="text-sm text-foreground/60 mb-1">
                    {t.accountLabel}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-lg text-foreground tracking-wide break-all">
                      {t.accountNumber}
                    </p>

                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      aria-label={t.copyAccount}
                      title={t.copyAccount}
                      className="shrink-0 p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <Copy size={18} className="text-foreground" />
                    </button>
                  </div>
                </div>
              </div>

              {/* In-Kind Donations */}
              <div className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Gift size={28} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t.inKindTitle}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {t.inKindText}
                </p>
              </div>

              {/* Volunteer */}
              <div className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users size={28} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t.volunteerTitle}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {t.volunteerText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Information */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <HandHeart size={32} className="text-primary" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                {t.howTitle}
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
                {t.howText}
              </p>

              {/* Bank Account Highlight */}
              <div className="max-w-xl mx-auto mb-8 rounded-2xl border border-gray-200 bg-slate-50 p-6">
                <p className="text-sm text-foreground/60 mb-2">
                  {t.bankName}
                </p>

                <p className="text-sm text-foreground/60 mb-1">
                  {t.accountLabel}
                </p>

                <div className="flex items-center justify-center gap-3">
                  <p className="text-2xl md:text-3xl font-bold text-foreground tracking-wider break-all">
                    {t.accountNumber}
                  </p>

                  <button
                    type="button"
                    onClick={handleCopyAccount}
                    aria-label={t.copyAccount}
                    title={t.copyAccount}
                    className="shrink-0 p-2.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <Copy size={20} className="text-foreground" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary-dark transition-colors w-full sm:w-auto"
                >
                  {t.contactButton}
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-gray-300 text-foreground font-semibold hover:bg-gray-50 transition-colors w-full sm:w-auto"
                >
                  <ArrowLeft size={18} />
                  {t.backHome}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart
              size={40}
              className="mx-auto mb-6 text-black"
              fill="currentColor"
            />

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5">
              {t.impactTitle}
            </h2>

            <p className="text-lg text-black/75 max-w-2xl mx-auto leading-relaxed">
              {t.impactText}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}