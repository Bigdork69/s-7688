import { useQuery } from "@tanstack/react-query";
import { useCallback, memo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface FloorPriceData {
  price: {
    amount: {
      native: number;
      usd: number;
    };
  };
}

const LiveFeed = memo(() => {
  const fetchFloorPrice = useCallback(async (): Promise<FloorPriceData> => {
    const { data, error } = await supabase.functions.invoke('getFloorPrice');
    if (error) throw error;
    return data;
  }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ['floorPrice'],
    queryFn: fetchFloorPrice,
    refetchInterval: 3600000,
  });

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-[#1A1F2C] text-white border-none shadow-xl">
      <CardHeader className="text-center pb-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Rug Radio Live Price (updated every hour)</h2>
        <div className="space-y-2">
          {data && (
            <>
              <p className="text-xl sm:text-2xl font-bold">
                Ξ {formatPrice(data.price.amount.native)} ETH
              </p>
              <p className="text-lg sm:text-xl text-gray-300">
                ${formatPrice(data.price.amount.usd)} USD
              </p>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-8 w-full bg-gray-700" />
            <Skeleton className="h-8 w-full bg-gray-700" />
          </div>
        ) : error ? (
          <div className="text-red-400 text-center py-4">
            Error fetching floor price
          </div>
        ) : data ? (
          <div className="flex justify-center">
            <Button 
              className="bg-[#D77F2F] hover:bg-[#C16E2A] text-white px-6 sm:px-8 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base"
              onClick={() => window.open('https://blur.io/collection/ruggenesis-nft', '_blank')}
            >
              Rug Me Daddy <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="text-center py-4 text-muted">
            Loading floor price...
          </div>
        )}
      </CardContent>
    </Card>
  );
});

LiveFeed.displayName = 'LiveFeed';

export default LiveFeed;