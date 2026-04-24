// src/components/TagRow.tsx

import { cn } from "@/lib/cn";

type Props = {
  tags: readonly string[];
  small?: boolean;
  activeTagLabel?: string; // defaults to "Active"
  className?: string;
};

export default function TagRow({
  tags,
  small = false,
  activeTagLabel = "Active",
  className,
}: Props) {
  if (!tags?.length) return null;

  const activeLower = activeTagLabel.trim().toLowerCase();

  return (
    <div className={cn("flex flex-wrap gap-2 sm:gap-3", className)}>
      {tags.map((tag, i) => {
        const isActive = tag.trim().toLowerCase() === activeLower;

        return (
          <span
            key={`${tag}-${i}`}
            className={cn(
              "relative rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "bg-white/6 ring-1 ring-white/10 group-hover:bg-white/10 group-hover:ring-white/20",
              "text-accent/90",
              "group-hover:-translate-y-0.5",
              small ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
              isActive && "tag-animated-border",
            )}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
