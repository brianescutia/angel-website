import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Events() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section id="events" className="section section-wheat" ref={ref}>
      <div className={`container ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="section-head">
          <p className="eyebrow">{t.events.eyebrow}</p>
          <h2 className="display">{t.events.title}</h2>
          <p className="lead">{t.events.body}</p>
        </div>

        <ul className="events-list">
          {t.events.items.map((e, i) => (
            <li
              key={e.title}
              className={`event-row ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="event-date" aria-hidden="true">
                <span>{e.date}</span>
              </div>
              <div className="event-body">
                <h3>{e.title}</h3>
                <p className="event-loc">{e.location}</p>
                <p>{e.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
