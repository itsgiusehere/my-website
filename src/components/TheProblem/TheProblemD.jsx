import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import './TheProblemD.css'

const ACCENTS = [
  'var(--color-accent-lavender)',
  'var(--color-accent-yellow)',
  'var(--color-accent-teal)',
]

export default function TheProblemD() {
  const ref = useFadeIn()
  const [activeIndex, setActiveIndex] = useState(0)

  /* Build render order: active card last (on top), others behind */
  const order = problemContent.situations.map((_, i) => i)
  const behind = order.filter(i => i !== activeIndex)
  const stack = [...behind, activeIndex]

  return (
    <div ref={ref} className="pd fade-up">
      <p className="section-label">Sound familiar?</p>

      <div className="pd-deck" aria-label="Three common situations">
        {stack.map((i, stackPos) => {
          const s = problemContent.situations[i]
          const isActive = i === activeIndex
          const depth = stackPos - (stack.length - 1) // -2, -1, 0

          return (
            <button
              key={s.id}
              className={`pd-card${isActive ? ' pd-card--active' : ''}`}
              style={{
                '--card-accent': ACCENTS[i],
                '--card-depth': depth,
                zIndex: stackPos,
              }}
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
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

      <div className="pd-footer">
        <p className="pd-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
