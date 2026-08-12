import Image from "next/image";
import { Target } from "lucide-react";

export default function ProgramsHero() {
  return (
    <section className="relative bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Target size={32} className="text-primary" />
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Our Programs & Initiatives
            </h1>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              We implement comprehensive programs designed to address the most pressing 
              needs of communities we serve. From healthcare access to education initiatives, 
              our programs are built on sustainable models that create lasting impact and 
              empower individuals to build better futures for themselves and their families.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-foreground/70 text-sm">Active Programs</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-foreground/70 text-sm">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_7_2026-08-06_20-40-36.jpg"
              alt="Our Programs"
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
