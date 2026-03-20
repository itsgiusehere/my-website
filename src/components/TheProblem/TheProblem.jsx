import { useState, useEffect, useRef } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblem.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

/* Scroll geometry — keep in sync with CSS */
const DESKTOP = { stickyVh: 0.3, entranceVh: 0.12 }
const MOBILE = { stickyVh: 0.2, entranceVh: 0.15 }
const MOBILE_BREAKPOINT = 768
const DRIFT_RATE = 0.12
const MAX_DRIFT_VH = 0.15

const clamp01 = v => Math.max(0, Math.min(1, v))
const easeOut = t => 1 - (1 - t) * (1 - t)

export default function TheProblem() {
  const fadeRef = useFadeIn()
  const frameRef = useRef(null)
  const labelRef = useRef(null)
  const regionRef = useRef(null)
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  /* Combine fadeRef and frameRef on the same element */
  const setFrameRef = (el) => {
    frameRef.current = el
    fadeRef.current = el
  }

  useEffect(() => {
    let ticking = false

    const update = () => {
      const region = regionRef.current
      const frame = frameRef.current
      if (!region || !frame) { ticking = false; return }

      const vh = window.innerHeight
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
      const cfg = isMobile ? MOBILE : DESKTOP

      const stickyTop = vh * cfg.stickyVh
      const rect = region.getBoundingClientRect()
      const stickyScroll = Math.max(0, stickyTop - rect.top)
      const entranceDist = vh * cfg.entranceVh
      const slideDistance = vh * 0.6

      /* Card entrance progress [0, 1] — card 1 is always in place */
      const progresses = [
        1,
        clamp01(stickyScroll / entranceDist),
        clamp01((stickyScroll - entranceDist) / entranceDist),
      ]

      /* Apply scroll-driven transforms directly (no CSS transition) */
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const p = progresses[i]
        card.style.transform = `translateY(${(1 - easeOut(p)) * slideDistance}px)`
        card.style.opacity = String(clamp01(p * 2.5))
      })

      /* Slow upward drift — moves the whole stack up while cards stack */
      const maxDrift = vh * MAX_DRIFT_VH
      const drift = Math.min(stickyScroll * DRIFT_RATE, maxDrift)
      frame.style.transform = `translateY(-${drift}px)`
      if (labelRef.current) {
        labelRef.current.style.transform = `translateY(-${drift}px)`
      }

      /* Active = last card past the transition threshold */
      let newActive = 0
      progresses.forEach((p, i) => { if (p > 0.3) newActive = i })
      setActiveIndex(newActive)

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="the-problem" id="problem">
      <div className="section-wrapper">
        <div ref={regionRef} className="problem-scroll-region">
          <p ref={labelRef} className="section-label problem-section-label">Where things usually start</p>
          <div ref={setFrameRef} className="problem-sticky-frame fade-up">
            {problemContent.situations.map((s, i) => (
              <div
                key={s.id}
                ref={el => cardRefs.current[i] = el}
                className={`problem-card${i === activeIndex ? ' problem-card--active' : ''}`}
              >
                <div className="problem-card-body">
                  <span className="problem-card-number">{s.number}</span>
                  <p className="problem-card-label">{s.tab}</p>
                  <div className="problem-card-content">
                    <div className="problem-card-text">
                      <p className="problem-hook">{s.title}</p>
                      <p className="problem-detail">{s.body}</p>
                    </div>
                    <div className="problem-card-visual">
                      <img
                        src={visuals[i]}
                        alt=""
                        aria-hidden="true"
                        className="problem-visual-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
