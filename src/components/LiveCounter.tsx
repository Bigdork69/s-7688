import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LiveCounter = () => {
  const [count, setCount] = useState(20000);
  const [secondsPerUser, setSecondsPerUser] = useState(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
      // Randomly vary the seconds between 25-30 for more realistic feel
      setSecondsPerUser(Math.floor(Math.random() * 6) + 25);
    }, secondsPerUser * 1000);

    return () => clearInterval(interval);
  }, [secondsPerUser]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-2"
    >
      <motion.div
        key={count}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl font-bold text-highlight"
      >
        {count.toLocaleString()}
      </motion.div>
      <div className="text-lg text-accent">
        Every {secondsPerUser} seconds, a new user joins
      </div>
    </motion.div>
  );
};

export default LiveCounter;