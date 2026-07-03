"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealDirection = "up" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 22 },
  left: { x: -26, y: 0 },
  right: { x: 26, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "0px 0px -10% 0px", amount: 0 }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 20,
        mass: 0.9,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
