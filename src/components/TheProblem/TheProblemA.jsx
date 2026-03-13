import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import './TheProblemA.css'

export default function TheProblemA() {
  const ref = useFadeIn()
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div ref={ref} className="pa fade-up">
      <p className="section-label">Sound familiar?</p>

      <ol className="pa-list" aria-label="Three common situations">
        {problemContent.situations.map((s) => {
          const isOpen = openId === s.id
          return (
            <li key={s.id} className={`pa-item${isOpen ? ' pa-item--open' : ''}`}>
              <button
                className="pa-trigger"
                onClick={() => toggle(s.id)}
                aria-expanded={isOpen}
                aria-controls={`pa-panel-${s.id}`}
              >
                <span className="pa-number" aria-hidden="true">{s.number}</span>
                <span className="pa-title">{s.title}</span>
                <span className="pa-arrow" aria-hidden="true" />
              </button>
              <div
                id={`pa-panel-${s.id}`}
                className="pa-panel"
                role="region"
              >
                <div className="pa-panel-inner">
                  <p className="pa-body">{s.body}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <div className="pa-footer">
        <p className="pa-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
