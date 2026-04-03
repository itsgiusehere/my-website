import { useEffect, useRef, useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblem.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

/* Scroll geometry — keep in sync with CSS */
const NAV_HEIGHT = 60
const ENTRANCE_VH = 0.5

const clamp01 = v => Math.max(0, Math.min(1, v))

function ProblemCard({ s, i, visual, cardRef }) {
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)
  const toggle = () => {
    if (expanded) {
      setCollapsing(true)
      setExpanded(false)
      setTimeout(() => setCollapsing(false), 420)
    } else {
      setExpanded(true)
    }
  }
  const showAccent = expanded || collapsing

  return (
    <div
      key={s.id}
      ref={cardRef}
      data-active={i === 0 ? '' : undefined}
      className={`problem-card${showAccent ? ' problem-card--expanded' : ''}${expanded ? ' problem-card--body-open' : ''}`}
    >
      <div className="problem-card-body">
        <span className="problem-card-number">{s.number}</span>
        <div className="problem-card-visual">
          <img
            src={visual}
            alt=""
            aria-hidden="true"
            className="problem-visual-img"
          />
        </div>
        <p className="problem-card-label">{s.tab}</p>
        <div className="problem-card-content">
          <div className="problem-card-text">
            <p className="problem-hook">{s.title}</p>
            <div className="problem-detail-wrapper">
              <div className="problem-detail-inner">
                <p className="problem-detail">{s.body}</p>
              </div>
            </div>
            <button
              className="problem-more-toggle"
              onClick={toggle}
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

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
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
      const stickyTop = Math.max(vh * 0.12, NAV_HEIGHT + rem)
      const rect = region.getBoundingClientRect()
      const stickyScroll = Math.max(0, stickyTop - rect.top)
      const entranceDist = vh * ENTRANCE_VH
      const isMobile = window.innerWidth <= 768
      const cardHeight = cardRefs.current[0]?.offsetHeight || vh * 0.65
      const peekGap = rem * (window.innerWidth >= 1440 ? 5 : 1.875)
      /* Read card CSS top values from the DOM so they stay in sync with rem-based CSS */
      const cardTops = cardRefs.current.map(card =>
        card ? parseFloat(getComputedStyle(card).top) || 0 : 0
      )
      const totalCards = cardRefs.current.length

      if (isMobile) {
        /* Mobile: cards flow normally (position: static via CSS).
           Active state cycles based on which card is in the viewport. */
        let newActive = 0
        cardRefs.current.forEach((card, i) => {
          if (!card) return
          card.style.transform = ''
          card.style.zIndex = ''
          const cardRect = card.getBoundingClientRect()
          if (cardRect.top < vh * 0.5) newActive = i
        })

        if (newActive !== activeRef.current) {
          cardRefs.current.forEach((card, i) => {
            if (!card) return
            if (i === newActive) card.setAttribute('data-active', '')
            else card.removeAttribute('data-active')
          })
          activeRef.current = newActive
        }
      } else {
        /* Desktop: slide-in entrance animation */
        const slideDistances = cardTops.map((top, i) => {
          if (i === 0) return 0
          return i * (cardHeight + peekGap) - top
        })

        /* Card entrance progress [0, 1]
           All cards start moving together. Each card's duration is proportional
           to its distance so they all move at the same speed.
           Card i finishes at stickyScroll = i * entranceDist. */
        const progresses = cardTops.map((_, i) => {
          if (i === 0) return 1
          return clamp01(stickyScroll / (i * entranceDist))
        })

        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const p = progresses[i]
          card.style.transform = `translateY(${(1 - p) * slideDistances[i]}px)`
          card.style.zIndex = p > 0 ? String(10 + i) : String(5 - i)
        })

        let newActive = 0
        progresses.forEach((p, i) => {
          if (p > 0.7 && (i === 0 || progresses[i - 1] >= 1)) newActive = i
        })
        if (newActive !== activeRef.current) {
          cardRefs.current.forEach((card, i) => {
            if (!card) return
            if (i === newActive) card.setAttribute('data-active', '')
            else card.removeAttribute('data-active')
          })
          activeRef.current = newActive
        }
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    function sizeRegion() {
      const region = regionRef.current
      const frame = frameRef.current
      if (!region || !frame || window.innerWidth <= 768) return
      const vh = window.innerHeight
      const totalCards = cardRefs.current.length
      const lastCardScroll = (totalCards - 1) * vh * ENTRANCE_VH
      const frameHeight = frame.offsetHeight
      const cardHeight = cardRefs.current[0]?.offsetHeight || vh * 0.65
      const gapBelowCard = frameHeight - cardHeight
      region.style.height = `${frameHeight + lastCardScroll - gapBelowCard}px`
    }

    sizeRegion()
    window.addEventListener('resize', sizeRegion)
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', sizeRegion)
    }
  }, [])

  return (
    <section className="the-problem" id="problem">
      <div className="section-wrapper">
        <div ref={regionRef} className="problem-scroll-region">
          <div ref={setFrameRef} className="problem-sticky-frame fade-up">
            <p className="section-label problem-section-label">Challenges I help leaders with</p>
            {problemContent.situations.map((s, i) => (
              <ProblemCard
                key={s.id}
                s={s}
                i={i}
                visual={visuals[i]}
                cardRef={el => cardRefs.current[i] = el}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
