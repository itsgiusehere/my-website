import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import TheProblem from './components/TheProblem/TheProblem'
import HowIWork from './components/HowIWork/HowIWork'
import SelectedWork from './components/SelectedWork/SelectedWork'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

export default function App() {
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
