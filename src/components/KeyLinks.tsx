import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

const KeyLinks = () => {
  const links = [
    {
      title: "OLIPOP Is Now the Most Popular Root Beer in the US",
      image: "/lovable-uploads/ffc70825-468a-4b58-a471-3516b9ccb59f.png",
      url: "https://www.drinkolipop.com/blog/olipop-most-popular-root-beer",
    },
    {
      title: "Drink Companies with Celebrity Investors",
      image: "/lovable-uploads/ffc70825-468a-4b58-a471-3516b9ccb59f.png",
      url: "https://www.drinkolipop.com/blog/celebrity-investors",
    },
    {
      title: "We Talked All Things Fitness and Wellness With Camila Cabello",
      image: "/lovable-uploads/ffc70825-468a-4b58-a471-3516b9ccb59f.png",
      url: "https://www.drinkolipop.com/blog/camila-cabello-interview",
    },
    {
      title: "Shop OLIPOP 🥤",
      url: "https://www.drinkolipop.com/shop",
    },
    {
      title: "Shop us at Walmart 🛒",
      url: "https://www.walmart.com/browse/olipop",
    },
    {
      title: "Follow us on TikTok 📹",
      url: "https://www.tiktok.com/@drinkolipop",
    },
    {
      title: "Get cash back for in store purchases 🤑",
      url: "https://www.drinkolipop.com/rewards",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Key Links</h2>
            <p className="text-lg text-secondary">
              Discover more about our products and community
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
                <Card className="p-4 flex items-center justify-between bg-white hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    {link.image && (
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={link.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <span className="text-lg font-medium text-primary">
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