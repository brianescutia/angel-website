import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

export default function Donate() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal()

  return (
    <section id="donate" className="section section-green-dark" ref={ref}>
      <div className={`container ${visible ? 'reveal in' : 'reveal'}`}>
        <div className="donate-grid">
          <div className="donate-copy">
            <p className="eyebrow eyebrow-gold">{t.donate.eyebrow}</p>
            <h2 className="display">{t.donate.title}</h2>
            <p className="lead">{t.donate.body}</p>
            <a href="#" className="btn btn-gold btn-lg">
              {t.donate.cta}
            </a>
            <p className="donate-note">{t.donate.note}</p>
          </div>

          <div className="tiers">
            {t.donate.tiers.map((tier, i) => (
              <div
                key={tier.amount}
                className={`tier ${visible ? 'reveal in' : 'reveal'}`}
                style={{ transitionDelay: `${150 + i * 120}ms` }}
              >
                <div className="tier-amount">{tier.amount}</div>
                <div className="tier-desc">{tier.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
