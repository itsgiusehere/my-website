import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import './TheProblemB.css'

const ACCENTS = ['lavender', 'yellow', 'teal']

export default function TheProblemB() {
  const ref = useFadeIn()
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div ref={ref} className="pb fade-up">
      <p className="section-label">Sound familiar?</p>

      <ol className="pb-cards" aria-label="Three common situations">
        {problemContent.situations.map((s, i) => {
          const isOpen = openId === s.id
          return (
            <li
              key={s.id}
              className={`pb-card pb-card--${ACCENTS[i]}${isOpen ? ' pb-card--open' : ''}${openId && !isOpen ? ' pb-card--dimmed' : ''}`}
            >
              <button
                className="pb-trigger"
                onClick={() => toggle(s.id)}
                aria-expanded={isOpen}
                aria-controls={`pb-panel-${s.id}`}
              >
                <span className="pb-number" aria-hidden="true">{s.number}</span>
                <span className="pb-title">{s.title}</span>
              </button>
              <div
                id={`pb-panel-${s.id}`}
                className="pb-panel"
                role="region"
              >
                <div className="pb-panel-inner">
                  <p className="pb-body">{s.body}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="pb-footer">
        <p className="pb-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
