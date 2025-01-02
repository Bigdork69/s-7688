const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Phone mockup */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[640px] bg-black rounded-[60px] p-4 border-[14px] border-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px]"></div>
            <div className="w-full h-full bg-[#15202b] rounded-[45px] p-4 overflow-hidden">
              <img 
                src="/lovable-uploads/0ce138c5-ae64-42d0-bb9a-8d724d03f725.png" 
                alt="Twitter post about Myriad alpha"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#141413]">
            Your time.
            <br />
            Your goals.
            <br />
            You're the boss.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Start and stop when you want
          </p>
          <div className="max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F2FF44]"
              />
              <button className="px-8 py-3 bg-[#F2FF44] text-[#141413] rounded-lg font-medium hover:bg-[#E6FF00] transition-colors">
                Next
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              By clicking "Next", I agree to the{" "}
              <a href="#" className="text-[#141413] underline">
                Independent Contractor Agreement
              </a>
            </p>
            <a href="#" className="mt-4 inline-block text-[#141413] font-medium">
              Already started signing up?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;