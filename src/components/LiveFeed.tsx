import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface FloorPriceData {
  price: {
    amount: {
      native: number;
      usd: number;
    };
  };
}

const LiveFeed = () => {
  const fetchFloorPrice = async (): Promise<FloorPriceData> => {
    const { data, error } = await supabase.functions.invoke('getFloorPrice');
    if (error) throw error;
    return data;
  };

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['floorPrice'],
    queryFn: fetchFloorPrice,
    refetchInterval: 60000, // Refetch every 60 seconds
  });

  useEffect(() => {
    console.log('Floor price data:', data);
    console.log('Error:', error);
  }, [data, error]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">
          Rug Radio Genesis Floor Price
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-4">
            Error fetching floor price
          </div>
        ) : data ? (
          <div className="space-y-2 text-center">
            <p className="text-2xl font-bold text-primary">
              Ξ {formatPrice(data.price.amount.native)} ETH
            </p>
            <p className="text-xl text-secondary">
              ${formatPrice(data.price.amount.usd)} USD
            </p>
          </div>
        ) : (
          <div className="text-center py-4 text-muted">
            Loading floor price...
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveFeed;