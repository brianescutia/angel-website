import { useLanguage } from '../hooks/useLanguage.jsx'
import { images } from '../data/images.js'

export default function Hero() {
  const { t } = useLanguage()

  const handle = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img src={images.heroTeam} alt="" fetchpriority="high" />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy reveal in">
          <p className="hero-locator">{t.hero.locator}</p>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-body">{t.hero.body}</p>
          <div className="hero-cta">
            <a href="#donate" className="btn btn-gold btn-lg" onClick={(e) => handle(e, 'donate')}>
              {t.hero.donate}
            </a>
            <a href="#get-involved" className="btn btn-cream-outline btn-lg" onClick={(e) => handle(e, 'get-involved')}>
              {t.hero.involve}
            </a>
            <a href="#programs" className="text-link on-dark" onClick={(e) => handle(e, 'programs')}>
              {t.hero.programs} &rarr;
            </a>
          </div>
          <a href="#mission" className="hero-scroll" onClick={(e) => handle(e, 'mission')}>
            <span className="line" aria-hidden="true" />
            {t.hero.scroll}
          </a>
        </div>
      </div>
    </section>
  )
}
