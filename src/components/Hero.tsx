import { memo, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

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
          // Format the number based on its size
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
        ease: [0.34, 1.56, 0.64, 1], // Custom ease with bounce
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

const Hero = memo(() => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,30 50,50 T100,50"
            className="text-blue-500 stroke-current fill-none animate-pulse"
            strokeWidth="0.5"
          />
          <path
            d="M0,60 Q25,40 50,60 T100,60"
            className="text-purple-500 stroke-current fill-none animate-pulse"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Title */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider">
              PRE-SZN IS NOW COMPLETE
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl mx-auto">
            <Stat value={42000} label="Pre-SZN Participants" delay={0.2} />
            <Stat value={695000} label="On-chain Transactions" delay={0.4} />
            <Stat value={165000000} label="Total Points Transacted" delay={0.6} />
          </div>

          {/* CTA Button (non-interactive) */}
          <div 
            className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-6 rounded-lg text-lg font-semibold"
          >
            Scroll Down for Alpha
          </div>

          {/* Countdown Timer */}
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
