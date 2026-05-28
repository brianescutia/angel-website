import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Mission() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section id="mission" className="section section-cream" ref={ref}>
      <div className={`container ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="section-head">
          <p className="eyebrow">{t.mission.eyebrow}</p>
          <h2 className="display">{t.mission.title}</h2>
          <p className="lead">{t.mission.body}</p>
        </div>

        <div className="pillars">
          {t.mission.pillars.map((p, i) => (
            <article
              key={p.title}
              className={`pillar ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="pillar-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M12 2c-1 4 0 7 3 9-3 1-6 3-7 7-1-4-4-6-7-7 3-2 4-5 3-9 2 2 6 2 8 0z" fill="currentColor" />
                </svg>
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
