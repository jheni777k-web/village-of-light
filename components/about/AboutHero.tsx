import Image from "next/image";
import { Award } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
              <Award size={20} />
              <span>Since 2012</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Our Story & Mission
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Founded with a vision to create lasting change in communities worldwide,
              we have grown from a small grassroots initiative into a global organization
              making measurable impact. Our mission is to empower individuals and communities
              through sustainable development programs that create opportunities for growth
              and self-reliance.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_1_2026-08-06_20-40-36.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}