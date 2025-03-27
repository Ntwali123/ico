"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function TokenAllocation() {
  const [activeTab, setActiveTab] = useState<"distribution" | "allocation">(
    "distribution"
  );

  const distributionData = [
    {
      label: "Marketing",
      percentage: 25,
      color: "#3B82F6",
      description: "Digital marketing, community growth, and brand awareness",
    },
    {
      label: "Business Development",
      percentage: 25,
      color: "#8B5CF6",
      description: "Partnerships, market expansion, and business operations",
    },
    {
      label: "Product Development",
      percentage: 20,
      color: "#10B981",
      description:
        "Platform development, security, and technical infrastructure",
    },
    {
      label: "Reserve",
      percentage: 15,
      color: "#F59E0B",
      description: "Emergency fund and future development reserves",
    },
    {
      label: "Token Sale",
      percentage: 15,
      color: "#EC4899",
      description: "Initial token offering and liquidity",
    },
  ];

  const allocationData = [
    {
      label: "Public Sale",
      percentage: 40,
      color: "#6366F1",
      description: "Available for public token purchase",
    },
    {
      label: "Team",
      percentage: 20,
      color: "#06B6D4",
      description: "Team incentives and compensation",
    },
    {
      label: "Advisors",
      percentage: 10,
      color: "#14B8A6",
      description: "Strategic advisors and consultants",
    },
    {
      label: "Ecosystem",
      percentage: 30,
      color: "#F97316",
      description: "Ecosystem development and community rewards",
    },
  ];

  const currentData =
    activeTab === "distribution" ? distributionData : allocationData;

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
          <h2 className="text-4xl font-bold mb-4">
            Token Allocation & Funds Distribution
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transparent breakdown of token distribution and fund allocation for
            sustainable growth
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
                  : "text-gray-300 hover:text-white"
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
                  : "text-gray-300 hover:text-white"
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
            <div className="relative w-80 h-80">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {currentData.map((item, index) => {
                  const offset = currentData
                    .slice(0, index)
                    .reduce((acc, curr) => acc + curr.percentage, 0);
                  return (
                    <motion.circle
                      key={item.label}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke={item.color}
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      animate={{
                        strokeDashoffset:
                          251.2 - (251.2 * item.percentage) / 100,
                      }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      transform={`rotate(${offset * 3.6 - 90} 50 50)`}
                    />
                  );
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
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AllocationItem({
  label,
  percentage,
  color,
  description,
  delay = 0,
}: {
  label: string;
  percentage: number;
  color: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <div>
          <span className="font-medium">{label}</span>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <span className="font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
