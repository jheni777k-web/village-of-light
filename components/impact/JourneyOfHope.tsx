import { Calendar, CheckCircle } from "lucide-react";

const milestones = [
  {
    year: "2012",
    title: "VLCE Founded",
    description:
      "Village of Light for Children and the Elderly (VLCE) began operating on August 1, 2012, to assist children and older people living on the streets and in the vicinity of churches."
  },
  {
    year: "2013",
    title: "Holiday Assistance",
    description:
      "VLCE provided holiday assistance to vulnerable families, slaughtering 6 bulls for Christmas and 7 bulls for Easter and providing oil and meat to a total of 460 families."
  },
  {
    year: "2014",
    title: "Bego Maed Sponsorship Begins",
    description:
      "VLCE launched the Bego Maed Sponsorship Program to provide ongoing support to children and older people living in difficult circumstances."
  },
  {
    year: "2022",
    title: "Cash & Food Assistance",
    description:
      "VLCE provided 270 individuals with cash assistance of 800 Ethiopian Birr and one liter of oil each."
  },
  {
    year: "2023",
    title: "Holiday Support",
    description:
      "VLCE provided Christmas support to 50 people at a cost of 2,000 Ethiopian Birr per person. For Easter, financial assistance was provided to 390 individuals."
  }
];

export default function JourneyOfHope() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-gold/10 mb-4 mx-auto">
            <Calendar size={32} className="text-accent-gold" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Key milestones in VLCE&apos;s work supporting children and older
            people since 2012.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-50 p-6 rounded-2xl">

                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle size={20} className="text-primary" />

                      <span className="text-2xl font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed">
                      {milestone.description}
                    </p>

                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}