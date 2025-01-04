import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import LiveFeed from "../components/LiveFeed";
import FAQ from "../components/FAQ";
import QuoteSection from "../components/QuoteSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <QuoteSection />

      <div className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          {/* Mobile image - shown only on small screens */}
          <div className="block md:hidden mb-8 w-[70%] mx-auto">
            <img 
              src="/lovable-uploads/cce4c619-6b67-45ed-8d17-a3301100eacd.png"
              alt="Robot circuit board illustration"
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl shadow-xl p-8 transform rotate-1">
              <LiveFeed />
            </div>

            {/* Desktop/tablet image - hidden on mobile */}
            <div className="hidden md:block space-y-8">
              <img 
                src="/lovable-uploads/cce4c619-6b67-45ed-8d17-a3301100eacd.png"
                alt="Robot circuit board illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;