import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Hero } from "./sections/Hero"
import { Skills } from "./sections/Skills"
import { Work } from "./sections/Work"

export default function App() {
  return (
    <div className="relative min-h-svh bg-ink text-paper">
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
      <div className="bg-grain pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-signal focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to work
        </a>
        <Navbar />
        <main>
          <Hero />
          <Work />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
