import Counter from "./live-stats/Counter";

const LiveStats = () => {
  return (
    <Counter 
      value="22,000"
      label="Total Myriad Sign-ups (as of 5th Jan)"
    />
  );
};

export default LiveStats;