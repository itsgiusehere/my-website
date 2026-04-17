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
            <p>After a period away from work, I sat in a coaching session about understanding the work I love doing and how it fits in my life. What came was an image: a room full of books and sticky notes, plants growing everywhere, warm light through a window looking out onto something green. A place where knowledge accumulates and stays alive. It made something click: what I do is seek coherence where there are fragments and build it where the dots don't connect yet. It's what draws me to a forest, to a landscape, to the green outside that window. Complexity that feels whole. It's what I try to craft in the work.</p>
            <p>15 years across logistics, fintech, hardware, music software, manufacturing. Each new domain is the part that excites me most. Mapping concepts, finding the first principles underneath, crafting to understand and to make that understanding shared.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
