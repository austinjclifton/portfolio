import { cn } from "@/lib/cn";
import TechStackRow from "@/components/TechStackRow";
import TagRow from "@/components/TagRow";

export type Job = {
  range: string;
  role: string;
  company: string;
  summary?: string;
  bullets?: readonly string[];
  tags: readonly string[];
  techStack: readonly string[];
  icon?: string;
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
  job: Job;
  className?: string;
};

export default function ExperienceCard({ job, className }: Props) {
  const id = `exp-${slugify(job.company)}`;

  return (
    <article
      id={id}
      className={cn(
        "reveal-card",
        "group glass card-pop rounded-2xl transition",
        "p-4 sm:p-6",
        "hover:bg-white/5",
        job.glow ? "animated-border" : null,
        className,
      )}
    >
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {job.icon ? (
            <img
              src={job.icon}
              alt={`${job.company} logo`}
              className="w-7 h-7 rounded-sm object-contain shrink-0"
              loading="lazy"
              decoding="async"
            />
          ) : null}

          <div className="min-w-0">
            <h3 className="font-semibold text-lg sm:text-2xl text-text truncate font-serif-display">
              {job.company}
            </h3>
            <p className="text-sm sm:text-base font-medium text-muted">
              {job.role}
            </p>
          </div>
        </div>

        <span className="text-xs sm:text-base text-muted whitespace-nowrap sm:mt-1">
          {job.range}
        </span>
      </header>

      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
        {job.summary && !job.bullets?.length ? (
          <p className="text-sm sm:text-base leading-relaxed text-muted">
            {job.summary}
          </p>
        ) : null}

        {job.bullets?.length ? (
          <ul className="space-y-2 pl-4 sm:pl-5 text-sm sm:text-base leading-relaxed text-muted list-disc">
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
        <TechStackRow stack={job.techStack} size={32} />
        <TagRow tags={job.tags} />
      </div>
    </article>
  );
}
