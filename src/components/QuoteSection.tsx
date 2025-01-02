import { Button } from "./ui/button";

const QuoteSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary mb-8">The Hearing Thingsoooooor</h2>
            <ul className="space-y-4 text-left text-lg">
              <li className="flex items-center space-x-2">
                <span className="font-medium">• I don't want to name names</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• As soon as tomorrow</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Sources extremely close to the matter</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Big if true</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Rumblings rumors whispers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• My sources</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-medium">• Expecting something imminently</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/68b54740-8211-464b-b744-33cc14127876.png"
              alt="The Hearing Things Meme"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;