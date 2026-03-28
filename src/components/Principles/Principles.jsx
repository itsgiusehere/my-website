import { useFadeIn } from '../../hooks/useFadeIn.js'
import './Principles.css'

const principles = [
  {
    title: 'Not just user-centred',
    body: 'I bring everyone to the table — users, PMs, marketers, engineers. People commit to a vision when it serves their interests, so I make sure each perspective is understood and integrated.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Validate only what matters',
    body: 'I don\'t get stuck validating everything. I make assumptions, reuse existing insights, and focus validation on what truly moves things forward.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Always a recommendation',
    body: 'I don\'t leave you with options and no opinion. No matter how complex the situation, I provide a clear next step — otherwise we stay stuck.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 16h18M18 9l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

        <p ref={introRef} className="principles-intro fade-up">I take ownership so you don't have to chase progress. I stay three steps ahead so you save time. And I see things through to results — so you can focus on what matters knowing it's in good hands.</p>

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
