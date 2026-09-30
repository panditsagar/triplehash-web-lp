import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import FourLayers from "@/components/FourLayers";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfter from "@/components/BeforeAfter";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#042717] text-white">
      <Hero />
      <LogoMarquee />
      <PainPoints />
      <Solutions />
      <FourLayers />
      <ProcessSection />
      <BeforeAfter />
      <FaqSection />
    </main>
  );
}

