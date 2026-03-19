import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblem.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

/** Split body text: first sentence is the hook, rest is the detail. */
function splitBody(text) {
  const dot = text.indexOf('. ')
  if (dot === -1) return [text, '']
  return [text.slice(0, dot + 1), text.slice(dot + 2)]
}

export default function TheProblem() {
  const ref = useFadeIn()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="the-problem" id="problem">
      <div className="section-wrapper">
        <p className="section-label">Sound familiar?</p>

        <div ref={ref} className="problem-container fade-up">
          <div className="problem-tabs" role="tablist" aria-label="Choose your situation">
            {problemContent.situations.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === activeIndex}
                aria-controls={`problem-panel-${s.id}`}
                onClick={() => setActiveIndex(i)}
                className={`problem-tab${i === activeIndex ? ' problem-tab--active' : ''}`}
              >
                <span className="problem-tab-label">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="problem-panel-area">
            {problemContent.situations.map((s, i) => {
              const [hook, detail] = splitBody(s.body)
              return (
                <div
                  key={s.id}
                  id={`problem-panel-${s.id}`}
                  role="tabpanel"
                  className={`problem-panel${i === activeIndex ? ' problem-panel--active' : ''}`}
                  aria-hidden={i !== activeIndex}
                >
                  <div className="problem-panel-content">
                    <div className="problem-panel-text">
                      <p className="problem-hook">{hook}</p>
                      {detail && <p className="problem-detail">{detail}</p>}
                      <div className="problem-actions">
                        <a href="#contact" className="btn btn-primary">{problemContent.cta}</a>
                        <a href="#how-i-work" className="link">Learn more</a>
                      </div>
                    </div>
                    <div className="problem-panel-visual">
                      <img
                        src={visuals[i]}
                        alt=""
                        aria-hidden="true"
                        className="problem-visual-img"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
