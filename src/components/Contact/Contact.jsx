import { useState, useEffect } from 'react'
import { submitContactForm } from '../../../services/contact.js'
import { useFadeIn } from '../../hooks/useFadeIn.js'
import './Contact.css'

const INITIAL = { name: '', company: '', message: '' }

export default function Contact() {
  const [fields, setFields] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      await submitContactForm(fields)
      setStatus('success')
      setFields(INITIAL)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Try again or reach out directly.')
    }
  }

  const ref = useFadeIn()

  useEffect(() => {
    const section = document.getElementById('contact')
    const observer = new IntersectionObserver(
      ([entry]) => document.body.classList.toggle('bg-white', entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact" id="contact" aria-labelledby="contact-headline">
      <div ref={ref} className="section-wrapper contact-inner fade-up">
        <div className="contact-copy">
          <h2 className="contact-headline" id="contact-headline">
            Let's find out if we're a fit.
          </h2>
          <p className="contact-sub">
            If something here resonates with a challenge you're navigating — or you want to think out loud about a project — I'm happy to have a first conversation with no agenda.
          </p>
          <a
            href="https://linkedin.com/in/giuseppedecesare"
            className="btn contact-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="contact-success" role="status">
              <p className="contact-success-msg">
                Message sent. I'll be in touch within a few days.
              </p>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              <div className="form-field">
                <label htmlFor="contact-name" className="form-label">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-company" className="form-label">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  className="form-input"
                  value={fields.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message" className="form-label">
                  What are you trying to figure out?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              {status === 'error' && (
                <p className="form-error" role="alert">{errorMsg}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
