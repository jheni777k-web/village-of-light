import Image from "next/image";
import { Heart, Users, Globe, Award } from "lucide-react";

const impactStats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Lives Impacted",
    description: "People reached through our programs"
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries",
    description: "Communities we serve worldwide"
  },
  {
    icon: Heart,
    value: "100+",
    label: "Partners",
    description: "Organizations working with us"
  },
  {
    icon: Award,
    value: "15",
    label: "Years",
    description: "Of dedicated service"
  }
];

const impactImages = [
  "/photo_5_2026-08-06_20-40-36.jpg",
  "/photo_6_2026-08-06_20-40-36.jpg",
  "/photo_7_2026-08-06_20-40-36.jpg"
];

export default function OurImpact() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Making a measurable difference in communities around the world
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </p>
              <p className="text-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactImages.map((image, index) => (
            <div key={index} className="relative h-64 rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={`Impact ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
