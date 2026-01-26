import React from "react";
import AboutHeroSection from "../components/about/AboutHeroSection";
import StatsSection from "../components/about/StatsSection";
import MissionSection from "../components/about/MissionSection";
import ValuesSection from "../components/about/ValuesSection";
import WhyChooseSection from "../components/about/WhyChooseSection";
import TechnologySection from "../components/about/TechnologySection";
import CTASection from "../components/about/CTASection";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <AboutHeroSection />
      <StatsSection />
      <MissionSection />
      <ValuesSection />
      <WhyChooseSection />
      <TechnologySection />
      <CTASection />
    </div>
  );
};

export default About;
