import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function WhyWeDoIt() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/photo_2_2026-08-06_20-40-36.jpg"
              alt="Why We Do It"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
              <Sparkles size={32} className="text-secondary" />
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why We Do It
            </h2>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe that everyone deserves access to basic necessities, education, 
              and opportunities to thrive. Our work is driven by the conviction that 
              sustainable change is possible when communities are empowered with the 
              right resources and support.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">Education is a fundamental right</strong> - 
                  We work to ensure every child has access to quality education
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">Healthcare should be accessible</strong> - 
                  We bridge gaps in healthcare access for underserved communities
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">Economic empowerment creates change</strong> - 
                  We provide skills training and resources for self-sufficiency
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-foreground/80">
                  <strong className="text-foreground">Sustainability matters</strong> - 
                  Our programs are designed for long-term impact and community ownership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
