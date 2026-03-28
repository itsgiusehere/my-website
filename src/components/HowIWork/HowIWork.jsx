import { useState, useEffect, useRef } from 'react'
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
  const [activeId, setActiveId] = useState(null)
  const hasAutoOpened = useRef(false)
  const ref = useFadeIn()

  useEffect(() => {
    const content = document.querySelector('.hiw-content')
    if (!content) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoOpened.current) {
          hasAutoOpened.current = true
          const item = document.querySelector('.accordion-item')
          item?.style.setProperty('--auto-open-duration', '600ms')
          setActiveId(engagementModes[0]?.id ?? null)
          setTimeout(() => item?.style.removeProperty('--auto-open-duration'), 650)
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    observer.observe(content)
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
    <section className="how-i-work" id="how-i-help" aria-labelledby="hiw-label">
      <div className="section-wrapper hiw-inner">
        <p className="section-label" id="hiw-label">How I help</p>
        <p className="hiw-intro">When everyone has a different picture of where a digital product or end-to-end experience is going, I synthesise across product, business, and user needs — and deliver a tangible vision to align around and build from.</p>
        <div ref={ref} className="hiw-content fade-up">
          <Accordion
            items={itemsWithIllustrations}
            activeId={activeId}
            onToggle={handleToggle}
          />
        </div>
      </div>

    </section>
  )
}
