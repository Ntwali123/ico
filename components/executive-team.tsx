"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ExecutiveTeam() {
  const team = [
    {
      name: "Charlee Mangar",
      role: "Co-founder & COO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    },
    {
      name: "Jason Morales",
      role: "CTO & Software Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
      name: "Louis Baker",
      role: "CTO & Software Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
      socials: true,
    },
    {
      name: "Dianne Russell",
      role: "Sr.Backend developer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Executive Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team player alway finds effective ways to improve the product
            and process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socials={member.socials}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({
  name,
  role,
  image,
  socials,
  delay = 0,
}: {
  name: string;
  role: string;
  image: string;
  socials?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-80"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-300">{role}</p>

          {socials && (
            <div className="flex space-x-3 mt-3">
              <Link
                href="#"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
