import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { Download, File } from "lucide-react";
import FileUpload from "../components/ui/FileUpload";
import SubmitButton from "../components/ui/SubmitButton";
import toast from "react-hot-toast";

const WordToPdfPage = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a Word file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const loadingToast = toast.loading("Converting Word to PDF...");

    try {
      const response = await fetch("http://localhost:5000/word-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Conversion failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = file.name.replace(".docx", ".pdf");
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.dismiss(loadingToast);
      toast.success("Word converted to PDF successfully!");

      setFile(null);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Something went wrong!");
    }
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 animate-fadeInUp">
      <PageHeader
        icon={File}
        title="Word to PDF"
        subtitle="Convert DOCX files to PDF format"
        gradientColor="from-teal-500 to-teal-600"
      />
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <FileUpload
          file={file}
          onChange={handleFileUpload}
          accept=".docx,.doc"
          uploadId="word-pdf-upload"
          color="teal"
        />
        <SubmitButton
          onClick={handleSubmit}
          icon={Download}
          text="Convert & Download"
          gradientColor="from-teal-500 to-teal-600"
        />
      </div>
    </div>
  );
};

export default WordToPdfPage;
