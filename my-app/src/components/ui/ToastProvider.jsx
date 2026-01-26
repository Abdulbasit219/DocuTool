import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        // Default options
        duration: 4000,
        style: {
          background: "#fff",
          color: "#1f2937",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "500",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        },
        // Success
        success: {
          iconTheme: {
            primary: "#10b981",
            secondary: "#fff",
          },
          style: {
            border: "2px solid #10b981",
          },
        },
        // Error
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
          style: {
            border: "2px solid #ef4444",
          },
        },
        // Loading
        loading: {
          iconTheme: {
            primary: "#3b82f6",
            secondary: "#fff",
          },
          style: {
            border: "2px solid #3b82f6",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
