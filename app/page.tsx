import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import OurImpact from "@/components/home/OurImpact";
import CoreProgram from "@/components/home/CoreProgram";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Home",
  description:
    "Yebirhan Lijoch Media inspires action with mission-driven storytelling and community impact programs.",
  openGraph: {
    title: "Home | Yebirhan Lijoch Media",
    description:
      "Yebirhan Lijoch Media inspires action with mission-driven storytelling and community impact programs.",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <OurImpact />
      <CoreProgram />
      <Footer />
    </div>
  );
}
