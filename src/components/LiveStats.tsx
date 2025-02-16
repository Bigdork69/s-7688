
import Counter from "./live-stats/Counter";

const LiveStats = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Sign Ups</h2>
      <Counter 
        value="260,000"
        label="Total Myriad Sign Ups"
      />
    </div>
  );
};

export default LiveStats;
