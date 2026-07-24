"use client";

import { motion } from "framer-motion";

type CornerGlowProps = {
  className: string;
  fromX: number;
  fromY: number;
  delay?: number;
};

export function CornerGlow({ className, fromX, fromY, delay = 0 }: CornerGlowProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      initial={{ opacity: 0, scale: 0.7, x: fromX, y: fromY }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 }}
    />
  );
}
