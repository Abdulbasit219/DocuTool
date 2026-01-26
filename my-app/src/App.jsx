import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./pages/LandingPage";
import ToolsPage from "./pages/ToolsPage";
import EncryptPage from "./pages/EncryptPage";
import PdfToWordPage from "./pages/PdfToWordPage";
import WordToPdfPage from "./pages/WordToPdfPage";
import Footer from "./components/layout/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import ToastProvider from "./components/ui/ToastProvider";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/encrypt" element={<EncryptPage />} />
            <Route path="/pdf-to-word" element={<PdfToWordPage />} />
            <Route path="/word-to-pdf" element={<WordToPdfPage />} />
            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        <ToastProvider />
      </div>
    </Router>
  );
};

export default App;
