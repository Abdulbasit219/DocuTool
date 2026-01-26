import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-green-50 mb-8">
          Join thousands who trust us with their PDF needs
        </p>
        <button
          onClick={() => navigate("tools")}
          className="bg-white cursor-pointer text-green-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Try All Tools Free
        </button>
      </div>
    </section>
  );
};

export default CTASection;
