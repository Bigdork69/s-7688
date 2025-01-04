import { useState } from 'react'
import { useAccount, useReadContract } from 'wagmi'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'

const RUG_CONTRACT_ADDRESS = '0x123....' // Replace with actual RUG claim contract address
const RUG_ABI = [
  {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "getClaimAmount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
]

export default function ClaimChecker() {
  const [tokenId, setTokenId] = useState('')
  const { address, isConnected } = useAccount()
  const { toast } = useToast()

  const { data: claimAmount, error } = useReadContract({
    address: RUG_CONTRACT_ADDRESS,
    abi: RUG_ABI,
    functionName: 'getClaimAmount',
    args: tokenId ? [BigInt(tokenId)] : undefined,
    query: {
      enabled: Boolean(tokenId && !isNaN(Number(tokenId)))
    }
  })

  const handleCheck = () => {
    if (!tokenId || isNaN(Number(tokenId))) {
      toast({
        title: "Invalid Token ID",
        description: "Please enter a valid number",
        variant: "destructive"
      })
      return
    }

    if (!isConnected) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your wallet first",
        variant: "destructive"
      })
      return
    }
  }

  return (
    <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Check RUG Claim Amount</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="tokenId" className="block text-sm font-medium mb-1">
            Enter Token ID
          </label>
          <Input
            id="tokenId"
            type="number"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            placeholder="Enter your token ID"
            className="w-full"
          />
        </div>

        <Button 
          onClick={handleCheck}
          className="w-full"
          disabled={!isConnected}
        >
          {isConnected ? 'Check Claim Amount' : 'Connect Wallet to Check'}
        </Button>

        {claimAmount && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-lg font-semibold">
              Claimable Amount: {Number(claimAmount) / 1e18} RUG
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-lg">
            <p>Error checking claim amount. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  )
}