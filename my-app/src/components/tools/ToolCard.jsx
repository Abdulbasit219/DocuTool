import { ArrowRight } from "lucide-react";
import React from "react";

const ToolCard = ({ tool, onClick }) => {
  const isDisabled = !tool.active;

  return (
    <div className="relative group">
      <button
        onClick={isDisabled ? undefined : onClick}
        disabled={isDisabled}
        className={`w-full bg-white cursor-pointer p-8 rounded-2xl shadow-lg transition-all duration-300 text-left ${
          isDisabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:shadow-2xl hover:-translate-y-2"
        }`}
      >
        <div
          className={`bg-gradient-to-br ${
            tool.color
          } w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
            !isDisabled && "group-hover:scale-110"
          } transition-transform duration-300`}
        >
          <tool.icon className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{tool.title}</h3>
        <p className="text-gray-600 mb-4">{tool.desc}</p>
        <div
          className={`flex items-center font-semibold ${
            isDisabled ? "text-gray-400" : "text-green-600"
          }`}
        >
          {isDisabled ? (
            "Coming Soon"
          ) : (
            <>
              Try it now{" "}
              <ArrowRight
                className="ml-2 group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </>
          )}
        </div>
      </button>

      {isDisabled && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          Coming Soon
        </div>
      )}
    </div>
  );
};

export default ToolCard;
