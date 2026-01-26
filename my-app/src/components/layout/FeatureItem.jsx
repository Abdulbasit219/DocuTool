import React from "react";

const FeatureItem = ({ icon: Icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <Icon className="text-green-600" size={20} />
        <span className="font-semibold text-gray-800">{title}</span>
      </div>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default FeatureItem;
