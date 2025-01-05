import { Button } from "../ui/button";

interface StatItemProps {
  number: string;
  link: string;
  buttonText: string;
}

const StatItem = ({ number, link, buttonText }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="text-2xl md:text-3xl font-bold mb-4">{number}</div>
      <Button 
        variant="outline" 
        className="bg-transparent hover:bg-highlight hover:text-primary border-highlight text-highlight transition-colors"
        onClick={() => window.open(link, '_blank')}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default StatItem;