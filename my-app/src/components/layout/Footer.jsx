import React from "react";
import FeatureItem from "./FeatureItem";
import { APP_CONFIG, FOOTER_FEATURES } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-white border-t border-green-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {FOOTER_FEATURES.map((feature, i) => (
            <FeatureItem
              key={i}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-center text-gray-600 text-sm">
          {APP_CONFIG.COPYRIGHT}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
