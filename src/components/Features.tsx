const features = [
  {
    number: "1",
    title: "Like The Real Thing",
    description: "Our wind tunnel simulates the rush of true freefall by drawing air through a central flight chamber through a large propeller at the top."
  },
  {
    number: "2",
    title: "Expert Instructors",
    description: "Our highly-trained tunnel instructors provide you with a full pre-flight briefing and are always available to give you the assurance you need to focus on maximizing the enjoyment from your time with us."
  },
  {
    number: "3",
    title: "Used by The Pros",
    description: "Not only is our state-of-the-art facility used by world-class parachute teams like the Red Devils to perfect their moves, but even James Bond himself, Daniel Craig, has trained in our wind tunnel to prepare for the role."
  },
  {
    number: "4",
    title: "Adventure Awaits...",
    description: "After your skydive you will also have the opportunity to try a host of other adrenaline-fuelled activities - from riding the waves of our indoor surf machine, to testing your nerve with our famous vertigo jump!"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 dot-pattern">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Designed for Excellence
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-highlight flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-primary">{feature.number}</span>
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