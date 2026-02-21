"use client";

import { useEffect } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInViewport(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return r.bottom > 0 && r.top < vh;
}

export default function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-card")
    );

    if (!nodes.length) return;

    // Reduced motion: show everything, no transitions.
    if (prefersReducedMotion()) {
      for (const el of nodes) el.classList.add("is-visible");
      return;
    }

    // Optional stagger: if a parent has data-reveal-group, stagger children .reveal-card
    const groups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-group]")
    );
    for (const group of groups) {
      const cards = Array.from(
        group.querySelectorAll<HTMLElement>(".reveal-card")
      );
      cards.forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${i * 60}ms`);
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // IMPORTANT:
    // Kick initial reveals to the next frame so the browser paints the "hidden" state first,
    // then transitions to visible (actual reveal animation).
    const raf = requestAnimationFrame(() => {
      for (const el of nodes) {
        if (el.classList.contains("is-visible")) continue;

        if (isInViewport(el)) {
          el.classList.add("is-visible");
        } else {
          io.observe(el);
        }
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return null;
}