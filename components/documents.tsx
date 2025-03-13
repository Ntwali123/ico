"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Link } from "lucide-react";

export default function Documents() {
  const documents = [
    {
      id: "whitepaper",
      title: "WHITE PAPER",
      label: "Whitepaper",
      color: "from-blue-600 to-purple-600",
    },
    {
      id: "onepager",
      title: "ONE PAGER",
      label: "OnePager",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: "privacy",
      title: "PRIVACY POLICY",
      label: "Privacy Policy",
      color: "from-red-600 to-pink-600",
    },
    {
      id: "terms",
      title: "TERM OF COIN SALES",
      label: "Terms of Sale",
      color: "from-teal-600 to-blue-600",
    },
  ];
  return <div>documents</div>;
}
