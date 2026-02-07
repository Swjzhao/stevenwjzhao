import { experiences } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-2.5 top-1.5 h-3 w-3 rounded-full bg-accent md:top-1.5 ${
                  i % 2 === 0
                    ? "md:left-auto md:right-[-6.5px]"
                    : "md:left-[-6.5px]"
                }`}
              />

              <div className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                <span className="mb-1 block text-xs font-medium text-accent">
                  {exp.period}
                </span>
                <h3 className="text-lg font-semibold text-primary">
                  {exp.role}
                </h3>
                <p className="mb-3 text-sm text-muted">{exp.company}</p>
                <p className="mb-3 text-sm text-muted">{exp.description}</p>

                {/* Technologies */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-background px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-1">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="text-xs text-muted before:mr-2 before:text-accent before:content-['→']"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
