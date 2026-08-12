import Image from "next/image";
import { Briefcase, Scissors, Wheat, Wrench } from "lucide-react";

const skills = [
  {
    icon: Wheat,
    name: "Poultry Farming",
    description: "Sustainable agricultural training and business support"
  },
  {
    icon: Scissors,
    name: "Tailoring",
    description: "Sewing and garment production skills development"
  },
  {
    icon: Wrench,
    name: "Skill Building",
    description: "Vocational training for various trades and crafts"
  }
];

export default function BeHumanEmployment() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Briefcase size={32} className="text-primary" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              &quot;Be Human&quot; Employment Project
            </h2>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our employment initiative provides vocational training and skill development 
              programs that empower individuals to create sustainable livelihoods. By equipping 
              people with marketable skills and connecting them with economic opportunities, 
              we help break the cycle of poverty and build self-sufficient communities.
            </p>
            
            {/* Skills */}
            <div className="space-y-4 pt-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <skill.icon size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="bg-primary hover:bg-primary-dark text-background px-6 py-3 rounded-full font-semibold transition-colors">
              Join Our Program
            </button>
          </div>
          
          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_12_2026-08-06_20-40-36.jpg"
              alt="Be Human Employment Project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
