import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="section-wrapper hero-inner hero-animate">
        <span className="hero-name">Giuseppe de Cesare</span>
        <h1 className="hero-headline">
          I turn fragmented thinking into shared clarity —{' '}
          <em>so your teams can move forward.</em>
        </h1>
        <p className="hero-subheadline">
          Design leaders and CPOs bring me in when everyone has a different picture of where things are going. I synthesise across product, business, and user needs — and deliver something concrete enough to align around and build from.
        </p>
        <a href="#contact" className="btn btn-primary hero-cta">Get in touch</a>
      </div>
      <a href="#problem" className="hero-scroll" aria-label="Scroll to next section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
