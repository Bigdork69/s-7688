import { useAccount, useContractRead } from 'wagmi';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useToast } from "@/hooks/use-toast";

// RUG token claim contract address
const RUG_CLAIM_CONTRACT = "0x123..." as const; // Replace with actual contract address

const ClaimDashboard = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { toast } = useToast();

  // Read claim status from contract
  const { data: claimStatus, isError, isLoading } = useContractRead({
    address: RUG_CLAIM_CONTRACT,
    abi: [{
      name: "claimStatus",
      type: "function",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ name: "", type: "bool" }],
    }],
    functionName: "claimStatus",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address),
    }
  });

  const handleConnect = async () => {
    try {
      await open();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Error",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto bg-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">RUG Token Claim Dashboard</CardTitle>
        <CardDescription className="text-center">
          Connect your wallet to check your claim status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isConnected ? (
          <Button 
            onClick={handleConnect}
            className="w-full"
          >
            Connect Wallet
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gray-50">
              <p className="text-sm text-gray-600">Connected Address:</p>
              <p className="font-mono text-sm">{address}</p>
            </div>
            
            {isLoading ? (
              <div className="text-center">Checking claim status...</div>
            ) : isError ? (
              <div className="text-red-500 text-center">
                Error checking claim status. Please try again.
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold">
                  {claimStatus 
                    ? "You are eligible to claim RUG tokens!" 
                    : "You are not eligible for RUG tokens at this time."}
                </p>
                {claimStatus && (
                  <Button
                    onClick={() => window.open("https://claim.rug.fm", "_blank")}
                  >
                    Claim on Rug.fm
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClaimDashboard;