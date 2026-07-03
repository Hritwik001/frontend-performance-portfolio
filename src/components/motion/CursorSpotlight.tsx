"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
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

    document.addEventListener("mousemove", handleMove);

    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
