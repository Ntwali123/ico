"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function TokenAllocation() {
  const [activeTab, setActiveTab] = useState<"distribution" | "allocation">("distribution")

  const distributionData = [
    { label: "Marketing", percentage: 25, color: "bg-blue-500" },
    { label: "Business Development", percentage: 25, color: "bg-purple-500" },
    { label: "Product Development", percentage: 10, color: "bg-green-500" },
    { label: "Reserve", percentage: 10, color: "bg-amber-500" },
    { label: "Token Sale", percentage: 20, color: "bg-pink-500" },
  ]

  const allocationData = [
    { label: "Public Sale", percentage: 40, color: "bg-indigo-500" },
    { label: "Team", percentage: 20, color: "bg-cyan-500" },
    { label: "Advisors", percentage: 10, color: "bg-teal-500" },
    { label: "Ecosystem", percentage: 30, color: "bg-orange-500" },
  ]

  const currentData = activeTab === "distribution" ? distributionData : allocationData

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">Token Allocation & Funds Distribution</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join the industry leaders to discuss where the markets are heading. We accept token payments.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-purple-900/50">
            <button
              onClick={() => setActiveTab("distribution")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "distribution"
                  ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                  : "text-gray-300 hover:text-white",
              )}
            >
              Distribution
            </button>
            <button
              onClick={() => setActiveTab("allocation")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === "allocation"
                  ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                  : "text-gray-300 hover:text-white",
              )}
            >
              Funding Allocation
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#333" strokeWidth="20" />
                {currentData.map((item, index) => {
                  const offset = currentData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0)
                  return (
                    <circle
                      key={item.label}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={item.color.replace("bg-", "")}
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * item.percentage) / 100}
                      transform={`rotate(${offset * 3.6 - 90} 50 50)`}
                    />
                  )
                })}
                <circle cx="50" cy="50" r="25" fill="#0F172A" />
              </svg>
            </div>
          </motion.div>

          <div className="space-y-6">
            {currentData.map((item, index) => (
              <AllocationItem
                key={item.label}
                label={item.label}
                percentage={item.percentage}
                color={item.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AllocationItem({
  label,
  percentage,
  color,
  delay = 0,
}: {
  label: string
  percentage: number
  color: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between">
        <span>
          {label}: {percentage}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
          className={`h-full ${color} rounded-full`}
        ></motion.div>
      </div>
    </motion.div>
  )
}

