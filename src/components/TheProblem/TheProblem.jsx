import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblem.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

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
                <span className="problem-tab-label">{s.tab}</span>
              </button>
            ))}
          </div>

          <div className="problem-panel-area">
            {problemContent.situations.map((s, i) => {
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
                      <p className="problem-hook">{s.title}</p>
                      <p className="problem-detail">{s.body}</p>
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
