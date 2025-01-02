import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

interface FloorPrice {
  price: number;
  usdPrice?: number;
}

const NFTPriceFeed = () => {
  const [floorPrice, setFloorPrice] = useState<FloorPrice | null>(null);

  // Reservoir API configuration
  const CONTRACT_ADDRESS = "0x8ff1523091c9517bc328223d50b52ef450200339";
  const BLUR_COLLECTION_URL = `https://blur.io/collection/${CONTRACT_ADDRESS}`;
  const API_URL = `https://api.reservoir.tools/collections/${CONTRACT_ADDRESS}/floor`;

  const fetchFloorPrice = async () => {
    console.log("Fetching floor price data...");
    try {
      const response = await fetch(API_URL, {
        headers: {
          "accept": "*/*",
          "x-api-key": "demo-api-key" // Replace with your actual API key
        }
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch floor price");
      }
      
      const data = await response.json();
      
      if (data) {
        setFloorPrice({
          price: data.price?.amount?.native || 0,
          usdPrice: data.price?.amount?.usd || 0
        });
      }
    } catch (error) {
      console.error("Error fetching floor price:", error);
      throw error;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["floorPrice"],
    queryFn: fetchFloorPrice,
    refetchInterval: 60000, // Updated to 60 seconds as requested
  });

  if (isLoading) {
    return (
      <div className="animate-pulse p-6 rounded-lg glass">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 rounded-lg glass text-red-500">
        <p>Unable to fetch floor price data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg glass">
      <div className="flex flex-col space-y-4">
        <h3 className="text-2xl font-bold">Rug Radio Genesis Floor Price</h3>
        <div className="flex flex-col space-y-2">
          {floorPrice && (
            <>
              <p className="text-4xl font-bold">
                Ξ {floorPrice.price.toFixed(3)}
              </p>
              {floorPrice.usdPrice && (
                <p className="text-xl text-muted">
                  ${floorPrice.usdPrice.toLocaleString()}
                </p>
              )}
            </>
          )}
        </div>
        <a
          href={BLUR_COLLECTION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-highlight hover:underline"
        >
          <span>View on Blur</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NFTPriceFeed;