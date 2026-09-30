import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import PainPoints from "@/components/PainPoints";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#042717] text-white">
      <Hero />
      <LogoMarquee />
      <PainPoints />
    </main>
  );
}
