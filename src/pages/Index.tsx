import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LiveFeed from "../components/LiveFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <div className="py-12 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <img 
                src="/lovable-uploads/37555d62-f5de-49e1-a7d7-5c8af4a2d149.png" 
                alt="Decorative robot illustration" 
                className="w-full max-w-xl mx-auto mb-8"
              />
              <FAQ />
            </div>
            <div>
              <LiveFeed />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;