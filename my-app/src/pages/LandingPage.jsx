import React from "react";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import CTASection from "../components/landing/CTASection";

const LandingPage = () => {
  return (
    <div className="animate-fadeInUp">
      <HeroSection />
      <FeaturesSection />
      <CTASection  />
    </div>
  );
};

export default LandingPage;
