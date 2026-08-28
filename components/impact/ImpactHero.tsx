import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function ImpactHero() {
  return (
    <section className="relative min-h-[60vh] pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photo_1_2026-08-06_20-40-36.jpg"
          alt="VLCE community support activities"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm mb-6 mx-auto">
          <TrendingUp size={40} className="text-primary" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Our Impact & Milestones
        </h1>

        {/* Description */}
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Since 2012, Village of Light for Children and the Elderly has
          supported vulnerable children and older people through education,
          healthcare, social assistance, sponsorship, and livelihood
          opportunities.
        </p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mt-8">
          <span className="font-semibold">
            Serving communities in Ethiopia since 2012
          </span>
        </div>

      </div>
    </section>
  );
}
