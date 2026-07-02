// Bilingual copy for C.A.T.A. — Comunidades Aliadas Tomando Acción.
// Spanish is the default; English mirrors it 1:1. Image keys reference
// src/data/images.js so photography stays language-agnostic.
//
// ─────────────────────────────────────────────────────────────────────────
// TODO — CONFIRM WITH THE ORGANIZATION BEFORE PUBLISHING (grouped in code):
//   · Public phone (661-748-5590) — confirm it's OK to publish.        → footer.phone
//   · Public email (comunidadesaliadas411@gmail.com) — confirm.         → footer.email
//   · Office address + ZIP / public status (Arvin Veteran's Hall).      → footer.address
//   · 501(c)(3) / tax-deductible language — NOT claimed anywhere yet.   → donate.*
//   · Founding date / years active — not claimed (unknown).
//   · Event dates — none invented; all marked "Próximamente".           → events.items
//   · Product prices — none confirmed; all "Próximamente".              → shop.items
//   · Instagram handle (Facebook is confirmed and wired in).             → footer.social
//   · Donation link + Venmo / Zelle / Apple Pay / PayPal handles.       → Donate.jsx
// ─────────────────────────────────────────────────────────────────────────

export const content = {
  es: {
    org: {
      name: 'Comunidades Aliadas Tomando Acción',
      short: 'C.A.T.A.',
      english: 'Allied Communities Taking Action',
      tagline: 'Comunidades aliadas, tomando acción.'
    },
    nav: {
      mission: 'Misión',
      programs: 'Programas',
      events: 'Eventos',
      donate: 'Donar',
      shop: 'Tiendita',
      involve: 'Involúcrate'
    },
    cta: { donate: 'Donar', involve: 'Involúcrate' },
    languageToggle: { aria: 'Switch to English' },

    hero: {
      locator: 'Arvin · Kern County · Valle Central',
      title: 'Comunidades trabajadoras construyendo salud, educación y justicia.',
      body:
        'Somos una organización de base liderada por trabajadores agrícolas y residentes. Caminamos junto a las familias del Valle Central para aprender, cuidarnos y decidir nuestro propio futuro.',
      donate: 'Donar',
      involve: 'Involúcrate',
      programs: 'Ver programas',
      scroll: 'Conócenos'
    },

    about: {
      eyebrow: 'Quiénes Somos',
      title: 'De la comunidad, para la comunidad.',
      lead:
        'C.A.T.A. es una organización de base liderada por trabajadores agrícolas y residentes de Arvin, en Kern County, dentro del Valle Central de California. Acompañamos a familias de bajos ingresos, inmigrantes y de comunidades de color para impulsar la educación, el bienestar y la acción comunitaria.',
      missionLabel: 'Nuestra Misión',
      // Confirmed official mission (do not paraphrase).
      mission:
        'Nuestra misión es motivar y empoderar a las comunidades de bajos ingresos y de trabajadores agrícolas para que busquen oportunidades de aprendizaje permanente. Fomentar la educación, el bienestar, la prevención de enfermedades crónicas y el desarrollo del liderazgo entre los jóvenes, trabajadores agrícolas, residentes y establecer y asegurar entornos saludables y justicia social.',
      visionLabel: 'Nuestra Visión',
      vision:
        'Un Valle Central donde cada residente —sin importar idioma, estatus u origen— esté bien informado, viva en entornos saludables y tenga el poder de tomar acción por su familia y su comunidad.',
      quote:
        'No llegamos de afuera: somos la misma comunidad organizándose para vivir con dignidad, salud y voz.',
      quoteAttr: 'C.A.T.A.'
    },

    programs: {
      eyebrow: 'Nuestros Programas',
      title: 'Muchos frentes, una sola comunidad.',
      lead:
        'Cada programa nace de lo que las familias nos piden en el campo, en la casa y en la sala comunitaria. Estos son nuestros seis pilares.',
      featureAlt: 'Taller comunitario bilingüe de C.A.T.A. sobre el cambio climático',
      pillars: [
        {
          img: 'womenChild',
          name: 'Salud',
          nameAlt: 'Health',
          body: 'Prevención de enfermedades crónicas, ferias de salud y promotoras que llevan información a cada puerta.'
        },
        {
          img: 'workshopClimate',
          name: 'Justicia Ambiental',
          nameAlt: 'Environmental Justice',
          body: 'Educación sobre calor extremo, calidad del aire y clima para quienes trabajan bajo el sol.'
        },
        {
          img: 'readingFlyer',
          name: 'Educación',
          nameAlt: 'Education',
          body: 'Talleres bilingües, alfabetización financiera y aprendizaje permanente para todas las edades.'
        },
        {
          img: 'groupIndoor',
          name: 'Bienestar',
          nameAlt: 'Wellness',
          body: 'Espacios de apoyo, salud mental y cuidado mutuo donde las familias se acompañan.'
        },
        {
          img: 'bannerFamily',
          name: 'Abogacía',
          nameAlt: 'Advocacy',
          body: 'Conoce-tus-derechos, recursos de inmigración y voz organizada ante quienes deciden.'
        },
        {
          img: 'seatedMeeting',
          name: 'Grupo de Jóvenes',
          nameAlt: 'Youth Group',
          body: 'Liderazgo juvenil y vecinal: jóvenes y residentes que dirigen reuniones y proponen soluciones.'
        }
      ],
      chipsLabel: 'También parte de nuestro trabajo',
      chips: [
        'Grupo de Apoyo · Support Group',
        'Voces Contra la Violencia · Voices Against Violence',
        'Floreciendo Juntas · Blooming Together',
        'Inmigración · Immigration',
        'Soluciones Saludables · Coming Clean',
        'Preparación de Emergencias · Emergency Preparedness',
        'Saberes Ancestrales · Ancestral Knowledge',
        'Eventos · Events'
      ]
    },

    impact: {
      eyebrow: 'Acción Comunitaria',
      title: 'No medimos en cifras. Medimos en confianza.',
      lead:
        'El cambio que buscamos se ve en las familias que llegan acompañadas, vuelven y traen a una vecina más.',
      statements: [
        'Familias que aprenden y ejercen sus derechos.',
        'Residentes que acceden a recursos de salud y bienestar.',
        'Jóvenes y adultos que crecen como líderes comunitarios.',
        'Comunidades que se organizan por entornos más seguros y saludables.',
        'Familias trabajadoras del campo que reciben información culturalmente relevante.'
      ]
    },

    shop: {
      eyebrow: 'Tiendita · Mercadito',
      title: 'Lleva a C.A.T.A. contigo.',
      lead:
        'Una pequeña tiendita para sostener nuestros programas. Estos son nuestros primeros diseños; los detalles finales —fotos, precios y tallas— se confirmarán pronto. Por ahora coordinamos cada pedido por mensaje.',
      orderCta: 'Pedir por mensaje',
      note: 'Sin carrito ni pagos en línea todavía. Cada pedido se coordina de forma personal.',
      sampleTag: 'Diseño de muestra',
      // TODO: see Tiendita.jsx — for each product, swap the placeholder mockup
      // for a real product photo, set the final price + sizes, and point the
      // order button at a real order form / payment link when ready.
      products: [
        {
          mockup: 'shirt',
          name: 'Camiseta blanca C.A.T.A.',
          nameAlt: 'White C.A.T.A. Shirt',
          desc: 'Camiseta de algodón en blanco con el logo de la comunidad al frente. Cómoda para el día a día, el campo o los eventos.',
          price: 'Precio por confirmar',
          detail: 'Tallas por confirmar'
        },
        {
          mockup: 'tote',
          name: 'Bolsa reutilizable C.A.T.A.',
          nameAlt: 'C.A.T.A. Reusable Tote',
          desc: 'Bolsa de tela resistente para el mandado, los libros o la feria. Reutilizable y hecha para durar.',
          price: 'Precio por confirmar',
          detail: 'Diseño por confirmar'
        }
      ],
      futureLabel: 'Próximas ideas para la tiendita',
      future: [
        'Paquete de apoyo comunitario',
        'Calcomanías y botones',
        'Termos y gorras'
      ]
    },

    gallery: {
      eyebrow: 'La Comunidad',
      title: 'Así se ve tomar acción.',
      lead: 'Momentos reales de nuestras familias, promotoras y eventos en el Valle Central.',
      alt: 'Foto de evento comunitario de C.A.T.A.'
    },

    events: {
      eyebrow: 'Eventos y Talleres',
      title: 'Encuéntranos en la comunidad.',
      lead:
        'Talleres, ferias y reuniones donde nos juntamos, aprendemos y descansamos. Las fechas se anuncian en nuestras redes — síguenos para no perderte el próximo.',
      soon: 'Próximamente',
      rsvp: 'Confirmar asistencia',
      // TODO: no dates invented. Add a real date + RSVP link (Google Form /
      // Eventbrite / Facebook event) to each item when confirmed.
      items: [
        {
          kind: 'Educación',
          title: 'Money Matters · Alfabetización Financiera',
          body: 'Talleres de finanzas personales en alianza con Bakersfield College Launchpad.'
        },
        {
          kind: 'Talleres de Temporada',
          title: 'Medicina Natural · Artesanía Ancestral · Gastronomía',
          body: 'Talleres estacionales que celebran los saberes y las manos de la comunidad.'
        },
        {
          kind: 'Salud',
          title: 'Ferias de Recursos y Prevención',
          body: 'Diabetes, Alzheimer, Día Mundial Sin Tabaco y seguridad laboral frente al H5N1.'
        },
        {
          kind: 'Abogacía',
          title: 'Conoce Tus Derechos · Inmigración',
          body: 'Sesiones bilingües con recursos legales y de inmigración para las familias.'
        },
        {
          kind: 'Justicia Ambiental',
          title: 'Reuniones de Justicia Ambiental',
          body: 'Encuentros vecinales sobre aire limpio, calor extremo y salud de la comunidad.'
        }
      ]
    },

    donate: {
      eyebrow: 'Donar',
      title: 'Tu aporte se queda en el Valle.',
      body:
        'Somos una organización de base sostenida por la comunidad. Cada donación se convierte directamente en talleres, acompañamiento y recursos para las familias trabajadoras del campo.',
      supportLabel: 'Tu apoyo sostiene',
      support: [
        'Talleres y educación comunitaria',
        'Alcance y acompañamiento puerta a puerta',
        'Recursos de salud y bienestar',
        'Trabajo de justicia ambiental',
        'Apoyo a familias trabajadoras del campo'
      ],
      cta: 'Donar ahora',
      secondary: 'Otras formas de apoyar',
      note: 'Por ahora coordinamos donativos de forma personal. Pronto habrá un enlace seguro en línea.'
    },

    involve: {
      eyebrow: 'Involúcrate',
      title: 'Hay un lugar para ti en esta comunidad.',
      body:
        'Voluntarias, aliados profesionales y vecinos con ganas de organizar — aquí cabe todo el que quiera tomar acción.',
      ways: [
        { title: 'Sé voluntaria/o', body: 'Únete a una feria, una jornada de traducción o una tutoría.' },
        { title: 'Asiste a un evento', body: 'Acompáñanos en un taller o reunión y trae a una vecina.' },
        { title: 'Alíate con C.A.T.A.', body: 'Comparte tu experiencia en salud, derecho o educación.' },
        { title: 'Comparte recursos', body: 'Ayúdanos a llevar la información a más familias del Valle.' },
        { title: 'Apoya la Tiendita', body: 'Haz un pedido y sostén nuestros programas.' },
        { title: 'Dona', body: 'Tu aporte se convierte en talleres y acompañamiento.' }
      ],
      cta: 'Quiero participar'
    },

    footer: {
      tagline: 'Comunidades aliadas, tomando acción.',
      region: 'Arvin · Kern County · Valle Central de California',
      exploreLabel: 'Explorar',
      contactLabel: 'Contacto',
      // TODO confirm: public office address + ZIP / whether to publish.
      address: 'Arvin Veteran’s Hall · 454 4th Ave, Suite C · Arvin, CA',
      addressNote: 'Dirección por confirmar',
      // TODO confirm: public-facing email.
      email: 'comunidadesaliadas411@gmail.com',
      // TODO confirm: OK to publish this phone publicly.
      phone: '661-748-5590',
      socialLabel: 'Síguenos',
      // TODO: add real Instagram link once a handle is confirmed.
      social: [
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100081988801733&sk=directory_links' },
        { label: 'Instagram', href: '#' }
      ],
      rights: 'Todos los derechos reservados.'
    }
  },

  en: {
    org: {
      name: 'Comunidades Aliadas Tomando Acción',
      short: 'C.A.T.A.',
      english: 'Allied Communities Taking Action',
      tagline: 'Allied communities, taking action.'
    },
    nav: {
      mission: 'Mission',
      programs: 'Programs',
      events: 'Events',
      donate: 'Donate',
      shop: 'Shop',
      involve: 'Get Involved'
    },
    cta: { donate: 'Donate', involve: 'Get Involved' },
    languageToggle: { aria: 'Cambiar a español' },

    hero: {
      locator: 'Arvin · Kern County · Central Valley',
      title: 'Working communities building health, education, and justice.',
      body:
        'We are a grassroots organization led by farmworkers and residents. We walk alongside Central Valley families to learn, care for one another, and decide our own future.',
      donate: 'Donate',
      involve: 'Get Involved',
      programs: 'See programs',
      scroll: 'Meet us'
    },

    about: {
      eyebrow: 'Who We Are',
      title: 'Of the community, for the community.',
      lead:
        'C.A.T.A. is a grassroots organization led by farmworkers and residents of Arvin, in Kern County, within California’s Central Valley. We walk alongside low-income, immigrant, and communities-of-color families to advance education, wellness, and community action.',
      missionLabel: 'Our Mission',
      // Confirmed official English version.
      mission:
        'Our mission is to motivate and empower low-income and farmworker communities to pursue lifelong learning opportunities. We advance education, wellness, chronic-disease prevention, youth and resident leadership, healthy environments, and social and environmental justice.',
      visionLabel: 'Our Vision',
      vision:
        'A Central Valley where every resident — regardless of language, status, or origin — is well informed, lives in healthy environments, and has the power to take action for their family and community.',
      quote:
        'We don’t come from the outside — we are the community itself, organizing to live with dignity, health, and a voice.',
      quoteAttr: 'C.A.T.A.'
    },

    programs: {
      eyebrow: 'Our Programs',
      title: 'Many fronts, one community.',
      lead:
        'Every program grows from what families ask of us — in the field, at home, and in the community room. These are our six pillars.',
      featureAlt: 'C.A.T.A. bilingual community workshop on climate change',
      pillars: [
        {
          img: 'womenChild',
          name: 'Health',
          nameAlt: 'Salud',
          body: 'Chronic-disease prevention, health fairs, and promotoras who carry information to every door.'
        },
        {
          img: 'workshopClimate',
          name: 'Environmental Justice',
          nameAlt: 'Justicia Ambiental',
          body: 'Education on extreme heat, air quality, and climate for those who work under the sun.'
        },
        {
          img: 'readingFlyer',
          name: 'Education',
          nameAlt: 'Educación',
          body: 'Bilingual workshops, financial literacy, and lifelong learning for every age.'
        },
        {
          img: 'groupIndoor',
          name: 'Wellness',
          nameAlt: 'Bienestar',
          body: 'Support spaces, mental health, and mutual care where families look after one another.'
        },
        {
          img: 'bannerFamily',
          name: 'Advocacy',
          nameAlt: 'Abogacía',
          body: 'Know-your-rights, immigration resources, and an organized voice before decision-makers.'
        },
        {
          img: 'seatedMeeting',
          name: 'Youth Group',
          nameAlt: 'Grupo de Jóvenes',
          body: 'Youth and resident leadership: young people and neighbors who lead meetings and propose solutions.'
        }
      ],
      chipsLabel: 'Also part of our work',
      chips: [
        'Support Group · Grupo de Apoyo',
        'Voices Against Violence · Voces Contra la Violencia',
        'Blooming Together · Floreciendo Juntas',
        'Immigration · Inmigración',
        'Coming Clean · Soluciones Saludables',
        'Emergency Preparedness · Preparación de Emergencias',
        'Ancestral Knowledge · Saberes Ancestrales',
        'Events · Eventos'
      ]
    },

    impact: {
      eyebrow: 'Community Action',
      title: 'We don’t measure in numbers. We measure in trust.',
      lead:
        'The change we seek shows in the families who arrive accompanied, return, and bring one more neighbor along.',
      statements: [
        'Families learning and exercising their rights.',
        'Residents accessing health and wellness resources.',
        'Youth and adults growing as community leaders.',
        'Communities organizing for safer, healthier environments.',
        'Farmworker families receiving culturally relevant information.'
      ]
    },

    shop: {
      eyebrow: 'Shop · Mercadito',
      title: 'Take C.A.T.A. with you.',
      lead:
        'A small shop to sustain our programs. These are our first designs — final details like photos, prices, and sizes are coming soon. For now we arrange each order by message.',
      orderCta: 'Contact to order',
      note: 'No cart or online payment yet. Each order is arranged personally.',
      sampleTag: 'Sample mockup',
      products: [
        {
          mockup: 'shirt',
          name: 'White C.A.T.A. Shirt',
          nameAlt: 'Camiseta blanca C.A.T.A.',
          desc: 'White cotton tee with the community logo on the chest. Easy for everyday wear, the field, or events.',
          price: 'Price coming soon',
          detail: 'Sizes coming soon'
        },
        {
          mockup: 'tote',
          name: 'C.A.T.A. Reusable Tote',
          nameAlt: 'Bolsa reutilizable C.A.T.A.',
          desc: 'Sturdy cloth tote for groceries, books, or the fair. Reusable and made to last.',
          price: 'Price coming soon',
          detail: 'Design coming soon'
        }
      ],
      futureLabel: 'Future ideas for the shop',
      future: [
        'Community support bundle',
        'Stickers & buttons',
        'Tumblers & caps'
      ]
    },

    gallery: {
      eyebrow: 'The Community',
      title: 'This is what taking action looks like.',
      lead: 'Real moments from our families, promotoras, and events across the Central Valley.',
      alt: 'CATA community event photo'
    },

    events: {
      eyebrow: 'Events & Workshops',
      title: 'Find us in the community.',
      lead:
        'Workshops, fairs, and meetings where we gather, learn, and rest. Dates are announced on our social media — follow us so you don’t miss the next one.',
      soon: 'Coming soon',
      rsvp: 'RSVP',
      // TODO: no dates invented. Add a real date + RSVP link (Google Form /
      // Eventbrite / Facebook event) to each item when confirmed.
      items: [
        {
          kind: 'Education',
          title: 'Money Matters · Financial Literacy',
          body: 'Personal finance workshops in partnership with Bakersfield College Launchpad.'
        },
        {
          kind: 'Seasonal Workshops',
          title: 'Natural Medicine · Ancestral Crafts · Gastronomy',
          body: 'Seasonal workshops that celebrate the community’s knowledge and hands.'
        },
        {
          kind: 'Health',
          title: 'Resource & Prevention Fairs',
          body: 'Diabetes, Alzheimer’s, World No Tobacco Day, and H5N1 worker-safety education.'
        },
        {
          kind: 'Advocacy',
          title: 'Know Your Rights · Immigration',
          body: 'Bilingual sessions with legal and immigration resources for families.'
        },
        {
          kind: 'Environmental Justice',
          title: 'Environmental Justice Meetings',
          body: 'Neighborhood gatherings on clean air, extreme heat, and community health.'
        }
      ]
    },

    donate: {
      eyebrow: 'Donate',
      title: 'Your gift stays in the Valley.',
      body:
        'We are a grassroots organization sustained by the community. Every donation turns directly into workshops, accompaniment, and resources for farmworking families.',
      supportLabel: 'Your support sustains',
      support: [
        'Workshops and community education',
        'Outreach and door-to-door accompaniment',
        'Health and wellness resources',
        'Environmental justice work',
        'Support for farmworking families'
      ],
      cta: 'Donate now',
      secondary: 'Other ways to support',
      note: 'For now we arrange gifts personally. A secure online link is coming soon.'
    },

    involve: {
      eyebrow: 'Get Involved',
      title: 'There is a place for you in this community.',
      body:
        'Volunteers, professional allies, and neighbors ready to organize — there’s room here for everyone who wants to take action.',
      ways: [
        { title: 'Volunteer', body: 'Join a fair, a translation shift, or a tutoring session.' },
        { title: 'Attend an event', body: 'Join us at a workshop or meeting and bring a neighbor.' },
        { title: 'Partner with C.A.T.A.', body: 'Share your expertise in health, law, or education.' },
        { title: 'Share resources', body: 'Help us carry information to more Valley families.' },
        { title: 'Support the Tiendita', body: 'Place an order and sustain our programs.' },
        { title: 'Donate', body: 'Your gift becomes workshops and accompaniment.' }
      ],
      cta: 'I want to help'
    },

    footer: {
      tagline: 'Allied communities, taking action.',
      region: 'Arvin · Kern County · California’s Central Valley',
      exploreLabel: 'Explore',
      contactLabel: 'Contact',
      // TODO confirm: public office address + ZIP / whether to publish.
      address: 'Arvin Veteran’s Hall · 454 4th Ave, Suite C · Arvin, CA',
      addressNote: 'Address to confirm',
      // TODO confirm: public-facing email.
      email: 'comunidadesaliadas411@gmail.com',
      // TODO confirm: OK to publish this phone publicly.
      phone: '661-748-5590',
      socialLabel: 'Follow us',
      // TODO: add real Instagram link once a handle is confirmed.
      social: [
        { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100081988801733&sk=directory_links' },
        { label: 'Instagram', href: '#' }
      ],
      rights: 'All rights reserved.'
    }
  }
}
