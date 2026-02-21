// src/utils/ScrollSpy.tsx

"use client";

import { useEffect, useMemo, useRef } from "react";

export const ACTIVE_SECTION_EVENT = "portfolio:active";

type ScrollSpyProps = {
  sectionIds: string[];
  targetViewportRatio?: number; // default 0.35
};

function getViewportHeight() {
  return window.innerHeight || document.documentElement.clientHeight || 0;
}

function getElementsByIds(ids: string[]) {
  return ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));
}

export default function ScrollSpy({
  sectionIds,
  targetViewportRatio = 0.35,
}: ScrollSpyProps) {
  const lastIdRef = useRef<string | null>(null);
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds]);

  useEffect(() => {
    const els = getElementsByIds(sectionIds);
    if (!els.length) return;

    const pickActive = () => {
      const vh = getViewportHeight();
      if (!vh) return;

      const targetY = vh * targetViewportRatio;

      let bestId: string | null = null;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const el of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= vh) continue;

        const dist = Math.abs(r.top - targetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = el.id;
        }
      }

      if (!bestId) return;

      if (lastIdRef.current !== bestId) {
        lastIdRef.current = bestId;
        window.dispatchEvent(
          new CustomEvent<string>(ACTIVE_SECTION_EVENT, { detail: bestId })
        );
      }
    };

    // Initial pick (first paint)
    pickActive();

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pickActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // If user clicks a hash link, browsers may update layout/scroll asynchronously.
    // Schedule a couple of cheap re-picks to stay accurate without adding complexity.
    const onHash = () => {
      requestAnimationFrame(pickActive);
      setTimeout(pickActive, 120);
    };
    window.addEventListener("hashchange", onHash);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, [idsKey, sectionIds, targetViewportRatio]);

  return null;
}