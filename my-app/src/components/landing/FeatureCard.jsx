import React from "react";

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="bg-white p-8 rounded-2xl flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;
