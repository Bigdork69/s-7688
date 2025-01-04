import { useState } from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'

// The actual RUG claim contract address
const RUG_CONTRACT_ADDRESS = '0x53f80ae549c4e8037c3b8fc31b03339447349b6f'
const RUG_ABI = [
  {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "getClaimAmount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  }
]

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

export default function ClaimChecker() {
  const [tokenId, setTokenId] = useState('')
  const [claimAmount, setClaimAmount] = useState<bigint | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleCheck = async () => {
    if (!tokenId || isNaN(Number(tokenId))) {
      toast({
        title: "Invalid Token ID",
        description: "Please enter a valid number",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)
    try {
      const amount = await publicClient.readContract({
        address: RUG_CONTRACT_ADDRESS,
        abi: RUG_ABI,
        functionName: 'getClaimAmount',
        args: [BigInt(tokenId)]
      })
      setClaimAmount(amount as bigint)
    } catch (error) {
      console.error('Error checking claim amount:', error)
      toast({
        title: "Error",
        description: "Failed to check claim amount. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
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
          disabled={isLoading}
        >
          {isLoading ? 'Checking...' : 'Check Claim Amount'}
        </Button>

        {claimAmount !== null && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-lg font-semibold">
              Claimable Amount: {Number(claimAmount) / 1e18} RUG
            </p>
          </div>
        )}
      </div>
    </div>
  )
}