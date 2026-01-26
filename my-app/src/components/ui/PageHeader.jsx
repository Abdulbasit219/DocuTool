import React from "react";

const PageHeader = ({ icon: Icon, title, subtitle, gradientColor }) => {
  return (
    <div className="text-center mb-12">
      <div
        className={`bg-gradient-to-br ${gradientColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}
      >
        <Icon className="text-white" size={40} />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-xl text-gray-600">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
