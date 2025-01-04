import { WagmiProvider } from 'wagmi'
import { config } from '../lib/web3modal'
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
    <WagmiProvider config={config}>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <QuoteSection />

        <div className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="glass rounded-3xl shadow-xl p-8 transform rotate-1">
                <LiveFeed />
              </div>
              <div className="glass rounded-3xl shadow-xl p-8 transform -rotate-1">
                <ClaimChecker />
              </div>
            </div>
          </div>
        </div>

        <FAQ />
        <Footer />
      </div>
    </WagmiProvider>
  )
}

export default Index