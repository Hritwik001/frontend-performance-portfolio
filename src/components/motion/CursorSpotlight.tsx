"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const frame = useRef(0);
  const pending = useRef<MouseEvent | null>(null);

  useEffect(() => {
    const apply = () => {
      frame.current = 0;
      const event = pending.current;

      if (!event) {
        return;
      }

      const card = (event.target as HTMLElement).closest<HTMLElement>(".motion-card");

      if (!card) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--spot-x", `${x}%`);
      card.style.setProperty("--spot-y", `${y}%`);
    };

    const handleMove = (event: MouseEvent) => {
      pending.current = event;

      if (!frame.current) {
        frame.current = requestAnimationFrame(apply);
      }
    };

    document.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return null;
}
