import { useLanguage } from '../hooks/useLanguage.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = 2026

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="26" height="26">
                <path
                  d="M16 4c-3 5-3 9 0 13 3-4 3-8 0-13zM6 14c4 1 7 4 8 8-4-1-7-4-8-8zm20 0c-1 4-4 7-8 8 1-4 4-7 8-8zm-10 11c1 1 1 2 0 3-1-1-1-2 0-3z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="brand-text">{t.org.name}</span>
          </div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-col">
          <h4>{t.nav.programs}</h4>
          <ul>
            {t.programs.items.map((p) => (
              <li key={p.title}>{p.title}</li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>{t.footer.address}</li>
            <li>{t.footer.email}</li>
            <li>{t.footer.phone}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-base">
        <span>© {year} {t.org.name}. {t.footer.rights}</span>
        <span>{t.footer.nonprofit}</span>
      </div>
    </footer>
  )
}
