import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const ClaimChecker = () => {
  return (
    <div className="relative min-h-[80vh] sm:min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-2 sm:px-6 py-2 sm:py-16">
        <div className="text-center mb-4 sm:mb-12">
          <h2 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4">How can I check if a RugGenesis still has $Rug to claim?</h2>
          <p className="text-sm sm:text-lg text-gray-600">Drop your Token ID in the box below and click 'Check'</p>
        </div>
        
        <div className="max-w-[1000px] mx-auto">
          <div className="relative w-full">
            {/* Laptop lid */}
            <div className="relative w-full aspect-[16/6] sm:aspect-[16/10] bg-gray-800 rounded-t-lg p-1 sm:p-2">
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
            <div className="relative w-full h-[15px] sm:h-[30px] bg-gray-700 rounded-b-lg">
              {/* Touchpad area */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[40px] sm:w-[100px] h-[2px] sm:h-[5px] bg-gray-600 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClaimChecker