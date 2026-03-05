import { useState, useRef } from 'react'
import { workCards } from '../../../core/content.js'
import CarouselDots from './Carousel.jsx'
import './SelectedWork.css'

const TOTAL = workCards.length + 1 // 4 work cards + 1 CTA card

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef(null)

  function scrollTo(index) {
    setCurrentIndex(index)
    const track = trackRef.current
    if (!track) return
    const card = track.children[index]
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }

  function handleScroll() {
    const track = trackRef.current
    if (!track) return
    const scrollLeft = track.scrollLeft
    const cardWidth = track.children[0]?.offsetWidth ?? 0
    if (cardWidth > 0) {
      setCurrentIndex(Math.round(scrollLeft / (cardWidth + 24)))
    }
  }

  return (
    <section className="selected-work" id="work" aria-labelledby="work-label">
      <div className="section-wrapper">
        <p className="section-label" id="work-label">Selected work</p>
        <div
          className="work-track"
          ref={trackRef}
          onScroll={handleScroll}
          role="list"
          aria-label="Work case studies"
        >
          {workCards.map((card, i) => (
            <article
              key={card.id}
              className="work-card"
              role="listitem"
              aria-label={`Case study ${i + 1}`}
            >
              <div className="work-card-image img-placeholder" aria-hidden="true">
                Case study {i + 1}
              </div>
              <div className="work-card-content">
                <p className="work-situation">{card.situation}</p>
                <p className="work-outcome">{card.outcome}</p>
              </div>
            </article>
          ))}
          <article className="work-card work-card--cta" role="listitem">
            <p className="work-cta-headline">These are four. There are more.</p>
            <a
              href="#contact?note=I'd like to see the portfolio"
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
                const field = document.getElementById('contact-message')
                if (field) {
                  field.value = "I'd like to see the portfolio."
                  field.focus()
                }
              }}
            >
              Request the portfolio →
            </a>
          </article>
        </div>
        <CarouselDots
          total={TOTAL}
          currentIndex={currentIndex}
          onSelect={scrollTo}
        />
      </div>
    </section>
  )
}
