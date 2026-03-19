import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblemC.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

/** Split body text: first sentence is the hook, rest is the detail. */
function splitBody(text) {
  const dot = text.indexOf('. ')
  if (dot === -1) return [text, '']
  return [text.slice(0, dot + 1), text.slice(dot + 2)]
}

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
              <span className="pc-tab-label">{s.title}</span>
            </button>
          ))}
        </div>

        <div className="pc-panel-area">
          {problemContent.situations.map((s, i) => {
            const [hook, detail] = splitBody(s.body)
            return (
              <div
                key={s.id}
                id={`pc-panel-${s.id}`}
                role="tabpanel"
                className={`pc-panel${i === activeIndex ? ' pc-panel--active' : ''}`}
                aria-hidden={i !== activeIndex}
              >
                <div className="pc-panel-content">
                  <div className="pc-panel-text">
                    <span className="pc-panel-number" aria-hidden="true">{s.number}</span>
                    <p className="pc-hook">{hook}</p>
                    {detail && <p className="pc-detail">{detail}</p>}
                  </div>
                  <div className="pc-panel-visual">
                    <img
                      src={visuals[i]}
                      alt=""
                      aria-hidden="true"
                      className="pc-visual-img"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="pc-footer">
        <p className="pc-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
