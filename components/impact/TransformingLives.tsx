import { UtensilsCrossed, Shirt, GraduationCap, Stethoscope, Home, Users } from "lucide-react";

const metrics = [
  {
    icon: UtensilsCrossed,
    value: "6,000+",
    label: "Meals served daily through Agape (Table of Love)"
  },
  {
    icon: Shirt,
    value: "4,200",
    label: "Persons received clothes and essential wear"
  },
  {
    icon: GraduationCap,
    value: "2,000+",
    label: "Students supported with educational materials (125 currently)"
  },
  {
    icon: Stethoscope,
    value: "567",
    label: "Individuals received free medical attention and care"
  },
  {
    icon: Home,
    value: "70+",
    label: "Homeless persons helped with rent and employment creation"
  },
  {
    icon: Users,
    value: "600+",
    label: "Dedicated members, alongside 50 ambassadors driving our mission forward"
  }
];

export default function TransformingLives() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transforming Lives in Numbers
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Every number represents a life touched, a hope restored, and a community strengthened.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <metric.icon size={28} className="text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <p className="text-foreground/70 leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
