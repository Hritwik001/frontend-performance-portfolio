"use client";

import { motion, Variants } from "framer-motion";

type TextRevealProps = {
  text: string;
  accentText?: string;
  className?: string;
  wordClassName?: string;
  accentClassName?: string;
  delay?: number;
  stagger?: number;
};

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay / 1000 },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function TextReveal({
  text,
  accentText,
  className = "",
  wordClassName = "",
  accentClassName = "",
  delay = 0,
}: TextRevealProps) {
  const words = [
    ...text.split(" ").map((w) => ({ text: w, accent: false })),
    ...(accentText ? accentText.split(" ").map((w) => ({ text: w, accent: true })) : []),
  ];

  return (
    <motion.span
      className={`inline ${className}`}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0, margin: "0px 0px -80px 0px" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w.text}-${i}`}
          variants={word}
          className={`inline-block will-change-transform ${i < words.length - 1 ? "mr-[0.28em]" : ""} ${
            w.accent ? accentClassName : wordClassName
          }`}
        >
          {w.text}
        </motion.span>
      ))}
    </motion.span>
  );
}
