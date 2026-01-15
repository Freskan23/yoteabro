import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Phone } from "lucide-react";
import { Link } from "wouter";
import { APP_PHONE, APP_PHONE_DISPLAY, APP_EMAIL } from "@/const";

const blogPostsContent: Record<string, any> = {
  "seguridad-majadahonda-consejos": {
    title: "Seguridad en Majadahonda - Consejos de un Cerrajero Local",
    date: "2025-10-20",
    category: "Seguridad",
    image: "/images/blog-seguridad-hogar.webp",
    content: `¿Sabías que el 70% de los robos en viviendas de Majadahonda ocurren por puertas con cerraduras antiguas? Como cerrajeros especializados en la zona, hemos observado que muchas casas en urbanizaciones como El Carralero o Conde de Orgaz todavía utilizan cerraduras de hace más de 15 años.

Los ladrones tardan menos de 30 segundos en forzar estos sistemas obsoletos. La tecnología de seguridad ha avanzado enormemente en la última década, y las cerraduras modernas ofrecen protección contra técnicas de apertura ilegal como el bumping, ganzuado y taladrado.

## ¿Por qué actualizar tu cerradura?

Las cerraduras antiguas son vulnerables a múltiples técnicas de apertura. Los ladrones profesionales pueden identificar rápidamente qué tipo de cerradura tienes y saben exactamente cómo abrirla. Una cerradura moderna con certificación europea puede marcar la diferencia entre un robo consumado y un intento fallido.

## Recomendaciones para Majadahonda

En Cerrajería Aguado recomendamos actualizar a cerraduras de seguridad con certificación europea, especialmente en zonas residenciales. Nuestro servicio incluye:

- Evaluación gratuita de tu sistema actual
- Presupuesto sin compromiso
- Instalación profesional en menos de 1 hora
- Garantía de 5 años

Protege tu hogar en Majadahonda con tecnología moderna. Disponibles 24/7 para emergencias.`
  },
  "llave-rota-bombin-solucion": {
    title: "¿Llave Rota en el Bombín? Solución Rápida en Majadahonda",
    date: "2025-10-18",
    category: "Emergencias",
    image: "/images/blog-llaves-bombin.webp",
    content: `Una de las emergencias más comunes que atendemos en Majadahonda es la llave partida dentro del bombín. Esto suele ocurrir con llaves desgastadas o cuando forzamos la cerradura.

## ¿Qué NO hacer?

Si te pasa, NO intentes sacarla con pinzas o herramientas caseras, podrías dañar el mecanismo completo y convertir un problema sencillo en uno mucho más costoso.

## Solución profesional

En Cerrajería Aguado contamos con herramientas profesionales de extracción que recuperan el fragmento sin dañar la cerradura. Utilizamos extractores especializados que permiten retirar la llave rota manteniendo la integridad del bombín.

## Cobertura en Majadahonda

Atendemos en toda la zona:
- Centro de Majadahonda
- Montepríncipe
- Las Lomas
- El Carralero
- Conde de Orgaz

Nuestro tiempo de respuesta es de 20-30 minutos. Servicio disponible 24 horas, incluidos festivos. Precio cerrado desde el primer momento, sin sorpresas.`
  },
  "mantenimiento-cerraduras-hogar": {
    title: "Mantenimiento de Cerraduras: Evita Problemas en tu Hogar",
    date: "2025-10-15",
    category: "Mantenimiento",
    image: "/images/servicio-cerraduras.webp",
    content: `Las cerraduras, como cualquier mecanismo, necesitan mantenimiento regular. En el clima de Madrid, con veranos calurosos e inviernos fríos, las cerraduras sufren dilataciones que pueden provocar atascos.

## Mantenimiento recomendado

Recomendamos lubricar el bombín cada 6 meses con grafito en polvo (nunca aceite, que atrae suciedad). El grafito en polvo es el lubricante ideal porque no acumula polvo ni suciedad.

## Pasos básicos de mantenimiento:

1. **Limpieza**: Limpia las llaves regularmente con un paño seco
2. **Lubricación**: Aplica grafito en polvo en el bombín cada 6 meses
3. **Revisión**: Comprueba que la llave gire suavemente
4. **Atención a señales**: Si notas resistencia al abrir, es momento de llamar a un profesional

## Servicio profesional

En Cerrajería Aguado ofrecemos servicio de mantenimiento preventivo en Majadahonda y alrededores. Una revisión anual puede ahorrarte una emergencia costosa.

Trabajamos con las mejores marcas: Tesa, Mottura, Mul-T-Lock. Pide tu cita de mantenimiento sin compromiso. Atención personalizada y profesional garantizada.`
  },
  "cerraduras-antibumping-seguridad": {
    title: "Cerraduras Antibumping: Máxima Seguridad en Majadahonda",
    date: "2025-10-12",
    category: "Seguridad",
    image: "/images/servicio-cerraduras.webp",
    content: `El bumping es una técnica de apertura ilegal que utilizan los ladrones con llaves especiales. Muchas cerraduras tradicionales son vulnerables a este método.

## ¿Qué es el bumping?

El bumping consiste en utilizar una llave especialmente diseñada que, al golpearla, hace saltar los pines internos de la cerradura permitiendo la apertura. Es una técnica silenciosa y rápida que no deja apenas rastros.

## ¿Cómo protegerte?

Instalando cerraduras antibumping certificadas. En Cerrajería Aguado somos especialistas en sistemas de alta seguridad para viviendas en Majadahonda.

## Características de las cerraduras antibumping

Las cerraduras antibumping tienen pines especiales que impiden esta técnica de apertura. Son especialmente recomendables para:

- Chalets y viviendas unifamiliares
- Zonas como Parque Conde de Orgaz
- Urbanización Las Retamas
- Montepríncipe

## Inversión en seguridad

La inversión en seguridad siempre es rentable. Instalación profesional en menos de 1 hora. Garantía de 5 años en todas nuestras instalaciones. Presupuesto gratuito y asesoramiento personalizado.

Protege lo que más te importa.`
  },
  "quedado-fuera-casa-solucion": {
    title: "¿Te Has Quedado Fuera de Casa en Majadahonda? Solución Inmediata",
    date: "2025-10-10",
    category: "Emergencias",
    image: "/images/blog-emergencia-cerrajero.webp",
    content: `Quedarse fuera de casa es más común de lo que piensas. Llaves olvidadas, perdidas o dentro de la vivienda. En Cerrajería Aguado ofrecemos servicio de apertura de puertas 24/7 en Majadahonda sin romper la cerradura.

## Técnicas no destructivas

Nuestros profesionales utilizan técnicas de apertura no destructivas que preservan tu bombín y cerradura. Esto significa que no tendrás que pagar por una cerradura nueva, solo por el servicio de apertura.

## Cobertura completa

Llegamos en 20-30 minutos a cualquier punto de Majadahonda:
- Centro urbano
- Urbanizaciones residenciales
- Polígonos industriales
- Zonas periféricas

## Precio transparente

Precio cerrado de 90€ por apertura, sin cobrar desplazamiento. Trabajamos con todas las marcas y tipos de cerraduras.

## Disponibilidad total

Servicio disponible festivos y madrugadas. Atención telefónica inmediata en el ${APP_PHONE_DISPLAY}. Profesionales certificados con más de 15 años de experiencia.

Solución rápida, eficaz y económica. Confía en los expertos locales.`
  },
  "cambio-bombin-cuando-porque": {
    title: "Cambio de Bombín: Cuándo y Por Qué Hacerlo",
    date: "2025-10-08",
    category: "Mantenimiento",
    image: "/images/blog-llaves-bombin.webp",
    content: `El bombín es el corazón de tu cerradura. ¿Cuándo debes cambiarlo?

## Situaciones que requieren cambio de bombín:

1. **Has perdido las llaves**: Alguien podría encontrarlas y acceder a tu vivienda
2. **Tras una mudanza**: No sabes quién más puede tener llaves
3. **Después de un robo o intento**: El bombín puede estar dañado
4. **Tiene más de 10 años**: La tecnología ha avanzado significativamente

## Bombines modernos

En Majadahonda, muchas viviendas antiguas conservan bombines originales sin seguridad moderna. Un bombín de seguridad actual incluye:

- Protección antibumping
- Protección antitaladro
- Protección antiganzúa
- Certificación europea

## Instalación rápida

En Cerrajería Aguado instalamos bombines de alta seguridad en 15 minutos. Trabajamos con marcas líderes como Tesa, Kaba y Mul-T-Lock.

## Ventajas del cambio de bombín

El cambio de bombín es más económico que cambiar toda la cerradura y ofrece el mismo nivel de seguridad. Servicio disponible en todo Majadahonda.

Presupuesto sin compromiso. Asesoramiento profesional sobre el mejor sistema para tu puerta.`
  },
  "cerraduras-inteligentes-futuro": {
    title: "Cerraduras Inteligentes: El Futuro de la Seguridad en tu Hogar",
    date: "2025-10-05",
    category: "Tecnología",
    image: "/images/servicio-cerraduras.webp",
    content: `Las cerraduras inteligentes están revolucionando la seguridad doméstica en Majadahonda. Olvídate de las llaves: abre tu puerta con huella dactilar, código PIN o desde tu móvil.

## ¿Para quién son ideales?

Perfectas para:
- Familias con niños que pierden las llaves
- Personas mayores con problemas de movilidad
- Propiedades vacacionales
- Viviendas de alquiler turístico

## Ventajas de las cerraduras inteligentes

En Cerrajería Aguado instalamos y configuramos cerraduras inteligentes de última generación:

- **Control de accesos temporal**: Para empleados o invitados
- **Notificaciones en tiempo real**: Sabrás quién entra y cuándo
- **Historial de entradas y salidas**: Control total de accesos
- **Compatible con sistemas domóticos**: Integración con Alexa, Google Home

## Instalación sin obras

Instalación profesional sin obras, adaptable a tu puerta actual. Asesoramiento personalizado sobre el modelo más adecuado para ti.

## Servicio completo

Servicio técnico y mantenimiento incluido. Moderniza tu hogar con tecnología de seguridad avanzada.

Disponibles en Majadahonda y alrededores. Solicita demostración gratuita.`
  },
  "seguridad-comunidades-vecinos": {
    title: "Seguridad para Comunidades de Vecinos en Majadahonda",
    date: "2025-10-03",
    category: "Seguridad",
    image: "/images/blog-seguridad-hogar.webp",
    content: `Las comunidades de vecinos en Majadahonda necesitan sistemas de seguridad específicos. Portales, garajes, trasteros y zonas comunes son puntos vulnerables.

## Soluciones integrales

En Cerrajería Aguado ofrecemos soluciones completas:

### Sistemas de amaestramiento
Una llave maestra para el presidente y llaves individuales para vecinos. Permite acceso controlado a zonas comunes manteniendo la privacidad de cada vivienda.

### Control de accesos
Con tarjeta o código para portales y garajes. Elimina la necesidad de llaves físicas y permite revocar accesos fácilmente.

### Cerraduras de alta seguridad
Para trasteros y zonas comunes. Los trasteros son objetivos frecuentes de robos, protégelos adecuadamente.

## Experiencia en Majadahonda

Hemos trabajado en comunidades de:
- El Carralero
- Montepríncipe
- Centro de Majadahonda
- Las Lomas

## Presupuestos especiales

Presupuestos especiales para comunidades. Instalación coordinada para no molestar a los vecinos. Garantía en todos nuestros trabajos.

Asesoramiento sobre las mejores opciones según el presupuesto de la comunidad. Mejora la seguridad colectiva con profesionales de confianza.`
  },
  "puertas-acorazadas-vs-blindadas": {
    title: "Puertas Acorazadas vs Blindadas: ¿Cuál Elegir?",
    date: "2025-10-01",
    category: "Seguridad",
    image: "/images/servicio-cerraduras.webp",
    content: `Existe confusión entre puertas blindadas y acorazadas. Te explicamos las diferencias para que tomes la mejor decisión.

## Puertas Blindadas

Las blindadas tienen refuerzo metálico sobre madera. Son una mejora respecto a puertas convencionales pero tienen limitaciones:
- Menor resistencia a ataques prolongados
- Vulnerable a técnicas de palanca
- Grado de seguridad limitado

## Puertas Acorazadas

Las acorazadas son completamente metálicas con mayor resistencia:
- Estructura totalmente metálica
- Múltiples puntos de anclaje
- Resistencia certificada
- Mayor durabilidad

## Recomendaciones para Majadahonda

Para viviendas en Majadahonda, especialmente chalets y bajos, recomendamos puertas acorazadas de grado 3 o superior.

Ofrecen protección contra intentos de robo durante más de 10 minutos, tiempo suficiente para que actúe la alarma o llegue seguridad.

## Asesoramiento profesional

En Cerrajería Aguado asesoramos sobre la mejor opción según tu vivienda y presupuesto. Trabajamos con fabricantes certificados. Instalación profesional con garantía.

## Estética y seguridad

Las puertas acorazadas modernas también son estéticamente atractivas, con acabados en madera y diversos diseños. Inversión en seguridad y tranquilidad.

Visita a domicilio gratuita en Majadahonda. Presupuesto sin compromiso.`
  },
  "perder-llaves-casa-que-hacer": {
    title: "Qué Hacer si Pierdes las Llaves de Casa en Majadahonda",
    date: "2025-09-28",
    category: "Emergencias",
    image: "/images/blog-emergencia-cerrajero.webp",
    content: `Perder las llaves es una situación estresante pero tiene solución. Sigue esta guía de actuación.

## Paso 1: Mantén la calma

El estrés no ayuda. Respira y piensa con claridad. ¿Tienes copia en casa de familiares? Si es así, problema resuelto.

## Paso 2: Llama a profesionales

Si no tienes copia disponible, llama a Cerrajería Aguado: ${APP_PHONE_DISPLAY}. Abrimos tu puerta sin romper la cerradura en 20-30 minutos.

## Paso 3: Considera la seguridad

Importante: tras perder las llaves, recomendamos cambiar el bombín por seguridad, ya que alguien podría encontrarlas y saber tu dirección (si llevas algún identificador).

## Servicio completo

Ofrecemos servicio completo: apertura + cambio de bombín en una sola visita. Precio transparente desde el primer momento.

## Disponibilidad total

Servicio disponible 24/7 en todo Majadahonda. Nuestros profesionales llevan bombines de seguridad en el vehículo para solución inmediata.

## No dejes tu seguridad al azar

Después de perder llaves, actúa rápido. Atención inmediata y profesional garantizada. Confía en expertos locales con años de experiencia.`
  },
  "cerraduras-locales-comerciales": {
    title: "Cerraduras para Locales Comerciales en Majadahonda",
    date: "2025-09-25",
    category: "Comercial",
    image: "/images/blog-seguridad-hogar.webp",
    content: `Los locales comerciales en Majadahonda requieren sistemas de seguridad específicos. La protección de tu negocio es fundamental.

## Sistemas de seguridad comercial

Cerraduras de alta resistencia, cierres multipunto, rejas y persianas motorizadas. En Cerrajería Aguado somos especialistas en seguridad comercial.

## Experiencia en Majadahonda

Trabajamos con negocios en:
- Centro comercial de Majadahonda
- Polígonos industriales
- Locales en el casco urbano
- Zonas comerciales

## Servicios para comercios

Ofrecemos:
- Instalación de cerraduras de seguridad grado 4 y 5
- Sistemas de cierre centralizado
- Control de accesos para empleados
- Cerraduras para cajas fuertes

## Servicio de urgencias

Servicio de urgencias 24/7 para comercios. Si sufres un robo o intento, respuesta inmediata para asegurar el local.

## Presupuestos especiales

Presupuestos especiales para empresas. Mantenimiento preventivo con contrato anual. Protege tu negocio con profesionales certificados.

Asesoramiento sobre seguros y certificaciones de seguridad.`
  },
  "consejos-seguridad-vacaciones": {
    title: "Consejos de Seguridad para Vacaciones en Majadahonda",
    date: "2025-09-22",
    category: "Seguridad",
    image: "/images/servicio-cerraduras.webp",
    content: `Antes de irte de vacaciones, asegura tu vivienda en Majadahonda. Sigue estos consejos prácticos.

## Consejos básicos de seguridad

1. **Instala cerraduras de seguridad** en todas las puertas
2. **Refuerza ventanas accesibles**, especialmente en bajos y primeros pisos
3. **No publiques en redes sociales** que estás fuera
4. **Deja luces programadas** para simular presencia
5. **Pide a vecinos** que recojan el correo

## Servicio pre-vacacional

En Cerrajería Aguado ofrecemos revisión de seguridad pre-vacacional. Verificamos el estado de cerraduras, bombines y puntos de acceso.

## Instalación rápida

Instalamos cerraduras adicionales o refuerzos si es necesario. Servicio rápido para que te vayas tranquilo.

## Época de mayor riesgo

Las vacaciones de verano son época de mayor actividad para ladrones en urbanizaciones. No dejes tu hogar vulnerable.

## Inversión mínima

Inversión mínima en seguridad te ahorra disgustos mayores. Atendemos en todo Majadahonda.

Cita previa o urgencias en el ${APP_PHONE_DISPLAY}. Profesionales de confianza con años de experiencia en la zona.

Disfruta tus vacaciones con total tranquilidad.`
  },
  "amaestramiento-cerraduras-llave-maestra": {
    title: "Amaestramiento de Cerraduras: Una Llave para Todo",
    date: "2025-09-20",
    category: "Tecnología",
    image: "/images/blog-llaves-bombin.webp",
    content: `El amaestramiento es un sistema que permite abrir múltiples cerraduras con una llave maestra, mientras cada cerradura tiene su propia llave individual.

## ¿Para qué sirve?

Ideal para:
- Comunidades de vecinos
- Oficinas con múltiples despachos
- Viviendas con múltiples accesos
- Hoteles y residencias

## Ventajas del sistema

En Majadahonda, muchas comunidades ya utilizan este sistema:

- El presidente o administrador tiene acceso a zonas comunes
- Cada vecino solo abre su espacio
- Se puede revocar acceso sin cambiar todo el sistema
- Mayor control y seguridad

## Diseño personalizado

En Cerrajería Aguado diseñamos sistemas de amaestramiento personalizados. Estudiamos tu caso y proponemos la mejor solución.

## Instalación profesional

Instalación profesional con planificación previa. Compatible con cerraduras de alta seguridad. Perfecto para empresas con diferentes niveles de acceso.

## Asesoramiento incluido

Asesoramiento técnico incluido. Presupuesto detallado sin compromiso. Servicio en Majadahonda y alrededores.`
  },
  "cerraduras-antipalanca-proteccion": {
    title: "Cerraduras Antipalanca: Protección Contra el Método Más Común",
    date: "2025-09-18",
    category: "Seguridad",
    image: "/images/servicio-cerraduras.webp",
    content: `El 60% de los robos en viviendas se realizan con palanca o destornillador, forzando la puerta. Las cerraduras antipalanca tienen refuerzos que impiden esta técnica.

## ¿Qué es la técnica de palanca?

Los ladrones introducen una palanca o destornillador entre la puerta y el marco, forzando la apertura. Es rápido, silencioso y efectivo contra cerraduras convencionales.

## Protección antipalanca

Especialmente recomendadas para:
- Puertas de entrada en chalets
- Bajos de Majadahonda
- Viviendas unifamiliares
- Zonas con acceso directo desde la calle

## Características técnicas

En Cerrajería Aguado instalamos cerraduras con protección antipalanca certificada. Estas cerraduras incluyen:

- Escudos protectores reforzados
- Bulones antitaladro
- Sistemas de anclaje reforzado
- Certificación europea

## Instalación sencilla

La instalación es rápida y no requiere cambiar la puerta completa. Mejora significativa de seguridad con inversión moderada.

## Marcas certificadas

Trabajamos con marcas certificadas por asociaciones de seguridad europeas. Garantía de 5 años en instalación y materiales.

Asesoramiento gratuito sobre el nivel de seguridad de tu puerta actual. Servicio en todo Majadahonda. Disponibilidad inmediata.

Protege tu hogar con tecnología probada.`
  },
  "emergencias-cerrajeria-que-hacer": {
    title: "Emergencias de Cerrajería: Qué Hacer y A Quién Llamar",
    date: "2025-09-15",
    category: "Emergencias",
    image: "/images/blog-seguridad-hogar.webp",
    content: `Una emergencia de cerrajería puede ocurrir en cualquier momento: puerta cerrada con llave dentro, cerradura rota, robo, llave partida. En estos casos, mantén la calma y llama a profesionales certificados.

## Servicio de urgencias 24/7

En Cerrajería Aguado ofrecemos servicio de urgencias 24/7 en Majadahonda. Llegamos en 20-30 minutos con todas las herramientas necesarias.

## Cómo identificar profesionales

Importante: desconfía de servicios con precios demasiado bajos o sin identificación clara.

Un cerrajero profesional debe:
1. Identificarse correctamente
2. Dar presupuesto antes de trabajar
3. Usar técnicas no destructivas cuando sea posible
4. Entregar factura con garantía

## Nuestro compromiso

- Transparencia total
- Precio cerrado desde el inicio
- Profesionales certificados
- Solución rápida y eficaz

## Tipos de emergencias

Atendemos todo tipo de emergencias:
- Viviendas
- Locales comerciales
- Vehículos
- Cajas fuertes

Disponibles festivos y madrugadas. Contacto inmediato: ${APP_PHONE_DISPLAY}.

Tu cerrajero de confianza en Majadahonda.`
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
              Estamos disponibles 24/7 en Majadahonda. Llegamos en 20-30 minutos.
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

