import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import NFTPriceFeed from "../components/NFTPriceFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <NFTPriceFeed />
      </div>
      <Features />
      <Stats />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;