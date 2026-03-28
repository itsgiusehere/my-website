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
                <path d="M4.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM3 8h3v9H3V8Zm5.5 0H11v1.2h.04C11.5 8.5 12.6 8 13.9 8c3 0 3.6 2 3.6 4.5V17h-3v-4c0-1 0-2.2-1.3-2.2S12 12 12 13v4H8.5V8Z" fill="currentColor"/>
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
