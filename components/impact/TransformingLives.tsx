import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Stethoscope,
  Briefcase,
  Users
} from "lucide-react";

const metrics = [
  {
    icon: UtensilsCrossed,
    value: "6,000+",
    label: "People served meals on various occasions"
  },
  {
    icon: Shirt,
    value: "4,200",
    label: "People provided with clothing assistance"
  },
  {
    icon: GraduationCap,
    value: "2,000+",
    label: "Students who have received educational assistance and learning materials"
  },
  {
    icon: GraduationCap,
    value: "625",
    label: "Students currently supported in their education"
  },
  {
    icon: Stethoscope,
    value: "567",
    label: "People who have received free medical treatment"
  },
  {
    icon: Briefcase,
    value: "70",
    label: "People experiencing homelessness supported through employment creation"
  }
];

export default function TransformingLives() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Work Has Achieved
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our work supports children and older people through education,
            healthcare, food, clothing, and livelihood opportunities.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 mb-4">
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
