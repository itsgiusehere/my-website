import { useFadeIn } from '../../hooks/useFadeIn.js'
import './Bridge.css'

export default function Bridge() {
  const ref = useFadeIn()

  return (
    <section className="bridge" aria-label="Who I work with">
      <div ref={ref} className="bridge-inner fade-up">
        <p className="bridge-copy">
          Design leaders and CPOs bring me in as an independent strategic designer when everyone has a different picture of where a digital product or end-to-end experience is going. I synthesise across product, business, and user needs — and deliver a tangible vision to align around and build from.
        </p>
        <div className="bridge-actions">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#how-i-work" className="link">Learn more</a>
        </div>
      </div>
    </section>
  )
}
