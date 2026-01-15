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
        "name": "¿Cuánto cobra un cerrajero por abrir una puerta en Leganés?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `En Cerrajería Aguado, el servicio de apertura de puertas cuesta 90€ en horario normal y 120€ en horario de urgencia. Somos los cerrajeros más baratos de Leganés con factura oficial.`
        }
      },
      {
        "@type": "Question",
        "name": "¿Llegáis rápido a Zarzaquemada o San Nicasio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, al estar ubicados en la Av. de Fuenlabrada, llegamos a cualquier barrio de Leganés en menos de 20 minutos para urgencias 24h."
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

