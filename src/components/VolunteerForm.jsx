import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.jsx'

// TODO: replace with the real Google Form action URL + entry IDs once the
// form exists. To create it: a Google Form with 4 short-answer/paragraph
// fields in this order — Name, Phone, Email, Message — none marked
// required (this component handles required-field validation itself).
// Then open the published form, view its page source, and pull the
// `action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"` URL
// and each field's `name="entry.XXXXXXXXX"` attribute into the values below.
const GOOGLE_FORM_ACTION = ''
const FIELD_ENTRIES = {
  name: '',
  phone: '',
  email: '',
  message: ''
}

const initialFields = { name: '', phone: '', email: '', message: '', company: '' }

export default function VolunteerForm() {
  const { t } = useLanguage()
  const v = t.volunteerForm
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [validationError, setValidationError] = useState('')

  const update = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: real visitors never fill this hidden field. Bots that
    // auto-fill every input they find do — silently drop the submission.
    if (fields.company) return

    if (!fields.name.trim() || (!fields.phone.trim() && !fields.email.trim())) {
      setValidationError(v.requiredError)
      return
    }
    setValidationError('')

    if (!GOOGLE_FORM_ACTION) {
      // Not wired up yet — see the TODO at the top of this file.
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const body = new URLSearchParams({
        [FIELD_ENTRIES.name]: fields.name,
        [FIELD_ENTRIES.phone]: fields.phone,
        [FIELD_ENTRIES.email]: fields.email,
        [FIELD_ENTRIES.message]: fields.message
      })
      // Google Forms' response endpoint doesn't send CORS headers, so we
      // fire the request "no-cors" and optimistically treat completion
      // (no network error) as success — the response body isn't readable.
      await fetch(GOOGLE_FORM_ACTION, { method: 'POST', mode: 'no-cors', body })
      setStatus('success')
      setFields(initialFields)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="volunteer-card" id="volunteer-form">
      <p className="eyebrow">{v.eyebrow}</p>
      <h3 className="volunteer-title">{v.title}</h3>
      <p className="volunteer-lead">{v.lead}</p>
      <p className="volunteer-note">
        {v.leadNote} <a href={`tel:${t.footer.phone.replace(/[^0-9+]/g, '')}`}>{t.footer.phone}</a>
      </p>

      <form className="volunteer-form" onSubmit={handleSubmit} noValidate>
        {/* Honeypot field — visually hidden, never shown to real visitors */}
        <input
          type="text"
          className="hp-field"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={fields.company}
          onChange={update('company')}
        />

        <input
          className="form-input"
          type="text"
          placeholder={v.nameLabel}
          aria-label={v.nameLabel}
          value={fields.name}
          onChange={update('name')}
        />
        <input
          className="form-input"
          type="tel"
          placeholder={v.phoneLabel}
          aria-label={v.phoneLabel}
          value={fields.phone}
          onChange={update('phone')}
        />
        <input
          className="form-input"
          type="email"
          placeholder={v.emailLabel}
          aria-label={v.emailLabel}
          value={fields.email}
          onChange={update('email')}
        />
        <textarea
          className="form-input form-textarea"
          placeholder={v.messageLabel}
          aria-label={v.messageLabel}
          rows={4}
          value={fields.message}
          onChange={update('message')}
        />

        {validationError && <p className="form-message form-message-error">{validationError}</p>}
        {status === 'success' && <p className="form-message form-message-success">{v.success}</p>}
        {status === 'error' && <p className="form-message form-message-error">{v.error}</p>}

        <div className="form-actions">
          <button type="submit" className="btn btn-blue" disabled={status === 'submitting'}>
            {status === 'submitting' ? v.submitting : v.submit}
          </button>
        </div>
      </form>
    </div>
  )
}
