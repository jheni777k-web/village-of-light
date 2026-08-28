import Image from "next/image";
import {
  HeartHandshake,
  UtensilsCrossed,
  Shirt,
  Gift,
} from "lucide-react";

const supportServices = [
  {
    icon: UtensilsCrossed,
    title: "Agape — Table of Love",
    description:
      "Through the Agape feeding program, elderly people receive one free meal each day at the organization.",
  },
  {
    icon: Shirt,
    title: "Clothing Assistance",
    description:
      "VLCE provides clothing to children and elderly people who need essential support.",
  },
  {
    icon: Gift,
    title: "Holiday Support",
    description:
      "Special assistance helps beneficiaries celebrate important holidays with their families.",
  },
];

export default function SocialSupport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden order-2 lg:order-1">
            <Image
              src="/photo_11_2026-08-06_20-40-36.jpg"
              alt="VLCE social support activities"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10">
              <HeartHandshake size={32} className="text-secondary" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Social Support
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Children and elderly people often need daily support with food,
              clothing, and other basic necessities. VLCE provides practical
              assistance to help vulnerable people meet these needs and live
              with dignity.
            </p>

            {/* Services */}
            <div className="space-y-6 pt-2">
              {supportServices.map((service, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 bg-primary/10 flex items-center justify-center">
                    <service.icon
                      size={22}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>

                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Numbers */}
            <div className="border-t border-gray-200 pt-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">

              <div>
                <div className="text-2xl font-bold text-primary">
                  4,200
                </div>
                <p className="text-sm text-foreground/70">
                  People provided with clothing
                </p>
              </div>

              <div>
                <div className="text-2xl font-bold text-primary">
                  3,600+
                </div>
                <p className="text-sm text-foreground/70">
                  People receiving holiday support
                </p>
              </div>

              <div>
                <div className="text-2xl font-bold text-primary">
                  6,000+
                </div>
                <p className="text-sm text-foreground/70">
                  People served meals on various occasions
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}