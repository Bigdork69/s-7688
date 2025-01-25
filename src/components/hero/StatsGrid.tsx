import { memo, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface StatProps {
  value: number;
  label: string;
  delay: number;
}

const Stat = ({ value, label, delay }: StatProps) => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = countRef.current;
    if (node) {
      const controls = animate(0, value, {
        duration: 2,
        delay,
        onUpdate(value) {
          let formattedValue;
          if (value >= 1000000) {
            formattedValue = (value / 1000000).toFixed(0) + 'M';
          } else if (value >= 1000) {
            formattedValue = (value / 1000).toFixed(0) + 'K';
          } else {
            formattedValue = value.toLocaleString();
          }
          node.textContent = formattedValue;
        },
        ease: [0.34, 1.56, 0.64, 1],
      });

      return () => controls.stop();
    }
  }, [value, delay]);

  return (
    <div className="flex flex-col items-center justify-center min-w-[200px]">
      <span ref={countRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tabular-nums">
        0
      </span>
      <span className="text-sm md:text-base text-gray-300 text-center max-w-[120px]">
        {label}
      </span>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-7xl mx-auto">
      <Stat value={42000} label="Pre-SZN Participants" delay={0.2} />
      <Stat value={695000} label="On-chain Transactions" delay={0.4} />
      <Stat value={165000000} label="Total Points Transacted" delay={0.6} />
    </div>
  );
};

StatsGrid.displayName = 'StatsGrid';

export default memo(StatsGrid);