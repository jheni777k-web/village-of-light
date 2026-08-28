import { CheckCircle2, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: CheckCircle2,
    title: "Transparency",
    description: "We maintain complete transparency in our operations and financial reporting"
  },
  {
    icon: Users,
    title: "Community-First",
    description: "Our programs are designed with and for the communities we serve"
  },
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Every initiative is measured by its tangible impact on people's lives"
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every challenge with empathy and genuine care for others"
  }
];

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We are a dedicated team of passionate individuals committed to creating
            sustainable change through innovative programs and community partnerships.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <value.icon size={28} className="text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>

              <p className="text-foreground/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}