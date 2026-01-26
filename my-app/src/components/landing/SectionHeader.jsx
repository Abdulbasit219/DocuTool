import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
        {title}
      </h2>
      <p className="text-center text-gray-600 mb-12">{subtitle}</p>
    </>
  );
};

export default SectionHeader;
