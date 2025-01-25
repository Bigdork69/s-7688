import Counter from "./live-stats/Counter";

const LiveStats = () => {
  return (
    <Counter 
      value="40,000"
      label="Total Myriad Sign Ups"
    />
  );
};

export default LiveStats;