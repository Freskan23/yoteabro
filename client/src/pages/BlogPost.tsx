import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Phone } from "lucide-react";
import { Link } from "wouter";
import { APP_PHONE, APP_PHONE_DISPLAY, APP_EMAIL } from "@/const";

const blogPostsContent: Record<string, any> = {
  "robos-trasteros-leganes-norte": {
    title: "Oleada de robos en trasteros de Leganés Norte: Cómo protegerte",
    date: "2025-10-20",
    category: "Seguridad",
    image: "/blog-robos-trasteros.png",
    content: `¿Vives en la zona de la Ronda Norte de Leganés? En las últimas semanas se ha detectado un incremento de los robos en trasteros. Los ladrones aprovechan la poca vigilancia en los garajes para forzar las puertas metálicas convencionales.

Como cerrajeros en Leganés, hemos visto que la mayoría de estas puertas se abren en segundos con una simple palanca. No dejes que tus pertenencias corran peligro.

## ¿Cómo mejorar la seguridad de tu trastero?

La seguridad de un trastero no depende solo del candado. Aquí te damos unos consejos profesionales:

1. **Escudos protectores**: Instalar un escudo que cubra el bombín evita que lo partan con una llave grifa.
2. **Cerraduras de superficie**: Añadir un segundo punto de cierre refuerza enormemente la estructura de la puerta.
3. **Puntos de anclaje**: Asegúrate de que el marco esté bien anclado a la pared.

En Cerrajería Aguado somos especialistas en reforzar accesos en Leganés Norte y Zarzaquemada. Llámanos para una evaluación gratuita.`
  },
  "cerraduras-antibumping-zarzaquemada": {
    title: "El peligro de las llaves antiguas en los pisos de Zarzaquemada",
    date: "2025-10-18",
    category: "Prevención",
    image: "/blog-cerradura-antibumping.png",
    content: `Muchos edificios en Zarzaquemada y San Nicasio fueron construidos hace décadas y aún conservan sus cerraduras originales. El problema es que estas llaves de "serreta" o de puntos antiguos son extremadamente vulnerables al 'bumping'.

El bumping es una técnica que permite abrir una puerta en segundos sin dejar rastro de fuerza, lo que además causa problemas con las aseguradoras al no haber signos de violencia.

## La solución definitiva

La única forma de dormir tranquilo es instalando un bombín antibumping de alta generación. Estos sistemas cuentan con pines internos que detectan el golpe y bloquean el giro.

En Leganés, recomendamos marcas como Tesa o Mottura, que ofrecen una relación calidad-precio excelente para hogares familiares.`
  },
  "seguridad-chalets-arroyo-culebro": {
    title: "Guía de seguridad para chalets en Arroyo Culebro y Valdepelayo",
    date: "2025-10-15",
    category: "Hogar",
    image: "/blog-seguridad-chalets.png",
    content: `Vivir en un chalet en zonas como Arroyo Culebro o Valdepelayo es un privilegio, pero también requiere una estrategia de seguridad diferente a la de un piso. Los accesos son múltiples: garaje, jardín, ventanas traseras...

## Puntos críticos que debes revisar

- **La puerta principal**: Debe ser acorazada de grado 3 mínimo.
- **La puerta del garaje**: El punto más débil. Un cerrojo interior es fundamental.
- **Ventanas**: Las rejas no tienen por qué ser feas, hoy existen modelos modernos muy seguros.

En Cerrajería Aguado en Leganés llevamos años protegiendo las urbanizaciones de la ciudad con sistemas de alta gama.`
  },
  "llaves-coche-parquesur": {
    title: "¿Perdiste las llaves del coche en Parquesur? No entres en pánico",
    date: "2025-10-12",
    category: "Emergencias",
    image: "/blog-llaves-coche.png",
    content: `Estás saliendo de hacer unas compras en Parquesur, llegas al parking y... las llaves no aparecen. Es una situación estresante, pero como cerrajeros 24h en Leganés, estamos acostumbrados a solucionarla.

## ¿Qué hacer en ese momento?

1. **No fuerces la puerta**: Podrías dañar la electrónica del coche o el marco de la ventana.
2. **Llámanos**: Estamos a menos de 5 minutos de Parquesur.
3. **Identificación**: Ten a mano la documentación del vehículo una vez que abramos la puerta.

Abrimos coches de todas las marcas sin causar ni un solo rasguño.`
  },
  "puertas-okupas-leganes": {
    title: "Puertas Anti-Okupa: La solución para pisos vacíos en San Nicasio",
    date: "2025-10-10",
    category: "Seguridad",
    image: "/blog-puerta-antiokupa.png",
    content: `Tener un piso vacío, ya sea por una herencia o mientras esperas a un inquilino, puede ser una preocupación en barrios antiguos como San Nicasio. La ocupación es un riesgo real.

## ¿Qué es una puerta anti-okupa?

Es una estructura de acero reforzado que se instala sobre el marco original sin dañarlo. No tiene cerradura exterior visible y solo se puede abrir con herramientas profesionales o llaves de altísima seguridad por parte del propietario.

Es, sin duda, la forma más barata y efectiva de evitar problemas legales y dolores de cabeza en Leganés.`
  },
  "bombines-seguridad-baratos": {
    title: "¿Bombines de seguridad baratos? Lo barato sale caro",
    date: "2025-10-08",
    category: "Consejos",
    image: "/blog-bombines-comparativa.png",
    content: `En ferreterías de barrio a veces vemos bombines de "seguridad" por 20€. Como profesionales de la cerrajería en Leganés, nuestra obligación es avisarte: esos bombines no son seguros.

## El metal importa

Los bombines baratos suelen estar fabricados en latón de baja calidad que se corta como mantequilla con una sierra de corona o un extractor. Un bombín de seguridad real está fabricado en acero endurecido y tiene refuerzos antitaladro y antipánico.

Invierte una vez, duerme mil noches. En Cerrajería Aguado te asesoramos sobre qué modelo se adapta mejor a tu presupuesto sin sacrificar tu seguridad.`
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

  return (
    <div className="min-h-screen flex flex-col">
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
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              } else if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n').filter(item => item.match(/^\d+\./));
                return (
                  <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '')}</li>
                    ))}
                  </ol>
                );
              } else {
                return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>;
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

