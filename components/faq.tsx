"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Section } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [activeTab, setActiveTab] = useState("general");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    "what-is-ico-crypto"
  );

  const tabs = [
    { id: "general", label: "General" },
    { id: "pre-ico", label: "Pre-ICO & ICO" },
    { id: "token", label: "Token" },
    { id: "client", label: "Client" },
    { id: "legal", label: "Legal" },
  ];

  const question = [
    {
      id: "what-cryptocurrencies",
      question: "What Cryptocurrencies Can I Use To Purchase?",
      answer:
        "You can use Bitcoin, Ethereum, and Litecoin to purchase tokens during our ICO.",
      tab: "general",
    },
    {
      id: "what-is-ico-crypto",
      question: "What Is ICO Crypto?",
      answer:
        "Once ICO period is launched, You can purchased Token with Etherum, Bitcoin or Litecoin. You can also tempor incididunt ut labore et dolore magna aliqua sed do eiusmod eaque ipsa.",
      tab: "general",
    },
    {
      id: "how-participate",
      question: "How Can I Participate In The ICO Token Sale?",
      answer:
        "To participate in our ICO token sale, you need to register on our platform, complete KYC verification, and follow the purchase instructions.",
      tab: "general",
    },
    {
      id: "how-benefit",
      question: "How Do I Benefit From The ICO Token?",
      answer:
        "ICO tokens provide various benefits including platform access, voting rights, and potential value appreciation as the ecosystem grows.",
      tab: "general",
    },
    // Add more questions for other tabs
    {
      id: "pre-ico-start",
      question: "When does the Pre-ICO start?",
      answer:
        "Our Pre-ICO is scheduled to start on [specific date]. Early participants can benefit from bonus tokens.",
      tab: "pre-ico",
    },
    {
      id: "token-type",
      question: "What type of token is being offered?",
      answer:
        "We are offering an ERC-20 compliant utility token on the Ethereum blockchain.",
      tab: "token",
    },
    {
      id: "client-support",
      question: "How can I get support as a client?",
      answer:
        "We offer 24/7 customer support through our helpdesk, live chat, and email channels.",
      tab: "client",
    },
    {
      id: "legal-compliance",
      question: "Is your ICO compliant with regulations?",
      answer:
        "Yes, we have taken all necessary steps to ensure our ICO complies with relevant regulations in the jurisdictions we operate in.",
      tab: "legal",
    },
  ];

  const filteredQuestions = question.filter((q) => q.tab === activeTab);

  const toggleQuesiton = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl text-white font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join the industry leaders to discuss where the markets are heading.
            We accept token payments.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((q) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
               <button
                  onClick={() => toggleQuesiton(q.id)}
                  className="w-full flex items-center justify-between p-4 text-left bg-purple-900/30 hover:bg-purple-900/50 transition-colors"
                >
                  <h3 className="text-lg font-medium">{q.question}</h3>
                  {openQuestion === q.id ? (
                    <ChevronUp className="h-5 w-5 text-pink-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
