import { memo } from 'react';

const QuoteSection = memo(() => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image shown first on mobile, hidden on md+ screens */}
          <div className="block md:hidden relative aspect-square overflow-hidden">
            <img
              src="/lovable-uploads/c20c59d5-ef3b-43ae-b907-a3a63f8dd3f1.png"
              alt="The Hearing Things meme"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <blockquote className="text-3xl font-light text-primary/80 leading-tight">
                "You going to want to hold onto that (Rug Genesis)"
                <footer className="text-lg text-secondary mt-2">
                  - Farokh, Fomo Hour, 2nd Jan 2024
                </footer>
              </blockquote>

              <blockquote className="text-3xl font-light text-primary/80 leading-tight">
                "myriad will be absolutely disgusting. the reach of Decrypt Media makes it inevitable"
                <footer className="text-lg text-secondary mt-2">
                  - AIXBT, 31st Dec
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Image hidden on mobile, shown on md+ screens */}
          <div className="hidden md:block relative aspect-square overflow-hidden">
            <img
              src="/lovable-uploads/c20c59d5-ef3b-43ae-b907-a3a63f8dd3f1.png"
              alt="The Hearing Things meme"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

QuoteSection.displayName = 'QuoteSection';

export default QuoteSection;