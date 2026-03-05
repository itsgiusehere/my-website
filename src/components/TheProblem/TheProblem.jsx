import { useFadeIn } from '../../hooks/useFadeIn.js'
import './TheProblem.css'

export default function TheProblem() {
  const ref = useFadeIn()

  return (
    <section className="the-problem" id="problem" aria-labelledby="problem-headline">
      <div className="section-wrapper">
        <div ref={ref} className="problem-inner fade-up">
          <h2 className="problem-headline" id="problem-headline">
            You know what needs to happen. You can't get everyone to see it the same way yet.
          </h2>
          <div className="problem-body">
            <p>
              Product, design, business — everyone has a different read on the priority, the problem, or the direction. The initiative has been "almost ready to move" for months. There's no shortage of opinions. What's missing is something concrete enough for everyone to commit to.
            </p>
            <p>
              Strategy documents don't unlock that. Pixel-perfect designs don't either. What moves things is a tangible vision — something you can point to, test, and build from.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
