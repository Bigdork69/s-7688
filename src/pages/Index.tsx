import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import LiveFeed from "../components/LiveFeed";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Stats />

      <div className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl shadow-xl p-8 transform rotate-1">
              <LiveFeed />
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

      <div className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-secondary">
                If you can't find an answer that you're looking for, feel free to drop us a line.
              </p>
              <div className="flex gap-4 justify-center mt-6">
                <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  About the company
                </button>
                <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Contact support
                </button>
                <button className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Visit help center
                </button>
              </div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium">Who uses our platform?</AccordionTrigger>
                <AccordionContent>
                  Anyone with an audience. Youtubers, musicians, podcasters, writers, programmers, nonprofits, cosplayers, you name it. More than a million creators and their supporters are on our platform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium">How do I get paid?</AccordionTrigger>
                <AccordionContent>
                  We offer multiple payout options including direct bank transfer, PayPal, and cryptocurrency. Payments are processed securely and automatically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium">How can my audience pay?</AccordionTrigger>
                <AccordionContent>
                  Your audience can pay using credit cards, debit cards, PayPal, and various cryptocurrency options. We support multiple payment methods to make it easy for your supporters.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium">Is there a fee to use the platform?</AccordionTrigger>
                <AccordionContent>
                  We take a small percentage of transactions to cover operating costs and continue improving the platform. The exact fee depends on your subscription tier.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium">Is the platform safe and reliable?</AccordionTrigger>
                <AccordionContent>
                  Yes, we use industry-standard security measures and encryption to protect all transactions and user data. We're trusted by millions of users worldwide.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;