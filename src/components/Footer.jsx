import { useLanguage } from '../hooks/useLanguage.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const year = new Date().getFullYear()

  const navLinks = [
    ['mission', t.nav.mission],
    ['programs', t.nav.programs],
    ['events', t.nav.events],
    ['tiendita', t.nav.shop],
    ['donate', t.nav.donate],
    ['get-involved', t.nav.involve]
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <Logo size={48} className="brand-logo" />
            <span className="brand-text">
              {t.org.short}
              <small>{t.org.english}</small>
            </span>
          </div>
          <p className="footer-tagline">{f.tagline}</p>
          <p className="footer-region">{f.region}</p>
          <div className="footer-social">
            {f.social.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                <SocialIcon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>{f.exploreLabel}</h4>
          <ul>
            {navLinks.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{f.contactLabel}</h4>
          <ul>
            <li>
              {/* TODO confirm: public office address + ZIP */}
              {f.address}
            </li>
            {/* TODO confirm: public-facing email */}
            <li><a href={`mailto:${f.email}`}>{f.email}</a></li>
            {/* TODO confirm: OK to publish this phone publicly */}
            <li><a href={`tel:${f.phone.replace(/[^0-9+]/g, '')}`}>{f.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-base">
        <span>© {year} {t.org.name}</span>
        <span>{f.rights}</span>
      </div>
    </footer>
  )
}

function SocialIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V14h2.3v7h3z" />
    </svg>
  )
}
