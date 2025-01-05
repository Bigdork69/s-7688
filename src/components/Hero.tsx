import { memo } from 'react';
import Globe from './Globe';
import LiveCounter from './LiveCounter';

const Hero = memo(() => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Globe and Counter */}
          <div className="relative h-[600px] flex flex-col items-center justify-center">
            <div className="absolute inset-0">
              <Globe />
            </div>
            <div className="absolute bottom-10 w-full">
              <LiveCounter />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-white flex flex-col">
              <span>GMYRIAD</span>
              <span>No More Small Shit</span>
              <span>Scroll Down For Alpha 👇</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8">
              *The tweet blew up so much we created a website to spread the word
            </p>
            <div className="max-w-md">
              <p className="mt-4 text-sm sm:text-base inline-block text-gray-300 font-medium italic">
                For entertainment purposes only. This fan-made site is not affiliated with Myriad and does not provide financial advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;