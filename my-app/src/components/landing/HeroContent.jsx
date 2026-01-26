import React from "react";
import HeroCta from "./HeroCta";

const HeroContent = () => {
  return (
    <div>
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Transform Your {" "}
        <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
          Documents {" "}
        </span>
        Instantly
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Professional PDF tools at your fingertips. Secure, fast, and completely
        free. No sign-up required.
      </p>
      <HeroCta />
    </div>
  );
};

export default HeroContent;
