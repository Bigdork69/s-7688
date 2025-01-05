import { memo } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface TwitterThreadColumnProps {
  tweets: string[];
}

const TwitterThreadColumn = memo(({ tweets }: TwitterThreadColumnProps) => (
  <div className="w-full rounded-md">
    <ScrollArea className="h-[500px] md:h-[600px]">
      <div className="flex flex-col gap-4 p-4">
        {tweets.map((tweet, index) => (
          <div 
            key={index} 
            className="w-full"
            dangerouslySetInnerHTML={{ __html: tweet }} 
          />
        ))}
      </div>
    </ScrollArea>
  </div>
));

TwitterThreadColumn.displayName = 'TwitterThreadColumn';

export default TwitterThreadColumn;