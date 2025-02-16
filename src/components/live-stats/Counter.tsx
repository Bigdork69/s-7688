
import { memo } from 'react';

interface CounterProps {
  value: string;
  label: string;
}

const Counter = memo(({ value, label }: CounterProps) => (
  <div className="text-center p-8 relative">
    {/* Particle container */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-0"
          style={{
            left: `${20 + (i * 5)}%`,
            animation: `
              float-up ${8 + (i % 4)}s infinite ease-in-out ${i * 0.5}s,
              fade-particle ${8 + (i % 4)}s infinite ease-in-out ${i * 0.5}s
            `,
            background: `radial-gradient(circle at center, 
              ${i % 2 === 0 ? '#60A5FA' : '#C084FC'} 0%,
              transparent 70%)`
          }}
        />
      ))}
    </div>
    
    {/* Counter value */}
    <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent slide-in fade-in relative z-10">
      {value}
    </div>
    <div className="mt-4 text-lg text-white fade-in relative z-10">
      {label}
    </div>
  </div>
));

Counter.displayName = 'Counter';

export default Counter;
