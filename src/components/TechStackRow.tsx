// components/TechStackRow.tsx
import { techIconMap } from "@/lib/techIcons";

type Props = {
  stack: readonly string[];
  size?: number;
};

export default function TechStackRow({ stack, size = 8 }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {stack.map((tech) => (
        <img
          key={tech}
          src={techIconMap[tech] || techIconMap.TypeScript}
          alt={tech}
          title={tech}
          className={`w-${size} h-${size}`}
        />
      ))}
    </div>
  );
}
