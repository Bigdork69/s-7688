const QuoteSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-light text-primary/80 leading-tight">
              The ones who are<br />
              crazy enough to think<br />
              they can <span className="underline">change</span> the<br />
              world.
            </h2>
          </div>

          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/c20c59d5-ef3b-43ae-b907-a3a63f8dd3f1.png"
              alt="The Hearing Things meme"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;