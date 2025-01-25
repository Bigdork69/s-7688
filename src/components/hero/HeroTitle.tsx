import { memo } from 'react';

const HeroTitle = () => {
  return (
    <div className="space-y-6 animate-fade-in w-full pt-16 md:pt-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider">
        MYRIAD PRE-SZN IS NOW COMPLETE
      </h1>
    </div>
  );
};

HeroTitle.displayName = 'HeroTitle';

export default memo(HeroTitle);