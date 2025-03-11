"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "what-is-ico", label: "What Is ICO?" },
    { id: "why-choose", label: "Why Choose" },
    { id: "token-allocation", label: "Token Allocation" },
    { id: "roadmap", label: "Roadmap" },
    { id: "token-details", label: "Token Details" },
    { id: "team", label: "Team" },
    { id: "faq", label: "FAQ" },
    { id: "documents", label: "Documents" },
    { id: "contact", label: "Contact" },
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
  }, []);
  return <div>navbar</div>;
}
