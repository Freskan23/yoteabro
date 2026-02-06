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
  CheckCircle,
  Lock,
  Home as HomeIcon,
  Building,
  Store,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function CambioCerraduras() {
  const benefits = [
    "✅ Cerraduras de alta seguridad",
    "✅ Marcas líderes del mercado",
    "✅ Instalación rápida y limpia",
    "✅ Garantía en todos los trabajos",
    "✅ Asesoramiento personalizado",
    "✅ Disponible 24/7 para urgencias",
  ];

  const faqItems = [
    {
      question: "¿Cuándo es recomendable cambiar una cerradura?",
      answer: "Es vital cambiarla si has perdido las llaves, si acabas de mudarte a una nueva vivienda, si la cerradura tiene más de 10 años (por obsolescencia de seguridad) o si ha sido forzada o intentado manipular."
    },
    {
      question: "¿Qué marcas de cerraduras recomendáis para Chamartín?",
      answer: "Recomendamos marcas de primera línea como Tesa, Mottura, Ezcurra o FAC. Estas marcas ofrecen los más altos estándares de protección contra el robo técnico y fuerza bruta."
    },
    {
      question: "¿Puedo cambiar solo el bombín o necesito cambiar toda la cerradura?",
      answer: "Si la estructura de la cerradura está en buen estado, cambiar solo el bombín (cilindro) suele ser suficiente para actualizar la seguridad a sistemas antibumping, siendo una opción más económica y rápida."
    },
    {
      question: "¿Cuánto tiempo se tarda en realizar el cambio?",
      answer: "Un cambio de cerradura estándar suele llevar entre 30 y 60 minutos. Nuestros técnicos llevan todo el material necesario en sus unidades móviles para realizar el trabajo en una sola visita."
    }
  ];

  const types = [
    {
      icon: <HomeIcon className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Viviendas particulares",
      description: "Cerraduras para puertas de entrada, blindadas y acorazadas",
    },
    {
      icon: <Building className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Oficinas",
      description: "Sistemas de seguridad para espacios corporativos",
    },
    {
      icon: <Store className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Locales comerciales",
      description: "Cerraduras reforzadas para negocios y comercios",
    },
    {
      icon: <Lock className="h-8 w-8 text-[#EE6C4D]" />,
      title: "Comunidades",
      description: "Sistemas de acceso para portales y zonas comunes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Cambio de Cerraduras Chamartín 🔧 Seguridad | YOTEABRO 24h`}
        description={`🔐 Protege tu hogar hoy. Instalamos cerraduras antibumping en Chamartín con garantía total. Marcas: Mottura, Tesa, Ezcurra. Presupuesto sin compromiso.`}
        canonicalUrl="https://cerrajerosenchamartin.madrid/cambio-cerraduras"
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
                Cambio de Cerraduras
              </span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/yoteabro_technician_working.png"
              alt="Cambio cerradura de seguridad Chamartín Madrid - Cerrajeros profesionales"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔧 Cambiamos tu cerradura antigua por una de alta seguridad en Chamartín
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Instalación de cerraduras antibumping y de alta seguridad. La solución ideal para proteger los pisos de barrios como <strong>El Viso</strong>, <strong>Prosperidad</strong> o <strong>Nueva España</strong>. No esperes a un robo para actualizar tu seguridad.
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
                En <strong>{APP_BUSINESS_NAME}</strong> somos especialistas en
                la <strong>instalación y cambio de cerraduras en {APP_LOCATION}</strong>{" "}
                para todo tipo de puertas: desde viviendas particulares hasta
                oficinas, locales comerciales o comunidades de vecinos. Si tu
                cerradura actual está deteriorada, ha sido forzada o quieres
                mejorar el nivel de seguridad, te ofrecemos el mejor servicio
                profesional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trabajamos con las <strong>mejores marcas del mercado</strong>{" "}
                como Mottura, Tesa, Fichet, Mul-T-Lock y muchas más. Nuestro
                equipo te asesora para elegir el mejor modelo según tus
                necesidades: cerraduras básicas, de última generación, con
                llaves incopiables, antibumping, antiganzúa o antitaladro. Si solo necesitas
                actualizar el cilindro, también ofrecemos{" "}
                <Link href="/cambio-bombin" className="text-[#EE6C4D] underline hover:text-[#d62828]">
                  cambio de bombín
                </Link>{" "}
                como solución más económica. La instalación se realiza de forma{" "}
                <strong>rápida, limpia y sin obras</strong>, con total garantía
                y siempre con la máxima discreción. Para comunidades o empresas,
                disponemos de{" "}
                <Link href="/amaestramiento" className="text-[#EE6C4D] underline hover:text-[#d62828]">
                  sistemas de amaestramiento
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué cambiar tu cerradura con nosotros?
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

        {/* Tipos */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cambio de cerraduras para todo tipo de inmuebles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {types.map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{type.icon}</div>
                    <h3 className="text-lg font-bold mb-3">{type.title}</h3>
                    <p className="text-gray-600 text-sm">{type.description}</p>
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
                ¿Cómo funciona el cambio de cerradura?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Imágenes del proceso */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                <div className="rounded-xl overflow-hidden h-64">
                  <img
                    src="/proceso-llegada.webp"
                    alt="Cerrajero YOTEABRO llegando en furgoneta a Chamartín"
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
                  <h3 className="text-xl font-bold mb-3">Evaluación</h3>
                  <p className="text-gray-600">
                    Analizamos tu puerta y necesidades de seguridad para
                    recomendarte la mejor cerradura.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Selección</h3>
                  <p className="text-gray-600">
                    Te asesoramos sobre marcas, modelos y niveles de seguridad
                    según tu presupuesto.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instalación</h3>
                  <p className="text-gray-600">
                    Instalamos la nueva cerradura de forma rápida, limpia y con
                    garantía total.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cerraduras de alta seguridad
              </h2>
              <p className="text-lg text-gray-600">
                Protege tu hogar o negocio con la mejor tecnología
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-[#A52A2A] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Antibumping</h3>
                  <p className="text-gray-600">
                    Protección contra la técnica de bumping, uno de los métodos
                    más utilizados por los ladrones para abrir cerraduras.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-[#A52A2A] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Antiganzúa</h3>
                  <p className="text-gray-600">
                    Sistema que impide la apertura mediante ganzúas,
                    garantizando máxima seguridad contra intrusiones.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-[#A52A2A] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Antitaladro</h3>
                  <p className="text-gray-600">
                    Refuerzo especial que protege el bombín contra intentos de
                    taladrado y rotura.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Shield className="h-12 w-12 text-[#A52A2A] mb-4" />
                  <h3 className="text-xl font-bold mb-3">Llaves incopiables</h3>
                  <p className="text-gray-600">
                    Sistema de llaves con patente que solo pueden duplicarse con
                    autorización del propietario.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Marcas */}
        <BrandsSection />

        {/* FAQ Personalizada */}
        <FAQSection items={faqItems} title="Consultas frecuentes sobre Cambio de Cerraduras" />

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Cambio de Cerraduras" />

        {/* CTA Final - Rebel & Zen */}
        <section className="relative py-16 bg-[#A52A2A] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.1]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Necesitas cambiar tu cerradura?
              </h2>
              <p className="text-xl mb-8">
                Contacta con nosotros y te asesoramos sin compromiso
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
    </div>
  );
}

