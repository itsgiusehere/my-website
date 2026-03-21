import { testimonials } from '../../../core/content.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useFadeIn()

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-label">
      <div className="section-wrapper">
        <p className="section-label" id="testimonials-label">What clients say</p>
        <div ref={ref} className="testimonials-grid fade-up">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className={`testimonial-card${i === 0 ? ' testimonial-card--featured' : ''}`}
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
