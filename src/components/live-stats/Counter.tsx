import { memo } from 'react';

interface CounterProps {
  value: string;
  label: string;
}

const Counter = memo(({ value, label }: CounterProps) => (
  <div className="text-center p-8">
    <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
      {value}
    </div>
    <div className="mt-4 text-lg text-white">
      {label}
    </div>
  </div>
));

Counter.displayName = 'Counter';

export default Counter;