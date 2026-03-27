import { useFadeIn } from '../../hooks/useFadeIn.js'
import './BridgeClosing.css'

export default function BridgeClosing() {
  const ref = useFadeIn()

  return (
    <section className="bridge-closing" aria-label="Why work with me">
      <div ref={ref} className="bridge-closing-inner fade-up">
        <p className="bridge-closing-copy">
          I take ownership so you don't have to chase progress. I stay three steps ahead so you save time. And I see things through to results — so you can focus on what matters knowing it's in good hands.
        </p>
        <div className="bridge-closing-actions">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
