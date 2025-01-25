import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set end date to 2 days and 14 hours from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(endDate.getHours() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-4">
      <div className="relative">
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-mono tracking-wider relative z-10">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs md:text-sm text-white/70 mt-2 tracking-widest uppercase">
        {label}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative w-full py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Abstract Countdown
          </h2>
          <div className="flex justify-center items-center space-x-2 md:space-x-4">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/50 -mt-8">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/50 -mt-8">:</div>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/50 -mt-8">:</div>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;