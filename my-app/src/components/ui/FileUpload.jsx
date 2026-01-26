import React from "react";
import { Upload } from 'lucide-react';

const FileUpload = ({ file, onChange, accept, uploadId, color = "green" }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-3">
        Upload {accept.includes("pdf") ? "PDF" : "Word"} File
      </label>
      <div
        className={`border-2 border-dashed border-${color}-300 rounded-xl p-12 text-center hover:border-${color}-500 transition-colors cursor-pointer bg-${color}-50/50`}
      >
        <Upload className={`mx-auto text-${color}-600 mb-4`} size={48} />
        <input
          type="file"
          accept={accept}
          onChange={onChange}
          className="hidden"
          id={uploadId}
        />
        <label htmlFor={uploadId} className="cursor-pointer">
          <span className={`text-${color}-600 font-semibold`}>
            Click to upload
          </span>
          <span className="text-gray-600"> or drag and drop</span>
        </label>
        {file && <p className="mt-4 text-gray-700 font-medium">{file.name}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
