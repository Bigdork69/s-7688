import { useEffect } from 'react';

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
    <div className="w-full max-w-[550px] mx-auto">
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          A quick intro to <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a>. <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> is the token emitted by the <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a> Genesis NFTs.<br /><br />Its holders will receive 25.5% (🤯) of the supply of <a href="https://twitter.com/search?q=%24MYR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MYR</a>, the token launched by <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a>, one of the hottest web3 products of 2025.<br /><br />But why is it still sitting at $8.3m mc? Let's find out👇 <a href="https://t.co/ix0xLWfpT5">pic.twitter.com/ix0xLWfpT5</a>
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470772023734532?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>
    </div>
  );
};

export default TwitterEmbed;