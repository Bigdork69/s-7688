import { memo } from 'react';
import Globe from './Globe';
import LiveCounter from './LiveCounter';

const Hero = memo(() => {
  return (
    <>
      <div className="relative min-h-screen flex items-center bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Laptop Image */}
            <div className="relative">
              <img 
                src="/lovable-uploads/5b038ec7-8957-49c4-a96e-0944928cbc09.png" 
                alt="Laptop displaying Myriad interface" 
                className="w-full h-auto rounded-lg shadow-2xl animate-float"
              />
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

      {/* Globe Section */}
      <div className="min-h-screen bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4">
          <div className="relative h-[800px]">
            <Globe />
            <div className="absolute bottom-10 w-full">
              <LiveCounter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;