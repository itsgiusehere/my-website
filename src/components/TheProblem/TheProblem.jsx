import { useEffect, useRef } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblem.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

/* Scroll geometry — keep in sync with CSS */
const NAV_HEIGHT = 60
const ENTRANCE_VH = 0.5

const clamp01 = v => Math.max(0, Math.min(1, v))

export default function TheProblem() {
  const fadeRef = useFadeIn()
  const frameRef = useRef(null)
  const regionRef = useRef(null)
  const cardRefs = useRef([])
  const activeRef = useRef(0)

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
      const stickyTop = Math.max(vh * 0.12, NAV_HEIGHT + 16)
      const rect = region.getBoundingClientRect()
      const stickyScroll = Math.max(0, stickyTop - rect.top)
      const entranceDist = vh * ENTRANCE_VH
      const cardHeight = cardRefs.current[0]?.offsetHeight || vh * 0.65
      const peekGap = 30
      const cardTops = [0, 60, 120]

      /* Per-card slide distance: from spread-out position to stacked position.
         Spread positions: card 1 at 0, then each card below the previous + gap.
         slideDistance[i] = i * (cardHeight + peekGap) - cardTops[i] */
      const slideDistances = cardTops.map((top, i) => {
        if (i === 0) return 0
        return i * (cardHeight + peekGap) - top
      })

      /* Card entrance progress [0, 1]
         All cards start moving together. Each card's duration is proportional
         to its distance so they all move at the same speed — keeps the gap
         between consecutive cards constant throughout the animation.
         Card i finishes at stickyScroll = i * entranceDist. */
      const progresses = cardTops.map((_, i) => {
        if (i === 0) return 1
        return clamp01(stickyScroll / (i * entranceDist))
      })

      /* Apply scroll-driven transforms directly (no CSS transition) */
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const p = progresses[i]
        card.style.transform = `translateY(${(1 - p) * slideDistances[i]}px)`
        /* Peeking cards: earlier on top. Entering cards: later on top. */
        card.style.zIndex = p > 0 ? String(10 + i) : String(5 - i)
      })

      /* Active = last card past the transition threshold — direct DOM, no React re-render */
      let newActive = 0
      progresses.forEach((p, i) => {
        if (p > 0.7 && (i === 0 || progresses[i - 1] >= 1)) newActive = i
      })
      if (newActive !== activeRef.current) {
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          card.classList.toggle('problem-card--active', i === newActive)
        })
        activeRef.current = newActive
      }

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
          <div ref={setFrameRef} className="problem-sticky-frame fade-up">
            <p className="section-label problem-section-label">Where things usually start</p>
            {problemContent.situations.map((s, i) => (
              <div
                key={s.id}
                ref={el => cardRefs.current[i] = el}
                className={`problem-card${i === 0 ? ' problem-card--active' : ''}`}
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
