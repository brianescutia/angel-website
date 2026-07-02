import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { images } from '../data/images.js'

export default function Programs() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal({ threshold: 0.06 })
  const p = t.programs

  return (
    <section id="programs" className="section section-cream-deep" ref={ref}>
      <div className="container">
        <div className={`section-head ${visible ? 'reveal in' : 'reveal'}`}>
          <p className="eyebrow">{p.eyebrow}</p>
          <h2 className="display">{p.title}</h2>
          <p className="lead">{p.lead}</p>
        </div>

        <div className="programs-layout">
          {/* One large editorial photo instead of a grid of identical cards */}
          <figure className={`programs-feature ${visible ? 'reveal in' : 'reveal'}`}>
            <img src={images.workshopClimate} alt={p.featureAlt} loading="lazy" />
            <figcaption>{p.featureAlt}</figcaption>
          </figure>

          <div className="pillar-list">
            {p.pillars.map((pillar, i) => (
              <article
                key={pillar.name}
                className={`pillar ${visible ? 'reveal in' : 'reveal'}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="pillar-thumb">
                  <img src={images[pillar.img]} alt="" loading="lazy" />
                </div>
                <div>
                  <h3 className="pillar-name">
                    {pillar.name}
                    <span className="alt">{pillar.nameAlt}</span>
                  </h3>
                  <p className="pillar-body">{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* The remaining program areas, as quiet supporting tags */}
        <div className={`chips-block ${visible ? 'reveal in' : 'reveal'}`}>
          <p className="chips-label">{p.chipsLabel}</p>
          <div className="chips">
            {p.chips.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
