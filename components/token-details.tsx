"use client";

import { motion } from "framer-motion";
import { Image } from "lucide-react";

export default function TokenDetails() {
  return <div>TokenDetails</div>;
}

function DetailsCard({
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
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}
