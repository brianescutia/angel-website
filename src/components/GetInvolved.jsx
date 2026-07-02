import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import VolunteerForm from './VolunteerForm.jsx'

export default function GetInvolved() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section id="get-involved" className="section section-cream" ref={ref}>
      <div className={`container involve-grid ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="involve-copy">
          <p className="eyebrow">{t.involve.eyebrow}</p>
          <h2 className="display">{t.involve.title}</h2>
          <p className="lead">{t.involve.body}</p>
          <a href="#volunteer-form" className="btn btn-green btn-lg">{t.involve.cta}</a>
        </div>

        <div className="involve-ways">
          {t.involve.ways.map((w, i) => (
            <article
              key={w.title}
              className={`way ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${100 + i * 110}ms` }}
            >
              <div className="way-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            </article>
          ))}
        </div>

        <VolunteerForm />
      </div>
    </section>
  )
}
