import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Hero() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal({ threshold: 0.1 })

  const handle = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-a" />
        <div className="hero-blob hero-blob-b" />
        <div className="hero-grain" />
      </div>

      <div className={`container hero-inner ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="display">{t.hero.title}</h1>
          <p className="lead">{t.hero.body}</p>
          <div className="hero-cta">
            <a href="#involve" className="btn btn-primary btn-lg" onClick={(e) => handle(e, 'involve')}>
              {t.hero.primary}
            </a>
            <a href="#donate" className="btn btn-ghost btn-lg" onClick={(e) => handle(e, 'donate')}>
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="placeholder-image hero-image">
            <span className="placeholder-label">Family in the field · Placeholder</span>
          </div>
          <div className="hero-card hero-card-a">
            <span className="dot" /> Promotoras
          </div>
          <div className="hero-card hero-card-b">
            <span className="dot dot-gold" /> Cosecha Solidaria
          </div>
        </div>
      </div>
    </section>
  )
}
