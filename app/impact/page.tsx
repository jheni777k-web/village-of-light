import Navbar from "@/components/home/Navbar";
import ImpactHero from "@/components/impact/ImpactHero";
import TransformingLives from "@/components/impact/TransformingLives";
import DirectAid from "@/components/impact/DirectAid";
import JourneyOfHope from "@/components/impact/JourneyOfHope";
import BePartOfStory from "@/components/impact/BePartOfStory";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Our Impact | Village of Light for Children and the Elderly",
  description:
    "Learn about the work of Village of Light for Children and the Elderly (VLCE) in education, healthcare, social support, and livelihood development.",
  openGraph: {
    title: "Our Impact | Village of Light for Children and the Elderly",
    description:
      "Learn about VLCE's work supporting children and older people through education, healthcare, social support, and livelihood opportunities.",
  },
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <ImpactHero />
        <TransformingLives />
        <DirectAid />
        <JourneyOfHope />
        <BePartOfStory />
      </main>

      <Footer />
    </div>
  );
}