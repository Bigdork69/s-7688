import { memo, useEffect, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface TwitterThreadColumnProps {
  tweets: readonly string[];
}

const TwitterThreadColumn = memo(({ tweets }: TwitterThreadColumnProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove any existing Twitter script
    const existingScript = document.getElementById('twitter-widget');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and load new Twitter script
    const script = document.createElement('script');
    script.id = 'twitter-widget';
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore - window.twttr exists after script loads
      if (window.twttr) {
        // @ts-ignore
        window.twttr.widgets.load();
        setIsLoading(false);
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.getElementById('twitter-widget');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [tweets]); // Reload when tweets change

  return (
    <div className="w-full rounded-md">
      <ScrollArea className="h-[500px] md:h-[600px]">
        <div className="flex flex-col gap-4 p-4">
          {tweets.map((tweet, index) => (
            <div 
              key={index} 
              className="w-full max-w-[100vw] md:max-w-full mx-auto px-2 md:px-4"
            >
              {isLoading ? (
                <div className="relative overflow-hidden rounded-lg">
                  <div className="h-48 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent animate-[shimmer_1.5s_infinite]" 
                         style={{
                           backgroundSize: '200% 100%',
                           animation: 'shimmer 2s infinite linear',
                         }}
                    />
                  </div>
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: tweet }} />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
});

TwitterThreadColumn.displayName = 'TwitterThreadColumn';

export default TwitterThreadColumn;