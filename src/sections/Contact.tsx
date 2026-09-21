import { Mail, Phone, Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import { CvButton, LinkedInIcon } from "../components/CvButton"
import { Reveal, SectionHeading } from "../components/Reveal"
import { profile } from "../data"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
]

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-28 py-28 sm:scroll-mt-32 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Contact"
            title="Let’s build the next production system."
            description="Whether you need a full-stack owner for a product, a NestJS backend, or a high-traffic React frontend — I can take it from requirements to deployment."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-ink-soft p-5 transition hover:border-signal/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-panel text-signal">
                    <channel.icon size={18} />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-sm text-paper sm:text-base">{channel.value}</span>
                  </span>
                </a>
              ))}
              <CvButton className="w-full py-3.5" variant="solid" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-ink-soft p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-mist">
                  Name
                  <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-paper outline-none transition placeholder:text-mist/50 focus:border-signal/60"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm text-mist">
                  Email
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-paper outline-none transition placeholder:text-mist/50 focus:border-signal/60"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm text-mist">
                Message
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-panel px-4 py-3 text-paper outline-none transition placeholder:text-mist/50 focus:border-signal/60"
                  placeholder="Tell me about the product, timeline, and stack."
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-ink transition hover:bg-signal-dim sm:w-auto"
              >
                {sent ? "Opening mail app" : "Send message"}
                <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
