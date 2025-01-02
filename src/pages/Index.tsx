import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
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
          <div className="w-full">
            <LiveFeed />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;