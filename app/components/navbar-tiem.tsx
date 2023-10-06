"use client";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 0.95, y: 10 },
};

export default function NavbarItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <motion.a
        href={href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        variants={variants}
        transition={{ delay: 0.2 }}
      >
        {text}
      </motion.a>
    </div>
  );
}
