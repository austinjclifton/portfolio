import { cn } from "@/lib/cn";
import TechStackRow from "@/components/TechStackRow";
import TagRow from "@/components/TagRow";

type Job = {
  range: string;
  role: string;
  company: string;
  summary?: string;
  bullets?: readonly string[];
  tags: readonly string[];
  techStack: readonly string[];
  icon?: string;
};

export default function ExperienceCard({ job }: { job: Job }) {
  return (
    <div
      className={cn(
        "group glass rounded-2xl transition",
        "p-4 sm:p-6",
        "hover:bg-black/[0.02]",
      )}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {job.icon && (
            <img
              src={job.icon}
              alt={`${job.company} logo`}
              className="w-7 h-7 rounded-sm object-contain shrink-0"
            />
          )}

          <div className="min-w-0">
            <h3 className="font-semibold text-lg sm:text-2xl text-black truncate font-serif-display">
              {job.company}
            </h3>
            <p className="text-sm sm:text-base font-medium text-muted">
              {job.role}
            </p>
          </div>
        </div>

        {/* Date range */}
        <span className="text-xs sm:text-base text-muted whitespace-nowrap sm:mt-1">
          {job.range}
        </span>
      </div>

      {/* Body */}
      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
        {job.summary && !job.bullets && (
          <p className="text-sm sm:text-base leading-relaxed text-muted">
            {job.summary}
          </p>
        )}

        {job.bullets && (
          <ul className="space-y-2 pl-4 sm:pl-5 text-sm sm:text-base leading-relaxed text-muted list-disc">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Tech + Tags */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
        <TechStackRow stack={job.techStack} size={8} />
        <TagRow tags={job.tags} />
      </div>
    </div>
  );
}
