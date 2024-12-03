import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { FloatingElements } from './components/FloatingElements'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950">
      <FloatingElements />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

