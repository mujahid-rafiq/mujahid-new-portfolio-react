import { ArrowUpRight } from "lucide-react"
import { CvButton, LinkedInIcon } from "./CvButton"
import { profile } from "../data"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-mist">
          © {year} {profile.name}. Built with Vite + Tailwind CSS.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-paper transition hover:text-signal"
          >
            <LinkedInIcon size={14} />
            LinkedIn
          </a>
          <CvButton variant="ghost" className="px-0 py-0" />
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-sm text-paper transition hover:text-signal"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
