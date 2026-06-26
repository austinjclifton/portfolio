import { cn } from "@/lib/cn";
import TechStackRow from "@/components/TechStackRow";
import TagRow from "@/components/TagRow";
import type { ProjectItem } from "@/content/content";
import { getExternalLinkProps, isExternalHref, slugify } from "@/lib/url";

type Props = {
  project: ProjectItem;
  className?: string;
};

export default function ProjectCard({ project, className }: Props) {
  const id = `proj-${slugify(project.name)}`;

  const isExternal = isExternalHref(project.href);

  return (
    <a
      id={id}
      href={project.href}
      {...getExternalLinkProps(project.href)}
      className={cn(
        "reveal-card",
        "group glass card-pop block rounded-2xl p-4 sm:p-6",
        "focus-ring",
        project.glow ? "animated-border" : null,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4 min-w-0">
        <h3 className="font-bold tracking-tight text-lg text-text min-w-0 truncate transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-accent/95 group-focus-visible:text-accent/95">
          {project.name}
        </h3>

        {isExternal ? (
          <span
            className={cn(
              "mt-1 flex-shrink-0 text-lg text-accent/90",
              "translate-y-1 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              "group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
            )}
            aria-hidden
          >
            ↗
          </span>
        ) : null}
      </div>

      <p className="mt-2 sm:mt-3 text-base leading-relaxed text-muted transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[rgb(var(--text))]/88 group-focus-visible:text-[rgb(var(--text))]/88">
        {project.description}
      </p>

      <ul className="mt-3 sm:mt-4 space-y-1.5 pl-4 text-sm leading-relaxed text-muted list-disc transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[rgb(var(--text))]/88 group-focus-visible:text-[rgb(var(--text))]/88">
        {project.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent/90">
        {project.linkLabel}
        {isExternal ? <span aria-hidden>↗</span> : null}
      </span>

      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
        <TechStackRow stack={project.techStack} size={32} />
        <TagRow tags={project.tags} />
      </div>
    </a>
  );
}
