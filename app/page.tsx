import AboutSection from "@/components/AboutSection";
import SocialsSection from "@/components/SocialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base-100">
      <AboutSection />
      <SocialsSection />
    </main>
  );
}
