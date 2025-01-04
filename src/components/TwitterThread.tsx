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
    `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A quick intro to $rug. $rug is the token emitted by the @RugRadio Genesis NFTs.<br><br>Its holders will receive 25.5% (🤯) of the supply of $MYR, the token launched by @MyriadMarkets, one of the hottest web3 products of 2025.<br><br>But why is it still sitting at $8.3m mc? Let's find out👇 <a href="https://t.co/ix0xLWfpT5">pic.twitter.com/ix0xLWfpT5</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470772023734532?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">$rug launched in 2022, alongside @RugRadio. It is emitted by the Genesis NFTs at the following rate:<br><br>1. Standard: 5 $rug a day<br>2. Scarce 1 & 2: 7 $rug a day<br>3. Rare 1 & 2: 11 $rug a day<br><br>over 5 years, starting in Jan 2022.<br><br>Total supply: 255m $rug <a href="https://t.co/TY0BMyORQ6">pic.twitter.com/TY0BMyORQ6</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470780764713038?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">$rug emitted to date can be claimed by the NFT holder on <a href="https://t.co/bEwJRCTygR">https://t.co/bEwJRCTygR</a><br><br>If the NFT is sold before getting claimed, the unclaimed $rug travels with the NFT to the new owner.<br><br>You can check for unclaimed $rug in listed Genesis by inputting its ID # on the same website. <a href="https://t.co/21odzBP67A">pic.twitter.com/21odzBP67A</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470788612256184?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Why does the supply of $rug on Dexscreener doesn't tie in with the 255m? Many reasons for that:<br>1. There are still 2 years of emission, so 2/5th of the supply is still tied in the NFTs<br>2. Many holders haven't claimed their emitted $rug<br>3. Some $rug was converted to $RDAO (more👇)</p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470792450044079?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">$RDAO is the governance token that was created alongside $rug in 2022.<br><br>1 $RDAO = 1800 $rug<br><br>It gave governance rights for the @RugRadio DAO, which has now been disbanded.<br><br>Worthless then? Not quite as it will get its allocation of $myr - 1.8k $myr to be exact</p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470795256033686?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Coming back to $rug. Why is the contract not verified on DEX? Why so little liquidity? Why no CEX listing?<br><br>That's the bit very few people know about, and also what makes buying $rug now perhaps the BIGGEST opportunity of early 2025. <a href="https://t.co/gC5YzuUZTm">pic.twitter.com/gC5YzuUZTm</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470803489497407?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Rug Radio delegated the creation of the token and DAO to Syndicate, back in 22. Syndicate used a proprietary smart contract and refused to make the code verifiable by a third party, thereby dooming $rug to one of the lowest token scores achievable on DEX.<a href="https://t.co/O0WBXKXeGX">https://t.co/O0WBXKXeGX</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470806907847163?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">As a result:<br>1. No CEX would touch it with a barge pole<br>2. No market-makers bothered injecting liquidity in size<br>3. No traction from adventurous token hunters, given its "low trust" score on DEX <a href="https://t.co/GNCHEp6uim">pic.twitter.com/GNCHEp6uim</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470819431944604?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">But with the 25.5% allocation of $myr, $rug holders are given a 2nd chance of making a big bag, thanks to the team's commitment to rewarding their early supporters.$myr is widely touted to be listed on most T1 CEXs, so liquidity won't be a problem this time around! <a href="https://t.co/WkSzjmn1Pd">pic.twitter.com/WkSzjmn1Pd</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470827791196451?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">This is where lies the opportunity. If you are armed with all that knowledge, you can accumulate $rug on Uniswap while others stay away out of fear or not knowing where to look.<br><br>Maths are simple:$rug current px: $0.11<br>1 $rug = 1 $myr$myr supply = 1bn<br><br>So implied mc = $110m 🤯 <a href="https://t.co/okYrfUWWOl">pic.twitter.com/okYrfUWWOl</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470835647148261?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`,
    `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">Liquidity in the Uni pool is poor, so it is likely that any respectable buy size will move the $rug price materially. But when you are positioning for one of few billion-$ token launches this year, does it really matter?<br><br>So, are u gonna be fearful, or one of the heroes of 2025? <a href="https://t.co/T7Ps6QLsA3">pic.twitter.com/T7Ps6QLsA3</a></p>&mdash; Tyler DurdΞth (@tylerdurdeth) <a href="https://twitter.com/tylerdurdeth/status/1875470847491895533?ref_src=twsrc%5Etfw">January 4, 2025</a></blockquote>`
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary mb-2">The $RUG Story</h2>
          <p className="text-lg text-secondary">
            A comprehensive thread by <a href="https://twitter.com/tylerdurdeth" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@tylerdurdeth</a>
          </p>
        </div>
        
        <ScrollArea className="h-[600px] w-full rounded-md border p-4 bg-gray-50">
          <div className="space-y-4">
            {tweets.map((tweet, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: tweet }} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default TwitterThread;