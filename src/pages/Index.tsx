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
import KeyLinks from "../components/KeyLinks"
import Globe from "../components/Globe"
import LiveStats from "../components/LiveStats"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Globe Section */}
      <div className="relative bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative">
              {/* Animated Starfield Background */}
              <div className="absolute inset-0 dot-pattern opacity-50 animate-[pulse_4s_ease-in-out_infinite]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Globe />
                <div className="flex items-center justify-center relative">
                  <div className="absolute inset-0">
                    {/* Additional animated stars */}
                    {[...Array(50)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          opacity: Math.random() * 0.7 + 0.3,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <LiveStats />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />
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

      <FAQ />
      <KeyLinks />
      <Footer />
    </div>
  )
}

export default Index