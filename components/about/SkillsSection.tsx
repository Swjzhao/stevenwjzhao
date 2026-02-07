import { skillTiers } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Skills
        </h2>

        <div className="space-y-10">
          {skillTiers.map((tier) => (
            <div key={tier.level}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-lg font-semibold text-primary">
                  {tier.level}
                </h3>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-6 rounded-full ${
                        i < tier.rating ? "bg-accent" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
