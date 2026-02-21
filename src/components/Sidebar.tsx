// src/components/Sidebar.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { site, type NavSection, type SocialLink } from "@/content/site";
import { ACTIVE_SECTION_EVENT } from "@/utils/ScrollSpy";

type SidebarProps = {
  name?: string;
  title?: string;
  blurb?: string;
  socials?: readonly SocialLink[];
  sections?: readonly NavSection[];
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Sidebar({
  name = site.name,
  title = site.title,
  blurb = site.tagline,
  socials = site.social,
  sections = site.nav,
}: SidebarProps) {
  const items = useMemo(() => (sections ?? []).slice(), [sections]);

  const [activeId, setActiveId] = useState<string>(() => items[0]?.id ?? "");

  useEffect(() => {
    const first = items[0]?.id ?? "";
    setActiveId((prev) => (items.some((s) => s.id === prev) ? prev : first));
  }, [items]);

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
    <aside className="flex h-full flex-col">
      <div className="sticky top-10">
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight">
              {name}
            </h1>
            <p className="mt-3 text-lg opacity-90">{title}</p>
          </div>

          <p className="max-w-[28ch] text-base leading-6 opacity-80 whitespace-pre-line">{blurb}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {socials.map((s) => {
              const external = isExternalHref(s.href);
              const target = external ? "_blank" : undefined;
              const rel = external ? "noopener noreferrer" : undefined;

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={target}
                  rel={rel}
                  className="text-base font-medium opacity-80 transition-opacity hover:opacity-100"
                >
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Section navigation" className="mt-10">
          <ul className="flex flex-col gap-6">
            {items.map((item) => {
              const isActive = item.id === activeId;

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
                          : "opacity-30 group-hover:opacity-70"
                      )}
                    />
                    <span
                      className={cn(
                        "transition-opacity duration-200",
                        isActive
                          ? "opacity-100"
                          : "opacity-70 group-hover:opacity-100"
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
    </aside>
  );
}