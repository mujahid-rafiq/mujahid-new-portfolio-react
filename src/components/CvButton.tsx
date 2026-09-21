import { Download } from "lucide-react"
import { profile } from "../data"

type CvButtonProps = {
  className?: string
  variant?: "solid" | "outline" | "ghost"
  label?: string
}

export function CvButton({
  className = "",
  variant = "outline",
  label = "Download CV",
}: CvButtonProps) {
  const styles = {
    solid: "bg-signal text-ink hover:bg-signal-dim",
    outline:
      "border border-line text-paper hover:border-signal/50 hover:text-signal",
    ghost: "text-paper hover:text-signal",
  }

  return (
    <a
      href={profile.cvUrl}
      download="Mujahid-Rafiq-CV.pdf"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${styles[variant]} ${className}`}
    >
      <Download size={15} />
      {label}
    </a>
  )
}

export function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9.25H4V20h2.5V9.25ZM5.25 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V20H11V9.25h2.4v1.47h.03c.34-.64 1.16-1.31 2.38-1.31 2.55 0 3.02 1.68 3.02 3.86V20Z" />
    </svg>
  )
}
