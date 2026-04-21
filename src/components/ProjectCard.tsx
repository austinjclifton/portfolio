import { cn } from "@/lib/cn";
import TechStackRow from "@/components/TechStackRow";
import TagRow from "@/components/TagRow";

export type Project = {
  name: string;
  description: string;
  href: string;
  tags: readonly string[];
  techStack: readonly string[];
  glow?: boolean; // when true, apply animated border class
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Props = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: Props) {
  const id = `proj-${slugify(project.name)}`;

  const isExternal =
    project.href.startsWith("http://") || project.href.startsWith("https://");

  const target = isExternal ? "_blank" : undefined;
  const rel = isExternal ? "noopener noreferrer" : undefined;

  return (
    <a
      id={id}
      href={project.href}
      target={target}
      rel={rel}
      className={cn(
        "reveal-card",
        "group glass card-pop block rounded-2xl p-4 sm:p-6 transition",
        "focus-ring",
        "hover:bg-white/5",
        project.glow ? "animated-border" : null,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4 min-w-0">
        <h3 className="font-bold tracking-tight text-lg font-serif-display text-text min-w-0 truncate">
          {project.name}
        </h3>

        {isExternal ? (
          <span
            className={cn(
              "mt-1 flex-shrink-0 text-lg text-accent/90",
              "opacity-0 transition-opacity group-hover:opacity-100",
            )}
            aria-hidden
          >
            ↗
          </span>
        ) : null}
      </div>

      <p className="mt-2 sm:mt-3 text-base leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
        <TechStackRow stack={project.techStack} size={32} />
        <TagRow tags={project.tags} />
      </div>
    </a>
  );
}
