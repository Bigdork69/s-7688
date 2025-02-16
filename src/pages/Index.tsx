
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Stats from "../components/Stats"
import Footer from "../components/Footer"
import LiveFeed from "../components/LiveFeed"
import FAQ from "../components/FAQ"
import QuoteSection from "../components/QuoteSection"
import ClaimChecker from "../components/ClaimChecker"
import TwitterThread from "../components/TwitterThread"
import TwitterThreadsGrid from "../components/TwitterThreadsGrid"
import KeyLinks from "../components/KeyLinks"
import Globe from "../components/Globe"
import LiveStats from "../components/LiveStats"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Globe Section */}
      <div className="relative w-full bg-black py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative min-h-[600px] rounded-3xl">
            {/* Background with stars */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-purple-950/20" />
              
              {/* Animated stars */}
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[2px] h-[2px] bg-white rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: '2.88s'
                  }}
                />
              ))}
            </div>

            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-3xl" />

            {/* Content Layer */}
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[600px]">
                <Globe />
                <div className="flex items-center justify-center h-full">
                  <LiveStats />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      <QuoteSection />
      
      {/* Combined Live Feed and Twitter Thread Section */}
      <div className="py-24 bg-black bg-opacity-95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Feed Column */}
            <div className="glass rounded-3xl shadow-xl p-8 transform rotate-1">
              <LiveFeed />
            </div>
            
            {/* Twitter Thread Column */}
            <div className="glass rounded-3xl shadow-xl p-8 transform -rotate-1">
              <TwitterThread />
            </div>
          </div>
        </div>
      </div>

      {/* Claim Checker Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ClaimChecker />
        </div>
      </div>

      {/* Twitter Threads Grid Section */}
      <TwitterThreadsGrid />

      <FAQ />
      <KeyLinks />
      <Footer />
    </div>
  );
};

export default Index;
