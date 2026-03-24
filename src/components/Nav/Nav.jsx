import { useState, useEffect, useCallback } from 'react'
import './Nav.css'

const links = [
  { label: 'How I work', href: '#how-i-work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') close()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-identity" aria-label="Back to top" />

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="nav-link link">{label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta btn">Get in touch</a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`nav-burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
            <span className="nav-burger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — outside nav to avoid backdrop-filter containing block */}
      <div
        id="mobile-menu"
        className={`nav-drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <ul className="nav-drawer-links" role="list">
          {links.map(({ label, href }, i) => (
            <li key={href} style={{ '--i': i }}>
              <a href={href} className="nav-drawer-link" onClick={close}>
                {label}
              </a>
            </li>
          ))}
          <li style={{ '--i': links.length }}>
            <a
              href="#contact"
              className="nav-drawer-cta btn btn-primary"
              onClick={close}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
