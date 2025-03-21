"use client"

import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"
import Link from "next/link"

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
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Documents</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {documents.map((doc, index) => (
            <DocumentCard key={doc.id} title={doc.title} label={doc.label} color={doc.color} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DocumentCard({
  title,
  label,
  color,
  delay = 0,
}: {
  title: string
  label: string
  color: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`bg-gradient-to-br ${color} rounded-lg p-6 h-36 flex flex-col justify-center items-center text-center relative overflow-hidden transition-transform group-hover:scale-105`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`grid-${title}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <div className="flex justify-center space-x-1">
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium">{label}</span>
        <Link
          href="#"
          className="flex items-center text-sm font-medium bg-purple-900/50 hover:bg-purple-900/80 px-3 py-1 rounded-md transition-colors"
        >
          <span>PDF</span>
          <Download className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

