"use client";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 0.95, y: 10 },
};

export default function NavbarItem({
  href,
  text,
  delay,
}: {
  href: string;
  text: string;
  delay: number;
}) {
  return (
    <div className="relative overflow-hidden">
      <motion.a
        href={href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        variants={variants}
        transition={{ delay: delay }}
      >
        {text}
      </motion.a>
    </div>
  );
}
