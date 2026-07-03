"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";

import { Button } from "@/components/ui/Button";
import { Brand } from "./Brand";
import { Container } from "./Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--border-strong)] bg-black/80 backdrop-blur-md"
          : "border-b border-transparent bg-black/40 backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Brand />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact" aria-label="Go to contact section">
              <Button>Let&apos;s Talk</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-[var(--border)] md:hidden"
            >
              <div className="flex flex-col gap-5 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  aria-label="Go to contact section"
                >
                  <Button className="mt-2 w-full">Let&apos;s Talk</Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
