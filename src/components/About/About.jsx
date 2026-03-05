import './About.css'

const beliefs = [
  'Progress happens when people align around something they can see and believe in. That\'s what I build.',
  'Trust is built through action, not promises. Quick wins first.',
  'I don\'t validate everything. I focus on what actually matters for progress.',
  'I always recommend a next step. Without one, we stay stuck.',
]

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-headline">
      <div className="section-wrapper about-inner">
        <p className="section-label">About</p>
        <div className="about-content">
          <h2 className="about-headline" id="about-headline">
            I went independent to move faster.
          </h2>
          <div className="about-body">
            <p>
              Inside one company, you see one context. Working across logistics, fintech, hardware, music software, and manufacturing — you cross-pollinate. You bring approaches that teams inside one industry rarely encounter. And you can focus on what actually moves things forward, without internal politics slowing you down.
            </p>
            <p>
              I've been doing this for 15+ years, based in Berlin, working globally.
            </p>
            <p className="about-beliefs-intro">A few things I hold to:</p>
            <ul className="about-beliefs" role="list">
              {beliefs.map((belief, i) => (
                <li key={i} className="about-belief">
                  <span className="belief-marker" aria-hidden="true">—</span>
                  <span>{belief}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
