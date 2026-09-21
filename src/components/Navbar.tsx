import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { CvButton, LinkedInIcon } from "./CvButton"
import { navItems, profile } from "../data"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-signal/40 bg-ink-soft font-display text-sm font-bold text-signal">
            MR
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-paper sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                  isActive ? "bg-panel text-paper" : "text-mist hover:text-paper"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-paper transition hover:border-signal/50 hover:text-signal md:inline-flex"
          >
            <LinkedInIcon size={16} />
          </a>
          <CvButton className="hidden px-4 py-2 md:inline-flex" />
          <a
            href="#contact"
            className="hidden rounded-full bg-signal px-4 py-2 text-sm font-medium text-ink transition hover:bg-signal-dim sm:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-paper lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-ink/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg text-paper hover:bg-panel"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-3 text-lg text-paper hover:bg-panel"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </a>
            <CvButton className="mt-1 w-full" />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-signal px-3 py-3 text-center font-medium text-ink"
            >
              Hire me
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
