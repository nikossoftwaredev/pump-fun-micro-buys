import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import SocialsSection from "@/components/SocialsSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-2 bg-base-100 gap-16">
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <StatsSection />
      <SocialsSection />
    </main>
  );
}
