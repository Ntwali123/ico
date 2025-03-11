"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Crown, Globe } from "lucide-react"
import Image from "next/image"

export default function WhatIsIco() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="ICO Illustration"
              width={500}
              height={500}
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">What Is ICO?</h2>

            <div className="flex items-center">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              <p className="text-lg text-gray-300">
                The world first platform to reward investors and traders build on ICO
              </p>
            </div>

            <div className="space-y-6">
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
                icon={<Crown className="h-6 w-6" />}
                title="Decentralized Platform"
                description="The platform helps investors to make easy to purchase and sell their tokens"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

