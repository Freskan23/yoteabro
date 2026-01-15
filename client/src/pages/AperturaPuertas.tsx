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
  Clock,
  Shield,
  CheckCircle,
  Home as HomeIcon,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

export default function AperturaPuertas() {
  const benefits = [
    "✅ Apertura sin daños en la cerradura",
    "✅ Llegamos en menos de 30 minutos",
    "✅ Disponible 24 horas, 365 días",
    "✅ Precio cerrado desde 90€",
    "✅ Técnicos profesionales certificados",
    "✅ Sin cobro por desplazamiento",
  ];

  const situations = [
    {
      icon: <AlertCircle className="h-8 w-8 text-[#A52A2A]" />,
      title: "Puerta cerrada sin llave",
      description: "Has salido y la puerta se ha cerrado sola sin las llaves",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#A52A2A]" />,
      title: "Llave rota en cerradura",
      description: "La llave se ha partido dentro del bombín",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#A52A2A]" />,
      title: "Cerradura atascada",
      description: "La cerradura no gira o está bloqueada",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#A52A2A]" />,
      title: "Pérdida de llaves",
      description: "Has perdido o te han robado las llaves",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Apertura de Puertas en ${APP_LOCATION} 24h | ${APP_BUSINESS_NAME}`}
        description={`🔓 Apertura de puertas urgente en ${APP_LOCATION}. Llegamos en 20-30 min. Servicio profesional sin daños las 24 horas. Precios desde 90€ cerrados por teléfono.`}
        canonicalUrl="https://cerrajerosdeleganes.madrid/apertura-puertas"
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
                Apertura de Puertas
              </span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/apertura-puerta.jpg"
              alt="Apertura de puertas profesional en Leganés"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔓 ¿Te has dejado las llaves en casa? Abrimos puertas en todo Leganés desde 90€
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Apertura de puertas sin daños, rápido y barato. Llegamos en menos de 20-30 minutos a cualquier barrio de Leganés, las 24 horas del día.
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
                En <strong>{APP_BUSINESS_NAME}</strong> somos especialistas en{" "}
                <strong>apertura de puertas en {APP_LOCATION}</strong>, ya sean
                de viviendas, oficinas, locales comerciales o trasteros. Si te
                has quedado fuera de casa por pérdida de llaves, cerradura
                bloqueada o puerta atrancada, resolvemos el problema{" "}
                <strong>sin causar daños</strong> a la cerradura ni a la puerta.
                Si además necesitas mejorar la seguridad, también realizamos{" "}
                <Link href="/cambio-cerraduras" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  cambio de cerraduras
                </Link>{" "}
                y{" "}
                <Link href="/cambio-bombin" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  cambio de bombines
                </Link>
                .
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Utilizamos herramientas profesionales y técnicas no invasivas
                siempre que sea posible. Nuestro servicio de apertura de puertas
                está disponible <strong>las 24 horas del día desde 90€</strong>,
                con llegada en menos de 30 minutos a cualquier punto de{" "}
                {APP_LOCATION}.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegir nuestro servicio de apertura de puertas?
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
                ¿En qué situaciones necesitas apertura de puertas?
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
                ¿Cómo funciona nuestro servicio de apertura?
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
                  <h3 className="text-xl font-bold mb-3">Llámanos</h3>
                  <p className="text-gray-600">
                    Contacta con nosotros por teléfono o WhatsApp. Te atendemos
                    inmediatamente.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Llegamos rápido</h3>
                  <p className="text-gray-600">
                    Nuestro cerrajero se desplaza a tu ubicación en menos de 30
                    minutos.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Abrimos sin daños</h3>
                  <p className="text-gray-600">
                    Abrimos tu puerta de forma profesional, sin romper la
                    cerradura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Precios transparentes de apertura de puertas
              </h2>
              <p className="text-lg text-gray-600">
                Sin sorpresas ni costes ocultos
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-[#A52A2A] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Horario Normal</h3>
                  <p className="text-gray-600 mb-4">
                    Lunes a Viernes
                    <br />
                    08:00h - 19:00h
                  </p>
                  <div className="text-4xl font-bold text-[#A52A2A] mb-2">
                    90€
                  </div>
                  <p className="text-sm text-gray-500">
                    Sin cobro por desplazamiento
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-[#A52A2A] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Fuera de Horario</h3>
                  <p className="text-gray-600 mb-4">
                    Noches, fines de semana
                    <br />y festivos
                  </p>
                  <div className="text-4xl font-bold text-[#A52A2A] mb-2">
                    120€
                  </div>
                  <p className="text-sm text-gray-500">
                    Sin cobro por desplazamiento
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Apertura de Puertas" />

        {/* CTA Final */}
        <section className="py-16 bg-[#A52A2A] text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Necesitas abrir tu puerta urgentemente?
              </h2>
              <p className="text-xl mb-8">
                Llámanos ahora y llegamos en menos de 30 minutos
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

