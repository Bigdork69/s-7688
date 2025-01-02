const stats = [
  { number: "99%", label: "Buy A Rug Genesis" },
  { number: "24/7", label: "Make Predicitions On Myriad" },
  { number: "150+", label: "Buy $RUG on Uniswap" },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">How Can I Get Involved?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
              <div className="text-accent">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;