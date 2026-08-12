import Navbar from "@/components/home/Navbar";
import ImpactHero from "@/components/impact/ImpactHero";
import TransformingLives from "@/components/impact/TransformingLives";
import DirectAid from "@/components/impact/DirectAid";
import JourneyOfHope from "@/components/impact/JourneyOfHope";
import BePartOfStory from "@/components/impact/BePartOfStory";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Impact",
  description:
    "See the impact of Yebirhan Lijoch Media through milestones, stories of hope, and community transformation.",
  openGraph: {
    title: "Impact | Yebirhan Lijoch Media",
    description:
      "See the impact of Yebirhan Lijoch Media through milestones, stories of hope, and community transformation.",
  },
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ImpactHero />
      <TransformingLives />
      <DirectAid />
      <JourneyOfHope />
      <BePartOfStory />
      <Footer />
    </div>
  );
}
