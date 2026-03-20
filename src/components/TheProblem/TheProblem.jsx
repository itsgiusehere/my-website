import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustrationPlaceholder from '../../assets/illustration-problem.png'
import './TheProblem.css'

const visuals = [illustrationPlaceholder, illustrationPlaceholder, illustrationPlaceholder]

/* Height of the peeking card header */
const CARD_HEADER_HEIGHT = 72

export default function TheProblem() {
  const ref = useFadeIn()

  return (
    <section className="the-problem" id="problem">
      <div className="section-wrapper">
        <p className="section-label">Where things usually start</p>

        <div ref={ref} className="problem-stack fade-up">
          {problemContent.situations.map((s, i) => (
            <div
              key={s.id}
              className="problem-card"
              style={{ '--card-index': i, '--card-top': `${i * CARD_HEADER_HEIGHT}px` }}
            >
              <div className="problem-card-header">
                <span className="problem-card-number">{s.number}</span>
                <span className="problem-card-label">{s.tab}</span>
              </div>
              <div className="problem-card-body">
                <div className="problem-card-content">
                  <div className="problem-card-text">
                    <p className="problem-hook">{s.title}</p>
                    <p className="problem-detail">{s.body}</p>
                  </div>
                  <div className="problem-card-visual">
                    <img
                      src={visuals[i]}
                      alt=""
                      aria-hidden="true"
                      className="problem-visual-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
