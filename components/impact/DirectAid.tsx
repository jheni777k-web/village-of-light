import Image from "next/image";
import { Heart, Tag } from "lucide-react";

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
              Direct Aid & Support
            </h2>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our impact goes beyond numbers; it&apos;s about the dignity and care delivered 
              directly to those in need. From providing essential food staples to offering 
              medical assistance, every contribution creates a ripple effect of positive 
              change in our community.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Tag size={16} className="text-primary" />
                <span className="text-foreground font-medium">Elderly Care</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Tag size={16} className="text-primary" />
                <span className="text-foreground font-medium">Child Education</span>
              </div>
            </div>
          </div>
          
          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/photo_2_2026-08-06_20-40-36.jpg"
                alt="Direct Aid 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
              <Image
                src="/photo_3_2026-08-06_20-40-36.jpg"
                alt="Direct Aid 2"
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
