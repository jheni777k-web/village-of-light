import { Heart, HandHeart } from "lucide-react";

export default function BePartOfStory() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm">
            <Heart size={40} className="text-background" />
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-background">
            Be Part of the Story
          </h2>
          
          {/* Description */}
          <p className="text-xl text-background/90 leading-relaxed">
            Join our network of 3 Founders, 9 Board Members, 600 Members, and 50 Ambassadors. 
            Together, we can continue to bring light to those who need it most.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-background">3</div>
              <div className="text-background/80 text-sm">Founders</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-background">9</div>
              <div className="text-background/80 text-sm">Board Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-background">600</div>
              <div className="text-background/80 text-sm">Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-3xl font-bold text-background">50</div>
              <div className="text-background/80 text-sm">Ambassadors</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-background hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              <Heart size={20} />
              Donate Now
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-background border-2 border-background/30 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
              <HandHeart size={20} />
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
