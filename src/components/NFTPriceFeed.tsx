import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface FloorPrice {
  price: number;
  usdPrice?: number;
}

const NFTPriceFeed = () => {
  const [floorPrice, setFloorPrice] = useState<FloorPrice | null>(null);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("reservoir_api_key") || "");
  const { toast } = useToast();

  // Reservoir API configuration
  const CONTRACT_ADDRESS = "0x8ff1523091c9517bc328223d50b52ef450200339";
  const BLUR_COLLECTION_URL = `https://blur.io/collection/${CONTRACT_ADDRESS}`;
  const API_URL = `https://api.reservoir.tools/collections/${CONTRACT_ADDRESS}/floor`;

  const saveApiKey = () => {
    localStorage.setItem("reservoir_api_key", apiKey);
    toast({
      title: "API Key Saved",
      description: "Your Reservoir API key has been saved successfully.",
    });
    refetch();
  };

  const fetchFloorPrice = async () => {
    console.log("Fetching floor price data...");
    if (!apiKey) {
      throw new Error("Please enter your Reservoir API key");
    }

    try {
      const response = await fetch(API_URL, {
        headers: {
          "accept": "*/*",
          "x-api-key": apiKey
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

  const { isLoading, isError, refetch } = useQuery({
    queryKey: ["floorPrice", apiKey],
    queryFn: fetchFloorPrice,
    refetchInterval: 60000,
    enabled: !!apiKey,
  });

  if (!apiKey) {
    return (
      <div className="p-6 rounded-lg glass space-y-4">
        <h3 className="text-2xl font-bold">Rug Radio Genesis Floor Price</h3>
        <div className="space-y-4">
          <p className="text-sm text-muted">Please enter your Reservoir API key to view floor prices:</p>
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Reservoir API key"
            className="max-w-md"
          />
          <Button onClick={saveApiKey}>Save API Key</Button>
          <div className="text-sm">
            <a 
              href="https://docs.reservoir.tools/reference/overview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-highlight hover:underline"
            >
              Get your API key here
            </a>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="p-6 rounded-lg glass">
        <div className="text-red-500 space-y-4">
          <p>Unable to fetch floor price data. Please try again later.</p>
          <Button 
            variant="outline" 
            onClick={() => setApiKey("")}
            className="text-sm"
          >
            Change API Key
          </Button>
        </div>
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
        <div className="flex flex-col space-y-2">
          <a
            href={BLUR_COLLECTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-highlight hover:underline"
          >
            <span>View on Blur</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Button 
            variant="outline" 
            onClick={() => setApiKey("")}
            className="text-sm"
          >
            Change API Key
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NFTPriceFeed;