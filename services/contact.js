/* ─────────────────────────────────────────────
   Contact Form Service
   Submits to Formspree. Set VITE_FORMSPREE_URL
   in .env to activate a real endpoint.
   ───────────────────────────────────────────── */

const FORMSPREE_URL =
  import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/PLACEHOLDER'

/**
 * @param {{ name: string, company: string, message: string }} fields
 * @returns {Promise<void>}
 */
export async function submitContactForm({ name, company, message }) {
  const res = await fetch(FORMSPREE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, company, message }),
  })

  if (!res.ok) {
    throw new Error('Form submission failed. Please try again or reach out directly.')
  }

  return res.json()
}
