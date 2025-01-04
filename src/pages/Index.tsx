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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <QuoteSection />

      {/* Combined Live Feed and Twitter Thread Section */}
      <div className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            What is the current RugGenesis Floor Price?
          </h2>
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
      <Footer />
    </div>
  )
}

export default Index