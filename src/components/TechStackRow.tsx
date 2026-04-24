import { techIconMap } from "@/lib/techIcons";
import Image from "next/image";

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
        <Image
          key={`${tech}-${i}`}
          src={techIconMap[tech] ?? FALLBACK_ICON}
          alt={tech}
          title={tech}
          width={px}
          height={px}
          sizes={`${px}px`}
          className="opacity-95 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:scale-[1.04]"
          loading="lazy"
        />
      ))}
    </div>
  );
}
