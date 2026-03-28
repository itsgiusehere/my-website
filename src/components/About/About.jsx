import { useFadeIn } from '../../hooks/useFadeIn.js'
import profilePicture from '../../assets/profile-picture-complete.JPG'
import './About.css'

const beliefs = [
  {
    title: 'Not just user-centred',
    body: 'I bring everyone to the table — users, PMs, marketers, engineers. People commit to a vision when it serves their interests, so I make sure each perspective is understood and integrated.',
  },
  {
    title: 'Validate only what matters',
    body: 'I don\'t get stuck validating everything. I make assumptions, reuse existing insights, and focus validation on what truly moves things forward.',
  },
  {
    title: 'Always a recommendation',
    body: 'I don\'t leave you with options and no opinion. No matter how complex the situation, I provide a clear next step — otherwise we stay stuck.',
  },
]

export default function About() {
  const beliefsRef = useFadeIn()
  const bioRef = useFadeIn()

  return (
    <section className="about" id="about" aria-labelledby="about-label">
      <div className="section-wrapper about-outer">
        <p className="section-label" id="about-label">About me</p>

        <p className="about-intro">I take ownership so you don't have to chase progress. I stay three steps ahead so you save time. And I see things through to results — so you can focus on what matters knowing it's in good hands.</p>

        <ul ref={beliefsRef} className="about-beliefs fade-up" role="list">
          {beliefs.map((belief, i) => (
            <li key={i} className="about-belief">
              <h3 className="about-belief-title">{belief.title}</h3>
              <p className="about-belief-body">{belief.body}</p>
            </li>
          ))}
        </ul>

        <div ref={bioRef} className="about-bio-section fade-up">
          <div className="about-photo-wrap">
            <img
              src={profilePicture}
              alt="Giuseppe de Cesare"
              className="about-photo"
              loading="lazy"
            />
          </div>
          <div className="about-bio">
            <p>15+ years spanning design, strategy, and product — from shaping experiences to deciding what to build to setting the direction that teams align around. Based in Berlin, working globally, across industries from logistics to fintech to manufacturing.</p>
            <p>A generalist who's been deep in enough disciplines to navigate the ambiguous situations where you don't need a specialist — you need someone who can see across the whole picture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
