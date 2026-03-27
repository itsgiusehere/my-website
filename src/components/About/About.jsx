import { useFadeIn } from '../../hooks/useFadeIn.js'
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
  const ref = useFadeIn()

  return (
    <section className="about" id="about" aria-labelledby="about-label">
      <div className="section-wrapper about-inner">
        <p className="section-label" id="about-label">About me</p>
        <div ref={ref} className="about-body fade-up">
          <div className="about-bio">
            <p>15+ years spanning design, strategy, and product — from shaping experiences to deciding what to build to setting the direction that teams align around. Based in Berlin, working globally, across industries from logistics to fintech to manufacturing. A generalist who's been deep in enough disciplines to navigate the ambiguous situations where you don't need a specialist — you need someone who can see across the whole picture.</p>
          </div>
          <ul className="about-beliefs" role="list">
            {beliefs.map((belief, i) => (
              <li key={i} className="about-belief">
                <h3 className="about-belief-title">{belief.title}</h3>
                <p className="about-belief-body">{belief.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
