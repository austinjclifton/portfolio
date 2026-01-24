import { cn } from "@/lib/cn";
import TechStackRow from "@/components/TechStackRow";
import TagRow from "@/components/TagRow";

type Project = {
  name: string;
  description: string;
  href: string;
  tags: readonly string[];
  techStack: readonly string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group glass block rounded-2xl p-4 sm:p-6 transition focus-ring",
        "hover:bg-black/[0.02]",
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <h3 className="font-bold tracking-tight text-lg font-serif-display">
          {project.name}
        </h3>
        <span className="mt-1 flex-shrink-0 text-lg text-[rgba(var(--accent),0.85)] opacity-0 transition group-hover:opacity-100">
          ↗
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 sm:mt-3 text-base leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Tech + Tags */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
        <TechStackRow stack={project.techStack} />
        <TagRow tags={project.tags} />
      </div>
    </a>
  );
}
