import Sidebar from "@/components/Sidebar";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import ScrollSpy from "@/components/ScrollSpy";
import { site } from "@/content/site";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-w-0">
      {/* Sidebar */}
      <aside className="w-full lg:w-[420px] lg:fixed lg:left-0 lg:top-0 lg:h-dvh lg:overflow-y-auto min-w-0">
        <div className="px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
          <Sidebar />
        </div>
      </aside>

      {/* Main Content */}
      <div className="w-full lg:ml-[420px] min-w-0">
        <div className="mx-auto w-full max-w-5xl min-w-0 px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-20">
          <main className="space-y-12 sm:space-y-16 md:space-y-20 min-w-0">
            <ScrollSpy sectionIds={site.nav.map((n) => n.id)} />

            {/* About */}
            <Section id="about" kicker="01." title="About">
              <div className="space-y-4 sm:space-y-6 text-muted leading-relaxed text-lg">
                <p>
                  I’m a software engineer focused on building organized,
                  reliable systems. Born and raised in Rochester, NY, I enjoy
                  working across the stack, from designing backend architecture
                  and data models to implementing responsive, accessible UIs.
                </p>

                <p>
                  My experience includes developing real-time multiplayer
                  applications, IoT monitoring platforms, AI-powered chatbots,
                  and media-focused mobile apps. I place a strong emphasis on
                  maintainability, performance, and security in my work.
                </p>

                <p>
                  I regularly work with web and mobile technologies and I’m
                  comfortable deploying, debugging, and maintaining these
                  systems in production environments.
                </p>

                <p>
                  Beyond traditional software development, I’m interested in
                  projects that connect software systems with the physical
                  world, including sensor-based platforms and data
                  visualization.
                </p>

                {/* Tech Icons */}
                <div className="pt-6 sm:pt-8 space-y-6 sm:space-y-8">
                  <div className="flex flex-wrap justify-center gap-6 min-w-0">
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
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-center gap-6 min-w-0">
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
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* Experience */}
            <Section id="experience" kicker="02." title="Experience">
              <div className="space-y-3 sm:space-y-4 min-w-0">
                {site.experience.map((job) => (
                  <ExperienceCard
                    key={job.range + job.company}
                    job={job}
                  />
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section id="projects" kicker="03." title="Projects">
              <div className="grid gap-3 sm:gap-4 min-w-0">
                {site.projects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                  />
                ))}
              </div>
            </Section>

            <footer className="pt-6 sm:pt-8 text-sm text-muted">
              Built with Next.js + Tailwind. Deployed on Vercel.
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
