import { useFadeIn } from '../../hooks/useFadeIn.js'
import './Contact.css'

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section className="contact" id="contact" aria-labelledby="contact-label">
      <div className="section-wrapper contact-outer">
        <p className="section-label" id="contact-label">Contact</p>

        <div ref={ref} className="contact-body fade-up">
          <p className="contact-intro">If something here resonates with a challenge you're navigating or you want to think out loud about a project I'm happy to chat.</p>

          <div className="contact-links">
            <a
              href="https://calendly.com/giuseppedecesare"
              className="btn contact-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 1v4M14 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Book a chat
            </a>
            <a
              href="https://linkedin.com/in/giuseppedecesare"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="19" height="19" rx="3" stroke="currentColor" strokeWidth="1" />
                <path d="M6.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5.5 9h2v6h-2V9Zm3.5 0h2v.8h.03c.3-.5 1-1.1 2.1-1.1 2.2 0 2.6 1.5 2.6 3.4V15h-2v-2.8c0-.7 0-1.6-1-1.6s-1.1.8-1.1 1.5V15h-2V9Z" fill="currentColor"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
            <a href="mailto:hello@giuseppe-decesare.com" className="contact-link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>hello@giuseppe-decesare.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
