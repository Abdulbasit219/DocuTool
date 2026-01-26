import React from "react";

const StatCard = ({ number, label, delay = 0 }) => {
  return (
    <div
      className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fadeInUp group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default StatCard;
