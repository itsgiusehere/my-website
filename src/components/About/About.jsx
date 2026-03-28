import { useFadeIn } from '../../hooks/useFadeIn.js'
import profilePicture from '../../assets/profile-picture-complete.JPG'
import './About.css'

export default function About() {
  const bioRef = useFadeIn()

  return (
    <section className="about" id="about" aria-labelledby="about-label">
      <div className="section-wrapper about-outer">
        <p className="section-label" id="about-label">About me</p>

        <div ref={bioRef} className="about-bio fade-up">
          <div className="about-photo-wrap">
            <img
              src={profilePicture}
              alt="Giuseppe de Cesare"
              className="about-photo"
              loading="lazy"
            />
          </div>
          <div className="about-bio-text">
            <p>It's Giuseppe here. 15+ years spanning design, strategy, and product — from shaping experiences to deciding what to build to setting the direction that teams align around. Based in Berlin, working globally, across industries from logistics to fintech to manufacturing.</p>
            <p>A generalist who's been deep in enough disciplines to navigate the ambiguous situations where you don't need a specialist — you need someone who can see across the whole picture.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
