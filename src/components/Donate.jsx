import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { links } from '../data/content.js'

export default function Donate() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const d = t.donate

  // Donation interest form (Google Form). Collects intent only — CATA follows
  // up privately with payment instructions. Edit the URL in content.js → links.
  // No tax-deductible / 501(c)(3) language until that status is confirmed.
  const donateLink = links.donationForm
  const secondaryLink = `mailto:${t.footer.email}?subject=${encodeURIComponent('Quiero apoyar a C.A.T.A. / I want to support C.A.T.A.')}`

  return (
    <section id="donate" className="section section-green" ref={ref}>
      <div className={`container donate-grid ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="donate-copy">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 className="display">{d.title}</h2>
          <p className="lead">{d.body}</p>
          <div className="donate-cta-row">
            <a href={donateLink} className="btn btn-gold btn-lg" target="_blank" rel="noreferrer">{d.cta}</a>
            <a href={secondaryLink} className="text-link on-dark">{d.secondary} &rarr;</a>
          </div>
          <p className="donate-note">{d.note}</p>
        </div>

        <div className="donate-panel">
          <p className="donate-panel-label">{d.supportLabel}</p>
          <ul className="support-list">
            {d.support.map((s) => (
              <li className="support-item" key={s}>
                <span className="support-mark" aria-hidden="true" />
                <p>{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
