"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const isAmharic = language === "am";

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <Image
              src="/logo.jpg"
              alt="Village of Light for Children and the Elderly Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />

            <p className="text-background/80">
              {isAmharic
                ? "የብርሃን ልጆች ለህፃናትና ለአረጋውያን (VLCE) ብሔራዊ ያልተቋቋመ የሰብዓዊ እርዳታ ድርጅት ሲሆን፣ ተጋላጭ የሆኑ ህፃናትንና አረጋውያንን በትምህርት፣ በጤና አገልግሎት፣ በማህበራዊ ድጋፍ፣ በስፖንሰርሺፕ እና በኑሮ ማሻሻያ ፕሮግራሞች ለመደገፍ ይሰራል።"
                : "Village of Light for Children and the Elderly (VLCE) is a national non-profit humanitarian organization working to support vulnerable children and elderly people through education, healthcare, social support, sponsorship, and livelihood programs."}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@yebirhanlijoch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-background/10 hover:bg-primary p-2 rounded-full transition-colors text-background/80 hover:text-background"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.99 2.99 0 0 0-2.105-2.116C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.393.57A2.99 2.99 0 0 0 .502 6.186 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.105 2.116C4.6 20.5 12 20.5 12 20.5s7.4 0 9.393-.57a2.99 2.99 0 0 0 2.105-2.116A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://web.facebook.com/share/p/1DWpZ2bAox/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-background/10 hover:bg-primary p-2 rounded-full transition-colors text-background/80 hover:text-background"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.003 10.125 11.925v-8.432H7.078v-3.493h3.047V9.412c0-3.025 1.792-4.695 4.533-4.695 1.312 0 2.686.236 2.686.236v2.973h-1.514c-1.491 0-1.956.93-1.956 1.885v2.262h3.328l-.532 3.493h-2.796v8.432C19.612 23.076 24 18.092 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@villageoflight?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-background/10 hover:bg-primary p-2 rounded-full transition-colors text-background/80 hover:text-background"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 01-3.77-3.77A4.793 4.793 0 0115.686 1h-3.337v15.39a2.87 2.87 0 11-2.87-2.87c.17 0 .337.016.5.045v-3.4a6.272 6.272 0 00-.5-.02A6.25 6.25 0 1015.73 16.4V8.87a8.1 8.1 0 003.86.98V6.513a4.79 4.79 0 01-.001.173z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isAmharic ? "አጫጭር አገናኞች" : "Quick Links"}
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {isAmharic ? "ስለ እኛ" : "About Us"}
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {isAmharic ? "ፕሮግራሞቻችን" : "Our Programs"}
                </Link>
              </li>

              <li>
                <Link
                  href="/impact"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {isAmharic ? "ተጽዕኖአችን" : "Our Impact"}
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {isAmharic ? "ያግኙን" : "Contact Us"}
                </Link>
              </li>

              <li>
                <Link
                  href="/donate"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  {isAmharic ? "ይደግፉን" : "Support Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isAmharic ? "ፕሮግራሞቻችን" : "Our Programs"}
            </h3>

            <ul className="space-y-3">
              <li>
                <p className="text-background/80">
                  {isAmharic ? "የትምህርት ድጋፍ" : "Education Support"}
                </p>
              </li>

              <li>
                <p className="text-background/80">
                  {isAmharic ? "የጤና አገልግሎት" : "Healthcare"}
                </p>
              </li>

              <li>
                <p className="text-background/80">
                  {isAmharic ? "ማህበራዊ ድጋፍ" : "Social Support"}
                </p>
              </li>

              <li>
                <p className="text-background/80">
                  {isAmharic ? "የቤጎ ማዕድ ስፖንሰርሺፕ" : "Bego Maed Sponsorship"}
                </p>
              </li>

              <li>
                <p className="text-background/80">
                  {isAmharic
                    ? "የቢ ሂዩማን የሥራ ዕድል ፈጠራ"
                    : "Be Human Employment Creation"}
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {isAmharic ? "ያግኙን" : "Contact Us"}
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-primary shrink-0 mt-1"
                />

                <span className="text-background/80">
                  {isAmharic ? "አዲስ አበባ፣ ኢትዮጵያ" : "Addis Ababa, Ethiopia"}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-primary shrink-0"
                />

                <span className="text-background/80">
                  +251 11 749 300
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-primary shrink-0"
                />

                <a
                  href="mailto:villageoflight2020@gmail.com"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  villageoflight2020@gmail.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-background/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            {isAmharic
              ? "የብርሃን ልጆች ለህፃናትና ለአረጋውያን (VLCE)። መብቱ በሕግ የተጠበቀ ነው።"
              : "Village of Light for Children and the Elderly (VLCE). All rights reserved."}
          </p>

        </div>
      </div>
    </footer>
  );
}