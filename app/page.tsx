import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import CoreProgram from "@/components/home/CoreProgram";
import OurImpact from "@/components/home/OurImpact";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Village of Light for Children and the Elderly",
  description:
    "Village of Light for Children and the Elderly (VLCE) is a national non-profit humanitarian organization supporting vulnerable children and elderly people through education, healthcare, social support, sponsorship, and livelihood programs.",
  openGraph: {
    title: "Village of Light for Children and the Elderly",
    description:
      "Supporting vulnerable children and elderly people through education, healthcare, social support, sponsorship, and livelihood programs.",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <CoreProgram />
        <OurImpact />
      </main>

      <Footer />
    </div>
  );
}