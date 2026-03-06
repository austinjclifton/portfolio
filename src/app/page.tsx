import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import ScrollSpy from "@/utils/ScrollSpy";
import RevealObserver from "@/utils/RevealObserver";
import { site } from "@/content/content";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row">
      <RevealObserver />

      <aside className="w-full lg:w-[420px] lg:fixed lg:left-0 lg:top-0 lg:h-dvh lg:overflow-y-auto">
        <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 page-intro">
          <div className="mb-6 h-[2px] w-full bg-accent/80 page-sweep" />
          <Sidebar />
        </div>
      </aside>

      <div className="w-full lg:ml-[420px]">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-20">
          <main className="space-y-12 sm:space-y-16 md:space-y-20 page-intro">
            <ScrollSpy sectionIds={site.nav.map((n) => n.id)} />

            <Section id="about" index="01." title="About">
              <div className="space-y-4 sm:space-y-6 text-muted leading-relaxed text-lg">
                {site.aboutParagraphs.map((paragraph, idx) => (
                  <p key={`${idx}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
                ))}

                <div className="pt-6 sm:pt-8 space-y-6 sm:space-y-8">
                  <div className="flex flex-wrap justify-center gap-6">
                    {site.skillsJavaScript.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center"
                        title={skill.name}
                      >
                        <div className="w-14 h-14 flex items-center justify-center tech-icon">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-6">
                    {site.skillsOther.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center"
                        title={skill.name}
                      >
                        <div className="w-12 h-12 flex items-center justify-center tech-icon">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section id="experience" index="02." title="Experience">
              <div
                data-reveal-group="experience"
                className="space-y-3 sm:space-y-4"
              >
                {site.experience.map((job) => (
                  <ExperienceCard
                    key={`${job.company}-${job.range}`}
                    job={job}
                  />
                ))}
              </div>
            </Section>

            <Section id="projects" index="03." title="Projects">
              <div data-reveal-group="projects" className="grid gap-3 sm:gap-4">
                {site.projects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </Section>

            <footer className="pt-6 sm:pt-8 text-sm text-muted">
              {site.footerText}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
