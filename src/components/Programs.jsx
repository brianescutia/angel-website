import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Programs() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section id="programs" className="section section-green" ref={ref}>
      <div className={`container ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="section-head section-head-light">
          <p className="eyebrow eyebrow-gold">{t.programs.eyebrow}</p>
          <h2 className="display">{t.programs.title}</h2>
          <p className="lead">{t.programs.body}</p>
        </div>

        <div className="programs-grid">
          {t.programs.items.map((p, i) => (
            <article
              key={p.title}
              className={`program-card ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="placeholder-image program-image">
                <span className="placeholder-label">{p.title}</span>
              </div>
              <div className="program-body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
