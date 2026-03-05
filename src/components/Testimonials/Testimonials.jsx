import { testimonials } from '../../../core/content.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-label">
      <div className="section-wrapper">
        <p className="section-label" id="testimonials-label">What clients say</p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonial-card">
              <blockquote className="testimonial-quote">
                <p>"{t.quote}"</p>
              </blockquote>
              <figcaption className="testimonial-attribution">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.title}, {t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
