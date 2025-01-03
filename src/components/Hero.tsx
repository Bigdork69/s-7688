import { memo } from 'react';

const Hero = memo(() => {
  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left side - Laptop mockup */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-[640px]">
            {/* Laptop lid */}
            <div className="relative w-full aspect-[16/10] bg-gray-800 rounded-t-lg p-2">
              {/* Screen */}
              <div className="w-full h-full bg-[#15202b] rounded-sm flex items-center justify-center overflow-hidden p-3">
                <div className="w-full max-w-[560px] flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/0ce138c5-ae64-42d0-bb9a-8d724d03f725.png" 
                    alt="Twitter post about Myriad alpha"
                    className="w-full h-auto object-contain"
                    loading="eager"
                    decoding="async"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="relative w-full h-[30px] bg-gray-700 rounded-b-lg">
              {/* Touchpad area */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[100px] h-[5px] bg-gray-600 rounded-b-lg"></div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-[#141413] flex flex-col">
            <span>GMYRIAD</span>
            <span>No More Small Shit</span>
            <span>Scroll Down For Alpha 👇</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            *The tweet blew up so much we created a website to spread the word
          </p>
          <div className="max-w-md">
            <p className="mt-4 text-sm sm:text-base inline-block text-[#141413] font-medium italic font-bold">
              For entertainment purposes only. This fan-made site is not affiliated with Myriad and does not provide financial advice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;