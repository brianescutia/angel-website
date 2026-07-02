import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { images } from '../data/images.js'

export default function Impact() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal({ threshold: 0.15 })

  return (
    <section className="section section-green" ref={ref}>
      <div className={`container impact-grid ${visible ? 'reveal in' : 'reveal'}`}>
        <figure className="impact-figure">
          <img src={images.bannerFamily} alt="Familia en la mesa de C.A.T.A. en un evento comunitario" />
        </figure>

        <div className="impact-copy">
          <p className="eyebrow">{t.impact.eyebrow}</p>
          <h2 className="display">{t.impact.title}</h2>
          <p className="lead">{t.impact.lead}</p>

          <ul className="impact-list">
            {t.impact.statements.map((s) => (
              <li key={s} className="impact-item">
                <span className="impact-mark" aria-hidden="true" />
                <p>{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
