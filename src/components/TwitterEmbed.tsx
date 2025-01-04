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
      {/* Tweet 1 */}
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          A quick intro to <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a>. <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> is the token emitted by the <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a> Genesis NFTs.<br /><br />Its holders will receive 25.5% (🤯) of the supply of <a href="https://twitter.com/search?q=%24MYR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MYR</a>, the token launched by <a href="https://twitter.com/MyriadMarkets?ref_src=twsrc%5Etfw">@MyriadMarkets</a>, one of the hottest web3 products of 2025.<br /><br />But why is it still sitting at $8.3m mc? Let's find out👇 <a href="https://t.co/ix0xLWfpT5">pic.twitter.com/ix0xLWfpT5</a>
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470772023734532?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 2 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> launched in 2022, alongside <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a>. It is emitted by the Genesis NFTs at the following rate:<br /><br />1. Standard: 5 <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> a day<br />2. Scarce 1 &amp; 2: 7 <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> a day<br />3. Rare 1 &amp; 2: 11 <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> a day<br /><br />over 5 years, starting in Jan 2022.<br /><br />Total supply: 255m <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a>
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470780764713038?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 3 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> emitted to date can be claimed by the NFT holder on <a href="https://t.co/bEwJRCTygR">https://t.co/bEwJRCTygR</a><br /><br />If the NFT is sold before getting claimed, the unclaimed <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> travels with the NFT to the new owner.<br /><br />You can check for unclaimed <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> in listed Genesis by inputting its ID # on the same website.
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470788612256184?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 4 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          Why does the supply of <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> on Dexscreener doesn't tie in with the 255m? Many reasons for that:<br />1. There are still 2 years of emission, so 2/5th of the supply is still tied in the NFTs<br />2. Many holders haven't claimed their emitted <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a><br />3. Some <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> was converted to <a href="https://twitter.com/search?q=%24RDAO&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$RDAO</a>
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470792450044079?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 5 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/search?q=%24RDAO&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$RDAO</a> is the governance token that was created alongside <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> in 2022.<br /><br />1 <a href="https://twitter.com/search?q=%24RDAO&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$RDAO</a> = 1800 <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a><br /><br />It gave governance rights for the <a href="https://twitter.com/RugRadio?ref_src=twsrc%5Etfw">@RugRadio</a> DAO, which has now been disbanded.<br /><br />Worthless then? Not quite as it will get its allocation of <a href="https://twitter.com/search?q=%24myr&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$myr</a> - 1.8k <a href="https://twitter.com/search?q=%24myr&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$myr</a> to be exact
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470795256033686?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 6 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          Coming back to <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a>. Why is the contract not verified on DEX? Why so little liquidity? Why no CEX listing?<br /><br />That's the bit very few people know about, and also what makes buying <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> now perhaps the BIGGEST opportunity of early 2025.
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470803489497407?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 7 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          Rug Radio delegated the creation of the token and DAO to Syndicate, back in 22. Syndicate used a proprietary smart contract and refused to make the code verifiable by a third party, thereby dooming <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> to one of the lowest token scores achievable on DEX.
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470806907847163?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 8 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          As a result:<br />1. No CEX would touch it with a barge pole<br />2. No market-makers bothered injecting liquidity in size<br />3. No traction from adventurous token hunters, given its "low trust" score on DEX
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470819431944604?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 9 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          But with the 25.5% allocation of <a href="https://twitter.com/search?q=%24myr&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$myr</a>, <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> holders are given a 2nd chance of making a big bag, thanks to the team's commitment to rewarding their early supporters.<a href="https://twitter.com/search?q=%24myr&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$myr</a> is widely touted to be listed on most T1 CEXs, so liquidity won't be a problem this time around!
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470827791196451?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 10 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          This is where lies the opportunity. If you are armed with all that knowledge, you can accumulate <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> on Uniswap while others stay away out of fear or not knowing where to look.<br /><br />Maths are simple:<a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> current px: $0.11<br />1 <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> = 1 <a href="https://twitter.com/search?q=%24myr&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$myr</a><a href="https://twitter.com/search?q=%24myr&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$myr</a> supply = 1bn<br /><br />So implied mc = $110m 🤯
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470835647148261?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>

      {/* Tweet 11 */}
      <blockquote className="twitter-tweet" data-conversation="none">
        <p lang="en" dir="ltr">
          Liquidity in the Uni pool is poor, so it is likely that any respectable buy size will move the <a href="https://twitter.com/search?q=%24rug&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$rug</a> price materially. But when you are positioning for one of few billion-$ token launches this year, does it really matter?<br /><br />So, are u gonna be fearful, or one of the heroes of 2025?
        </p>
        &mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470847491895533?ref_src=twsrc%5Etfw">January 4, 2025</a>
      </blockquote>
    </ScrollArea>
  );
};

export default TwitterEmbed;