"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TokenDetails() {
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
          <h2 className="text-4xl font-bold mb-4">ICO Token Details</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join the industry leaders to discuss where the markets are heading.
            We accept token payments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <DetailCard
              title="Start"
              value="Aug 8, 2021 (9:00AM GMT)"
              gradient="from-blue-600 to-blue-400"
            />

            <DetailCard
              title="End"
              value="Feb 10, 2022 (9:00AM GMT)"
              gradient="from-indigo-600 to-indigo-400"
            />

            <DetailCard
              title="Number Of Tokens For Sale"
              value="1,000,000 Tokens"
              gradient="from-purple-600 to-purple-400"
            />

            <DetailCard
              title="Tokens Exchange Rate"
              value="1 ETH = 650 ICC, 1 BTC = 1940 ICC"
              gradient="from-pink-600 to-pink-400"
            />

            <DetailCard
              title="Minimal Transaction"
              value="10 Tokens / Transaction"
              gradient="from-red-600 to-red-400"
            />

            <DetailCard
              title="Acceptable Currencies"
              value="ETH, BTC, LTC"
              gradient="from-amber-600 to-amber-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=500&h=500&fit=crop"
              alt="Token Details Illustration"
              width={500}
              height={500}
              className="w-full max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  title,
  value,
  gradient,
}: {
  title: string;
  value: string;
  gradient: string;
}) {
  return (
    <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800/30">
      <div
        className={`bg-gradient-to-r ${gradient} text-white p-4 -mt-8 rounded-lg shadow-lg mb-3`}
      >
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-gray-300">{value}</p>
    </div>
  );
}
