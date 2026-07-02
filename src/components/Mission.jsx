import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { images } from '../data/images.js'
import Logo from './Logo.jsx'

export default function Mission() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const a = t.about

  return (
    <section id="mission" className="section section-cream about" ref={ref}>
      <div className={`container about-grid ${visible ? 'reveal in' : 'reveal'}`}>
        {/* Faint community-ring seal — the C.A.T.A. mark as a watermark */}
        <Logo size={460} className="about-watermark" mono decorative />

        <figure className="about-figure">
          <img src={images.groupIndoor} alt="Familias y residentes de C.A.T.A. reunidos en comunidad" />
          <figcaption>{t.hero.locator}</figcaption>
        </figure>

        <div className="about-copy">
          <p className="eyebrow">{a.eyebrow}</p>
          <h2 className="display">{a.title}</h2>
          <p className="lead">{a.lead}</p>

          <div className="about-blocks">
            <div className="about-block">
              <p className="about-block-label">{a.missionLabel}</p>
              <p className="about-block-mission">{a.mission}</p>
            </div>
            <div className="about-block">
              <p className="about-block-label">{a.visionLabel}</p>
              <p>{a.vision}</p>
            </div>
          </div>

          <blockquote className="about-quote">
            {a.quote}
            <span className="attr">— {a.quoteAttr}</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
