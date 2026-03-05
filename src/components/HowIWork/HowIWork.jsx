import { useState } from 'react'
import { engagementModes } from '../../../core/content.js'
import Accordion from './Accordion.jsx'
import './HowIWork.css'

const DEFAULT_ACTIVE = 'vision-sprint'

export default function HowIWork() {
  const [activeId, setActiveId] = useState(DEFAULT_ACTIVE)

  const activeMode = engagementModes.find((m) => m.id === activeId)

  function handleToggle(id) {
    setActiveId(id === activeId ? activeId : id)
  }

  return (
    <section className="how-i-work" id="how-i-work" aria-labelledby="hiw-label">
      <div className="section-wrapper hiw-inner">
        <p className="section-label" id="hiw-label">How I work</p>
        <div className="hiw-layout">
          <div className="hiw-left">
            <div className="hiw-illustration img-placeholder" aria-hidden="true">
              Illustration — Coming Soon
            </div>
            <p className="hiw-statement" key={activeId}>
              {activeMode?.statement}
            </p>
          </div>
          <div className="hiw-right">
            <Accordion
              items={engagementModes}
              activeId={activeId}
              onToggle={handleToggle}
            />
            <p className="hiw-differentiator">
              Strategy consultants align on direction — but deliver abstractions. Design agencies execute — but need direction handed to them. I work in the middle: I align through tangible design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
