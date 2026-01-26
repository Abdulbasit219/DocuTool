import React from "react";
import { Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "../../utils/constants";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center bg-white rounded-3xl shadow-2xl p-12 border-2 border-green-100 hover:border-green-300 transition-all duration-500 animate-fadeInUp group">
      <div className="inline-flex items-center gap-3 bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
        <Award className="text-white mx-auto" size={40} />
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join thousands of users who trust {APP_CONFIG.APP_NAME} for their
        document needs. No sign-up required.
      </p>
      <button
        onClick={() => navigate("/tools")}
        className="bg-gradient-to-r cursor-pointer from-green-500 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Try Our Tools Now →
      </button>
    </div>
  );
};

export default CTASection;
