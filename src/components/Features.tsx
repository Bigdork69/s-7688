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
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          The Alpha According to{" "}
          <a 
            href="https://x.com/tylerdurdeth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-gray-700 transition-colors"
          >
            @tylerdurdeth
          </a>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-white">{feature.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;