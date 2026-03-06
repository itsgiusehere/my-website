import { useEffect } from 'react'
import { testimonials } from '../../../core/content.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import './Testimonials.css'

export default function Testimonials() {
  const ref = useFadeIn()

  useEffect(() => {
    const section = document.getElementById('testimonials')
    const observer = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle('bg-white', !entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-label">
      <div className="section-wrapper">
        <p className="section-label" id="testimonials-label">What clients say</p>
        <div ref={ref} className="testimonials-grid fade-up">
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonial-card">
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
