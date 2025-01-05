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
                <div className="animate-pulse bg-gray-200 rounded-lg h-48 w-full" />
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