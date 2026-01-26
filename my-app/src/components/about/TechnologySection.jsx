import React from "react";
import TechCard from "./TechCard";
import { TECH_FEATURES } from "../../utils/constants";

const TechnologySection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {TECH_FEATURES.map((feature, idx) => (
        <TechCard
          key={idx}
          icon={feature.icon}
          title={feature.title}
          desc={feature.desc}
          color={feature.color}
          bgColor={feature.bgColor}
          delay={idx * 0.2}
        />
      ))}
    </div>
  );
};

export default TechnologySection;