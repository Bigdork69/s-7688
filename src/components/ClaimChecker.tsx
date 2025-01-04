import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const ClaimChecker = () => {
  return (
    <div className="relative min-h-[80vh] sm:min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-2 sm:px-6 py-2 sm:py-16">
        <div className="text-center mb-4 sm:mb-12">
          <h2 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4">How can I check if a RugGenesis still has $Rug to claim?</h2>
          <p className="text-sm sm:text-lg text-gray-600">
            Drop your Token ID in the box below and click 'Check' or{" "}
            <a 
              href="https://claim.rug.fm/CheckNfts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              go here
            </a>
          </p>
        </div>
        
        {/* Mobile version - scrollable iframe container */}
        <div className="block sm:hidden w-full h-[85vh] bg-white rounded-lg">
          <div className="w-full h-full overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
            <div className="min-w-[800px] min-h-[600px]">
              <iframe 
                src="https://claim.rug.fm/CheckNfts" 
                width="100%" 
                height="100%" 
                className="w-full h-full"
                style={{ border: 'none' }}
                title="RUG Claim Checker"
              />
            </div>
          </div>
        </div>

        {/* Desktop version - laptop design */}
        <div className="hidden sm:block relative w-full">
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
  )
}

export default ClaimChecker