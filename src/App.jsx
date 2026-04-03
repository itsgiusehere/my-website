import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import TheProblem from './components/TheProblem/TheProblem'
import HowIWork from './components/HowIWork/HowIWork'
import Principles from './components/Principles/Principles'
import SelectedWork from './components/SelectedWork/SelectedWork'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

/* White-background sections */
const WHITE_SECTIONS = new Set(['how-i-help', 'about', 'principles', 'contact'])

function useBgSync() {
  useEffect(() => {
    const allSections = document.querySelectorAll('main > section')
    if (!allSections.length) return

    let ticking = false

    function update() {
      const threshold = window.innerHeight * 0.5
      let current = null
      allSections.forEach(s => {
        if (s.getBoundingClientRect().top < threshold) current = s.id
      })
      document.body.classList.toggle('bg-white', current != null && WHITE_SECTIONS.has(current))
      ticking = false
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
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
        {/* <SelectedWork /> */}
        <Testimonials />
        <About />
        <Principles />
        <Contact />
      </main>
    </>
  )
}
