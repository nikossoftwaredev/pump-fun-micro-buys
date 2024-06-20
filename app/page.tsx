import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ReferralsSection from "@/components/ReferralsSection";
import SocialsSection from "@/components/SocialsSection";
import StatsSection from "@/components/StatsSection";
import TokenSection from "@/components/TokenSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-2 bg-base-100 gap-16 max-w-xl">
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <StatsSection />
      <TokenSection />
      <ReferralsSection />
      <SocialsSection />
    </main>
  );
}
