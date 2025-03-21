"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Package,
  Users,
  FileText,
  Rocket,
  Layers,
  Cpu,
  Code,
} from "lucide-react";

export default function Roadmap() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The use of cryptocurrencies has become more widespread, The origin
            platform idea. Development of the concept and business plan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-pink-500/30"></div>

          <div className="grid grid-cols-1 gap-8">
            <TimelineRow
              year="2022"
              quarter="Q1"
              title="Concept"
              items={[
                { icon: <Users />, text: "Concept Generation" },
                { icon: <Users />, text: "Team Assemble" },
              ]}
              position="left"
            />

            <TimelineRow
              year="2022"
              quarter="Q2"
              title="Research"
              items={[
                { icon: <Package />, text: "Proving the concept can work" },
                { icon: <Users />, text: "Strategic Plan" },
                { icon: <FileText />, text: "White paper completion" },
              ]}
              position="right"
            />

            <TimelineRow
              year="2022"
              quarter="Q3"
              title="Design"
              items={[
                {
                  icon: <Layers />,
                  text: "Platform design and technical demonstration",
                },
                { icon: <Code />, text: "Building the MVP" },
              ]}
              position="left"
            />

            <TimelineRow
              year="2023"
              quarter="Q1"
              title="Pre-Sale"
              items={[
                {
                  icon: <Package />,
                  text: "Public financing & Seed funding raised",
                },
              ]}
              position="right"
            />

            <TimelineRow
              year="2023"
              quarter="Q2"
              title="Token Sale"
              items={[
                { icon: <Package />, text: "ICO Press Tour" },
                {
                  icon: <Users />,
                  text: "Open global sales of ICOblock token",
                },
              ]}
              position="left"
            />

            <TimelineRow
              year="2023"
              quarter="Q3"
              title="App Beta Test"
              items={[
                { icon: <Cpu />, text: "Private closed beta" },
                {
                  icon: <Users />,
                  text: "Open beta launched to public and improvement the app",
                },
              ]}
              position="right"
            />

            <TimelineRow
              year="2023"
              quarter="Q4"
              title="Alpha Test"
              items={[
                { icon: <Rocket />, text: "In-house testing of functional" },
                {
                  icon: <Code />,
                  text: "Prototype published and linked to Ethereum blockchain with real-time scanning",
                },
              ]}
              position="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  year,
  quarter,
  title,
  items,
  position,
}: {
  year: string;
  quarter: string;
  title: string;
  items: { icon: React.ReactNode; text: string }[];
  position: "left" | "right";
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

      <div
        className={`grid grid-cols-2 gap-4 ${
          position === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${
            position === "left" ? "text-right pr-12" : "col-start-2 pl-12"
          }`}
        >
          <div className="mb-2">
            <span className="text-pink-500 text-xl">
              {year} {quarter}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center ${
                  position === "left" ? "justify-end" : ""
                }`}
              >
                <div
                  className={`${
                    position === "left" ? "order-2 ml-2" : "order-1 mr-2"
                  } w-6 h-6 text-pink-500`}
                >
                  {item.icon}
                </div>
                <div
                  className={`${position === "left" ? "order-1" : "order-2"}`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={`${position === "left" ? "col-start-2" : ""}`}></div>
      </div>
    </div>
  );
}
