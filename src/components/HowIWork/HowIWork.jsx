import { useState, useEffect, useLayoutEffect } from 'react'
import { engagementModes } from '../../../core/content.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import Accordion from './Accordion.jsx'
import illustrationVisionSprint from '../../assets/illustration-how-i-work-vision-sprint.png'
import illustrationEmbedded from '../../assets/illustration-embedded-leadership.png'
import illustrationStrategicClarity from '../../assets/illustration-strategic-clarity.png'
import './HowIWork.css'

const ILLUSTRATIONS = {
  'vision-sprint': illustrationVisionSprint,
  'embedded': illustrationEmbedded,
  'strategic-clarity': illustrationStrategicClarity,
}

export default function HowIWork() {
  const [activeId, setActiveId] = useState(engagementModes[0]?.id ?? null)
  const ref = useFadeIn()

  useLayoutEffect(() => {
    const section = document.getElementById('how-i-work')
    if (!section) return
    const rect = section.getBoundingClientRect()
    document.body.classList.toggle('bg-white', rect.top < window.innerHeight && rect.bottom > 0)
  }, [])

  useEffect(() => {
    const section = document.getElementById('how-i-work')
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle('bg-white', entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  function handleToggle(id) {
    setActiveId(id === activeId ? null : id)
  }

  const itemsWithIllustrations = engagementModes.map((m) => ({
    ...m,
    illustration: ILLUSTRATIONS[m.id] ?? null,
  }))

  return (
    <section className="how-i-work" id="how-i-work" aria-labelledby="hiw-label">
      <div className="section-wrapper hiw-inner">
        <p className="section-label" id="hiw-label">How I work</p>
        <div ref={ref} className="hiw-content fade-up">
          <Accordion
            items={itemsWithIllustrations}
            activeId={activeId}
            onToggle={handleToggle}
          />
        </div>
      </div>

      <div className="hiw-divider">
        <p className="hiw-differentiator">
          Strategy consultants align on direction — but deliver abstractions. Design agencies execute — but need direction handed to them. I work in the middle: I align through tangible design.
        </p>
        <div className="hiw-divider-actions">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#work" className="link">See selected work</a>
        </div>
      </div>
    </section>
  )
}
