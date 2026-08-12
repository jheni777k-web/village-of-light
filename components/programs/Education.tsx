import { GraduationCap, BookOpen, School, Users } from "lucide-react";

const educationFeatures = [
  {
    icon: BookOpen,
    title: "Literacy Programs",
    description: "Adult and child literacy initiatives to break the cycle of poverty"
  },
  {
    icon: School,
    title: "School Support",
    description: "Providing supplies, uniforms, and infrastructure for schools"
  },
  {
    icon: Users,
    title: "Teacher Training",
    description: "Professional development for educators in underserved areas"
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10">
              <GraduationCap size={32} className="text-accent-gold" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Education
            </h2>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Education is the foundation of sustainable development. Our education programs 
              focus on providing quality learning opportunities for children and adults alike, 
              ensuring that knowledge becomes a tool for empowerment and social mobility.
            </p>
            
            {/* Features */}
            <div className="space-y-4">
              {educationFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/photo_10_2026-08-06_20-40-36.jpg"
              alt="Education Programs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
