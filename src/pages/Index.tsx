import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Stats from "../components/Stats"
import Footer from "../components/Footer"
import LiveFeed from "../components/LiveFeed"
import FAQ from "../components/FAQ"
import QuoteSection from "../components/QuoteSection"
import ClaimChecker from "../components/ClaimChecker"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <QuoteSection />

      {/* Live Feed Section */}
      <div className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left column - LiveFeed */}
            <div className="glass rounded-3xl shadow-xl p-8 transform rotate-1">
              <LiveFeed />
            </div>
            
            {/* Right column - Robot Image */}
            <div className="glass rounded-3xl shadow-xl p-8 transform -rotate-1">
              <img 
                src="/lovable-uploads/18929310-08cc-42c6-91bd-88d1d858dc44.png"
                alt="Robot circuit design"
                className="w-full h-auto object-contain"
              />
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
      <Footer />
    </div>
  )
}

export default Index