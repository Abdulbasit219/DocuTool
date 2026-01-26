import React from "react";
import { ABOUT_STATS } from "../../utils/constants";
import StatCard from "./StatCard";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
      {ABOUT_STATS.map((stat, idx) => (
        <StatCard
          key={idx}
          number={stat.number}
          label={stat.label}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
};

export default StatsSection;