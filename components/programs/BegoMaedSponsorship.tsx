import { Heart, User, Calendar, Gift } from "lucide-react";

const sponsorshipFeatures = [
  {
    icon: User,
    title: "Elder Care",
    description: "Comprehensive care and support for elderly individuals"
  },
  {
    icon: Calendar,
    title: "Monthly Support",
    description: "Regular assistance with food, medicine, and essentials"
  },
  {
    icon: Gift,
    title: "Gift Programs",
    description: "Special occasions and holiday celebrations for elders"
  }
];

export default function BegoMaedSponsorship() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent-gold/10 mx-auto">
            <Heart size={40} className="text-accent-gold" />
          </div>
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bego Maed Sponsorship
          </h2>
          
          {/* Description */}
          <p className="text-lg text-foreground/70 leading-relaxed">
            Our elder sponsorship program connects compassionate individuals with elderly 
            community members who need support. Through this program, sponsors provide 
            monthly assistance that covers essential needs, ensuring that our elders live 
            with dignity and receive the care they deserve.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {sponsorshipFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 mx-auto">
                  <feature.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="bg-primary hover:bg-primary-dark text-background px-8 py-4 rounded-full font-semibold text-lg transition-colors">
            Sponsor an Elder
          </button>
        </div>
      </div>
    </section>
  );
}
