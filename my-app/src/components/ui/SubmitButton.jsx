import React from "react";

const SubmitButton = ({ onClick, icon: Icon, text, gradientColor }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-gradient-to-r cursor-pointer ${gradientColor} text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
    >
      <Icon size={20} />
      {text}
    </button>
  );
};

export default SubmitButton;
