import Counter from "./live-stats/Counter";

const LiveStats = () => {
  return (
    <Counter 
      value="33,000"
      label="Total Myriad Sign-ups (as of 10th Jan)"
    />
  );
};

export default LiveStats;