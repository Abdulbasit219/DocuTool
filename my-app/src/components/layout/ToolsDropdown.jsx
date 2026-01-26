import React from "react";
import { useNavigate } from "react-router-dom";
import { TOOL_CATEGORIES, TOOLS } from "../../utils/constants";

const ToolsDropdown = ({ setToolsDropdownOpen }) => {
  const navigate = useNavigate();

  const groupedTools = TOOL_CATEGORIES.slice(1).map((category) => ({
    ...category,
    tools: TOOLS.filter((tool) => tool.category === category.id),
  }));

  return (
    <div className="absolute top-full left-1/25 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-green-100 overflow-hidden animate-slideDown w-[850px] z-50">
      <div className="grid grid-cols-4 gap-0">
        {groupedTools.map((category) => (
          <div
            key={category.id}
            className="border-r border-green-100 last:border-r-0"
          >
            {/* Category Header */}
            <div className="bg-gradient-to-r from-green-50 to-white px-4 py-3 border-b border-green-100">
              <div className="flex items-center gap-2">
                <category.icon className="text-green-600" size={18} />
                <h3 className="font-semibold text-gray-800 text-sm">
                  {category.name}
                </h3>
              </div>
            </div>

            {/* Tools List */}
            <div className="p-2 max-h-[400px] overflow-y-auto">
              {category.tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => {
                    navigate(tool.path), setToolsDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 cursor-pointer rounded-lg hover:bg-green-50 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <tool.icon
                      className="text-gray-500 group-hover:text-green-600 transition-colors flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-green-600 font-medium">
                      {tool.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="border-t border-green-100 bg-gradient-to-r from-green-50 cursor-pointer to-white p-3">
        <button
          onClick={() => {
            navigate("/tools"), setToolsDropdownOpen(false);
          }}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm"
        >
          View All Tools →
        </button>
      </div>
    </div>
  );
};

export default ToolsDropdown;
