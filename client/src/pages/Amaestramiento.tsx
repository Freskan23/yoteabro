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

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="/cilindro-seguridad.jpg"
              alt="Sistema de amaestramiento profesional"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔑 Amaestramiento de Cerraduras en {APP_LOCATION}
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Sistema de llaves maestras para comunidades, empresas y
                propietarios. Una sola llave para múltiples accesos sin
                renunciar a la seguridad.
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
                    <li>✓ Máxima simplicidad</li>
                    <li>✓ Una llave para todo</li>
                    <li>✓ Perfecto para uso personal</li>
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
                    llave maestra para administradores y llaves individuales para
                    usuarios. Ideal para comunidades y empresas.
                  </p>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>✓ Control total de accesos</li>
                    <li>✓ Múltiples niveles jerárquicos</li>
                    <li>✓ Máxima seguridad y organización</li>
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

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Amaestramiento" />

        {/* CTA Final */}
        <section className="py-16 bg-[#A52A2A] text-white">
          <div className="container">
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

