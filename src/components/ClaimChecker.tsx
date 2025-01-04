import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const ClaimChecker = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Check Your RUG Claim</CardTitle>
        <CardDescription>
          Check how many RUG tokens you can claim for your NFTs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <iframe 
            src="https://claim.rug.fm/CheckNfts" 
            width="100%" 
            height="600" 
            className="w-full"
            style={{ border: 'none' }}
            title="RUG Claim Checker"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default ClaimChecker