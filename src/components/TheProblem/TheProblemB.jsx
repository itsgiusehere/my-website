import { useFadeIn } from '../../hooks/useFadeIn.js'
import { problemContent } from '../../../core/content.js'
import illustration from '../../assets/illustration-problem.png'
import './TheProblemB.css'

export default function TheProblemB() {
  const ref = useFadeIn()
  const [s1, s2, s3] = problemContent.situations

  return (
    <div ref={ref} className="problem-b fade-up">
      <p className="section-label">The problem</p>

      <div className="problem-b-visual">
        <img src={illustration} alt="" aria-hidden="true" />
      </div>

      <div className="problem-b-connectors-top" aria-hidden="true">
        <span className="problem-b-branch problem-b-branch--left" />
        <span className="problem-b-branch problem-b-branch--right" />
      </div>

      <ol className="problem-b-situations-row" aria-label="Three common situations">
        <li className="problem-b-situation">
          <span className="problem-b-number" aria-hidden="true">{s1.number}</span>
          <h3 className="problem-b-title">{s1.title}</h3>
          <p className="problem-b-body">{s1.body}</p>
        </li>
        <li className="problem-b-situation">
          <span className="problem-b-number" aria-hidden="true">{s2.number}</span>
          <h3 className="problem-b-title">{s2.title}</h3>
          <p className="problem-b-body">{s2.body}</p>
        </li>
      </ol>

      <div className="problem-b-connectors-bottom" aria-hidden="true" />

      <ol className="problem-b-situations-center" start="3">
        <li className="problem-b-situation">
          <span className="problem-b-number" aria-hidden="true">{s3.number}</span>
          <h3 className="problem-b-title">{s3.title}</h3>
          <p className="problem-b-body">{s3.body}</p>
        </li>
      </ol>

      <div className="problem-b-footer">
        <p className="problem-b-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
