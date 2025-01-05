import { memo } from 'react';

interface PriceDisplayProps {
  nativePrice: number;
  usdPrice: number;
  formatPrice: (price: number) => string;
}

const PriceDisplay = memo(({ nativePrice, usdPrice, formatPrice }: PriceDisplayProps) => (
  <div className="space-y-2">
    <p className="text-xl sm:text-2xl font-bold text-white">
      Ξ {formatPrice(nativePrice)} ETH
    </p>
    <p className="text-lg sm:text-xl text-gray-300">
      ${formatPrice(usdPrice)} USD
    </p>
  </div>
));

PriceDisplay.displayName = 'PriceDisplay';

export default PriceDisplay;