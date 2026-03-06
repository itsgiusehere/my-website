import './Nav.css'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'How I work', href: '#how-i-work' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-identity" aria-label="Back to top" />
        <ul className="nav-links" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta btn btn-primary">Get in touch</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
