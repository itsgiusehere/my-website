import { useFadeIn } from '../../hooks/useFadeIn.js'
import { useActiveOnScroll } from '../../hooks/useActiveOnScroll.js'
import { problemContent } from '../../../core/content.js'
import illustration from '../../assets/illustration-problem.png'
import './TheProblemD.css'

/* Placeholder: same image with CSS filter per state. */
const illustrations = [illustration, illustration, illustration]

export default function TheProblemD() {
  const sectionRef = useFadeIn()
  const [setRef, activeIndex, seen] = useActiveOnScroll(problemContent.situations.length)

  return (
    <div ref={sectionRef} className="problem-d fade-up">
      <div className="problem-d-layout">
        <div className="problem-d-left">
          <div className="problem-d-visual">
            {illustrations.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden="true"
                className={`problem-d-img problem-d-img--${i}${i === activeIndex ? ' problem-d-img--active' : ''}`}
              />
            ))}
          </div>
          <div className="problem-d-statement">
            <h2 className="problem-d-anchor">Where things usually start.</h2>
            <p className="problem-d-closing">{problemContent.closing}</p>
          </div>
        </div>

        <div className="problem-d-right">
          <ol className="problem-d-situations" aria-label="Three common situations">
            {problemContent.situations.map((s, i) => (
              <li
                key={s.id}
                ref={el => setRef(el, i)}
                className={`problem-d-situation${i === activeIndex ? ' problem-d-situation--active' : ''}${seen.has(i) ? ' problem-d-situation--seen' : ''}`}
              >
                <span className="problem-d-number" aria-hidden="true">{s.number}</span>
                <h3 className="problem-d-title">{s.title}</h3>
                <p className="problem-d-body">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="problem-d-cta">
            <a href="#contact" className="btn">{problemContent.cta} →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
