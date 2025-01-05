import { useState, useEffect } from 'react';

const LiveStats = () => {
  const [userCount, setUserCount] = useState(20000);
  const [secondsCounter, setSecondsCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + 1);
    }, secondsCounter * 1000);

    return () => clearInterval(interval);
  }, [secondsCounter]);

  return (
    <div className="text-center space-y-4">
      <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
        {userCount.toLocaleString()}
      </div>
      <div className="text-xl text-gray-300">
        Every {secondsCounter} seconds, a new user joins
      </div>
    </div>
  );
};

export default LiveStats;