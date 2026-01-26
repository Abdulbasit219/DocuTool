import React, { useState } from "react";
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";
import { TOOL_CATEGORIES, TOOLS } from "../../utils/constants";
import { ChevronDown, ChevronUp } from "lucide-react";

const MobileMenu = ({ setMenuOpen }) => {
  const navigate = useNavigate();
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const groupedTools = TOOL_CATEGORIES.slice(1).map((category) => ({
    ...category,
    tools: TOOLS.filter((tool) => tool.category === category.id),
  }));

  return (
    <div className="md:hidden bg-white border-t border-green-100 animate-slideDown max-h-[80vh] overflow-y-auto">
      <div className="px-6 py-4 flex flex-col gap-2">
        <NavLink onClick={() => handleNavigation("/")}>Home</NavLink>

        {/* Tools Accordion */}
        <div>
          <button
            onClick={() => setToolsExpanded(!toolsExpanded)}
            className="w-full flex items-center justify-between text-gray-700 hover:text-green-600 transition-colors font-medium py-2"
          >
            <span>Tools</span>
            {toolsExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {toolsExpanded && (
            <div className="pl-4 mt-2 space-y-2">
              {groupedTools.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors py-2"
                  >
                    <div className="flex items-center gap-2">
                      <category.icon size={16} />
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {expandedCategory === category.id && (
                    <div className="pl-6 mt-1 space-y-1">
                      {category.tools.map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => handleNavigation(tool.path)}
                          className="w-full text-left flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors py-1.5"
                        >
                          <tool.icon size={14} />
                          <span className="text-sm">{tool.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => handleNavigation("/tools")}
                className="w-full text-left text-green-600 font-medium py-2 text-sm"
              >
                View All Tools →
              </button>
            </div>
          )}
        </div>

        <NavLink onClick={() => handleNavigation("/about")}>About</NavLink>

        <button
          onClick={() => handleNavigation("/tools")}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg text-left mt-2"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
