import { memo } from 'react';

const CTAButton = () => {
  return (
    <div 
      className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-6 rounded-lg text-lg font-semibold"
    >
      Scroll Down for Alpha
    </div>
  );
};

CTAButton.displayName = 'CTAButton';

export default memo(CTAButton);