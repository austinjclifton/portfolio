import { techIconMap } from "@/lib/techIcons";

type Props = {
  stack: readonly string[];
  size?: number; // px size, default 32
};

const FALLBACK_ICON = techIconMap.TypeScript;

export default function TechStackRow({ stack, size = 32 }: Props) {
  const px = Math.max(16, Math.min(64, Math.round(size)));

  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((tech, i) => (
        <img
          key={`${tech}-${i}`}
          src={techIconMap[tech] ?? FALLBACK_ICON}
          alt={tech}
          title={tech}
          width={px}
          height={px}
          className="opacity-95"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}