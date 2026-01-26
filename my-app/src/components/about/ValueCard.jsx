import React from "react";

const ValueCard = ({ icon: Icon, title, desc, color, delay = 0 }) => {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-green-50 hover:border-green-200 animate-fadeInUp group" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`bg-gradient-to-br ${color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default ValueCard;
