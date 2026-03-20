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
          AI makes building easy — and easily scattered. Direction is scarce. I zoom out to frame it, zoom in to make it tangible. The craft is in doing both, and bringing everyone along.
        </p>
      </div>
      <a href="#problem" className="hero-scroll" aria-label="Scroll to next section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
