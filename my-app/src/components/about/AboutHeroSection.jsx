import React from "react";
import { APP_CONFIG } from "../../utils/constants";

const AboutHeroSection = () => {
  return (
    <div className="text-center mb-20 animate-fadeInUp">
      <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 transform hover:scale-105 transition-transform duration-300">
        About {APP_CONFIG.APP_NAME}
      </div>
      <h1
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp"
        style={{ animationDelay: "0.1s" }}
      >
        Simplifying Document Management
      </h1>
      <p
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
        style={{ animationDelay: "0.2s" }}
      >
        We believe everyone deserves access to professional PDF tools without
        the complexity, cost, or privacy concerns. That's why we built {APP_CONFIG.APP_NAME} 
        - a completely free, secure, and user-friendly platform.
      </p>
    </div>
  );
};

export default AboutHeroSection;
