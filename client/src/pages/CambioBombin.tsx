import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  APP_BUSINESS_NAME,
  APP_LOCATION,
  APP_PHONE,
  APP_PHONE_DISPLAY,
} from "@/const";
import {
  Phone,
  Shield,
  Key,
  Clock,
  Euro,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function CambioBombin() {
  const benefits = [
    "✅ Cambio rápido en 15-20 minutos",
    "✅ Bombines de máxima seguridad",
    "✅ Llaves incopiables con patente",
    "✅ Tecnología antibumping",
    "✅ Garantía en todos los bombines",
    "✅ Servicio 24h para urgencias",
  ];

  const faqItems = [
    {
      question: "¿Qué es el bumping y cómo me protege un bombín nuevo?",
      answer: "El bumping es una técnica para abrir cerraduras sin forzarlas. Nuestros bombines de alta seguridad (marcas como Tesa o Mauer) tienen pines internos especiales que bloquean este ataque, haciendo tu puerta prácticamente inexpugnable."
    },
    {
      question: "¿Puedo tener la misma llave para todas las cerraduras?",
      answer: "Sí, mediante el proceso de igualamiento o amaestramiento, podemos configurar varios bombines nuevos para que funcionen con una única llave maestra, ganando en comodidad sin perder seguridad."
    },
    {
      question: "¿Qué significa que la llave sea incopiable?",
      answer: "Significa que las llaves vienen con una tarjeta de propiedad única. Solo el dueño de esa tarjeta puede solicitar copias en centros autorizados, evitando que personas no autorizadas dupliquen tu llave."
    },
    {
      question: "¿Instaláis bombines en cualquier barrio de Leganés?",
      answer: "Sí, realizamos instalaciones en todos los barrios: desde Arroyo Culebro hasta La Fortuna, San Nicasio y el Centro de Leganés. Llegamos rápido para que no tengas que esperar."
    }
  ];

  const situations = [
    {
      icon: <Key className="h-8 w-8 text-[#A52A2A]" />,
      title: "Mudanza o alquiler",
      description: "Cambia el bombín tras una mudanza para mayor seguridad",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#A52A2A]" />,
      title: "Pérdida de llaves",
      description: "Solución rápida y económica si has perdido tus llaves",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#A52A2A]" />,
      title: "Intento de robo",
      description: "Refuerza tu seguridad tras un intento de intrusión",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#A52A2A]" />,
      title: "Mejora de seguridad",
      description: "Actualiza a un bombín de alta seguridad",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Cambio de Bombín en ${APP_LOCATION} 24h | ${APP_BUSINESS_NAME}`}
        description={`🔑 Cambio de bombín de seguridad en ${APP_LOCATION}. Instalación de bombines antibumping, antiganzúa y antitaladro en 20 min. Máxima protección para tu hogar o negocio.`}
        canonicalUrl="https://cerrajerosdeleganes.madrid/cambio-bombin"
      />
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-[#A52A2A]">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">
                Cambio de Bombín
              </span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/cambio-bombin.jpg"
              alt="Instalación de bombín antibumping en Leganés"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔑 Protege tu hogar contra el bumping en Leganés
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Instalamos bombines antirrobo e incopiables en el acto. La forma más rápida y económica de subir el nivel de seguridad de tu puerta. ¡Duerme tranquilo hoy mismo!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#A52A2A] hover:bg-[#8B2323] text-white text-lg px-8 py-6"
              >
                <a href={`tel:${APP_PHONE}`}>
                  <Phone className="mr-2 h-6 w-6" />
                  Llamar ahora: {APP_PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El <strong>cambio de bombín en {APP_LOCATION}</strong> es una
                medida sencilla pero muy eficaz para reforzar la seguridad de tu
                hogar, especialmente tras un cambio de llaves, una mudanza, un
                alquiler nuevo o si has sufrido un intento de robo. En{" "}
                {APP_BUSINESS_NAME} realizamos el cambio de bombines de forma
                profesional y rápida, ofreciéndote modelos que se adaptan a
                cualquier tipo de cerradura.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Contamos con bombines de seguridad que incorporan tecnologías{" "}
                <strong>
                  antibumping, antiganzúa, antitaladro y sistemas de llave
                  incopiable
                </strong>
                , ideales para proteger tu hogar frente a métodos de apertura
                utilizados por ladrones. Si necesitas mayor protección, también realizamos{" "}
                <Link href="/cambio-cerraduras" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  cambio completo de cerraduras
                </Link>
                . También instalamos bombines de perfil
                europeo, sistemas con doble embrague o llaves con control de
                copia restringido para mayor tranquilidad. Para edificios o negocios,
                ofrecemos{" "}
                <Link href="/amaestramiento" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  sistemas de amaestramiento
                </Link>
                . El cambio se realiza
                en <strong>15-20 minutos</strong> sin necesidad de cambiar toda
                la cerradura.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ventajas del cambio de bombín
              </h2>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm text-lg"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Situaciones */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Cuándo necesitas cambiar el bombín?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {situations.map((situation, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {situation.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">
                      {situation.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {situation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proceso de cambio de bombín
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Imágenes del proceso */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div className="rounded-xl overflow-hidden h-64">
                  <img
                    src="/proceso-llegada.webp"
                    alt="Cerrajero Aguado llegando en furgoneta a Leganés"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-64">
                  <img
                    src="/proceso-herramientas.webp"
                    alt="Herramientas profesionales de cerrajería"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Medición</h3>
                  <p className="text-gray-600">
                    Medimos tu bombín actual para asegurar la compatibilidad con
                    el nuevo.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Selección</h3>
                  <p className="text-gray-600">
                    Te asesoramos sobre el nivel de seguridad más adecuado para
                    tu puerta.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instalación</h3>
                  <p className="text-gray-600">
                    Cambiamos el bombín en 15-20 minutos y te entregamos las
                    llaves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de bombines */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tipos de bombines de seguridad
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-[#A52A2A] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Seguridad básica</h3>
                  <p className="text-gray-600 mb-4">
                    Bombín estándar con protección básica, ideal para puertas
                    interiores o zonas de bajo riesgo.
                  </p>
                  <p className="text-2xl font-bold text-[#A52A2A]">Desde 40€</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#A52A2A]">
                <CardContent className="p-8 text-center">
                  <div className="bg-[#A52A2A] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MÁS POPULAR
                  </div>
                  <Shield className="h-12 w-12 text-[#A52A2A] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Seguridad media</h3>
                  <p className="text-gray-600 mb-4">
                    Bombín antibumping y antiganzúa, recomendado para viviendas
                    y oficinas.
                  </p>
                  <p className="text-2xl font-bold text-[#A52A2A]">Desde 70€</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-[#A52A2A] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Alta seguridad</h3>
                  <p className="text-gray-600 mb-4">
                    Bombín de máxima protección con llaves incopiables y
                    certificación europea.
                  </p>
                  <p className="text-2xl font-bold text-[#A52A2A]">
                    Desde 120€
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Marcas */}
        <BrandsSection />

        {/* FAQ Personalizada */}
        <FAQSection items={faqItems} title="Preguntas sobre Cambio de Bombín de Seguridad" />

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Cambio de Bombín" />

        {/* CTA Final */}
        <section className="py-16 bg-[#A52A2A] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Necesitas cambiar tu bombín?
              </h2>
              <p className="text-xl mb-8">
                Servicio rápido en 15-20 minutos. Llámanos y te asesoramos
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-[#A52A2A] hover:bg-gray-100 text-lg px-8 py-6"
              >
                <a href={`tel:${APP_PHONE}`}>
                  <Phone className="mr-2 h-6 w-6" />
                  {APP_PHONE_DISPLAY} - Disponible 24/7
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Botón flotante WhatsApp */}
      <a
        href={`https://wa.me/${APP_PHONE.replace(/\s/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}

