import profilePicture from '../../assets/profile-picture.jpeg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="section-wrapper hero-inner hero-animate">
        <h1 className="hero-headline">
          I turn fragmented thinking into shared clarity —{' '}
          <em>so your teams can move forward.</em>
        </h1>
        <div className="hero-intro">
          <img src={profilePicture} alt="Giuseppe de Cesare" className="hero-avatar" />
          <p className="hero-subheadline">
            <span className="hero-name">Hello, I'm Giuseppe,</span>{' '}
            strategic designer based in Berlin working globally. Design leaders and CPOs bring me in when everyone has a different picture of where a digital product or end to end experience is going. I synthesise across product, business, and user needs — and deliver a vision concrete enough to align around and build from.
          </p>
        </div>
      </div>
      <a href="#problem" className="hero-scroll" aria-label="Scroll to next section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
