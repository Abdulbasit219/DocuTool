import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import { FEATURES } from "../../utils/constants";

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Why Choose Us?"
          subtitle="Powerful features designed for modern workflows"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={i}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
