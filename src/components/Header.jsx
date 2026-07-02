import { useEffect, useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.jsx'
import Logo from './Logo.jsx'

export default function Header() {
  const { t, lang, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
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

  const links = [
    ['mission', t.nav.mission],
    ['programs', t.nav.programs],
    // ['events', t.nav.events], // hidden for now — event details not confirmed
    ['donate', t.nav.donate],
    ['tiendita', t.nav.shop],
    ['get-involved', t.nav.involve]
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={(e) => handleNav(e, 'top')} aria-label={t.org.name}>
          <Logo size={44} className="brand-logo" />
          <span className="brand-text">
            {t.org.short}
            <small>{t.org.english}</small>
          </span>
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
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNav(e, id)}>{label}</a>
          ))}

          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggle} aria-label={t.languageToggle.aria} title={t.languageToggle.aria}>
              <span className={lang === 'es' ? 'is-active' : ''}>ES</span>
              <span aria-hidden="true">/</span>
              <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
            </button>
            <a href="#donate" className="btn btn-gold" onClick={(e) => handleNav(e, 'donate')}>
              {t.cta.donate}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
