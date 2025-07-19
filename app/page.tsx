import AboutSection from "@/components/AboutSection";
import BonkLaunchSection from "@/components/BonkLaunchSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ReferralsSection from "@/components/ReferralsSection";
import SocialsSection from "@/components/SocialsSection";
import StatsSection from "@/components/StatsSection";
import TokenSection from "@/components/TokenSection";

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-2 gap-16 max-w-xl">
      <HeroSection />
      <BonkLaunchSection />
      <AboutSection />
      <HowItWorks />
      <StatsSection />
      <TokenSection />
      <ReferralsSection />
      <SocialsSection />
    </main>
  );
}
