import { useLanguage } from '../hooks/useLanguage.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { images, galleryOrder } from '../data/images.js'

export default function Gallery() {
  const { t } = useLanguage()
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="gallery" className="section section-cream-deep" ref={ref}>
      <div className="container">
        <div className={`section-head ${visible ? 'reveal in' : 'reveal'}`}>
          <p className="eyebrow">{t.gallery.eyebrow}</p>
          <h2 className="display">{t.gallery.title}</h2>
          <p className="lead">{t.gallery.lead}</p>
        </div>

        <div className={`gallery-masonry ${visible ? 'reveal in' : 'reveal'}`}>
          {galleryOrder.map((key) => (
            <figure className="gallery-item" key={key}>
              <img src={images[key]} alt={t.gallery.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
