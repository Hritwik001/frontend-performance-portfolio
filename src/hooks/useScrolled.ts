"use client";

import { useEffect, useRef, useState } from "react";

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const check = () => {
      frame.current = 0;
      setScrolled(window.scrollY > 20);
    };

    const handleScroll = () => {
      if (!frame.current) {
        frame.current = requestAnimationFrame(check);
      }
    };

    check();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return scrolled;
}
