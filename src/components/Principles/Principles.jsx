import { useFadeIn } from '../../hooks/useFadeIn.js'
import illustrationHowIWork from '../../assets/illustration-how-I-work.png'
import './Principles.css'

const principles = [
  {
    title: 'Not just user-centred',
    body: 'I bring everyone to the table: users, PMs, marketers, engineers. People commit to a vision when it serves their interests, so I make sure each perspective is understood and integrated.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Validate only what matters',
    body: 'I don\'t get stuck validating everything. I make assumptions, reuse existing insights, and focus validation where the risk is highest.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Progress happens through people',
    body: 'Complex organisations move through trust, not processes. I map who matters and earn their buy-in. On the ground, I elevate the team I work with \u2014 improving rituals, ways of working, how they function together. The right people aligned and growing is what makes the work last.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 11l-3 8M20 11l3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Always a recommendation',
    body: 'I don\'t leave you with options and no opinion. No matter how complex the situation, I provide a clear next step. Otherwise we stay stuck.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 16h18M18 9l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Your problem becomes my problem',
    body: 'I care about the work and the people doing it. I\u2019m always there, I go further than expected, and I stay until it\u2019s right. Clients don\u2019t have to chase me for progress or worry about quality.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 6v20M6 16h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Principles() {
  const introRef = useFadeIn()
  const gridRef = useFadeIn()

  return (
    <section className="principles" id="principles" aria-labelledby="principles-label">
      <div className="section-wrapper principles-outer">
        <p className="section-label" id="principles-label">How I work</p>

        <div className="principles-visual">
          <img src={illustrationHowIWork} alt="" aria-hidden="true" className="principles-illustration" />
        </div>

        <p ref={introRef} className="principles-intro fade-up">I take ownership of the work, stay ahead of what's coming, and see things through to results.</p>

        <ul ref={gridRef} className="principles-grid fade-up" role="list">
          {principles.map((p, i) => (
            <li key={i} className="principles-item">
              <span className="principles-icon">{p.icon}</span>
              <h3 className="principles-title">{p.title}</h3>
              <p className="principles-body">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
