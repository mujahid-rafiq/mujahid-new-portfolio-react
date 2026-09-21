import { achievements, education, experience, recognition, summary } from "../data"
import { Reveal, SectionHeading } from "../components/Reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-28 pt-28 sm:scroll-mt-32 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="About"
            title="Independent ownership, cross-functional delivery."
            description="I lead features from requirements through deployment while collaborating with product teams on systems that stay reliable under load."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="rounded-3xl border border-line bg-ink-soft p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                Professional summary
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{summary}</p>
              <div className="mt-8 rounded-2xl border border-line bg-panel/70 p-5">
                <p className="font-display text-lg font-semibold">{experience.title}</p>
                <p className="mt-1 text-sm text-signal">{experience.company}</p>
                <p className="mt-1 font-mono text-xs text-mist">{experience.period}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="h-full rounded-3xl border border-line bg-ink-soft p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
                Key achievements
              </p>
              <ul className="mt-5 space-y-4">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <article
            id="recognition"
            className="mt-6 scroll-mt-28 rounded-3xl border border-line bg-ink-soft p-6 sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
                  Recognition
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Rising Star at Code Upscale</h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                Awarded for outstanding contribution — certificate and shield presented by CTO
                Christopher Jenison, with the team at our Code Upscale × AutyCloud town hall.
              </p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {recognition.map((item) => (
                <figure key={item.title} className="overflow-hidden rounded-2xl border border-line bg-panel">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-80 w-full object-cover object-[center_18%] sm:h-[26rem]"
                  />
                  <figcaption className="p-4 sm:p-5">
                    <p className="font-display text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="mt-6 rounded-3xl border border-line bg-gradient-to-br from-panel to-ink-soft p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">Education</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{education.degree}</h3>
                <p className="mt-2 text-mist">
                  {education.school} · {education.gpa}
                </p>
              </div>
              <div className="flex max-w-xl flex-wrap gap-2">
                {education.coursework.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-ink/50 px-3 py-1.5 text-xs text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
