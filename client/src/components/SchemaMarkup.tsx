import { APP_BUSINESS_NAME, APP_PHONE, APP_EMAIL, APP_ADDRESS, APP_LOCATION } from "@/const";

/**
 * Schema.org markup para SEO local
 * Incluye LocalBusiness, Service, FAQPage
 */
export default function SchemaMarkup() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": APP_BUSINESS_NAME,
    "url": "https://cerrajerosdechamartin.madrid",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cerrajerosdechamartin.madrid/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://cerrajerosdechamartin.madrid/#about",
    "url": "https://cerrajerosdechamartin.madrid/",
    "name": `Sobre Nosotros - ${APP_BUSINESS_NAME}`,
    "description": `Conoce más sobre YOTEABRO, tus cerrajeros de confianza en Chamartín con más de 20 años de experiencia.`,
    "mainEntity": {
      "@id": "https://cerrajerosdechamartin.madrid/#organization"
    }
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://cerrajerosdechamartin.madrid/#contact",
    "url": "https://cerrajerosdechamartin.madrid/#ubicacion",
    "name": `Contacto - ${APP_BUSINESS_NAME}`,
    "description": `Contacta con YOTEABRO para urgencias 24h o presupuestos de cerrajería en Chamartín.`,
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": APP_PHONE,
      "contactType": "customer service",
      "areaServed": "ES",
      "availableLanguage": "Spanish"
    }
  };

  // Schema para el Carrusel de Servicios
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nuestros Servicios de Cerrajería",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://cerrajerosdechamartin.madrid/apertura-puertas",
        "name": "Apertura de Puertas"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://cerrajerosdechamartin.madrid/urgencias-24h",
        "name": "Urgencias 24 Horas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://cerrajerosdechamartin.madrid/cambio-cerraduras",
        "name": "Cambio de Cerraduras"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://cerrajerosdechamartin.madrid/cambio-bombin",
        "name": "Cambio de Bombín"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://cerrajerosdechamartin.madrid/amaestramiento",
        "name": "Amaestramiento de Llaves"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": "https://cerrajerosdechamartin.madrid/#organization",
    "name": APP_BUSINESS_NAME,
    "legalName": "YOTEABRO S.L.",
    "url": "https://cerrajerosdechamartin.madrid",
    "logo": "https://cerrajerosdechamartin.madrid/logo-yoteabro.webp",
    "image": "https://cerrajerosdechamartin.madrid/hero-cerrajero.webp",
    "description": "Cerrajeros profesionales en Chamartín disponibles 24/7 para cualquier urgencia. Apertura de puertas desde 90€, cambio de cerraduras, bombines de seguridad y amaestramiento.",
    "telephone": APP_PHONE,
    "email": APP_EMAIL,
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "97",
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "María G." },
        "datePublished": "2026-01-10",
        "reviewBody": "Me dejé las llaves puestas por dentro en mi piso de El Viso. Eran las 10 de la noche y llegaron en 15 minutos. El cerrajero fue súper amable y abrió la puerta de un plumazo sin romper nada.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Carlos M." },
        "datePublished": "2026-01-08",
        "reviewBody": "Increíble servicio en Prosperidad. Quería actualizar la seguridad y me instalaron un bombín antibumping de alta gama. Explicación perfecta de por qué era mejor ese modelo.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Elena R." },
        "datePublished": "2026-01-05",
        "reviewBody": "Llamé a las 3 am porque no podía entrar en casa en El Viso. Llegaron volando, en menos de 20 minutos estaban allí. Me abrieron la puerta y me dieron mucha tranquilidad.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Cerrajería",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apertura de Puertas",
            "url": "https://cerrajerosdechamartin.madrid/apertura-puertas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Cerraduras",
            "url": "https://cerrajerosdechamartin.madrid/cambio-cerraduras"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Bombín",
            "url": "https://cerrajerosdechamartin.madrid/cambio-bombin"
          }
        }
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": APP_ADDRESS,
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "postalCode": "28016",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.4344",
      "longitude": "-3.7038"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Chamartín" },
      { "@type": "City", "name": "El Viso" },
      { "@type": "City", "name": "Prosperidad" },
      { "@type": "City", "name": "Ciudad Jardín" },
      { "@type": "City", "name": "Hispanoamérica" },
      { "@type": "City", "name": "Nueva España" },
      { "@type": "City", "name": "Castilla" }
    ],
    "sameAs": [
      "https://www.facebook.com/yoteabro",
      "https://www.instagram.com/yoteabro",
      "https://cerrajerosdechamartin.madrid"
    ],
    "brand": {
      "@type": "Brand",
      "name": "YOTEABRO",
      "logo": "https://cerrajerosdechamartin.madrid/logo-yoteabro.webp"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tarda un cerrajero en llegar a mi ubicación en Chamartín?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro tiempo medio de respuesta en Chamartín es de 20 a 30 minutos, ya que contamos con técnicos distribuidos estratégicamente por barrios como El Viso, Prosperidad, Hispanoamérica y Nueva España."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué precio tiene abrir una puerta en Chamartín?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestras tarifas son transparentes: desde 90€ en horario comercial y 120€ en horario de urgencia 24h. Siempre ofrecemos precio cerrado telefónicamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajáis las 24 horas del día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, YOTEABRO ofrece servicio de cerrajeros de guardia las 24 horas del día, los 365 días del año, incluyendo festivos y fines de semana por toda la zona de Chamartín."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué marcas de cerraduras y bombines instaláis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trabajamos con las marcas líderes del mercado para garantizar la máxima seguridad: Tesa, Mottura, Ezcurra, FAC, Mul-T-Lock, Cisa, Fichet, Corbin, Lince y Mauer."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es mejor cambiar la cerradura entera o solo el bombín?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende del estado de la cerradura. Si la estructura interna funciona bien, cambiar solo el bombín por uno antibumping es la opción más económica y suficiente para elevar la seguridad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se rompe la puerta al abrir con un cerrajero de urgencia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Somos especialistas en apertura técnica sin daños. Utilizamos herramientas de precisión para abrir tu puerta de forma limpia en la gran mayoría de casos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Aceptáis pago con tarjeta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros cerrajeros llevan datáfono móvil para facilitar el pago con tarjeta de crédito o débito a nuestros clientes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dáis garantía por los trabajos de cerrajería?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros servicios cuentan con garantía oficial por escrito, asegurando un trabajo de calidad y repuestos originales de marcas certificadas."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué barrios de Chamartín prestáis servicio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Damos cobertura total a todo Chamartín: El Viso, Prosperidad, Ciudad Jardín, Hispanoamérica, Nueva España y Castilla."
        }
      },
      {
        "@type": "Question",
        "name": "¿Realizáis amaestramiento de llaves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, diseñamos sistemas de amaestramiento personalizados para comunidades de vecinos y empresas, permitiendo usar una sola llave maestra para todos los accesos."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cerrajerosdechamartin.madrid/#organization",
    "name": APP_BUSINESS_NAME,
    "url": "https://cerrajerosdechamartin.madrid",
    "logo": "https://cerrajerosdechamartin.madrid/logo-yoteabro.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": APP_PHONE,
      "contactType": "emergency",
      "availableLanguage": "Spanish"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://cerrajerosdechamartin.madrid/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Apertura de Puertas",
        "item": "https://cerrajerosdechamartin.madrid/apertura-puertas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://cerrajerosdechamartin.madrid/blog"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

