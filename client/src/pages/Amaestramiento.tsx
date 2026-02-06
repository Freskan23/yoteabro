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
  Key,
  Building,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function Amaestramiento() {
  const benefits = [
    "✅ Una sola llave para múltiples puertas",
    "✅ Control total de accesos",
    "✅ Máxima seguridad y comodidad",
    "✅ Ideal para comunidades y empresas",
    "✅ Sistema personalizado a medida",
    "✅ Instalación profesional garantizada",
  ];

  const faqItems = [
    {
      question: "¿Qué es exactamente un sistema de amaestramiento?",
      answer: "Es un sistema donde cada cerradura tiene su propia llave, pero existe una 'llave maestra' capaz de abrirlas todas. Es ideal para presidentes de comunidad o dueños de empresas que no quieren cargar con manojos pesados de llaves."
    },
    {
      question: "¿Es seguro tener una llave que lo abre todo?",
      answer: "Sí, siempre que se utilicen marcas de alta seguridad como Tesa o Mul-T-Lock con llaves incopiables. El sistema se diseña bajo un plan de cierre estricto y solo el propietario autorizado puede solicitar copias."
    },
    {
      question: "¿Se puede amaestrar cualquier cerradura existente?",
      answer: "Normalmente es necesario que los bombines sean de la misma marca y modelo (o compatibles). En muchos casos, recomendamos instalar un conjunto nuevo de bombines amaestrados de fábrica para garantizar la durabilidad."
    },
    {
      question: "¿Cuánto tarda en diseñarse e instalarse el sistema?",
      answer: "Para una comunidad pequeña o un chalet, el proceso de diseño y entrega suele tardar entre 3 y 7 días hábiles, dependiendo de la complejidad del plan de cierre solicitado."
    }
  ];

  const applications = [
    {
      icon: <Building className="h-8 w-8 text-[#A52A2A]" />,
      title: "Comunidades de vecinos",
      description:
        "Llave maestra para administradores y llaves individuales para cada vecino",
    },
    {
      icon: <Building className="h-8 w-8 text-[#A52A2A]" />,
      title: "Empresas y oficinas",
      description:
        "Control jerárquico de accesos según departamentos y niveles",
    },
    {
      icon: <Building className="h-8 w-8 text-[#A52A2A]" />,
      title: "Hoteles y hostales",
      description:
        "Sistema maestro para personal y llaves individuales para habitaciones",
    },
    {
      icon: <Users className="h-8 w-8 text-[#A52A2A]" />,
      title: "Propietarios múltiples",
      description:
        "Una llave para todas tus propiedades de alquiler o inversión",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Amaestramiento de Llaves Chamartín 🔑 Una Llave para Todo | YOTEABRO`}
        description={`🏢 Comodidad total para comunidades y oficinas en Chamartín. Diseñamos sistemas de llave maestra a medida. Simplifica tu vida y gana en seguridad.`}
        canonicalUrl="https://cerrajerosenchamartin.madrid/amaestramiento"
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
              <span className="text-gray-900 font-medium">Amaestramiento</span>
            </nav>
          </div>
        </section>

        {/* Hero Amaestramiento - Rebel & Zen */}
        <section className="relative bg-[#3D5A80] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            {/* Zen Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
            </div>
            {/* Rebel Element */}
            <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-white italic opacity-[0.03] rotate-[-15deg] leading-none">
              CONTROL
            </div>
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔑 Una sola llave para todo: Amaestramiento en Chamartín
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Diseñamos planes de cierre personalizados para comunidades de vecinos, locales comerciales y oficinas en barrios como <strong>El Viso</strong>, <strong>Prosperidad</strong> o <strong>Castilla</strong>. Olvídate de los manojos de llaves pesados.
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
                El servicio de{" "}
                <strong>amaestramiento o igualamiento en {APP_LOCATION}</strong>{" "}
                consiste en diseñar un sistema de llaves que permite abrir
                varias cerraduras con una sola llave maestra o llave igualada. Es
                una solución perfecta para viviendas con múltiples accesos,
                comunidades de vecinos, empresas, oficinas o propietarios de
                varios inmuebles, ya que ofrece{" "}
                <strong>comodidad sin renunciar a la seguridad</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En <strong>{APP_BUSINESS_NAME}</strong> creamos sistemas de
                amaestramiento personalizados, que pueden incluir diferentes
                niveles de acceso según la jerarquía (por ejemplo, un
                administrador puede acceder a todas las puertas, mientras que los
                vecinos solo acceden a la suya y a zonas comunes). También
                ofrecemos <strong>igualamiento de bombines</strong>, que permite
                usar una sola llave para abrir varias puertas de tu propiedad.
                Si necesitas actualizar tus cerraduras antes del amaestramiento, realizamos{" "}
                <Link href="/cambio-cerraduras" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  cambio de cerraduras
                </Link>{" "}
                y{" "}
                <Link href="/cambio-bombin" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  cambio de bombines
                </Link>
                .
                Este tipo de soluciones no solo mejora la gestión de llaves, sino
                que también <strong>refuerza la organización y la seguridad</strong>{" "}
                en edificios con múltiples accesos.
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ventajas del amaestramiento
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

        {/* Aplicaciones */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Dónde se aplica el amaestramiento?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{app.icon}</div>
                    <h3 className="text-lg font-bold mb-3">{app.title}</h3>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tipos */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tipos de sistemas de amaestramiento
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <Key className="h-12 w-12 text-[#A52A2A] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Igualamiento</h3>
                  <p className="text-gray-700 mb-4">
                    Sistema donde <strong>una sola llave</strong> abre todas las
                    cerraduras del conjunto. Ideal para viviendas con varias
                    puertas o propietarios con múltiples inmuebles.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✔ Máxima simplicidad</li>
                    <li>✔ Una llave para todo</li>
                    <li>✔ Perfecto para uso personal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <Key className="h-12 w-12 text-[#A52A2A] mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Amaestramiento jerárquico
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Sistema con <strong>diferentes niveles de acceso</strong>:
                    🏢 Simplifica el acceso a tu comunidad o empresa en Chamartín
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✔ Control total de accesos</li>
                    <li>✔ Múltiples niveles jerárquicos</li>
                    <li>✔ Máxima seguridad y organización</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Cómo funciona el proceso?
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
                  <h3 className="text-xl font-bold mb-3">Análisis</h3>
                  <p className="text-gray-600">
                    Estudiamos tus necesidades y el número de accesos a
                    controlar.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-3">Diseño</h3>
                  <p className="text-gray-600">
                    Creamos un sistema personalizado con los niveles de acceso
                    necesarios.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-[#A52A2A] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instalación</h3>
                  <p className="text-gray-600">
                    Instalamos los bombines y te entregamos las llaves
                    correspondientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ejemplo práctico */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ejemplo práctico: Comunidad de vecinos
              </h2>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#A52A2A] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Llave Maestra General</h4>
                    <p className="text-gray-600">
                      El administrador tiene acceso a todas las puertas: portal,
                      viviendas, trasteros, garaje y zonas comunes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#A52A2A] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Llaves de vecinos</h4>
                    <p className="text-gray-600">
                      Cada vecino accede solo a su vivienda, su trastero, el
                      portal y zonas comunes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#A52A2A] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Llave de mantenimiento</h4>
                    <p className="text-gray-600">
                      El personal de limpieza y mantenimiento accede solo a zonas
                      comunes y cuartos técnicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas */}
        <BrandsSection />

        {/* FAQ Personalizada */}
        <FAQSection items={faqItems} title="Dudas frecuentes sobre Amaestramiento" />

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Amaestramiento" />

        {/* CTA Final - Rebel & Zen */}
        <section className="relative py-16 bg-[#A52A2A] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.1]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Necesitas un sistema de amaestramiento?
              </h2>
              <p className="text-xl mb-8">
                Contacta con nosotros y diseñamos un sistema a tu medida
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

