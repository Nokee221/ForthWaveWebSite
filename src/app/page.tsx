import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { DigitalMarketing } from "@/components/sections/DigitalMarketing";
import { Hero } from "@/components/sections/Hero";
import { MobileDevelopment } from "@/components/sections/MobileDevelopment";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TeamSection } from "@/components/sections/TeamSection";
import { VideoEditing } from "@/components/sections/VideoEditing";
import { WebDevelopment } from "@/components/sections/WebDevelopment";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <WebDevelopment />
        <MobileDevelopment />
        <VideoEditing />
        <DigitalMarketing />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
