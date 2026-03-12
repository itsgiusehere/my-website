import { useState } from 'react'
import TheProblemA from './TheProblemA'
import TheProblemB from './TheProblemB'
import TheProblemD from './TheProblemD'
import './TheProblem.css'

const variants = { A: TheProblemA, B: TheProblemB, D: TheProblemD }

export default function TheProblem() {
  const [variant, setVariant] = useState('D')

  const Component = variants[variant]

  return (
    <section className="the-problem" id="problem">
      <div className="section-wrapper">
        <div className="problem-variant-toggle" role="radiogroup" aria-label="Layout variant">
          {Object.keys(variants).map(key => (
            <button
              key={key}
              role="radio"
              aria-checked={variant === key}
              onClick={() => setVariant(key)}
              className={`problem-toggle-btn${variant === key ? ' problem-toggle-btn--active' : ''}`}
            >
              {key}
            </button>
          ))}
        </div>
        <Component />
      </div>
    </section>
  )
}
