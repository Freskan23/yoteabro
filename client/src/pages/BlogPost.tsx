import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Phone } from "lucide-react";
import { Link } from "wouter";
import { APP_PHONE, APP_PHONE_DISPLAY, APP_EMAIL } from "@/const";

const blogPostsContent: Record<string, any> = {
  "robos-trasteros-leganes-norte": {
    title: "Oleada de robos en trasteros de Leganés Norte: Cómo protegerte con Cerrajeros Leganés",
    date: "2025-10-20",
    category: "Seguridad",
    image: "/blog-robos-trasteros.webp",
    content: `
# Seguridad Reforzada: Cómo evitar los robos en trasteros de Leganés Norte

¿Vives en la zona de la Ronda Norte de Leganés? En las últimas semanas se ha detectado un incremento alarmante de los robos en trasteros. Los ladrones aprovechan la poca vigilancia en los garajes y la debilidad de las puertas estándar para forzar las entradas metálicas convencionales en cuestión de segundos.

Como **cerrajeros en Leganés** con años de experiencia, hemos visto que la mayoría de estas puertas se abren mediante la técnica de la palanca o rompiendo el bombín básico de obra. No permitas que tus pertenencias, bicicletas o herramientas corran peligro.

## ¿Por qué las puertas de trastero son tan vulnerables en Leganés?

La mayoría de las comunidades en Leganés Norte y Zarzaquemada cuentan con puertas de chapa simple. Estas puertas no están diseñadas para resistir un ataque profesional. Los delincuentes buscan objetivos fáciles donde el ruido sea mínimo y la rapidez máxima.

### Medidas de protección recomendadas por expertos

Para mejorar la seguridad de tu trastero, te damos unos consejos profesionales que realmente funcionan:

1.  **Escudos protectores acorazados**: Instalar un escudo que cubra el bombín evita que lo partan con una llave grifa o que lo ataquen con taladros. Es una inversión mínima para una seguridad máxima.
2.  **Cerraduras de superficie o de tres puntos**: Añadir un segundo punto de cierre refuerza enormemente la estructura de la puerta, dificultando el apalancamiento.
3.  **Bombines antibumping de alta gama**: Si el ladrón no puede usar la fuerza, intentará el bumping. Un bombín certificado impide esta técnica silenciosa.

> ¿Te preocupa la seguridad de tu trastero? **Llámanos al ${APP_PHONE_DISPLAY}** y te daremos un presupuesto sin compromiso para reforzar tu puerta hoy mismo.

## Cerrajeros Leganés 24h: Especialistas en seguridad de comunidades

En Cerrajería Aguado somos especialistas en reforzar accesos en urbanizaciones de Leganés Norte y Zarzaquemada. Conocemos los puntos débiles de cada modelo de puerta instalado en la zona. 

No esperes a ser la próxima víctima. Un refuerzo a tiempo es mucho más económico que recuperar lo robado o tramitar partes con el seguro. Ofrecemos **precios cerrados** y llegamos a tu domicilio en menos de 20 minutos para cualquier urgencia o asesoramiento técnico.

### Beneficios de actualizar tu cerradura ahora:
- **Tranquilidad total** cuando no estás en casa.
- **Disuasión real** contra bandas organizadas.
- **Ahorro a largo plazo** en reparaciones post-robo.

Si necesitas un **cerrajero barato en Leganés** pero que trabaje con materiales de primera calidad, somos tu mejor opción. Trabajamos con marcas líderes como Tesa, Mottura y FAC.`
  },
  "cerraduras-antibumping-zarzaquemada": {
    title: "Cerraduras Antibumping en Leganés: Protege tu piso en Zarzaquemada",
    date: "2025-10-18",
    category: "Prevención",
    image: "/blog-cerradura-antibumping.webp",
    content: `
# El peligro de las llaves antiguas: Urgencia de cambio de cerraduras en Leganés

Muchos edificios en barrios emblemáticos como Zarzaquemada y San Nicasio fueron construidos hace décadas y aún conservan sus cerraduras originales de "serreta" o de puntos de primera generación. El problema crítico es que estas llaves son extremadamente vulnerables al **bumping**.

El bumping es una técnica que permite abrir una puerta en segundos sin dejar rastro de fuerza, utilizando una llave maestra modificada y un golpe seco. Como **cerrajeros 24 horas en Leganés**, nos encontramos a diario con viviendas que han sido abiertas sin que los vecinos oyeran nada.

## ¿Qué es el Bumping y por qué es tan peligroso?

Esta técnica es la favorita de los intrusos porque es silenciosa y no deja daños estéticos en la puerta. Esto último causa graves problemas con las aseguradoras, que a menudo se niegan a cubrir el robo al no haber signos de violencia visibles.

### La solución definitiva: Bombines Antibumping Certificados

La única forma de dormir realmente tranquilo es instalando un **bombín antibumping de alta generación**. Estos sistemas cuentan con:
- **Pines internos telescópicos** que detectan el golpe y bloquean el giro.
- **Barras de acero antitaladro** para evitar ataques destructivos.
- **Puentes reforzados** contra la rotura física del cilindro.

En **Leganés**, recomendamos encarecidamente marcas como **Tesa (modelo TK100)** o **Mottura**, que ofrecen una relación calidad-precio excelente para hogares familiares y son resistentes a las técnicas más modernas de apertura.

> ¡No te la juegues! Actualiza tu seguridad por mucho menos de lo que imaginas. **Contacta ahora con Cerrajería Aguado al ${APP_PHONE_DISPLAY}** y pide tu presupuesto gratuito.

## Servicio de Cerrajería en Leganés con Precio Cerrado

En Cerrajería Aguado creemos en la transparencia. Por eso, siempre damos un **precio cerrado** por teléfono para que no haya sorpresas al finalizar el trabajo. Nuestro equipo de **cerrajeros en Zarzaquemada** llega a cualquier calle de la zona en menos de 20 minutos.

### ¿Cuándo deberías llamar a un cerrajero urgente en Leganés?
- Si tu llave gira con dificultad.
- Si notas que la cerradura está floja o baila.
- Tras el robo o extravío de tus llaves.
- Si acabas de mudarte a un nuevo piso alquilado o comprado.

La seguridad de tu familia no tiene precio, pero nuestros servicios sí son los más competitivos de la zona sur.`
  },
  "seguridad-chalets-arroyo-culebro": {
    title: "Seguridad para Chalets en Leganés: Guía para Arroyo Culebro y Valdepelayo",
    date: "2025-10-15",
    category: "Hogar",
    image: "/blog-seguridad-chalets.webp",
    content: `
# Guía Profesional: Cómo proteger tu chalet en Arroyo Culebro y Valdepelayo

Vivir en un chalet en zonas residenciales como Arroyo Culebro o Valdepelayo es un privilegio, pero también requiere una estrategia de seguridad mucho más compleja que la de un piso convencional. Los accesos son múltiples y a menudo están menos vigilados: puertas principales, garajes, jardines traseros y ventanales.

Como expertos en **cerrajería técnica en Leganés**, hemos diseñado esta guía para ayudarte a identificar y corregir los puntos débiles de tu hogar.

## Análisis de puntos críticos en viviendas unifamiliares

1.  **La Puerta de Entrada Principal**: No basta con que sea bonita. Debe ser una **puerta acorazada** de grado 3 o 4 como mínimo. La mayoría de los robos se intentan por la vía más rápida si no hay resistencia.
2.  **La Puerta del Garaje**: Es el punto más débil y olvidado. Un simple cerrojo interior de seguridad puede evitar que los ladrones entren al garaje y, desde ahí, tengan acceso total al resto de la casa.
3.  **Ventanas y Puertas Correderas**: Las persianas autoblocantes y los cierres de seguridad para correderas son fundamentales en plantas bajas.

> ¿Quieres una auditoría de seguridad gratuita para tu chalet? **Escríbenos por WhatsApp o llámanos al ${APP_PHONE_DISPLAY}**. Somos tus cerrajeros de confianza en Leganés.

## Soluciones de Alta Seguridad: Amaestramiento e Inteligencia

En Cerrajería Aguado proponemos el **amaestramiento de llaves** para propietarios de chalets. Imagina abrir el portal exterior, el garaje, la puerta principal y el trastero con la comodidad de una sola llave de alta seguridad incopiable. Ganarás en seguridad y, sobre todo, en comodidad diaria.

### Instalación de Cerrojos Adicionales
Para aquellas puertas que no son acorazadas, la instalación de un **cerrojo FAC de alta seguridad** con cadena interior es una solución económica y muy efectiva para disuadir ataques con palanca.

En Leganés, llevamos años protegiendo las urbanizaciones más exclusivas con sistemas de alta gama. Nuestro compromiso es tu tranquilidad. Llegamos en menos de 30 minutos y trabajamos con **repuestos originales** y marcas de prestigio.`
  },
  "llaves-coche-parquesur": {
    title: "Cerrajeros de Coches en Leganés: Solución rápida si pierdes las llaves en Parquesur",
    date: "2025-10-12",
    category: "Emergencias",
    image: "/blog-llaves-coche.webp",
    content: `
# ¿Te has quedado fuera de tu coche en Parquesur? Mantén la calma

Estás saliendo de una tarde de compras o de cine en Parquesur, llegas al parking cargado y... las llaves no aparecen. O peor aún, están a la vista sobre el asiento con el coche cerrado. Es una situación estresante que nos puede pasar a cualquiera, pero como **cerrajeros de urgencia en Leganés**, tenemos la solución inmediata.

Estamos ubicados estratégicamente para llegar a Parquesur o al Polígono Cobo Calleja en menos de 10 minutos.

## Apertura de Vehículos sin Daños en Leganés

A diferencia de lo que mucha gente piensa, no es necesario romper un cristal o forzar el marco de la ventana. Contamos con herramientas de precisión (ganzúas Lishi especializadas por marcas) que nos permiten abrir tu coche de forma limpia y profesional.

### Pasos a seguir si pierdes las llaves del coche:
1.  **No intentes forzar la puerta**: Podrías dañar la electrónica de la cerradura centralizada o el airbag lateral, lo que resultaría en una reparación carísima.
2.  **Ten la documentación a mano**: Por seguridad, una vez abramos el vehículo, necesitaremos verificar que eres el propietario legal.
3.  **Contacta con profesionales**: Un cerrajero generalista puede no tener las herramientas adecuadas para cerraduras de coches modernas.

> ¿Servicio urgente ahora? **Llama ya al ${APP_PHONE_DISPLAY}**. Estamos en Leganés y te atenderemos en minutos con un precio cerrado garantizado.

## Copia de llaves y mandos en el acto
Si has perdido tu única llave, no solo abrimos el coche, sino que en muchos casos podemos gestionar la recuperación de la llave mediante el código mecánico. En Cerrajería Aguado somos referentes por nuestra rapidez y eficacia en **aperturas de emergencia en Leganés**.

No dejes que un descuido arruine tu día. Confía en el **cerrajero local de Leganés** que ofrece garantía por escrito en cada intervención.`
  },
  "puertas-okupas-leganes": {
    title: "Evita la Ocupación en Leganés: Puertas Anti-Okupa en San Nicasio y Centro",
    date: "2025-10-10",
    category: "Seguridad",
    image: "/blog-puerta-antiokupa.webp",
    content: `
# Seguridad para Pisos Vacíos: La mejor defensa contra la ocupación en Leganés

Tener una propiedad vacía, ya sea por una herencia en proceso, mientras buscas inquilino o por reformas en barrios como San Nicasio o Leganés Centro, puede ser una fuente constante de estrés. La ocupación ilegal es un riesgo real que puede derivar en procesos judiciales largos y costosos.

La solución más efectiva y económica que recomendamos como **cerrajeros expertos en seguridad** es la instalación de una **puerta anti-okupa**.

## ¿Qué es exactamente una puerta anti-okupa y cómo funciona?

No es una puerta convencional. Se trata de una estructura de acero macizo que se instala **sobre el marco original** de tu puerta mediante tornillería especial que no se puede manipular desde el exterior. 

### Ventajas principales:
- **Sin cerradura visible**: No hay bombín que atacar con bumping o taladro. Se abre con una llave de alta seguridad específica.
- **Instalación no destructiva**: Una vez que alquiles o vendas el piso, retiramos la puerta y tu puerta original estará intacta.
- **Disuasión inmediata**: Los okupas buscan objetivos fáciles. Al ver una puerta de acero, pasan de largo directamente.

> Protege tu inversión hoy mismo. **Llama al ${APP_PHONE_DISPLAY}** y pide presupuesto para tu puerta anti-okupa en Leganés. Instalación en 24h.

## Cerrajeros Leganés Económicos: Seguridad al alcance de todos

Mucha gente piensa que estos sistemas son caros, pero si calculas el coste de un procedimiento de desahucio y los daños en el inmueble, una puerta anti-okupa es la mejor inversión que puedes hacer. Además, en Cerrajería Aguado ofrecemos opciones de **alquiler o compra** adaptadas a lo que necesites.

Somos el referente en **cerrajería de seguridad en Leganés**. Conocemos la normativa local y trabajamos con las comunidades de vecinos para asegurar que la instalación cumple con todos los requisitos de seguridad y estética permitidos.`
  },
  "bombines-seguridad-baratos": {
    title: "¿Cerraduras Baratas en Leganés? Por qué lo barato sale caro en seguridad",
    date: "2025-10-08",
    category: "Consejos",
    image: "/blog-bombines-comparativa.webp",
    content: `
# La Verdad sobre los Bombines de Oferta: Consejos de Cerrajeros Leganés

Es muy común ver en grandes superficies o ferreterías de barrio bombines de "seguridad" por apenas 20 o 30 euros. La oferta es tentadora, pero como profesionales de la **cerrajería en Leganés** con más de 20 años de experiencia, nuestra obligación es advertirte: esos bombines suelen ser solo una ilusión de seguridad.

En este artículo te explicamos qué diferencia un bombín de gama baja de uno profesional y por qué tu seguridad depende de esa diferencia.

## El metal importa: Latón vs. Acero Endurecido

Los bombines baratos suelen estar fabricados en latón de baja calidad. Para un ladrón con una sierra de corona o un extractor, este material se corta como si fuera mantequilla. Un **bombín de alta seguridad real** está fabricado en acero endurecido y cuenta con refuerzos internos antitaladro.

### ¿Qué debe tener un bombín para ser seguro en 2024?
- **Certificación mínima SKG*** o grado 6 de seguridad europea.
- **Sistema Antipánico**: Permite abrir desde fuera aunque haya una llave puesta por dentro.
- **Llave incopiable**: Solo puedes pedir copias presentando una tarjeta de propiedad única, evitando que cualquiera haga una copia de tu llave sin que lo sepas.
- **Protección Antibumping y Antiganzúa**: Mecanismos internos complejos que bloquean ataques técnicos.

> ¿No sabes qué bombín tienes instalado? **Mándanos una foto por WhatsApp al ${APP_PHONE_DISPLAY}** y te haremos una evaluación de seguridad gratuita.

## Inversión Inteligente en Cerrajería Leganés

Invierte una vez, duerme tranquilo mil noches. En Cerrajería Aguado no solo vendemos productos, asesoramos personas. Te explicaremos qué modelo se adapta mejor a tu presupuesto sin sacrificar nunca los mínimos de seguridad que tu familia merece.

Si buscas un **cerrajero en Leganés** que te hable con total honestidad y te ofrezca garantías reales por escrito, llámanos. Trabajamos con marcas que han pasado los tests más exigentes de seguridad mundial.`
  }
};

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id || "";
  const post = blogPostsContent[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
            <Link href="/blog">
              <Button>Volver al blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": `https://cerrajerosdeleganes.madrid${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Cerrajería Aguado",
      "url": "https://cerrajerosdeleganes.madrid"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cerrajería Aguado",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cerrajerosdeleganes.madrid/logo-aguado.jpg"
      }
    },
    "description": post.content.substring(0, 160).replace(/[#*>\n]/g, '').trim() + "..."
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />

      {/* Imagen destacada */}
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido del post */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/blog" className="text-[#A52A2A] hover:underline flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>
          </div>

          {/* Meta información */}
          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <span className="bg-[#A52A2A]/10 text-[#A52A2A] px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            {post.title}
          </h1>

          {/* Contenido */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph: string, index: number) => {
              const parseBold = (text: string) => {
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
              };

              if (paragraph.startsWith('# ')) {
                return null; // El H1 ya se renderiza arriba
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3 text-gray-900">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('> ')) {
                return (
                  <div key={index} className="my-10 bg-gradient-to-br from-[#A52A2A]/10 to-[#A52A2A]/5 border-l-8 border-[#A52A2A] rounded-r-2xl p-8 shadow-sm relative overflow-hidden group">
                    <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-500">
                      <Phone className="w-32 h-32 text-[#A52A2A]" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 text-[#A52A2A]">
                        <div className="bg-[#A52A2A] p-2 rounded-lg">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold uppercase tracking-wider text-sm">Atención Inmediata</span>
                      </div>
                      <div className="text-xl md:text-2xl text-gray-900 leading-relaxed font-medium">
                        {parseBold(paragraph.replace('> ', ''))}
                      </div>
                      <div className="mt-6">
                        <Button asChild className="bg-[#A52A2A] hover:bg-[#8B0000] text-white px-8 py-6 rounded-xl text-lg shadow-lg shadow-[#A52A2A]/20">
                          <a href={`tel:${APP_PHONE}`} className="flex items-center gap-3">
                            Llamar ahora a {APP_PHONE_DISPLAY}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(item => item.trim().startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-700">{parseBold(item.replace('- ', ''))}</li>
                    ))}
                  </ul>
                );
              } else if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n').filter(item => item.match(/^\d+\./));
                return (
                  <ol key={index} className="list-decimal pl-6 mb-6 space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-700">{parseBold(item.replace(/^\d+\.\s*/, ''))}</li>
                    ))}
                  </ol>
                );
              } else {
                return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{parseBold(paragraph)}</p>;
              }
            })}
          </div>

          {/* CTA de contacto */}
          <div className="mt-12 bg-gradient-to-r from-[#A52A2A] to-[#8B0000] text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu cerradura?</h3>
            <p className="text-lg mb-6">
              Estamos disponibles 24/7 en Leganés. Llegamos en 20-30 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Llamar {APP_PHONE_DISPLAY}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-[#A52A2A] hover:bg-gray-100 text-lg">
                <a href={`mailto:${APP_EMAIL}`}>
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>

          {/* Volver al blog */}
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Ver más artículos del blog
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

