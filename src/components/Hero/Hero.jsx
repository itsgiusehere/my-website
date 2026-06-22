import profilePicture from '../../assets/profile-picture.jpeg'
import heroIllustration from '../../assets/illustration-embedded-leadership.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="section-wrapper hero-inner hero-animate">
        <span className="hero-pill"><span className="hero-pill-dot" aria-hidden="true" /><strong>Available Freelance</strong> in Q3 2026</span>
        <div className="hero-visual">
          <img src={heroIllustration} alt="" aria-hidden="true" className="hero-illustration" />
        </div>
        <h1 className="hero-headline">
          I turn scattered thinking into a north star{' '}
          <em>teams can build toward.</em>
        </h1>
        <p className="hero-subheadline">
          I zoom out to frame a digital product or experience, and zoom in to make it tangible. The craft is in doing both, and bringing everyone along.
        </p>
      </div>
      <a href="#problem" className="hero-scroll" aria-label="Scroll to next section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
