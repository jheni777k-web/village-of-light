import Navbar from "@/components/home/Navbar";
import ProgramsHero from "@/components/programs/ProgramsHero";
import ComprehensiveHealth from "@/components/programs/ComprehensiveHealth";
import Education from "@/components/programs/Education";
import SocialSupport from "@/components/programs/SocialSupport";
import BegoMaedSponsorship from "@/components/programs/BegoMaedSponsorship";
import BeHumanEmployment from "@/components/programs/BeHumanEmployment";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Our Programs | Village of Light for Children and the Elderly",
  description:
    "Explore the programs of Village of Light for Children and the Elderly (VLCE), including healthcare, education, social support, Bego Maed sponsorship, and employment creation.",
  openGraph: {
    title: "Our Programs | Village of Light for Children and the Elderly",
    description:
      "Learn about VLCE's programs supporting children and older people through healthcare, education, social support, sponsorship, and livelihood opportunities.",
  },
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <ProgramsHero />
        <ComprehensiveHealth />
        <Education />
        <SocialSupport />
        <BegoMaedSponsorship />
        <BeHumanEmployment />
      </main>

      <Footer />
    </div>
  );
}