import { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const TwitterThreadsGrid = () => {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const threadsGrid = [
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🧵Thread <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a> x <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a><br><br>My DMs are full of people asking what is going on with Myriad Market and the Rug Radio Genesis NFTs, <a href="https://twitter.com/search?q=%24RUG&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$RUG</a>, <a href="https://twitter.com/search?q=%24MYR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MYR</a>, etc...<br><br>All details below 👇</p>&mdash; ※ Vince (@vincevanbtc) <a href="https://twitter.com/vincevanbtc/status/1874942675990004006?ref_src=twsrc%5Etfw">January 2, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">MYRIAD Points are the foundation of the MYRIAD ecosystem.<br><br>Here&#39;s everything you need to know about MYRIAD Points 🧵 <a href="https://t.co/Hs8Gy7Iqrm">pic.twitter.com/Hs8Gy7Iqrm</a></p>&mdash; MYRIAD (@MyriadMarkets) <a href="https://twitter.com/MyriadMarkets/status/1747664131664339087?ref_src=twsrc%5Etfw">January 17, 2024</a></blockquote>`
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What People Are Saying</h2>
          <p className="text-lg text-gray-300">
            Join the conversation about MYRIAD
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {threadsGrid.map((thread, index) => (
            <ScrollArea 
              key={index} 
              className="h-[500px] md:h-[500px] w-full rounded-md border p-4 bg-white/80 aspect-[4/3] md:aspect-auto"
            >
              <div dangerouslySetInnerHTML={{ __html: thread }} />
            </ScrollArea>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TwitterThreadsGrid;