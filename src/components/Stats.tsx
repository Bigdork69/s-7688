import { Button } from "./ui/button";

const stats = [
  { number: "Buy A Rug Genesis", link: "https://blur.io/eth/collection/ruggenesis-nft", buttonText: "Buy NFT" },
  { number: "Make Predicitions On Myriad", link: "https://beta.myriad.markets/", buttonText: "Myriad" },
  { number: "Buy $RUG on Uniswap", link: "https://app.uniswap.org/explore/tokens/ethereum/0xd2d8d78087d0e43bc4804b6f946674b2ee406b80", buttonText: "Uniswap" },
];

const Stats = () => {
  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">How Can I Get Involved?</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-between h-full">
              <div className="text-2xl md:text-3xl font-bold mb-4">{stat.number}</div>
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-highlight hover:text-primary border-highlight text-highlight transition-colors"
                onClick={() => window.open(stat.link, '_blank')}
              >
                {stat.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;