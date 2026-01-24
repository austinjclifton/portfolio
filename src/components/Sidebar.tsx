"use client";

import { useEffect, useState, useCallback } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const ACTIVE_SECTION_EVENT = "portfolio:active";

export default function Sidebar() {
  const [active, setActive] = useState<string>(site.nav[0]?.id ?? "about");

  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<string>;
      if (ev.detail) setActive(ev.detail);
    };

    window.addEventListener(ACTIVE_SECTION_EVENT, handler);
    return () => window.removeEventListener(ACTIVE_SECTION_EVENT, handler);
  }, []);

  const isActive = useCallback((id: string) => active === id, [active]);

  return (
    <div className="flex h-full flex-col justify-between gap-10 sm:gap-14">
      {/* Profile */}
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight font-serif-headline">
            {site.name}
          </h1>

          <div className="flex items-center gap-4">
            <p className="text-xl sm:text-2xl text-[rgba(var(--text),0.85)]">
              {site.title}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {site.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "focus-ring transition-all",
                    "hover:opacity-80 hover:scale-105",
                  )}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>

          <p className="max-w-sm text-lg leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block pt-6 sm:pt-8">
          <ul className="space-y-3">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "group flex items-center gap-3 rounded-lg px-4 py-2 text-base transition-colors",
                    "hover:bg-black/5 focus-ring",
                    isActive(item.id)
                      ? "text-[rgba(var(--text),1)]"
                      : "text-muted hover:text-[rgba(var(--text),0.7)]",
                  )}
                >
                  <span
                    className={cn(
                      "h-px transition-all duration-200",
                      isActive(item.id)
                        ? "w-16 bg-black"
                        : "w-8 bg-black/15 group-hover:w-12",
                    )}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
