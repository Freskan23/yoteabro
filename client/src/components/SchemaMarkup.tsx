import { APP_BUSINESS_NAME, APP_PHONE, APP_EMAIL, APP_ADDRESS, APP_LOCATION } from "@/const";

/**
 * Schema.org markup para SEO local
 * Incluye LocalBusiness, Service, FAQPage
 */
export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": "https://cerrajeromajadahonda.madrid/#organization",
    "name": APP_BUSINESS_NAME,
    "legalName": "CERRAJERIA AGUADO, S.L.",
    "url": "https://cerrajeromajadahonda.madrid",
    "logo": "https://cerrajeromajadahonda.madrid/images/logo-aguado.jpg",
    "image": "https://cerrajeromajadahonda.madrid/images/cerrajero-aguado.png",
    "description": "Cerrajeros profesionales en Majadahonda disponibles 24/7 para cualquier urgencia. Apertura de puertas, cambio de cerraduras, bombines de seguridad y amaestramiento.",
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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. Sta. María de la Cabeza, 5, local 28",
      "addressLocality": "Majadahonda",
      "addressRegion": "Madrid",
      "postalCode": "28220",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.4739",
      "longitude": "-3.8722"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Majadahonda"
      },
      {
        "@type": "City",
        "name": "Boadilla del Monte"
      },
      {
        "@type": "City",
        "name": "Pozuelo de Alarcón"
      },
      {
        "@type": "City",
        "name": "Las Rozas"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/cerrajeriaaguado",
      "https://www.instagram.com/cerrajeriaaguado",
      "https://twitter.com/cerrajeriaaguado",
      "https://cerrajeromajadahonda.madrid"
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
            "description": "Servicio urgente de apertura de puertas sin daños, disponible 24/7",
            "provider": {
              "@id": "https://cerrajeromajadahonda.madrid/#organization"
            },
            "areaServed": "Majadahonda",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "90",
              "priceCurrency": "EUR",
              "description": "Precio en horario normal (L-V 08:00-19:00)"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Cerraduras",
            "description": "Instalación y sustitución de cerraduras de alta seguridad",
            "provider": {
              "@id": "https://cerrajeromajadahonda.madrid/#organization"
            },
            "areaServed": "Majadahonda"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cambio de Bombín",
            "description": "Bombines de seguridad antibumping, antiganzúa y antitaladro",
            "provider": {
              "@id": "https://cerrajeromajadahonda.madrid/#organization"
            },
            "areaServed": "Majadahonda"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Amaestramiento",
            "description": "Sistema de llaves maestras para múltiples accesos",
            "provider": {
              "@id": "https://cerrajeromajadahonda.madrid/#organization"
            },
            "areaServed": "Majadahonda"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cobra un cerrajero por abrir una puerta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Cerrajería Aguado, el servicio de apertura de puertas cuesta 90€ en horario normal (lunes a viernes de 08:00 a 19:00h) y 120€ fuera de este horario (noches, fines de semana y festivos). No cobramos desplazamiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto vale cambiar un bombín de una puerta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El precio del cambio de bombín depende del tipo de seguridad que necesites. Ofrecemos bombines desde modelos básicos hasta sistemas de alta seguridad con tecnología antibumping y llaves incopiables."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo saber si un cerrajero es de confianza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un cerrajero de confianza debe ofrecer presupuestos claros antes de comenzar, tener experiencia demostrable, trabajar con herramientas profesionales y ofrecer garantías en sus servicios. En Cerrajería Aguado cumplimos con todos estos requisitos."
        }
      }
    ]
  };

  // Schema de Organización (complementa LocalBusiness)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cerrajeromajadahonda.madrid/#organization",
    "name": APP_BUSINESS_NAME,
    "legalName": "CERRAJERIA AGUADO, S.L.",
    "url": "https://cerrajeromajadahonda.madrid",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cerrajeromajadahonda.madrid/logo-aguado.png",
      "width": "250",
      "height": "60"
    },
    "image": "https://cerrajeromajadahonda.madrid/images/og-image.webp",
    "description": "Cerrajería profesional en Majadahonda con más de 20 años de experiencia. Especialistas en apertura de puertas, cerraduras de seguridad y sistemas de amaestramiento.",
    "telephone": APP_PHONE,
    "email": APP_EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C. Sta. María de la Cabeza, 5, local 28",
      "addressLocality": "Majadahonda",
      "addressRegion": "Madrid",
      "postalCode": "28220",
      "addressCountry": "ES"
    },
    "founder": {
      "@type": "Person",
      "name": "Cerrajería Aguado",
      "jobTitle": "Maestro Cerrajero"
    },
    "foundingDate": "2000",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5"
    },
    "slogan": "Tu cerrajero de confianza en Majadahonda 24 horas",
    "knowsAbout": [
      "Cerrajería",
      "Seguridad",
      "Cerraduras de alta seguridad",
      "Apertura de puertas",
      "Amaestramiento",
      "Bombines antibumping"
    ]
  };

  // Schema de Autor/Experto
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://cerrajeromajadahonda.madrid/#author",
    "name": "Cerrajería Aguado",
    "jobTitle": "Maestro Cerrajero Profesional",
    "worksFor": {
      "@id": "https://cerrajeromajadahonda.madrid/#organization"
    },
    "knowsAbout": [
      "Cerrajería profesional",
      "Sistemas de seguridad",
      "Cerraduras de alta seguridad",
      "Apertura de puertas sin daños",
      "Amaestramiento de llaves",
      "Bombines antibumping y antiganzúa"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Cerrajero",
      "occupationalCategory": "49-9098.00",
      "description": "Profesional especializado en instalación, reparación y mantenimiento de cerraduras y sistemas de seguridad"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Majadahonda",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    }
  };

  // Schema de Menú de Servicios
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Servicios de Cerrajería",
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Apertura de Puertas",
        "url": "https://cerrajeromajadahonda.madrid/apertura-puertas",
        "description": "Servicio urgente de apertura de puertas 24/7 desde 90€"
      },
      {
        "@type": "WebPage",
        "name": "Cambio de Cerraduras",
        "url": "https://cerrajeromajadahonda.madrid/cambio-cerraduras",
        "description": "Instalación de cerraduras de alta seguridad"
      },
      {
        "@type": "WebPage",
        "name": "Cambio de Bombín",
        "url": "https://cerrajeromajadahonda.madrid/cambio-bombin",
        "description": "Bombines antibumping y antiganzúa"
      },
      {
        "@type": "WebPage",
        "name": "Amaestramiento",
        "url": "https://cerrajeromajadahonda.madrid/amaestramiento",
        "description": "Sistema de llaves maestras para comunidades"
      },
      {
        "@type": "WebPage",
        "name": "Blog",
        "url": "https://cerrajeromajadahonda.madrid/blog",
        "description": "Consejos y guías sobre seguridad y cerrajería"
      }
    ]
  };

  // Schemas individuales de Servicios
  const aperturaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://cerrajeromajadahonda.madrid/apertura-puertas#service",
    "serviceType": "Apertura de Puertas",
    "name": "Apertura de Puertas Urgente 24h",
    "description": "Servicio profesional de apertura de puertas sin daños. Atendemos emergencias 24 horas en Majadahonda y alrededores. Llegamos en 20-30 minutos.",
    "provider": {
      "@id": "https://cerrajeromajadahonda.madrid/#organization"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Majadahonda"
      },
      {
        "@type": "City",
        "name": "Boadilla del Monte"
      },
      {
        "@type": "City",
        "name": "Pozuelo de Alarcón"
      },
      {
        "@type": "City",
        "name": "Las Rozas"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tarifas de Apertura",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apertura Horario Normal"
          },
          "price": "90",
          "priceCurrency": "EUR",
          "description": "Lunes a viernes de 08:00 a 19:00h",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Apertura Fuera de Horario"
          },
          "price": "120",
          "priceCurrency": "EUR",
          "description": "Noches, fines de semana y festivos",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": APP_PHONE,
        "contactType": "Emergency Service",
        "availableLanguage": "Spanish",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "opens": "00:00",
          "closes": "23:59",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        }
      }
    }
  };

  const cerradurasService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://cerrajeromajadahonda.madrid/cambio-cerraduras#service",
    "serviceType": "Cambio de Cerraduras",
    "name": "Instalación y Cambio de Cerraduras de Seguridad",
    "description": "Instalación profesional de cerraduras de alta seguridad. Trabajamos con las mejores marcas: Mottura, Ezcurra, Tesa. Cerraduras multipunto, antibumping y antiganzúa.",
    "provider": {
      "@id": "https://cerrajeromajadahonda.madrid/#organization"
    },
    "areaServed": [
      {"@type": "City", "name": "Majadahonda"},
      {"@type": "City", "name": "Boadilla del Monte"},
      {"@type": "City", "name": "Pozuelo de Alarcón"},
      {"@type": "City", "name": "Las Rozas"}
    ],
    "brand": [
      {"@type": "Brand", "name": "Mottura"},
      {"@type": "Brand", "name": "Ezcurra"},
      {"@type": "Brand", "name": "Tesa"},
      {"@type": "Brand", "name": "Mul-T-Lock"}
    ]
  };

  const bombinService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://cerrajeromajadahonda.madrid/cambio-bombin#service",
    "serviceType": "Cambio de Bombín",
    "name": "Cambio de Bombín de Seguridad",
    "description": "Instalación de bombines de alta seguridad con protección antibumping, antiganzúa y antitaladro. Bombines con certificación europea y llaves incopiables.",
    "provider": {
      "@id": "https://cerrajeromajadahonda.madrid/#organization"
    },
    "areaServed": [
      {"@type": "City", "name": "Majadahonda"},
      {"@type": "City", "name": "Boadilla del Monte"},
      {"@type": "City", "name": "Pozuelo de Alarcón"},
      {"@type": "City", "name": "Las Rozas"}
    ]
  };

  const amaestramientoService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://cerrajeromajadahonda.madrid/amaestramiento#service",
    "serviceType": "Amaestramiento de Llaves",
    "name": "Sistema de Amaestramiento y Llaves Maestras",
    "description": "Diseño e instalación de sistemas de amaestramiento para comunidades de vecinos, empresas y edificios. Una llave maestra para múltiples accesos con control de seguridad.",
    "provider": {
      "@id": "https://cerrajeromajadahonda.madrid/#organization"
    },
    "areaServed": [
      {"@type": "City", "name": "Majadahonda"},
      {"@type": "City", "name": "Boadilla del Monte"},
      {"@type": "City", "name": "Pozuelo de Alarcón"},
      {"@type": "City", "name": "Las Rozas"}
    ],
    "audience": [
      {"@type": "Audience", "audienceType": "Comunidades de vecinos"},
      {"@type": "Audience", "audienceType": "Empresas"},
      {"@type": "Audience", "audienceType": "Edificios comerciales"}
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://cerrajeromajadahonda.madrid/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://cerrajeromajadahonda.madrid/#servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://cerrajeromajadahonda.madrid/blog"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aperturaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cerradurasService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bombinService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(amaestramientoService) }}
      />
    </>
  );
}

