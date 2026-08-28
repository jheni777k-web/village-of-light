import Image from "next/image";
import { HeartPulse, BadgeCheck, CheckCircle } from "lucide-react";

const healthServices = [
  "Free medical treatment",
  "Ear, eye & dental care for elderly people",
  "Treatment for children affected by malnutrition and poor hygiene",
  "Support for elderly people seeking health insurance"
];

export default function ComprehensiveHealth() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/photo_8_2026-08-06_20-40-36.jpg"
              alt="VLCE Healthcare Program"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
              <BadgeCheck size={20} />
              <span>Core Initiative</span>
            </div>

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10">
              <HeartPulse size={28} className="text-secondary" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Healthcare
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Healthcare is one of the primary areas of focus for the Village
              of Light for Children and the Elderly. VLCE works in
              collaboration with various institutions to help children and
              elderly people access the healthcare they need.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              For elderly people, the organization provides free medical
              services, particularly for conditions commonly affecting older
              adults, including ear, eye, and dental care. For children, VLCE
              helps provide treatment for illnesses related to malnutrition and
              poor hygiene.
            </p>

            {/* Services List */}
            <div className="space-y-3">
              {healthServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="text-foreground/80">{service}</span>
                </div>
              ))}
            </div>

            {/* Impact Statistic */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-primary">567</div>
              <p className="text-foreground/70 mt-1">
                people have received free medical treatment to date
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}