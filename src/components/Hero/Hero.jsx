import profilePicture from '../../assets/profile-picture.jpeg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="section-wrapper hero-inner hero-animate">
        <div className="hero-intro">
          <img src={profilePicture} alt="Giuseppe de Cesare" className="hero-avatar" />
          <p className="hero-name">
            Hello, I'm Giuseppe.
          </p>
        </div>
        <h1 className="hero-headline">
          I turn fragmented thinking into shared clarity —{' '}
          <em>so your teams can move forward.</em>
        </h1>
        <p className="hero-subheadline">
          Design leaders and CPOs bring me in as an <mark>independent strategic designer</mark> when everyone has a different picture of where a <mark>digital product</mark> or <mark>end to end experience</mark> is going. I synthesise across product, business, and user needs – and deliver a <mark>tangible vision</mark> to align around and build from.
        </p>
      </div>
      <a href="#problem" className="hero-scroll" aria-label="Scroll to next section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
