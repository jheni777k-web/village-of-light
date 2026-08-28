import Image from "next/image";
import { Heart } from "lucide-react";

export default function DirectAid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Heart size={32} className="text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Direct Support for People in Need
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              VLCE provides practical support to vulnerable children and older
              people through food, clothing, healthcare, education, holiday
              assistance, and sponsorship.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Through programs such as the Agape feeding program and Bego Maed
              sponsorship, the organization continues to provide ongoing
              assistance to people facing difficult circumstances.
            </p>

            {/* Key Areas */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
              <p className="text-foreground font-medium">• Food assistance</p>
              <p className="text-foreground font-medium">• Healthcare</p>
              <p className="text-foreground font-medium">• Education</p>
              <p className="text-foreground font-medium">• Clothing support</p>
            </div>

          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/photo_2_2026-08-06_20-40-36.jpg"
                alt="VLCE providing direct support"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden mt-8">
              <Image
                src="/photo_3_2026-08-06_20-40-36.jpg"
                alt="VLCE community support activities"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
