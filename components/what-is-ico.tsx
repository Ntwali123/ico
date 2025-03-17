"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Crown, Globe, Gem } from "lucide-react";

export default function WhatIsIco() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">What Is ICO?</h2>
          <div className="flex items-center justify-center mb-8">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            <p className="text-lg text-gray-300">
              The world first platform to reward investors and traders build on
              ICO
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <FeatureItem
            icon={<Crown className="h-6 w-6" />}
            title="Decentralized Platform"
            description="The platform helps investors to make easy to purchase and sell their tokens"
          />

          <FeatureItem
            icon={<Globe className="h-6 w-6" />}
            title="Crowd Wisdom"
            description="The process of taking into account the collective opinion of a group"
          />

          <FeatureItem
            icon={<Gem className="h-6 w-6" />}
            title="Secure Trading"
            description="Advanced security measures to protect your investments and transactions"
          />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-800/30 hover:bg-purple-900/40 transition-colors">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
}
