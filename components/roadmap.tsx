"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Package, Users, FileText, Rocket, Layers, Cpu, Code } from "lucide-react";

export default function Roadmap() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-8">Roadmap</h2>
      {/* Add roadmap content here */}
    </div>
  );
}


function TimelineRow({
    year,
    quarter,
    title,
    items,
    position,
  }: {
    year: string
    quarter: string
    title: string
    items: { icon: React.ReactNode; text: string }[]
    position: "left" | "right"
  }) {
    return (
      <div className="relative">
        {/* Date marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center z-10"
        >
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </motion.div>
  
        <div className={`grid grid-cols-2 gap-4 ${position === "right" ? "flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${position === "left" ? "text-right pr-12" : "col-start-2 pl-12"}`}
          >
            <div className="mb-2">
              <span className="text-pink-500 text-xl">
                {year} {quarter}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="space-y-3">
              {items.map((item, i) => (
                <div key={i} className={`flex items-center ${position === "left" ? "justify-end" : ""}`}>
                  <div className={`${position === "left" ? "order-2 ml-2" : "order-1 mr-2"} w-6 h-6 text-pink-500`}>
                    {item.icon}
                  </div>
                  <div className={`${position === "left" ? "order-1" : "order-2"}`}>{item.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
  
          <div className={`${position === "left" ? "col-start-2" : ""}`}></div>
        </div>
      </div>
    )
  }
  
  