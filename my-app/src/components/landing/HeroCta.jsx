import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroCta = () => {
  
  const navigate = useNavigate()

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={() => navigate("/tools")}
        className="bg-gradient-to-r cursor-pointer from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
      >
        Start Now <ArrowRight size={20} />
      </button>
      <button 
      onClick={() => navigate("/about")}
      className="border-2 cursor-pointer border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300">
        Learn More
      </button>
    </div>
  );
};

export default HeroCta;
