import { memo } from 'react';

const features = [
  {
    number: "1",
    title: "Maximize Your Points",
    description: "Don't hold back—use all your Myriad points on predictions! High transaction volumes are key to attracting T1 CEXs and market makers, which will drive $MYR's value. The more active you are, the better your farming rewards and the higher the launch valuation. Go full degen!"
  },
  {
    number: "2",
    title: "Referral Program Incoming",
    description: "Get ready to earn big with the upcoming referral program. Bring in friends, family, colleagues—anyone who can join before March—and rack up those points. It'll pay off massively."
  },
  {
    number: "3",
    title: "Early Bird Advantage",
    description: "Jump into markets early for the best odds. New markets are less efficient at first, giving you an edge. A notification feature is coming soon to keep you updated on fresh opportunities!"
  },
  {
    number: "4",
    title: "Not Just Another Copycat",
    description: "Myriad isn't trying to mimic Polymarket—it's a completely different product with a unique approach. The foundation was built long before Polymarket gained traction, and the future shines bright because of that early groundwork."
  }
] as const;

const Features = memo(() => {
  return (
    <>
      <section id="features" className="py-12 sm:py-24 px-4 sm:px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
            The Alpha According to{" "}
            <a 
              href="https://x.com/tylerdurdeth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-300 transition-colors"
            >
              @tylerdurdeth
            </a>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="glass p-6 sm:p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{feature.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="flex-1">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 text-left text-primary">
                Run the<br />numboooors.
              </h2>
            </div>
            <div className="flex-1 w-full">
              <div className="glass p-6 sm:p-12 rounded-2xl rotate-2 hover:rotate-0 transition-all duration-300">
                <img 
                  src="/lovable-uploads/88c556c6-467a-4724-9b1c-bc49e67fd4ad.png" 
                  alt="Myriad maths notebook" 
                  className="w-full h-auto max-w-[600px] mx-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Features.displayName = 'Features';

export default Features;