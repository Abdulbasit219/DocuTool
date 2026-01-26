import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { Download, FileText } from "lucide-react";
import FileUpload from "../components/ui/FileUpload";
import SubmitButton from "../components/ui/SubmitButton";
import toast from "react-hot-toast";

const PdfToWordPage = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a PDF file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const loadingToast = toast.loading("Converting PDF to Word...");

    try {
      const response = await fetch("http://localhost:5000/pdf-to-word", {
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
      a.download = file.name.replace(".pdf", ".docx");
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.dismiss(loadingToast);
      toast.success("PDF converted to Word successfully!");

      setFile(null);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 animate-fadeInUp">
      <PageHeader
        icon={FileText}
        title="PDF to Word"
        subtitle="Convert PDF documents to editable DOCX format"
        gradientColor="from-emerald-500 to-emerald-600"
      />
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <FileUpload
          file={file}
          onChange={handleFileUpload}
          accept=".pdf"
          uploadId="pdf-word-upload"
          color="emerald"
        />
        <SubmitButton
          onClick={handleSubmit}
          icon={Download}
          text="Convert & Download"
          gradientColor="from-emerald-500 to-emerald-600"
        />
      </div>
    </div>
  );
};

export default PdfToWordPage;
