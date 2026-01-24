import { ReactNode } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, kicker, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 lg:scroll-mt-20"
    >
      <div className="mb-6 sm:mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
        <span className="text-sm font-semibold text-[rgba(var(--accent),0.9)] whitespace-nowrap">
          {kicker}
        </span>

        <div className="flex items-baseline gap-3 sm:gap-4 w-full">
          <h2 className="text-3xl font-semibold tracking-tight font-serif-headline">
            {title}
          </h2>
          <div className="h-px flex-1 bg-black/10" />
        </div>
      </div>

      {children}
    </section>
  );
}
