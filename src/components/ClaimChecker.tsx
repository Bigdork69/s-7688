import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const ClaimChecker = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Check Your RUG Claim</h2>
          <p className="text-lg text-gray-600">Find out how many RUG tokens you can claim for your NFTs</p>
        </div>
        
        <div className="max-w-[1000px] mx-auto">
          <div className="relative w-full">
            {/* Laptop lid */}
            <div className="relative w-full aspect-[16/10] bg-gray-800 rounded-t-lg p-2">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-sm flex items-center justify-center overflow-hidden">
                <div className="w-full h-[calc(100%+64px)] relative">
                  <iframe 
                    src="https://claim.rug.fm/CheckNfts" 
                    width="100%" 
                    height="100%" 
                    className="absolute top-[-64px] left-0 w-full h-[calc(100%+64px)]"
                    style={{ border: 'none' }}
                    title="RUG Claim Checker"
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
      </div>
    </div>
  )
}

export default ClaimChecker