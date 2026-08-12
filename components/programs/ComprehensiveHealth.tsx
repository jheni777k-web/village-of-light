import Image from "next/image";
import { HeartPulse, BadgeCheck } from "lucide-react";

const healthServices = [
  "Medical Camps",
  "Health Education",
  "Maternal Care",
  "Child Nutrition",
  "Disease Prevention"
];

export default function ComprehensiveHealth() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_8_2026-08-06_20-40-36.jpg"
              alt="Comprehensive Health"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
              <BadgeCheck size={20} />
              <span>Core Initiative</span>
            </div>
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10">
              <HeartPulse size={28} className="text-secondary" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Health
            </h2>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our health programs provide essential medical services, preventive care, 
              and health education to underserved communities. We believe that access to 
              quality healthcare is a fundamental right that should be available to everyone, 
              regardless of their economic status or geographic location.
            </p>
            
            {/* Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {healthServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground/80">{service}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="bg-primary hover:bg-primary-dark text-background px-6 py-3 rounded-full font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
