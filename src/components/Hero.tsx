const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Phone mockup */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[640px] bg-black rounded-[60px] p-4 border-[14px] border-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px]"></div>
            <div className="w-full h-full bg-[#F8FAFF] rounded-[45px] p-4">
              <div className="flex items-center gap-2 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-medium">Antimetal</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-600">Current week</div>
                  <div className="text-2xl font-bold text-[#141413]">$41,222</div>
                </div>
                <div className="space-y-2">
                  {[
                    { date: 'Feb 18 - Feb 24', amount: '$600.52' },
                    { date: 'Feb 11 - Feb 17', amount: '$532.78' },
                    { date: 'Feb 4 - Feb 10', amount: '$415.33' },
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                      <span className="text-sm text-gray-600">{item.date}</span>
                      <span className="font-medium">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
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