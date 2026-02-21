import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  index: string; // "01." etc
  title: string; // "About"
  children: ReactNode;
  className?: string;
  /**
   * If false, the section won't animate on scroll.
   * Cards inside can still use .reveal-card.
   */
  reveal?: boolean;
};

export default function Section({
  id,
  index,
  title,
  children,
  className,
  reveal = true,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", reveal && "reveal", className)}>
      <div className="flex items-center gap-4">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-semibold tracking-widest opacity-80">
            {index}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        </div>

        <div aria-hidden="true" className="h-px flex-1 bg-yellow-400/70" />
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}