import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import './TheProblemC.css'

export default function TheProblemC() {
  const ref = useFadeIn()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div ref={ref} className="pc fade-up">
      <p className="section-label">Sound familiar?</p>

      <div className="pc-container">
        <div className="pc-tabs" role="tablist" aria-label="Choose your situation">
          {problemContent.situations.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-controls={`pc-panel-${s.id}`}
              onClick={() => setActiveIndex(i)}
              className={`pc-tab${i === activeIndex ? ' pc-tab--active' : ''}`}
            >
              <span className="pc-tab-number">{s.number}</span>
              <span className="pc-tab-label">{s.title}</span>
            </button>
          ))}
        </div>

        <div className="pc-panel-area">
          {problemContent.situations.map((s, i) => (
            <div
              key={s.id}
              id={`pc-panel-${s.id}`}
              role="tabpanel"
              className={`pc-panel${i === activeIndex ? ' pc-panel--active' : ''}`}
              aria-hidden={i !== activeIndex}
            >
              <p className="pc-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pc-footer">
        <p className="pc-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
