"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-0"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300">
              We are always open and we welcome and questions you have for our
              team. If you wish to get in touch, please fill out the form below.
            </p>

            <ContactItem
              icon={<Mail className="h-5 w-5" />}
              text="info@yourcompany.com"
            />

            <ContactItem
              icon={<Phone className="h-5 w-5" />}
              text="+84 0977425031"
            />

            <ContactItem
              icon={<Send className="h-5 w-5" />}
              text="Join us on Telegram"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-purple-900/30 border border-purple-800/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-purple-900/30 border border-purple-800/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-purple-900/30 border border-purple-800/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-purple-900/30 border border-purple-800/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-pink-500/20"
              >
                SUBMIT YOUR MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mr-4">
        {icon}
     </div>
      <span>{text}</span>
    </div>
  );
}
