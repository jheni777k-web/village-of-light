import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyWeDoIt from "@/components/about/WhyWeDoIt";
import CommunityLeadership from "@/components/about/CommunityLeadership";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "About",
  description:
    "Learn about Village of Light's mission, leadership, and impact in local communities.",
  openGraph: {
    title: "About | Yebirhan Lijoch Media",
    description:
      "Learn about Village of Light's mission, leadership, and impact in local communities.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <WhyWeDoIt />
      <CommunityLeadership />
      <Footer />
    </div>
  );
}
