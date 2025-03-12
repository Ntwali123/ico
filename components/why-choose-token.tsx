"use client";

import type React from "react";

import { motion } from "framer-motion";
import { CreditCard, BarChart3, Shield, DollarSign } from "lucide-react";

export default function WhyChooseToken() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Our Token?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            official
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<CreditCard className="h-6 w-6" />}
            title="Mobile Payment"
            description="The process of taking into account the collective opinion of a group"
            delay={0.1}
          />

          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Investment Projects"
            description="The platform helps investors to make easy to purchase and sell their tokens"
            delay={0.2}
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Protect The Identity"
            description="The platform helps investors to make easy to purchase and sell their tokens"
            delay={0.3}
          />

          <FeatureCard
            icon={<DollarSign className="h-6 w-6" />}
            title="Security Your Money"
            description="The process of taking into account the collective opinion of a group"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 opacity-50 blur-md">
          <div className="relative">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
