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
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonial-card">
              <span className="testimonial-mark" aria-hidden="true">"</span>
              <blockquote className="testimonial-quote">
                <p>{t.quote}</p>
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
