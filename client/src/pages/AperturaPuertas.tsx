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
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
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

  const faqItems = [
    {
      question: "¿Cuánto tardáis en llegar a mi ubicación en Chamartín?",
      answer: `Nuestro tiempo medio de respuesta para aperturas urgentes en barrios como El Viso, Prosperidad o Ciudad Jardín es de 20 a 30 minutos. Estamos distribuidos estratégicamente para llegar lo antes posible.`
    },
    {
      question: "¿Se romperá la cerradura o la puerta al abrir?",
      answer: "En el 95% de los casos realizamos una apertura limpia sin causar ningún daño a la puerta ni a la cerradura actual, utilizando técnicas de ganzuado o herramientas de precisión profesionales."
    },
    {
      question: "¿Quanto cuesta abrir una puerta de urgencia?",
      answer: "Nuestras tarifas son transparentes: 90€ en horario comercial (L-V 08:00 a 19:00) y 120€ en horario de urgencia. Siempre te damos el precio cerrado por teléfono antes de ir."
    },
    {
      question: "¿Abrís puertas acorazadas o de alta seguridad?",
      answer: "Sí, somos especialistas en la apertura de todo tipo de puertas, incluyendo acorazadas, blindadas y cierres metálicos de locales comerciales, trabajando con marcas como Fichet, Mottura o Tesa."
    }
  ];

  const situations = [
    {
      icon: <AlertCircle className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Puerta cerrada sin llave",
      description: "Has salido y la puerta se ha cerrado sola sin las llaves",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Llave rota en cerradura",
      description: "La llave se ha partido dentro del bombín",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Cerradura atascada",
      description: "La cerradura no gira o está bloqueada",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Pérdida de llaves",
      description: "Has perdido o te han robado las llaves",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Apertura de Puertas Chamartín 🔓 Sin Daños | YOTEABRO 24h ⭐ 5.0`}
        description={`🔑 ¿Llaves dentro? Abrimos tu puerta en Chamartín en 20-30 min. Sin romper, sin daños y con precio cerrado desde 90€. 📞 Llama ahora y recupera el acceso.`}
        canonicalUrl="https://cerrajerosenchamartin.madrid/apertura-puertas"
      />
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-[#EE6C4D]">
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
              alt="Servicio apertura de puertas urgente Chamartín Madrid - Cerrajero 24h"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔓 ¿Te has dejado las llaves en casa? Abrimos puertas en todo Chamartín desde 90€
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Apertura de puertas sin daños, rápido y barato. Llegamos en menos de 20-30 minutos a cualquier barrio de Chamartín, las 24 horas del día.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#EE6C4D] hover:bg-[#d62828] text-white text-lg px-8 py-6"
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
                <Link href="/cambio-cerraduras" className="text-[#EE6C4D] underline hover:text-[#d62828]">
                  cambio de cerraduras
                </Link>{" "}
                y{" "}
                <Link href="/cambio-bombin" className="text-[#EE6C4D] underline hover:text-[#d62828]">
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
                    src="/yoteabro_technician_working.png"
                    alt={`Cerrajero ${APP_BUSINESS_NAME} llegando en furgoneta a Chamartín`}
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
                  <div className="bg-[#EE6C4D] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-3">Llámanos</h3>
                  <p className="text-gray-600">
                    Contacta con nosotros por teléfono o WhatsApp. Te atendemos
                    inmediatamente.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#EE6C4D] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
                  <Clock className="h-12 w-12 text-[#EE6C4D] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Horario Normal</h3>
                  <p className="text-gray-600 mb-4">
                    Lunes a Viernes
                    <br />
                    08:00h - 19:00h
                  </p>
                  <div className="text-4xl font-bold text-[#EE6C4D] mb-2">
                    90€
                  </div>
                  <p className="text-sm text-gray-500">
                    Sin cobro por desplazamiento
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-[#EE6C4D] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Fuera de Horario</h3>
                  <p className="text-gray-600 mb-4">
                    Noches, fines de semana
                    <br />y festivos
                  </p>
                  <div className="text-4xl font-bold text-[#EE6C4D] mb-2">
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

        {/* Marcas */}
        <BrandsSection />

        {/* FAQ Personalizada */}
        <FAQSection items={faqItems} title="Dudas sobre Apertura de Puertas" />

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Apertura de Puertas" />

        {/* CTA Final - Rebel & Zen */}
        <section className="relative py-16 bg-[#EE6C4D] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.1]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
          </div>
          <div className="container relative z-10">
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
                className="bg-white text-[#EE6C4D] hover:bg-gray-100 text-lg px-8 py-6"
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
    </div>
  );
}

