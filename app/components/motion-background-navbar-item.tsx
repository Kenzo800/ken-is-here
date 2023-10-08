"use client";
import { motion } from "framer-motion";
import styles from "@/app/style/NavbarItem.module.css";
import Link from "next/link";

const variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
};

export default function MotionBackgroundNavbarItem({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    // <motion.div
    //   className="absolute w-full h-full bg-blue-500 z-0"
    //   initial={{ scaleX: 0 }}
    //   whileHover={{ scaleX: 1 }}
    //   exit={{ scaleX: 0 }}
    //   transition={{ duration: 0.3, ease: "easeInOut" }}
    //   style={{ originX: 0 }}
    // >
    //   <Link href={href}>
    //     <span className="text-blue-500 hover:text-white cursor-pointer z-1">
    //       {text}
    //     </span>
    //   </Link>
    // </motion.div>
    <motion.span
      className={styles.navbarItem}
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.1 }}
    >
      <Link href={href}>
        <span className="text-blue-500 hover:bg-blue-200 p-2 rounded cursor-pointer">
          {text}
        </span>
      </Link>
    </motion.span>
  );
}
