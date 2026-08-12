import { MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto">
          <MessageCircle size={40} className="text-primary" />
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          We&apos;d Love to Hear From You
        </h1>
        
        {/* Description */}
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Have questions, suggestions, or want to get involved? Reach out to us 
          and we&apos;ll get back to you as soon as possible. Together, we can make 
          a difference in our community.
        </p>
      </div>
    </section>
  );
}
