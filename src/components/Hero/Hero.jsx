import profilePicture from '../../assets/profile-picture.jpeg'
import heroIllustration from '../../assets/illustration-embedded-leadership.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <div className="section-wrapper hero-inner hero-animate">
        <div className="hero-visual">
          <img src={heroIllustration} alt="" aria-hidden="true" className="hero-illustration" />
        </div>
        <h1 className="hero-headline">
          I turn scattered thinking into a{'\u00A0'}direction{' '}
          <em>teams can move on.</em>
        </h1>
        <p className="hero-subheadline">
          I zoom out to frame the direction of a digital product or experience, and zoom in to make it tangible. The craft is in doing both, and bringing everyone along.
        </p>
      </div>
      <a href="#problem" className="hero-scroll" aria-label="Scroll to next section">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
