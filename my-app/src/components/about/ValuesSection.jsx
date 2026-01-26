import React from "react";
import { ABOUT_VALUES } from "../../utils/constants";
import ValueCard from "./ValueCard";

const ValuesSection = () => {
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">
        What We Stand For
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {ABOUT_VALUES.map((value, idx) => (
          <ValueCard
            key={idx}
            icon={value.icon}
            title={value.title}
            desc={value.desc}
            color={value.color}
            delay={idx * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default ValuesSection;
