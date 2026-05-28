import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { useCounter } from '../hooks/useCounter.js'

function StatCounter({ target, suffix, label, start, delay }) {
  const value = useCounter(target, { start, duration: 1800 })
  const formatted = value.toLocaleString('en-US')
  return (
    <div className="stat" style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat-value">
        <span>{formatted}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Impact() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal({ threshold: 0.25 })

  return (
    <section className="section section-cream impact-section" ref={ref}>
      <div className={`container ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="section-head">
          <p className="eyebrow">{t.impact.eyebrow}</p>
          <h2 className="display">{t.impact.title}</h2>
          <p className="lead">{t.impact.body}</p>
        </div>

        <div className="stats">
          {t.impact.stats.map((s, i) => (
            <StatCounter
              key={s.label}
              target={s.value}
              suffix={s.suffix}
              label={s.label}
              start={visible}
              delay={i * 120}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
