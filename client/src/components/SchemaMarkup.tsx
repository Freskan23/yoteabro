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
    "url": "https://cerrajerosdeleganes.madrid",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cerrajerosdeleganes.madrid/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://cerrajerosdeleganes.madrid/#about",
    "url": "https://cerrajerosdeleganes.madrid/",
    "name": `Sobre Nosotros - ${APP_BUSINESS_NAME}`,
    "description": `Conoce más sobre Cerrajería Aguado, tus cerrajeros de confianza en Leganés con más de 20 años de experiencia.`,
    "mainEntity": {
      "@id": "https://cerrajerosdeleganes.madrid/#organization"
    }
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://cerrajerosdeleganes.madrid/#contact",
    "url": "https://cerrajerosdeleganes.madrid/#ubicacion",
    "name": `Contacto - ${APP_BUSINESS_NAME}`,
    "description": `Contacta con Cerrajería Aguado para urgencias 24h o presupuestos de cerrajería en Leganés.`,
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
        "url": "https://cerrajerosdeleganes.madrid/apertura-puertas",
        "name": "Apertura de Puertas"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://cerrajerosdeleganes.madrid/urgencias-24h",
        "name": "Urgencias 24 Horas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://cerrajerosdeleganes.madrid/cambio-cerraduras",
        "name": "Cambio de Cerraduras"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://cerrajerosdeleganes.madrid/cambio-bombin",
        "name": "Cambio de Bombín"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://cerrajerosdeleganes.madrid/amaestramiento",
        "name": "Amaestramiento de Llaves"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": "https://cerrajerosdeleganes.madrid/#organization",
    "name": APP_BUSINESS_NAME,
    "legalName": "CERRAJERIA AGUADO, S.L.",
    "url": "https://cerrajerosdeleganes.madrid",
    "logo": "https://cerrajerosdeleganes.madrid/logo-aguado.jpg",
    "image": "https://cerrajerosdeleganes.madrid/hero-cerrajero.webp",
    "description": "Cerrajeros profesionales en Leganés disponibles 24/7 para cualquier urgencia. Apertura de puertas desde 90€, cambio de cerraduras, bombines de seguridad y amaestramiento.",
    "telephone": APP_PHONE,
    "email": APP_EMAIL,
    "priceRange": "€€",
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
        "author": { "@type": "Person", "name": "Carlos M." },
        "datePublished": "2024-01-10",
        "reviewBody": "Rápidos y muy profesionales. Me abrieron la puerta sin romper nada en Zarzaquemada.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Elena R." },
        "datePublished": "2023-12-15",
        "reviewBody": "Cambiaron el bombín por uno antibumping. Ahora duermo mucho más tranquila. Recomendados.",
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
            "url": "https://cerrajerosdeleganes.madrid/apertura-puertas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Cerraduras",
            "url": "https://cerrajerosdeleganes.madrid/cambio-cerraduras"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Bombín",
            "url": "https://cerrajerosdeleganes.madrid/cambio-bombin"
          }
        }
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": APP_ADDRESS,
      "addressLocality": "Leganés",
      "addressRegion": "Madrid",
      "postalCode": "28912",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.32213196140683",
      "longitude": "-3.765664323445839"
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
      { "@type": "City", "name": "Leganés" },
      { "@type": "City", "name": "Zarzaquemada" },
      { "@type": "City", "name": "San Nicasio" },
      { "@type": "City", "name": "Leganés Norte" },
      { "@type": "City", "name": "Arroyo Culebro" }
    ],
    "sameAs": [
      "https://www.facebook.com/cerrajeriaaguado",
      "https://www.instagram.com/cerrajeriaaguado",
      "https://cerrajerosdeleganes.madrid"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tarda un cerrajero en llegar a mi ubicación en Leganés?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestro tiempo medio de respuesta en Leganés es de 20 a 30 minutos, ya que contamos con técnicos distribuidos estratégicamente por barrios como Zarzaquemada, San Nicasio y El Carrascal."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué precio tiene abrir una puerta en Leganés?",
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
          "text": "Sí, Cerrajería Aguado ofrece servicio de cerrajeros de guardia las 24 horas del día, los 365 días del año, incluyendo festivos y fines de semana por toda la zona de Leganés."
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
        "name": "¿En qué barrios de Leganés prestáis servicio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Damos cobertura total a todo Leganés: Zarzaquemada, San Nicasio, El Carrascal, La Fortuna, Leganés Norte, Arroyo Culebro, Valdepelayo y Solagua."
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
    "@id": "https://cerrajerosdeleganes.madrid/#organization",
    "name": APP_BUSINESS_NAME,
    "url": "https://cerrajerosdeleganes.madrid",
    "logo": "https://cerrajerosdeleganes.madrid/logo-aguado.jpg",
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
        "item": "https://cerrajerosdeleganes.madrid/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Apertura de Puertas",
        "item": "https://cerrajerosdeleganes.madrid/apertura-puertas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://cerrajerosdeleganes.madrid/blog"
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

