import { useState } from 'react'
import { testimonials } from '../../../core/content.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import photoRachel from '../../assets/Rachel.jpeg'
import photoSamta from '../../assets/Samta.png'
import photoSimon from '../../assets/Simon.jpeg'
import photoGerrit from '../../assets/GerritE..jpeg'
import photoDietrich from '../../assets/Dietrich.jpeg'
import photoDenis from '../../assets/DenisW..jpeg'
import './Testimonials.css'

const PHOTOS = {
  'rachel-hill': photoRachel,
  'samta-kothari': photoSamta,
  'simon-allen': photoSimon,
  'gerrit-elvers': photoGerrit,
  'dietrich-pfluger': photoDietrich,
  'denis-w': photoDenis,
}

const VISIBLE_COUNT = 2

export default function Testimonials() {
  const featuredRef = useFadeIn()
  const gridRef = useFadeIn()
  const [expanded, setExpanded] = useState(false)

  const withPhotos = testimonials.map(t => ({ ...t, photo: PHOTOS[t.id] || null }))
  const featured = withPhotos[0]
  const visible = withPhotos.slice(1, 1 + VISIBLE_COUNT)
  const hidden = withPhotos.slice(1 + VISIBLE_COUNT)

  const toggle = () => setExpanded((prev) => !prev)

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-label">
      <div className="section-wrapper">
        <p className="section-label" id="testimonials-label">What clients say</p>

        <figure ref={featuredRef} className="testimonial-featured fade-up">
          <blockquote className="testimonial-featured-quote">
            <p>{featured.quote}</p>
          </blockquote>
          <figcaption className="testimonial-featured-attribution">
            {featured.photo
              ? <img src={featured.photo} alt={featured.name} className="testimonial-featured-photo" />
              : <span className="testimonial-featured-initial">{featured.name.charAt(0)}</span>
            }
            <div className="testimonial-meta">
              <span className="testimonial-name">{featured.name}</span>
              <span className="testimonial-role">{featured.title}, {featured.company}</span>
            </div>
          </figcaption>
        </figure>

        <div ref={gridRef} className="testimonials-grid fade-up">
          {visible.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}

          <div className={`testimonials-overflow${expanded ? ' testimonials-overflow--open' : ''}`}>
            <div className="testimonials-overflow-inner">
              {hidden.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {hidden.length > 0 && (
          <button className="testimonials-toggle" onClick={toggle}>
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t }) {
  return (
    <figure className="testimonial-card">
      <blockquote className="testimonial-quote">
        <p>{t.quote}</p>
      </blockquote>
      <figcaption className="testimonial-attribution">
        {t.photo
          ? <img src={t.photo} alt={t.name} className="testimonial-photo" />
          : <span className="testimonial-initial">{t.name.charAt(0)}</span>
        }
        <div className="testimonial-meta">
          <span className="testimonial-name">{t.name}</span>
          <span className="testimonial-role">{t.title}, {t.company}</span>
        </div>
      </figcaption>
    </figure>
  )
}
