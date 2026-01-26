import {
  Lock,
  FileText,
  Shield,
  Zap,
  Cloud,
  Merge,
  Scissors,
  Minimize2,
  Image,
  Unlock,
  RotateCw,
  Sheet,
  Droplet,
  FileCheck,
  Heart,
  Globe,
} from "lucide-react";

// ==================== APP CONFIG ====================
export const APP_CONFIG = {
  APP_NAME: "DocuTools",
  TAGLINE: "Your All-in-One Document Solution",
  COPYRIGHT: "© 2026 DocuTools. All rights reserved.",
  MAX_FILE_SIZE: 10 * 1024 * 1024,
  ALLOWED_PDF_SIZE: 5 * 1024 * 1024,
};

// ==================== TOOLS DATA ====================
export const TOOLS = [
  // PDF Converters
  {
    id: "pdf-to-word",
    path: "/pdf-to-word",
    icon: FileText,
    title: "PDF to Word",
    desc: "Convert PDF documents to editable DOCX",
    color: "from-emerald-500 to-emerald-600",
    category: "converter",
    active: true,
  },
  {
    id: "encrypt",
    path: "/encrypt",
    icon: Lock,
    title: "Encrypt PDF",
    desc: "Protect your PDFs with password security",
    color: "from-green-500 to-green-600",
    category: "security",
    active: true,
  },
  {
    id: "word-to-pdf",
    path: "/word-to-pdf",
    icon: FileText,
    title: "Word to PDF",
    desc: "Convert DOCX files to PDF format",
    color: "from-teal-500 to-teal-600",
    category: "converter",
    active: false,
  },

  // PDF Security
  {
    id: "unlock-pdf",
    path: "/unlock-pdf",
    icon: Unlock,
    title: "Unlock PDF",
    desc: "Remove password protection from PDFs",
    color: "from-blue-500 to-blue-600",
    category: "security",
    active: false,
  },

  // PDF Tools
  {
    id: "merge-pdf",
    path: "/merge-pdf",
    icon: Merge,
    title: "Merge PDF",
    desc: "Combine multiple PDFs into one file",
    color: "from-purple-500 to-purple-600",
    category: "tools",
    active: false,
  },
  {
    id: "split-pdf",
    path: "/split-pdf",
    icon: Scissors,
    title: "Split PDF",
    desc: "Divide PDF into multiple files",
    color: "from-pink-500 to-pink-600",
    category: "tools",
    active: false,
  },
  {
    id: "compress-pdf",
    path: "/compress-pdf",
    icon: Minimize2,
    title: "Compress PDF",
    desc: "Reduce PDF file size without losing quality",
    color: "from-orange-500 to-orange-600",
    category: "tools",
    active: false,
  },
  {
    id: "rotate-pdf",
    path: "/rotate-pdf",
    icon: RotateCw,
    title: "Rotate PDF",
    desc: "Rotate PDF pages to any angle",
    color: "from-indigo-500 to-indigo-600",
    category: "tools",
    active: false,
  },
  {
    id: "watermark-pdf",
    path: "/watermark-pdf",
    icon: Droplet,
    title: "Watermark PDF",
    desc: "Add text or image watermark to PDFs",
    color: "from-cyan-500 to-cyan-600",
    category: "tools",
    active: false,
  },

  // Image Converters
  {
    id: "pdf-to-image",
    path: "/pdf-to-image",
    icon: Image,
    title: "PDF to Image",
    desc: "Convert PDF pages to JPG or PNG images",
    color: "from-red-500 to-red-600",
    category: "image",
    active: false,
  },
  {
    id: "image-to-pdf",
    path: "/image-to-pdf",
    icon: Image,
    title: "Image to PDF",
    desc: "Convert JPG, PNG images to PDF",
    color: "from-yellow-500 to-yellow-600",
    category: "image",
    active: false,
  },

  // Excel Tools
  {
    id: "pdf-to-excel",
    path: "/pdf-to-excel",
    icon: Sheet,
    title: "PDF to Excel",
    desc: "Extract tables from PDF to Excel",
    color: "from-lime-500 to-lime-600",
    category: "converter",
    active: false,
  },
  {
    id: "excel-to-pdf",
    path: "/excel-to-pdf",
    icon: Sheet,
    title: "Excel to PDF",
    desc: "Convert Excel spreadsheets to PDF",
    color: "from-green-600 to-green-700",
    category: "converter",
    active: false,
  },

  //resume
  {
    id: "resume-builder",
    path: "/resume-builder",
    icon: FileText,
    title: "Resume Builder",
    desc: "Create professional resumes with beautiful templates",
    color: "from-purple-500 to-purple-600",
    category: "resume",
    active: false,
  },
  {
    id: "resume-checker",
    path: "/resume-checker",
    icon: FileCheck,
    title: "Resume Checker",
    desc: "Check your resume for ATS compatibility and get improvement suggestions",
    color: "from-fuchsia-500 to-fuchsia-600",
    category: "resume",
    active: false,
  },
];

// ==================== TOOL CATEGORIES ====================
export const TOOL_CATEGORIES = [
  { id: "all", name: "All Tools", icon: FileText },
  { id: "converter", name: "Converters", icon: FileText },
  { id: "security", name: "Security", icon: Lock },
  { id: "tools", name: "PDF Tools", icon: Scissors },
  { id: "image", name: "Image Tools", icon: Image },
  { id: "resume", name: "Resume Tools", icon: FileCheck },
];

// ==================== FEATURES DATA ====================
export const FEATURES = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    desc: "Your files are encrypted and never stored",
  },
  {
    icon: Zap,
    title: "Lightning Speed",
    desc: "Process files in seconds, not minutes",
  },
  {
    icon: Cloud,
    title: "Cloud Processing",
    desc: "Works on any device, anywhere",
  },
];

// ==================== FOOTER FEATURES ====================
export const FOOTER_FEATURES = [
  {
    icon: Shield,
    title: "100% Secure",
    desc: "Files encrypted end-to-end",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Process files in seconds",
  },
  {
    icon: Cloud,
    title: "No Storage",
    desc: "Files deleted immediately",
  },
];

// ==================== ABOUT PAGE DATA ====================

// Stats for About Page
export const ABOUT_STATS = [
  { number: "100K+", label: "Happy Users" },
  { number: "1M+", label: "Files Processed" },
  { number: "99.9%", label: "Uptime" },
  { number: "100%", label: "Secure" },
];

// Core Values
export const ABOUT_VALUES = [
  {
    icon: Shield,
    title: "Security First",
    desc: "Your privacy is our top priority. All files are encrypted and deleted immediately after processing.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "We've optimized our tools to process your documents in seconds, not minutes.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Heart,
    title: "User Focused",
    desc: "Built with simplicity in mind. No sign-ups, no hassle - just tools that work.",
    color: "from-teal-500 to-teal-600",
  },
];

// Why Choose Us Features
export const WHY_CHOOSE_FEATURES = [
  "End-to-end encryption for all files",
  "No file storage - instant deletion",
  "No registration required",
  "Free forever for all users",
  "Works on any device",
  "24/7 availability",
];

// Technology Features
export const TECH_FEATURES = [
  {
    icon: Lock,
    title: "Bank-Level Security",
    desc: "256-bit SSL encryption protects your files during upload and processing",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-white",
  },
  {
    icon: Cloud,
    title: "Cloud Processing",
    desc: "Powerful servers handle the heavy lifting so your device doesn't have to",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "from-emerald-50 to-white",
  },
  {
    icon: Globe,
    title: "Universal Access",
    desc: "Works seamlessly on desktop, tablet, and mobile devices",
    color: "from-teal-500 to-teal-600",
    bgColor: "from-teal-50 to-white",
  },
];
