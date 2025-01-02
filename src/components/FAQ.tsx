import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-secondary">
              FAQ directly from the <a href="https://discord.gg/myriadmarkets" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Myriad Discord</a>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT IS MYRIAD?</AccordionTrigger>
              <AccordionContent>
                MYRIAD is the interconnected media ecosystem that integrates on-chain Prediction Markets and Quests, alongside written and video content. Predict, earn and engage with Myriad Markets interactive Prediction Markets on your favourite platforms and news sources.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">HAS RUG RADIO CLOSED?</AccordionTrigger>
              <AccordionContent>
                No, Rug Radio has not closed. Rug Radio is still the first decentralised media ecosystem that serves as an incubator, accelerator, and brand builder for independent creators. It will continue to be a powerhouse name within the industry. With the release of MYRIAD, it made sense for the Rug Radio Discord and Decrypt Discord to merge under one roof and provide community engagement and user support through the MYRIAD Discord.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT IS $RUG, DO I NEED TO CLAIM IT?</AccordionTrigger>
              <AccordionContent>
                $RUG is the native yield Token of the Rug Radio Genesis NFT. $RUG will yield and hold natively on the NFTs and there is no need to claim it. Whether you are holding your Genesis NFT, $RUG token or $RDAO, there is no need to move, claim or convert anything at this time until The Myriad Foundation releases more information surrounding its upcoming TGE.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT IS ABSTRACT</AccordionTrigger>
              <AccordionContent>
                Abstract is both the platform and blockchain powering the next generation of consumer crypto. Abstract is a part of Igloo Inc, the parent company of PudgyPenguins. ABS mainnet will launch in 2025 and MYRIAD will be deploying on Abstract as our blockchain of choice.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT IS $MYR</AccordionTrigger>
              <AccordionContent>
                The native media token of the Myriad Foundation. The token that bridges media, predictions and digital advertising. This token is to be adopted by Rug Radio, Myriad Markets, Decrypt and others in 2025.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT IS THE MYRIAD FOUNDATION</AccordionTrigger>
              <AccordionContent>
                MYRIAD Foundation is the organization that structures, coordinates and develops the $MYR token ecosystem. Adopters, holders and users of the token can engage with MYRIAD Foundation in various ways to help proliferate the ecosystem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT IS DASTAN</AccordionTrigger>
              <AccordionContent>
                DASTAN is the parent company of Rug Radio, Decrypt, MYRIAD, Lucky Trader and DEGENZ. Neither DASTAN nor any of the companies under its umbrella are launching a token - instead DASTAN has opted to adopt the $MYR token to be integrated and distributed through our media networks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WILL FOW3 AND MEMBERSHIP PASS PLAY ANY ROLE IN MYRIAD</AccordionTrigger>
              <AccordionContent>
                There are currently no direct $MYR claims or conversions planned for the Faces of Web3 or the Rug Radio Membership pass NTF collections, allocated by the Myriad Foundation. The team at Dastan however is looking at other possible options, including but not limited to additional MYRIAD Points bonuses. No promises or definitions will be made to any other NFT collections (including Degenz Code) beyond the Rug Radio Genesis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT ROLE WILL RUG RADIO GENESIS PASS PLAY IN MYRIAD</AccordionTrigger>
              <AccordionContent>
                The Rug Radio Genesis Rugs were designed to accrue and generate RUG tokens to be used within the Rug Radio ecosystem. Now that Rug Radio is adopting the $MYR token, $RUG will be used in coordination with the Myriad Foundation to convert to $MYR.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT ARE MYRIAD POINTS USED FOR</AccordionTrigger>
              <AccordionContent>
                MYRIAD Points are generated and collected through questing and predicting, the primary goal and end use of these points are via expenditure on MYRIAD Prediction Markets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHEN TGE?</AccordionTrigger>
              <AccordionContent>
                Dastan, Rug Radio or Myriad is not holding a TGE. All TGE and $MYR Token-related information will be delivered by the Myriad Foundation. Follow their only X account at <a href="https://x.com/MyriadFND" className="text-blue-500 hover:underline">https://x.com/MyriadFND</a> and visit their official website at <a href="https://myriad.foundation/" className="text-blue-500 hover:underline">https://myriad.foundation/</a>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WILL MY $RUG BE CONVERTED TO $MYR?</AccordionTrigger>
              <AccordionContent>
                There will be a conversion process that will be announced by the Myriad Foundation before the $MYR token is generated. The MYRIAD Foundation has confirmed that Rug Radio Genesis / $RUG holders will receive 25.5% of the total $MYR supply.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHAT HAPPENED TO THE DAO?</AccordionTrigger>
              <AccordionContent>
                RugDAO holders voted to affirmatively suspend the operation of RugDAO Foundation in order to allow the teams at DASTAN and RugDAO Foundation to restructure our token ecosystem and prepare for the establishment of MYRIAD Foundation and the MYRIAD Foundation's future token, $MYR.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">CAN I BUY $RUG DIRECTLY AND JUST CONVERT THAT?</AccordionTrigger>
              <AccordionContent>
                Like any decentralized token, it is possible to trade $RUG on the open market, however $RUG does not have an official liquidity pool and DASTAN does not acknowledge, promote or support conversations related to $RUG Token Prices or Token $RUG buying/selling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">DOES MYRIAD HAVE A HOW-TO GUIDE?</AccordionTrigger>
              <AccordionContent>
                Yes, MYRIAD has a self-help guide and FAQ at <a href="https://help.myriad.markets/" className="text-blue-500 hover:underline">https://help.myriad.markets/</a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">WHERE CAN I BUY RUG RADIO RELATED NFTS?</AccordionTrigger>
              <AccordionContent>
                <a href="https://pro.opensea.io/collection/ruggenesis-nft" className="text-blue-500 hover:underline block">https://pro.opensea.io/collection/ruggenesis-nft</a>
                <a href="https://pro.opensea.io/collection/rug-radio-faces-of-web3" className="text-blue-500 hover:underline block">https://pro.opensea.io/collection/rug-radio-faces-of-web3</a>
                <a href="https://pro.opensea.io/collection/rug-radio-membership-pass" className="text-blue-500 hover:underline block">https://pro.opensea.io/collection/rug-radio-membership-pass</a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">HOW CAN I WORK WITH OR PARTNER WITH MYRIAD OR DECRYPT?</AccordionTrigger>
              <AccordionContent>
                By filling out the following form <a href="https://www.dastan.co/partner" className="text-blue-500 hover:underline">https://www.dastan.co/partner</a>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-medium">I CAN'T LOG IN, MY POINTS DON'T WORK, MY ACCOUNT IS NOT RESPONDING.</AccordionTrigger>
              <AccordionContent>
                We've been dealing with bugs as we find them, for the majority of issues, logging out and clearing your cookies/cache will fix many logon-related issues. For Extension issues, please ensure it's updated to the latest version by clicking 'update' under 'manage extensions in chrome/brave.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
