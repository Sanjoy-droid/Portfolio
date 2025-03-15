import Footer from "@/components/Footer";
import ContactSection from "../../components/ContactSection";

export default function Contact() {
  return (
    <div className="bg-slate-900 min-h-screen pt-16 pb-12">
      <div className="container mx-auto px-4">
        {/* <ContactSection /> */}
        <div className="max-w-3xl mx-auto">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
