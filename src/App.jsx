import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import TheProblem from './components/TheProblem/TheProblem'
import HowIWork from './components/HowIWork/HowIWork'
import SelectedWork from './components/SelectedWork/SelectedWork'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

/* White-background sections */
const WHITE_SECTIONS = new Set(['how-i-help', 'work', 'contact'])

function useBgSync() {
  useEffect(() => {
    const allSections = document.querySelectorAll('main > section')
    if (!allSections.length) return

    const visible = new Set()

    const observer = new IntersectionObserver(
      () => {
        /* Find the last section whose top has entered the viewport —
           that's the one "peeking in" and should set the bg colour */
        let latest = null
        let latestTop = -Infinity
        allSections.forEach(s => {
          const top = s.getBoundingClientRect().top
          if (top < window.innerHeight && top > latestTop) {
            latestTop = top
            latest = s.id
          }
        })
        document.body.classList.toggle('bg-white', latest != null && WHITE_SECTIONS.has(latest))
      },
      { threshold: 0 }
    )

    allSections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useBgSync()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TheProblem />
        <HowIWork />
        <SelectedWork />
        <Testimonials />
        <About />
        <Contact />
      </main>
    </>
  )
}
