import Nav from "@/src/components/Nav";
import Hero from "@/src/components/Hero";
import MarqueeBar from "@/src/components/MarqueeBar";
import ProductGrid from "@/src/components/ProductGrid";
import Benefits from "@/src/components/Benefits";
import KitHighlight from "@/src/components/KitHighlight";
import HowItWorks from "@/src/components/HowItWorks";
import Location from "@/src/components/Location";
import Testimonials from "@/src/components/Testimonials";
import Opportunity from "@/src/components/Opportunity";
import FAQ from "@/src/components/FAQ";
import Footer from "@/src/components/Footer";
import FloatingWhatsApp from "@/src/components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-accent-green/30">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none noise z-50 opacity-[0.04]" />
      
      <Nav />
      <main>
        <Hero />
        <MarqueeBar />
        <ProductGrid />
        <Benefits />
        <KitHighlight />
        <HowItWorks />
        <Location />
        <Testimonials />
        <Opportunity />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

