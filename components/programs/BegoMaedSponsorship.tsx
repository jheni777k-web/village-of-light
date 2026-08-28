import { Heart, Users, Calendar, Banknote } from "lucide-react";

export default function BegoMaedSponsorship() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-gold/10">
              <Heart size={32} className="text-accent-gold" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bego Maed Sponsorship Project
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              The Bego Maed Sponsorship Project was launched in June 2014 to
              provide ongoing support to children and older people living in
              difficult circumstances.
            </p>
          </div>

          {/* Key Information */}
          <div className="border-t border-gray-200 mt-10 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

              <div>
                <div className="flex justify-center mb-3">
                  <Users size={28} className="text-primary" />
                </div>

                <div className="text-3xl font-bold text-foreground mb-1">
                  51
                </div>

                <p className="text-foreground/70">
                  Children and seniors currently receiving permanent support
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <Calendar size={28} className="text-primary" />
                </div>

                <div className="text-3xl font-bold text-foreground mb-1">
                  2014
                </div>

                <p className="text-foreground/70">
                  Sponsorship project launched
                </p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <Banknote size={28} className="text-primary" />
                </div>

                <div className="text-3xl font-bold text-foreground mb-1">
                  1,500 ETB
                </div>

                <p className="text-foreground/70">
                  Monthly support provided to each beneficiary
                </p>
              </div>

            </div>
          </div>

          {/* Eligibility */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Who the Project Supports
            </h3>

            <div className="space-y-4 text-foreground/70 leading-relaxed max-w-3xl mx-auto">

              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  Elderly people aged 60 years and above who have no caregivers
                  or family support.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  Individuals aged 55 years and above who are unable to work
                  because of health-related conditions.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p>
                  Children and seniors who require ongoing assistance to meet
                  their basic needs.
                </p>
              </div>

            </div>
          </div>

          {/* Current Beneficiaries */}
          <div className="mt-12 bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Current Support
            </h3>

            <p className="text-foreground/70 leading-relaxed">
              VLCE currently provides permanent support to 33 children and
              18 seniors, for a total of 51 beneficiaries. Each beneficiary
              receives 1,500 Ethiopian Birr per month to help meet basic needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}