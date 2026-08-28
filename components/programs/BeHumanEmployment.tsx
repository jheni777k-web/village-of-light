import Image from "next/image";
import {
  Briefcase,
  Scissors,
  Wheat,
  Coffee,
  Droplets,
  Store,
} from "lucide-react";

const employmentAreas = [
  {
    icon: Wheat,
    name: "Poultry Farming",
  },
  {
    icon: Droplets,
    name: "Shower & Bathing Services",
  },
  {
    icon: Coffee,
    name: "Tea & Coffee Businesses",
  },
  {
    icon: Store,
    name: "Public Toilet Services",
  },
  {
    icon: Scissors,
    name: "Tailoring",
  },
  {
    icon: Briefcase,
    name: "Men's & Women's Hairdressing",
  },
];

export default function BeHumanEmployment() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10">
              <Briefcase size={32} className="text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              &quot;Be Human&quot; Employment Creation Project
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              The Be Human Employment Creation Project recognizes that
              sustainable employment is essential for people to become
              self-reliant. The project creates job opportunities that enable
              beneficiaries to earn a living using their skills and professions.
            </p>

            {/* Impact Figures */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">

              <div>
                <div className="text-3xl font-bold text-primary">
                  70
                </div>
                <p className="text-foreground/70 mt-1">
                  People experiencing homelessness provided with sustainable
                  employment opportunities
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-primary">
                  50
                </div>
                <p className="text-foreground/70 mt-1">
                  Additional people provided with employment opportunities
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-primary">
                  409,000+ ETB
                </div>
                <p className="text-foreground/70 mt-1">
                  Invested in employment support for people experiencing
                  homelessness
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-primary">
                  1M+ ETB
                </div>
                <p className="text-foreground/70 mt-1">
                  Invested in livelihood initiatives overall
                </p>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div>

            {/* Image */}
            <div className="relative h-80 lg:h-96 overflow-hidden mb-8">
              <Image
                src="/photo_12_2026-08-06_20-40-36.jpg"
                alt="Be Human Employment Creation Project"
                fill
                className="object-cover"
              />
            </div>

            {/* Employment Areas */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-5">
                Employment Areas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {employmentAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <area.icon
                      size={20}
                      className="text-primary shrink-0"
                    />

                    <span className="text-foreground/80">
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}