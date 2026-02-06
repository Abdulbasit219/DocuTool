import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import FileUpload from "../components/ui/FileUpload";
import { Eye, EyeOff, Lock } from "lucide-react";
import SubmitButton from "../components/ui/SubmitButton";
import toast from "react-hot-toast";

const EncryptPage = () => {

  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a PDF file first!");
      return;
    }
    if (!password) {
      toast.error("Please enter a password!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("password", password);

    const loadingToast = toast.loading("Encrypting your PDF...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/encrypt`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Encryption failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `encrypted_${file.name}`;

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.dismiss(loadingToast);
      toast.success("PDF encrypted successfully!");

      setFile(null);
      setPassword("");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 animate-fadeInUp">
      <PageHeader
        icon={Lock}
        title="Encrypt PDF"
        subtitle="Protect your PDF with password security"
        gradientColor="from-green-500 to-green-600"
      />
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <FileUpload
          file={file}
          onChange={handleFileUpload}
          accept=".pdf"
          uploadId="pdf-upload"
          color="green"
        />

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-3">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a strong password"
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-gray-500 hover:text-green-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <SubmitButton
          onClick={handleSubmit}
          icon={Lock}
          text="Encrypt & Download"
          gradientColor="from-green-500 to-green-600"
        />
      </div>
    </div>
  );
};

export default EncryptPage;
