"use client";

import { useEffect } from "react";

export default function ScrollSpy({ sectionIds }: { sectionIds: string[] }) {
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) {
          window.dispatchEvent(
            new CustomEvent("portfolio:active", { detail: visible.target.id }),
          );
        }
      },
      { rootMargin: "-50% 0px -49% 0px", threshold: [0] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  return null;
}
