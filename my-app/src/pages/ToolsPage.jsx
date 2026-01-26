import React from "react";
import ToolCard from "../components/tools/ToolCard";
import { useNavigate } from "react-router-dom";
import { TOOLS } from "../utils/constants";

const ToolsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-fadeInUp">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">All PDF Tools</h1>
      <p className="text-xl text-gray-600 mb-12">
        Choose a tool to get started
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {TOOLS.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onClick={() => navigate(tool.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
