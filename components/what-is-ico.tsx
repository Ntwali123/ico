"use client";

import { motion } from "framer-motion";
import { Crown, Globe, Gem } from "lucide-react";

export default function WhatIsIco() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Is ICO?</h2>
          <p className="text-gray-300 text-lg">
            The world first platform to reward investors and traders build on
            ICO
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
        </div>
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
    <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-800/30">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
}
