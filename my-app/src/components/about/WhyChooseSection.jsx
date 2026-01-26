import React from "react";
import { CheckCircle } from "lucide-react";
import { WHY_CHOOSE_FEATURES, APP_CONFIG } from "../../utils/constants";

const WhyChooseSection = () => {
  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 text-white mb-20 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fadeInUp group">
      <h2 className="text-4xl font-bold mb-8 text-center group-hover:scale-105 transition-transform duration-300">
        Why Choose {APP_CONFIG.APP_NAME}?
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {WHY_CHOOSE_FEATURES.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 animate-fadeInUp hover:translate-x-2 transition-transform duration-300"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <CheckCircle className="flex-shrink-0" size={24} />
            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
