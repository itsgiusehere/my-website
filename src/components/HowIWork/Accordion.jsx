import { useId, useRef, useState, useEffect } from 'react'

function AccordionItem({ item, isOpen, headingId, panelId, onToggle, itemRef }) {
  const [expanded, setExpanded] = useState(false)
  const [collapsing, setCollapsing] = useState(false)
  const toggleMore = () => {
    if (expanded) {
      setCollapsing(true)
      setExpanded(false)
      setTimeout(() => setCollapsing(false), 420)
    } else {
      setExpanded(true)
    }
  }
  const showAccent = expanded || collapsing

  return (
    <div
      ref={itemRef}
      className={`accordion-item${isOpen ? ' accordion-item--open' : ''}${showAccent ? ' accordion-item--expanded' : ''}${expanded ? ' accordion-item--body-open' : ''}`}
      style={{ '--accent': item.accent }}
      role="listitem"
    >
      {item.illustration && (
        <div className="accordion-item-visual" aria-hidden="true">
          <img src={item.illustration} alt="" />
        </div>
      )}
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
              <div className="accordion-body-wrapper">
                <div className="accordion-body-inner">
                  <p className="accordion-body" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
              <button
                className="accordion-more-toggle"
                onClick={toggleMore}
              >
                {expanded ? 'Read less' : 'Read more'}
              </button>
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
}

/**
 * @param {{
 *   items: Array<{ id: string, title: string, duration: string, body: string, accent: string, statement: string, illustration: string|null }>,
 *   activeId: string,
 *   onToggle: (id: string) => void
 * }} props
 */
export default function Accordion({ items, activeId, onToggle }) {
  const baseId = useId()
  const itemRefs = useRef([])

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768

    let ticking = false
    const update = () => {
      if (!isMobile()) { ticking = false; return }
      const vh = window.innerHeight
      let activeIdx = 0
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        if (el.getBoundingClientRect().top < vh * 0.5) activeIdx = i
      })
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        if (i === activeIdx) el.setAttribute('data-active', '')
        else el.removeAttribute('data-active')
      })
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="accordion" role="list">
      {items.map((item, i) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={item.id === activeId}
          headingId={`${baseId}-heading-${item.id}`}
          panelId={`${baseId}-panel-${item.id}`}
          onToggle={onToggle}
          itemRef={el => itemRefs.current[i] = el}
        />
      ))}
    </div>
  )
}
