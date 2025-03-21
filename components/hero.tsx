"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(timer);
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=1920&h=1080&fit=crop"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-900/70"></div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <span className="font-bold">75% SAVE</span>
              <span className="text-gray-300">
                For the Black Friday weekend
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Powering Data For The New Equity Blockchain.
            </h1>

            <p className="text-lg text-gray-300">
              The platform helps investors to make easy to purchase and sell
              their tokens
            </p>

            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-pink-500/20"
            >
              REGISTER & BUY TOKEN NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-800/50"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Token Sale End In
            </h2>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Mins" />
              <TimeBox value={timeLeft.seconds} label="Secs" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>
                  Raised - <span className="text-pink-500">1,450 Tokens</span>
                </span>
                <span>
                  Target - <span className="text-pink-500">150,000 Tokens</span>
                </span>
              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
                  style={{ width: "40%" }}
                >
                  <div className="relative">
                    <span className="absolute -top-6 right-0 text-xs bg-pink-500 px-2 py-1 rounded">
                      60,490
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span>Soft cap</span>
                <span>Crowdsale</span>
                <span>Hard cap</span>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-6">
              {["Bitcoin", "Binance", "PayPal", "Kyber"].map((name, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <span className="text-xl">₿</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-purple-900/70 rounded-lg p-4 text-center">
      <div className="text-3xl md:text-4xl font-bold">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
