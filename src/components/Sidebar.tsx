// src/components/Sidebar.tsx

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/content/content";
import { ACTIVE_SECTION_EVENT } from "@/components/behavior/ScrollSpy";
import { getExternalLinkProps } from "@/lib/url";

export default function Sidebar() {
  const items = site.nav;
  const [activeId, setActiveId] = useState<string>(() => items[0]?.id ?? "");
  const visibleActiveId = items.some((s) => s.id === activeId)
    ? activeId
    : (items[0]?.id ?? "");

  // ScrollSpy is still the long-term source of truth while scrolling.
  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<string>;
      if (!ev.detail) return;
      setActiveId(ev.detail);
    };

    window.addEventListener(ACTIVE_SECTION_EVENT, handler);
    return () => window.removeEventListener(ACTIVE_SECTION_EVENT, handler);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="sticky top-10">
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight">
              {site.name}
            </h1>
            <p className="mt-3 text-lg opacity-90">{site.title}</p>
          </div>

          <p className="max-w-[28ch] text-base leading-6 opacity-80 whitespace-pre-line">
            {site.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...getExternalLinkProps(s.href)}
                className="text-base font-medium opacity-80 transition-opacity hover:opacity-100"
              >
                {s.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="text-base font-medium opacity-80 transition-opacity hover:opacity-100"
            >
              Email
            </a>
          </div>
        </div>

        <nav aria-label="Section navigation" className="mt-10">
          <ul className="flex flex-col gap-6">
            {items.map((item) => {
              const isActive = item.id === visibleActiveId;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      // Minimal fix: immediate UI feedback on click.
                      setActiveId(item.id);
                    }}
                    className="group inline-flex items-center gap-3 text-base tracking-wide"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-5 w-px bg-yellow-400 transition-opacity duration-200",
                        isActive
                          ? "opacity-100"
                          : "opacity-30 group-hover:opacity-70",
                      )}
                    />
                    <span
                      className={cn(
                        "transition-opacity duration-200",
                        isActive
                          ? "opacity-100"
                          : "opacity-70 group-hover:opacity-100",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
