import { ArrowUpRight } from "lucide-react"
import { experience, projects } from "../data"
import { Reveal, SectionHeading } from "../components/Reveal"

function CaitaFallback() {
  return (
    <div className="flex min-h-[220px] items-end gap-3 bg-ink-soft p-8 sm:min-h-[280px]">
      <div className="float-slow max-w-[58%] rounded-2xl rounded-bl-sm border border-amber/25 bg-ink/60 px-4 py-3 text-sm text-mist">
        How are you feeling today?
      </div>
      <div className="mb-10 max-w-[50%] rounded-2xl rounded-br-sm border border-signal/30 bg-panel px-4 py-3 text-sm text-paper">
        A little lighter than yesterday.
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title="Products I owned from design to production."
            description={`${experience.title}, ${experience.company} · ${experience.period}. ${experience.note}`}
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 40}>
              <article className="overflow-hidden rounded-3xl border border-line bg-ink-soft/80">
                <div className="border-b border-line bg-[#080a10] p-3 sm:p-4">
                  <div className="overflow-hidden rounded-xl border border-line bg-ink">
                    <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
                      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      <span className="ml-2 truncate font-mono text-[11px] text-mist">
                        {project.index} · {project.urlLabel ?? project.name}
                      </span>
                    </div>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.name} full screenshot`}
                        className="block h-auto w-full"
                      />
                    ) : (
                      <CaitaFallback />
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist">
                    <span className="font-mono uppercase tracking-[0.18em] text-signal">
                      {project.type}
                    </span>
                    <span className="text-line">/</span>
                    <span>{project.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist sm:text-base">
                    {project.summary}
                  </p>
                  <ul className="mt-5 max-w-3xl space-y-2.5 text-sm leading-relaxed text-paper/85">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-panel px-3 py-1 text-xs text-mist"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-medium text-signal transition hover:text-signal-dim"
                    >
                      {project.urlLabel}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <p className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-mist">
                      Private product
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
