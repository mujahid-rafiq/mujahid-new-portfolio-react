import { useEffect, useRef, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in")
          observer.unobserve(el)
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
        {index} / {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}
