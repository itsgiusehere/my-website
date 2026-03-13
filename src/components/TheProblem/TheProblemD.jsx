import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import './TheProblemD.css'

const TOTAL = problemContent.situations.length

export default function TheProblemD() {
  const ref = useFadeIn()
  const [activeIndex, setActiveIndex] = useState(0)

  function goTo(i) {
    setActiveIndex(i)
  }

  return (
    <div ref={ref} className="pd fade-up">
      <p className="section-label">Sound familiar?</p>

      <div className="pd-deck" aria-label="Three common situations">
        {problemContent.situations.map((s, i) => {
          /* Position relative to active: 0 = front, 1 = behind, 2 = furthest */
          const offset = (i - activeIndex + TOTAL) % TOTAL

          return (
            <button
              key={s.id}
              className={`pd-card${offset === 0 ? ' pd-card--active' : ''}`}
              style={{
                '--card-offset': offset,
                zIndex: TOTAL - offset,
              }}
              onClick={() => goTo(i)}
              aria-pressed={offset === 0}
              aria-label={`${s.number} — ${s.title}`}
            >
              <span className="pd-number" aria-hidden="true">{s.number}</span>
              <h3 className="pd-title">{s.title}</h3>
              <div className="pd-body-wrap">
                <p className="pd-body">{s.body}</p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="pd-nav">
        <button
          className="pd-nav-btn"
          onClick={() => goTo((activeIndex - 1 + TOTAL) % TOTAL)}
          aria-label="Previous situation"
        >
          ←
        </button>
        <span className="pd-nav-counter">
          {String(activeIndex + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
        </span>
        <button
          className="pd-nav-btn"
          onClick={() => goTo((activeIndex + 1) % TOTAL)}
          aria-label="Next situation"
        >
          →
        </button>
      </div>

      <div className="pd-footer">
        <p className="pd-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
