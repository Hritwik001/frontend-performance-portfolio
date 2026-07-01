"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

type RevealDirection = "up" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;

    const updateVisibility = (isVisible: boolean) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        element.classList.toggle("is-visible", isVisible);
        element.dataset.motionState = "ready";
      });
    };

    const setVisibility = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.08;

      updateVisibility(isVisible);
    };

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      element.dataset.motionState = "ready";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          updateVisibility(true);
        } else {
          updateVisibility(false);
        }
      },
      {
        rootMargin: "-14% 0px -16% 0px",
        threshold: 0.08,
      }
    );

    setVisibility();
    observer.observe(element);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-reveal-direction={direction}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
