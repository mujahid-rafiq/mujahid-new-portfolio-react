import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"
import { CvButton, LinkedInIcon } from "../components/CvButton"
import { Reveal } from "../components/Reveal"
import { profile, stats } from "../data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-4 sm:pt-32">
      <div className="mesh-hero pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:gap-16 xl:gap-20">
          <div className="min-w-0 pr-0 lg:pr-4">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1.5">
                    <span className="pulse-dot h-2 w-2 rounded-full bg-signal" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                      {profile.availability}
                    </span>
                  </div>
                  <a
                    href="#recognition"
                    className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-amber transition hover:border-amber/60"
                  >
                    Rising Star · Code Upscale
                  </a>
                </div>
                <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                  <MapPin size={12} className="text-signal" />
                  {profile.location}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] text-paper sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem]">
                Mujahid
                <br />
                <span className="text-signal">Rafiq</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">{profile.role}</p>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
                  I independently own scalable production apps — React, Next.js, NestJS, real-time
                  systems, and AI features — from architecture through AWS.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist/90">
                  Secure REST APIs, role-based access control, and responsive interfaces for
                  high-traffic production environments — owned from requirements through deployment.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-signal-dim"
                >
                  View selected work
                  <ArrowDownRight size={16} />
                </a>
                <CvButton className="px-6 py-3" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition hover:border-signal/50 hover:text-signal"
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <img
              src={profile.photo}
              alt="Mujahid Rafiq, Software Engineer"
              className="relative z-10 mx-auto h-auto w-full max-w-[18rem] object-contain sm:max-w-[22rem] lg:max-w-[24rem]"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <div className="bg-ink-soft px-4 py-6 sm:px-6 sm:py-8">
                <p className="font-display text-2xl font-semibold text-paper sm:text-3xl">{stat.value}</p>
                <p className="mt-2 max-w-[12rem] text-xs leading-relaxed text-mist sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
