import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { InsightsSection } from "@/components/insights-section";
import { LeaderSection } from "@/components/leader-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ServicesSectorsSection } from "@/components/services-sectors-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ServicesSectorsSection />
        <LeaderSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
