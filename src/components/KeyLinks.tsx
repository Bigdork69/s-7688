import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

const KeyLinks = () => {
  const links = [
    {
      title: "Myriad Market",
      url: "https://beta.myriad.markets/",
      image: "/lovable-uploads/d416a15c-f682-4df2-b33b-7ae421506006.png"
    },
    {
      title: "Myriad Discord",
      url: "https://discord.gg/myriadmarkets",
      image: "/lovable-uploads/f4ef25f5-9409-408d-b307-0740f382f209.png"
    },
    {
      title: "Rug Claim Site",
      url: "https://claim.rug.fm/",
    },
    {
      title: "Follow Myriad on X",
      url: "https://x.com/MyriadMarkets",
    },
    {
      title: "Follow Farokh on X",
      url: "https://x.com/farokh",
    },
    {
      title: "Follow Tyler Durdeth on X",
      url: "https://x.com/tylerdurdeth",
    },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Important Links</h2>
            <p className="text-lg text-gray-400">
              Dive deeper into Myriad below
            </p>
          </div>

          <div className="space-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:scale-[1.02]"
              >
                <Card className="p-4 flex items-center justify-between bg-gray-900 hover:bg-gray-800 border-gray-700">
                  <div className="flex items-center gap-4">
                    {link.image && (
                      <img 
                        src={link.image} 
                        alt={link.title}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                    <span className="text-lg font-medium text-white">
                      {link.title}
                    </span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLinks;