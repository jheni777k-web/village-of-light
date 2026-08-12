import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
      
      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <MapPin size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">Address</h3>
          <p className="text-foreground/70 leading-relaxed">
            Village of Light Community Center, Near St. Mary&apos;s Church, 
            Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
      
      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Phone size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
          <p className="text-foreground/70">
            +251 11 123 4567
          </p>
          <p className="text-foreground/70">
            +251 91 234 5678
          </p>
        </div>
      </div>
      
      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Mail size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">Email</h3>
          <p className="text-foreground/70">
            contact@villageoflight.org
          </p>
        </div>
      </div>
      
      {/* Image */}
      <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
        <Image
          src="/photo_4_2026-08-06_20-40-36.jpg"
          alt="Community Gathering"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
