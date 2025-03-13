import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "recharts";

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
        answer: "Our Pre-ICO is scheduled to start on [specific date]. Early participants can benefit from bonus tokens.",
        tab: "pre-ico",
      },
      {
        id: "token-type",
        question: "What type of token is being offered?",
        answer: "We are offering an ERC-20 compliant utility token on the Ethereum blockchain.",
        tab: "token",
      },
      {
        id: "client-support",
        question: "How can I get support as a client?",
        answer: "We offer 24/7 customer support through our helpdesk, live chat, and email channels.",
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
  return <div>faq</div>;
}
