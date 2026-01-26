import { FileText } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "../../utils/constants";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => navigate("/")}
    >
      <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
        <FileText className="text-white" size={24} />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
        {APP_CONFIG.APP_NAME}
      </span>
    </div>
  );
};

export default Logo;
