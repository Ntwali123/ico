"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

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
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)

      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element)

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element) {
          const offsetTop = element.offsetTop - 100
          if (scrollPosition >= offsetTop) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-deep-purple/90 backdrop-blur-sm shadow-lg" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-pink-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L6 5.5L12 9L18 5.5L12 2Z" fill="currentColor" fillOpacity="0.8" />
                <path
                  d="M6 5.5V12.5L12 16L18 12.5V5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12.5V19.5L12 23L18 19.5V12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">ICOLand</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 overflow-x-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NavItem active={activeSection === section.id} onClick={() => scrollToSection(section.id)}>
                {section.label}
              </NavItem>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-deep-purple border-t border-purple-900/50"
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <MobileNavItem active={activeSection === section.id} onClick={() => scrollToSection(section.id)}>
                    {section.label}
                  </MobileNavItem>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function NavItem({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-2 text-sm font-medium transition-colors relative group",
        active ? "text-pink-500" : "text-white hover:text-pink-300",
      )}
    >
      {children}
      {active && (
        <motion.span
          layoutId="activeSection"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {!active && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full" />
      )}
    </button>
  )
}

function MobileNavItem({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "block w-full text-left px-3 py-2 text-base font-medium rounded-md",
        active ? "text-pink-500 bg-purple-900/20" : "text-white hover:bg-purple-900/10 hover:text-pink-300",
      )}
    >
      {children}
    </button>
  )
}

