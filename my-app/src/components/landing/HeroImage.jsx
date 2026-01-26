import React from "react";
import { FileText, Lock, Zap, Shield } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative">
      <div className="relative animate-float">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-4 border-green-100">
          {/* Large PDF Icon */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <FileText
                size={140}
                className="text-white mx-auto"
                strokeWidth={1.5}
              />
            </div>

            {/* Floating Badge - Top Right */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
              <div className="flex items-center gap-2">
                <Shield size={18} />
                <span className="font-bold text-sm">Secure</span>
              </div>
            </div>

            {/* Floating Badge - Bottom Left */}
            <div
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2">
                <Zap size={18} />
                <span className="font-bold text-sm">Fast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-xl animate-float-delayed border-2 border-green-100">
          <Lock className="text-green-600" size={32} />
        </div>

        <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl p-4 shadow-xl animate-float-delayed-2 border-2 border-emerald-100">
          <FileText className="text-emerald-600" size={32} />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        <div
          className="absolute top-20 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-16 left-20 w-2 h-2 bg-green-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-24 right-16 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  );
};

export default HeroImage;
