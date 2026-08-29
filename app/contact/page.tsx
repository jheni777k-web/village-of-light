import Navbar from "@/components/home/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Yebirhan Lijoch Media to learn more about our work or support our mission.",
  openGraph: {
    title: "Contact | Yebirhan Lijoch Media",
    description:
      "Get in touch with Yebirhan Lijoch Media to learn more about our work or support our mission.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ContactHero />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </div>
  );
}