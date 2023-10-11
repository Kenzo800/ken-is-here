"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarItem from "@/app/components/navbar-tiem";

const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 0.95, y: 10 },
};

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", text: "About Me" },
    { href: "#education", text: "Education" },
    { href: "#project", text: "Project" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <div className="relative md:hidden">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="p-2 rounded bg-[#646464] hover:bg-[#878787]"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.25 }}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {menuItems.map((item, i) => (
                <NavbarItem
                  key={i}
                  delay={(i + 1) * 0.15}
                  href={item.href}
                  text={item.text}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
