"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const frame = useRef(0);
  const pending = useRef<{ card: HTMLElement; event: PointerEvent } | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!canHover.matches) {
      return;
    }

    const apply = () => {
      frame.current = 0;
      const pendingMove = pending.current;

      if (!pendingMove) {
        return;
      }

      const { card, event } = pendingMove;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--spot-x", `${x}%`);
      card.style.setProperty("--spot-y", `${y}%`);
    };

    const handleMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      pending.current = { card, event };

      if (!frame.current) {
        frame.current = requestAnimationFrame(apply);
      }
    };

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".motion-card"));
    cards.forEach((card) => card.addEventListener("pointermove", handleMove, { passive: true }));

    return () => {
      cards.forEach((card) => card.removeEventListener("pointermove", handleMove));
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return null;
}
