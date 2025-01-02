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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <img 
                src="/lovable-uploads/37555d62-f5de-49e1-a7d7-5c8af4a2d149.png" 
                alt="Decorative robot illustration" 
                className="w-full max-w-md mx-auto animate-float"
              />
              <FAQ />
            </div>
            <div className="flex items-center justify-center">
              <LiveFeed />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl shadow-xl p-8 transform rotate-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-secondary mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>October 30th, 2024</span>
                    <span>12:00 AM</span>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                    <h3 className="font-medium text-primary">Market Analysis Report</h3>
                    <p className="text-sm text-secondary mt-1">Key insights from today's market movements and trends...</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                    <h3 className="font-medium text-primary">Trading Strategy Update</h3>
                    <p className="text-sm text-secondary mt-1">Review of current positions and upcoming opportunities...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-primary">Centralize your trading insights</h2>
              <p className="text-xl text-secondary">
                Collect market analysis, trading strategies, and real-time data in one place. Lightning-fast access to your research when you need it most.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-highlight/20">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Real-time synchronization</h3>
                    <p className="text-secondary mt-1">Stay updated across all your devices with instant sync capabilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-highlight/20">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">Secure and reliable</h3>
                    <p className="text-secondary mt-1">Enterprise-grade security with end-to-end encryption for your data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;