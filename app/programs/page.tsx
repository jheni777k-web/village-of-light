import Navbar from "@/components/home/Navbar";
import ProgramsHero from "@/components/programs/ProgramsHero";
import ComprehensiveHealth from "@/components/programs/ComprehensiveHealth";
import Education from "@/components/programs/Education";
import SocialSupport from "@/components/programs/SocialSupport";
import BegoMaedSponsorship from "@/components/programs/BegoMaedSponsorship";
import BeHumanEmployment from "@/components/programs/BeHumanEmployment";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Programs",
  description:
    "Explore the programs from Yebirhan Lijoch Media focused on education, health, employment, and social care.",
  openGraph: {
    title: "Programs | Yebirhan Lijoch Media",
    description:
      "Explore the programs from Yebirhan Lijoch Media focused on education, health, employment, and social care.",
  },
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ProgramsHero />
      <ComprehensiveHealth />
      <Education />
      <SocialSupport />
      <BegoMaedSponsorship />
      <BeHumanEmployment />
      <Footer />
    </div>
  );
}
