import { useState } from 'react'
import { engagementModes } from '../../../core/content.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import Accordion from './Accordion.jsx'
import illustrationVisionSprint from '../../assets/illustration-how-i-work-vision-sprint.png'
import './HowIWork.css'

const ILLUSTRATIONS = {
  'vision-sprint': illustrationVisionSprint,
}

export default function HowIWork() {
  const [activeId, setActiveId] = useState(null)
  const ref = useFadeIn()

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
          <p className="hiw-differentiator">
            Strategy consultants align on direction — but deliver abstractions. Design agencies execute — but need direction handed to them. I work in the middle: I align through tangible design.
          </p>
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
