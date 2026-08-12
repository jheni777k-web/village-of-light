import Image from "next/image";
import { Users, Globe, HeartHandshake, Award } from "lucide-react";

const leadership = [
  {
    name: "Dr. Sarah Johnson",
    role: "Executive Director",
    image: "/photo_3_2026-08-06_20-40-36.jpg",
  },
  {
    name: "Michael Chen",
    role: "Program Director",
    image: "/photo_4_2026-08-06_20-40-36.jpg",
  },
  {
    name: "Aisha Patel",
    role: "Operations Lead",
    image: "/photo_5_2026-08-06_20-40-36.jpg",
  },
  {
    name: "David Williams",
    role: "Community Outreach",
    image: "/photo_6_2026-08-06_20-40-36.jpg",
  },
];

const communityStats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Community Members",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
  },
  {
    icon: HeartHandshake,
    value: "500+",
    label: "Local Partners",
  },
  {
    icon: Award,
    value: "15+",
    label: "Awards Won",
  },
];

export default function CommunityLeadership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Community & Leadership
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Meet the dedicated team driving our mission and the communities
            we&apos;re proud to serve around the world.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground">
                  {person.name}
                </h3>
                <p className="text-primary font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Community Impact
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto">
                  <stat.icon size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
