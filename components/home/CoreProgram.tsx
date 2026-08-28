import Image from "next/image";
import { BookOpen, HeartHandshake, Sprout, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Education Initiative",
    description: "Providing quality education and learning resources to underserved communities",
    image: "/photo_8_2026-08-06_20-40-36.jpg"
  },
  {
    icon: HeartHandshake,
    title: "Healthcare Access",
    description: "Ensuring basic healthcare services and medical support for those in need",
    image: "/photo_10_2026-08-06_20-40-36.jpg"
  },
  {
    icon: Sprout,
    title: "Sustainable Development",
    description: "Promoting environmental sustainability and community resilience programs",
    image: "/photo_11_2026-08-06_20-40-36.jpg"
  },
  {
    icon: GraduationCap,
    title: "Skills Training",
    description: "Empowering individuals with vocational skills for economic independence",
    image: "/photo_12_2026-08-06_20-40-36.jpg"
  }
];

export default function CoreProgram() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Programs
          </h2>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Our initiatives focus on sustainable development and community empowerment
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <program.icon size={24} className="text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>

                <p className="text-foreground/70">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}