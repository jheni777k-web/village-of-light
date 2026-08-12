import Image from "next/image";
import { HeartHandshake, Users, Home, Shield } from "lucide-react";

const supportServices = [
  {
    icon: Home,
    title: "Shelter Support",
    description: "Safe housing and emergency shelter for families in need"
  },
  {
    icon: Shield,
    title: "Protection Services",
    description: "Advocacy and support for vulnerable populations"
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Fostering strong community networks and support systems"
  }
];

export default function SocialSupport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/photo_11_2026-08-06_20-40-36.jpg"
              alt="Social Support & Agape"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
              <HeartHandshake size={32} className="text-secondary" />
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Social Support & Agape
            </h2>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our social support programs provide a safety net for the most vulnerable 
              members of society. Through compassionate care and community-based initiatives, 
              we ensure that no one is left behind and that everyone has access to the support 
              they need to live with dignity and hope.
            </p>
            
            {/* Services */}
            <div className="space-y-4">
              {supportServices.map((service, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
