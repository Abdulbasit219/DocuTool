import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, FileQuestion } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 w-48 h-48 rounded-full flex items-center justify-center border-4 border-green-200">
              <FileQuestion
                className="text-green-600"
                size={80}
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-green-500 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>

        {/* Popular Tools */}
        <div className="mt-16 pt-8 border-t border-green-100">
          <p className="text-gray-600 mb-6">Or try our popular tools:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => navigate("/encrypt")}
              className="px-5 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors font-medium"
            >
              Encrypt PDF
            </button>
            <button
              onClick={() => navigate("/pdf-to-word")}
              className="px-5 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors font-medium"
            >
              PDF to Word
            </button>
            <button
              onClick={() => navigate("/word-to-pdf")}
              className="px-5 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors font-medium"
            >
              Word to PDF
            </button>
            <button
              onClick={() => navigate("/tools")}
              className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              View All Tools
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
