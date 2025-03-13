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
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl text-white font-bold mb-4">Documents</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Download the whitepaper and learn about ICO Token, the unique ICO
            Crypto approach and the team/advisors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => (
            <DocumentCard key={doc.id} title={doc.title} label={doc.label} color={doc.color} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DocumentCard({
  title,
  label,
  color,
  delay,
}:{
  title: string;
  label: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >

      <div>
        
      </div>
    </motion.div>
    
  )
}