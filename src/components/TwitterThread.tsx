import { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const TwitterThread = () => {
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

  const tweets = [
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🧵Thread <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a> x <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a><br><br>My DMs are full of people asking what is going on with Myriad Market and the Rug Radio Genesis NFTs, <a href="https://twitter.com/search?q=%24RUG&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$RUG</a>, <a href="https://twitter.com/search?q=%24MYR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MYR</a>, etc...<br><br>All details below 👇</p>&mdash; ※ Vince (@vincevanbtc) <a href="https://twitter.com/vincevanbtc/status/1874942675990004006?ref_src=twsrc%5Etfw">January 2, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Many are touting <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a> as the next big thing in 2025.<br><br>The emerging prediction markets platform is quickly capturing mindshare, with its gamified approach to predictions, embrace of the web3 and integration into news and social media.<br><br>But really, why such a big deal?👇 <a href="https://t.co/RBVWItrDYR">pic.twitter.com/RBVWItrDYR</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875887464684159442?ref_src=twsrc%5Etfw">January 5, 2025</a></blockquote>`
  ];

  return (
    <div>
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">What People Are Saying</h3>
        <p className="text-sm text-white">
          Latest threads from <a href="https://twitter.com/tylerdurdeth" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@tylerdurdeth</a> and <a href="https://twitter.com/vincevanbtc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@vincevanbtc</a>
        </p>
      </div>
      
      <ScrollArea className="h-[500px] w-full rounded-md border p-4 bg-white/80">
        <div className="space-y-4">
          {tweets.map((tweet, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: tweet }} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TwitterThread;