import { useId } from 'react'

/**
 * @param {{
 *   items: Array<{ id: string, title: string, duration: string, body: string, accent: string, statement: string, illustration: string|null }>,
 *   activeId: string,
 *   onToggle: (id: string) => void
 * }} props
 */
export default function Accordion({ items, activeId, onToggle }) {
  const baseId = useId()

  return (
    <div className="accordion" role="list">
      {items.map((item) => {
        const isOpen = item.id === activeId
        const headingId = `${baseId}-heading-${item.id}`
        const panelId = `${baseId}-panel-${item.id}`

        return (
          <div
            key={item.id}
            className={`accordion-item${isOpen ? ' accordion-item--open' : ''}`}
            style={{ '--accent': item.accent }}
            role="listitem"
          >
            <button
              id={headingId}
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => onToggle(item.id)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className={`accordion-chevron${isOpen ? ' accordion-chevron--open' : ''}`} aria-hidden="true" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className="accordion-panel"
            >
              <div className="accordion-panel-inner">
                <div className={`accordion-panel-content${item.illustration ? ' accordion-panel-content--with-visual' : ''}`}>
                  <div className="accordion-panel-text">
                    <p className="accordion-duration">{item.duration}</p>
                    <p className="accordion-statement">{item.statement}</p>
                    <p className="accordion-body">{item.body}</p>
                  </div>
                  {item.illustration && (
                    <div className="accordion-panel-visual">
                      <img
                        src={item.illustration}
                        alt=""
                        aria-hidden="true"
                        className="accordion-illustration"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
