import { memo } from 'react';
import CountdownTimer from './CountdownTimer';
import HeroTitle from './hero/HeroTitle';
import StatsGrid from './hero/StatsGrid';
import CTAButton from './hero/CTAButton';

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

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent pointer-events-none" />

      <div className="w-full px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <HeroTitle />
          <StatsGrid />
          <CTAButton />
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;