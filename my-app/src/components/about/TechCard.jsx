import React from "react";

const TechCard = ({ icon: Icon, title, desc, color, bgColor, delay = 0 }) => {
  return (
    <div
      className={`bg-gradient-to-br ${bgColor} rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-3 transition-all duration-500 animate-fadeInUp group`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`bg-gradient-to-br ${color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
      >
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default TechCard;