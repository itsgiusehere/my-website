import { useFadeIn } from '../../hooks/useFadeIn.js'
import { useActiveOnScroll } from '../../hooks/useActiveOnScroll.js'
import { problemContent } from '../../../core/content.js'
import illustration from '../../assets/illustration-problem.png'
import './TheProblemA.css'

/* Placeholder: same image with CSS filter per state.
   Replace with real assets when ready:
   import ill01 from '../../assets/illustration-problem-01.png'
   import ill02 from '../../assets/illustration-problem-02.png'
   import ill03 from '../../assets/illustration-problem-03.png' */
const illustrations = [illustration, illustration, illustration]

export default function TheProblemA() {
  const sectionRef = useFadeIn()
  const [setRef, activeIndex, seen] = useActiveOnScroll(problemContent.situations.length)

  return (
    <div ref={sectionRef} className="problem-a fade-up">
      <div className="problem-a-scroll">
        <ol className="problem-a-situations" aria-label="Three common situations">
          {problemContent.situations.map((s, i) => (
            <li
              key={s.id}
              ref={el => setRef(el, i)}
              className={`problem-a-situation${seen.has(i) ? ' problem-a-situation--seen' : ''}`}
            >
              <span className="problem-a-number" aria-hidden="true">{s.number}</span>
              <h3 className="problem-a-title">{s.title}</h3>
              <p className="problem-a-body">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="problem-a-sticky">
          <div className="problem-a-visual">
            {illustrations.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden="true"
                className={`problem-a-img problem-a-img--${i}${i === activeIndex ? ' problem-a-img--active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="problem-a-footer">
        <p className="problem-a-closing">{problemContent.closing}</p>
        <a href="#contact" className="btn">{problemContent.cta} →</a>
      </div>
    </div>
  )
}
