import { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const TwitterEmbed = () => {
  useEffect(() => {
    // Load Twitter widgets script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ScrollArea className="w-full max-w-[550px] h-[600px] mx-auto">
      {/* First tweet */}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          A quick intro to <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a>. <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> is the token emitted by the <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a> Genesis NFTs.<br /><br />Its holders will receive 25.5% (🤯) of the supply of <a href="https://twitter.com/search?q=%24MYR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MYR</a>, the token launched by <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a>, one of the hottest web3 products of 2025.<br /><br />But why is it still sitting at $8.3m mc? Let's find out👇 <a href="https://t.co/ix0xLWfpT5">pic.twitter.com/ix0xLWfpT5</a>
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470772023734532?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Second tweet in thread */}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          First, let&#39;s understand what <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a> is.<br /><br />Myriad is a prediction market protocol that allows users to bet on any outcome.<br /><br />Think of it as a decentralized betting platform where users can create markets for anything, from sports to crypto prices to elections.
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470773374505332?ref_src=twsrc%5Etfw">January 4, 2024</a>
      </blockquote>

      {/* Third tweet in thread */}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          The protocol has been in development for 2 years and is launching in Q1 2024.<br /><br />It&#39;s backed by some of the biggest names in crypto:<br /><br />• <a href="https://twitter.com/paradigm?ref_src=twsrc%5Etfw">@paradigm</a><br />• <a href="https://twitter.com/RobertLeshner?ref_src=twsrc%5Etfw">@RobertLeshner</a><br />• <a href="https://twitter.com/QwQiao?ref_src=twsrc%5Etfw">@QwQiao</a><br />• <a href="https://twitter.com/santiagoroel?ref_src=twsrc%5Etfw">@santiagoroel</a><br />• <a href="https://twitter.com/AndreCronjeTech?ref_src=twsrc%5Etfw">@AndreCronjeTech</a><br /><br />And many others.
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470774494736742?ref_src=twsrc%5Etfw">January 4, 2024</a>
      </blockquote>

      {/* Fourth tweet in thread */}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          The team has been extremely active, shipping:<br /><br />• A testnet with 100k+ trades<br />• Multiple UI iterations<br />• Regular community updates<br /><br />And they&#39;re about to launch mainnet with:<br /><br />• Optimism integration<br />• Orderbook + AMM<br />• Advanced market creation<br />• Mobile app<br /><br />All in Q1 2024.
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470775627374066?ref_src=twsrc%5Etfw">January 4, 2024</a>
      </blockquote>
    </ScrollArea>
  );
};

export default TwitterEmbed;