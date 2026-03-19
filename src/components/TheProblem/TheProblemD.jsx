import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblemD.css'

/* Placeholder: same image per situation. Replace with real assets later. */
const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

export default function TheProblemD() {
  const ref = useFadeIn()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div ref={ref} className="pd fade-up">
      <p className="section-label">Sound familiar?</p>

      <div className="pd-container">
        <div className="pd-tabs" role="tablist" aria-label="Choose your situation">
          {problemContent.situations.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-controls={`pd-panel-${s.id}`}
              onClick={() => setActiveIndex(i)}
              className={`pd-tab${i === activeIndex ? ' pd-tab--active' : ''}`}
            >
              <span className="pd-tab-label">{s.title}</span>
            </button>
          ))}
        </div>

        <div className="pd-panel-area">
          {problemContent.situations.map((s, i) => (
            <div
              key={s.id}
              id={`pd-panel-${s.id}`}
              role="tabpanel"
              className={`pd-panel${i === activeIndex ? ' pd-panel--active' : ''}`}
              aria-hidden={i !== activeIndex}
            >
              <div className="pd-panel-content">
                <div className="pd-panel-text">
                  <span className="pd-number" aria-hidden="true">{s.number}</span>
                  <h3 className="pd-title">{s.title}</h3>
                  <p className="pd-body">{s.body}</p>
                </div>
                <div className="pd-panel-visual">
                  <img
                    src={visuals[i]}
                    alt=""
                    aria-hidden="true"
                    className="pd-visual-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pd-footer">
        <p className="pd-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
