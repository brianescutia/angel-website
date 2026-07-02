import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import Logo from './Logo.jsx'

// Static fundraising shop — no cart, no database, no payment processing.
// Orders are coordinated by message via a simple mailto link.
//
// ─── TODO: REPLACE PLACEHOLDERS WITH REAL DETAILS ───────────────────────────
//  · Product PHOTO  → swap <ProductMockup/> in each card for an <img/> using a
//                     real photo in /public/images (e.g. /images/shirt.jpeg).
//  · Final PRICE    → src/data/content.js → shop.products[].price
//  · SIZES / DESIGN → src/data/content.js → shop.products[].detail
//  · ORDER / PAYMENT link → `orderLink()` below. Point it at a real:
//      - Google Form order sheet:  https://forms.gle/<id>
//      - Venmo:   https://venmo.com/u/<handle>
//      - Zelle:   show the org's email/phone
//      - Apple Pay / Square link:  https://square.link/u/<id>
//      - Shopify Buy Button / store link
// ────────────────────────────────────────────────────────────────────────────

// Branded SVG product mockups — intentional placeholders that carry the
// C.A.T.A. mark until real product photography is available.
function ProductMockup({ type, tag }) {
  return (
    <div className={`product-media mockup-${type}`}>
      <span className="product-tag">{tag}</span>
      <Logo className="mockup-bg" mono decorative />
      {type === 'shirt' ? (
        <svg className="mockup-art" viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M52 52 L88 46 C100 62 140 62 152 46 L188 52 L198 94 L168 100 L168 198
               Q168 202 164 202 L76 202 Q72 202 72 198 L72 100 L42 94 Z"
            fill="var(--cream-card)" stroke="var(--cream-line)" strokeWidth="2.5" strokeLinejoin="round"
          />
          <path d="M88 46 C100 64 140 64 152 46" fill="none" stroke="var(--cream-line)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ) : (
        <svg className="mockup-art" viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M84 74 C84 42 104 42 104 74" fill="none" stroke="var(--cream)" strokeWidth="8" strokeLinecap="round" />
          <path d="M136 74 C136 42 156 42 156 74" fill="none" stroke="var(--cream)" strokeWidth="8" strokeLinecap="round" />
          <rect x="52" y="72" width="136" height="130" rx="10" fill="var(--cream)" stroke="var(--cream-line)" strokeWidth="2" />
          <line x1="52" y1="94" x2="188" y2="94" stroke="var(--gold)" strokeWidth="2.5" strokeDasharray="5 5" />
        </svg>
      )}
      <Logo className="mockup-mark" decorative />
    </div>
  )
}

export default function Tiendita() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal({ threshold: 0.08 })
  const s = t.shop

  // TODO: replace this mailto with a real order form / payment link (see header note).
  const orderLink = (product) =>
    `mailto:${t.footer.email}?subject=${encodeURIComponent(`Pedido / Order — ${product.name}`)}`

  return (
    <section id="tiendita" className="section section-cream" ref={ref}>
      <div className="container">
        <div className={`shop-head ${visible ? 'reveal in' : 'reveal'}`}>
          <div>
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="display">{s.title}</h2>
            <p className="lead">{s.lead}</p>
          </div>
          <p className="shop-note">{s.note}</p>
        </div>

        <div className="shop-primary">
          {s.products.map((product, i) => (
            <article
              key={product.name}
              className={`product-card ${visible ? 'reveal in' : 'reveal'}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* TODO: replace <ProductMockup/> with a real product <img/> */}
              <ProductMockup type={product.mockup} tag={s.sampleTag} />

              <div className="product-body">
                <h3 className="product-name">
                  {product.name}
                  <span className="alt">{product.nameAlt}</span>
                </h3>
                <p className="product-desc">{product.desc}</p>

                <div className="product-meta">
                  {/* TODO: set the final price + sizes/design in content.js */}
                  <span className="product-price">{product.price}</span>
                  <span className="product-detail">{product.detail}</span>
                </div>

                <a className="btn btn-green" href={orderLink(product)}>{s.orderCta}</a>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary products kept as honest "future ideas", not finished cards */}
        <div className={`shop-future ${visible ? 'reveal in' : 'reveal'}`}>
          <p className="shop-future-label">{s.futureLabel}</p>
          <ul className="shop-future-list">
            {s.future.map((idea) => (
              <li className="shop-future-chip" key={idea}>{idea}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
