import { skillGroups } from "../data"
import { Reveal, SectionHeading } from "../components/Reveal"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Capabilities"
            title="A stack built for production, not prototypes."
            description="Frontend, backend, cloud, and data — used together to ship secure REST APIs, role-based access, and responsive interfaces for high-traffic environments."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <div className="h-full rounded-3xl border border-line bg-ink-soft p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{group.title}</h3>
                  <span className="font-mono text-[11px] text-mist">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-panel px-3 py-1.5 text-sm text-paper/90 transition hover:border-signal/40 hover:text-signal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
