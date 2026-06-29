import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Timeline } from "@/components/Timeline";
import { Founder } from "@/components/Founder";
import { PerformanceVideos } from "@/components/PerformanceVideos";
import { Services } from "@/components/Services";
import { Orchestra } from "@/components/Orchestra";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { OrchestraDoll } from "@/components/ui/OrchestraDoll";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <main className="pb-24 sm:pb-0">
      <Navbar />
      <Hero />
      <Story />
      <Timeline />
      <Founder />
      <PerformanceVideos />
      <Services />
      <Orchestra />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
      <WhatsAppFab />
      <OrchestraDoll />
    </main>
  );
}
