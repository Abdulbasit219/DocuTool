import React from "react";
import { Target } from "lucide-react";
import { APP_CONFIG } from "../../utils/constants";

const MissionSection = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 border-2 border-green-100 hover:border-green-300 transition-all duration-500 animate-fadeInUp group">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <Target className="text-white" size={32} />
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        To democratize access to professional document tools. We're tired of
        complicated software that requires subscriptions, sign-ups, and
        compromises your privacy. {APP_CONFIG.APP_NAME} is our answer - a
        platform that puts you first.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Every tool is designed to be intuitive, fast, and secure. No technical
        knowledge required. No hidden fees. Just simple, powerful tools that get
        the job done.
      </p>
    </div>
  );
};

export default MissionSection;
