import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Events() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()
  const e = t.events

  return (
    <section id="events" className="section section-cream" ref={ref}>
      <div className="container">
        <div className={`section-head ${visible ? 'reveal in' : 'reveal'}`}>
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 className="display">{e.title}</h2>
          <p className="lead">{e.lead}</p>
        </div>

        <ul className="events-list">
          {e.items.map((item, i) => (
            <li
              key={item.title}
              className={`event-row ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <p className="event-kind">{item.kind}</p>
                {/* TODO: replace "Próximamente" with a real date once confirmed */}
                <p className="event-soon">{e.soon}</p>
              </div>
              <div className="event-body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              {/* TODO: point RSVP at a real Google Form / Eventbrite / Facebook event */}
              <a
                className="btn btn-ghost event-cta"
                href="#get-involved"
                onClick={(ev) => {
                  ev.preventDefault()
                  document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                {e.rsvp}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
