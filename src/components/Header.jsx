import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.jsx'

export default function Header() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={(e) => handleNav(e, 'top')}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <path
                d="M16 4c-3 5-3 9 0 13 3-4 3-8 0-13zM6 14c4 1 7 4 8 8-4-1-7-4-8-8zm20 0c-1 4-4 7-8 8 1-4 4-7 8-8zm-10 11c1 1 1 2 0 3-1-1-1-2 0-3z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="brand-text">{t.org.name}</span>
        </a>

        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <a href="#mission" onClick={(e) => handleNav(e, 'mission')}>{t.nav.mission}</a>
          <a href="#programs" onClick={(e) => handleNav(e, 'programs')}>{t.nav.programs}</a>
          <a href="#events" onClick={(e) => handleNav(e, 'events')}>{t.nav.events}</a>
          <a href="#donate" onClick={(e) => handleNav(e, 'donate')}>{t.nav.donate}</a>
          <a href="#involve" onClick={(e) => handleNav(e, 'involve')}>{t.nav.involve}</a>

          <div className="nav-actions">
            <button
              className="lang-toggle"
              onClick={toggle}
              aria-label={t.languageToggle.aria}
              title={t.languageToggle.aria}
            >
              <span className={lang === 'es' ? 'is-active' : ''}>ES</span>
              <span aria-hidden="true">/</span>
              <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            </button>
            <a href="#donate" className="btn btn-ghost" onClick={(e) => handleNav(e, 'donate')}>
              {t.cta.secondary}
            </a>
            <a href="#involve" className="btn btn-primary" onClick={(e) => handleNav(e, 'involve')}>
              {t.cta.primary}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
