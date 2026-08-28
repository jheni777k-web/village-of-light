import {
  UtensilsCrossed,
  Shirt,
  GraduationCap,
  Stethoscope,
  Briefcase,
} from "lucide-react";

const metrics = [
  {
    icon: UtensilsCrossed,
    value: "6,000+",
    label: "People served meals on various occasions",
  },
  {
    icon: Shirt,
    value: "4,200",
    label: "People provided with clothing assistance",
  },
  {
    icon: GraduationCap,
    value: "2,000+",
    label: "Students who have received educational assistance and learning materials",
  },
  {
    icon: GraduationCap,
    value: "625",
    label: "Students currently supported in their education",
  },
  {
    icon: Stethoscope,
    value: "567",
    label: "People who have received free medical treatment",
  },
  {
    icon: Briefcase,
    value: "70",
    label: "People experiencing homelessness supported through employment creation",
  },
];

export default function CommunityLeadership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Community Impact
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Every number represents a life touched, a hope restored, and a
            community strengthened.
          </p>
        </div>

        {/* Impact Metrics */}
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