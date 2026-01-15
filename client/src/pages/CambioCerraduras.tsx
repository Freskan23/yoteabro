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

  const types = [
    {
      icon: <HomeIcon className="h-8 w-8 text-[#A52A2A]" />,
      title: "Viviendas particulares",
      description: "Cerraduras para puertas de entrada, blindadas y acorazadas",
    },
    {
      icon: <Building className="h-8 w-8 text-[#A52A2A]" />,
      title: "Oficinas",
      description: "Sistemas de seguridad para espacios corporativos",
    },
    {
      icon: <Store className="h-8 w-8 text-[#A52A2A]" />,
      title: "Locales comerciales",
      description: "Cerraduras reforzadas para negocios y comercios",
    },
    {
      icon: <Lock className="h-8 w-8 text-[#A52A2A]" />,
      title: "Comunidades",
      description: "Sistemas de acceso para portales y zonas comunes",
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
              src="/instalacion-cerradura.jpg"
              alt="Instalación de cerradura profesional"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🔧 Cambio de Cerraduras en {APP_LOCATION} 24h
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Instalación y sustitución de cerraduras de alta seguridad.
                Trabajamos con las mejores marcas del mercado y ofrecemos
                garantía en todos nuestros trabajos.
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
                <Link href="/cambio-bombin" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  cambio de bombín
                </Link>{" "}
                como solución más económica. La instalación se realiza de forma{" "}
                <strong>rápida, limpia y sin obras</strong>, con total garantía
                y siempre con la máxima discreción. Para comunidades o empresas,
                disponemos de{" "}
                <Link href="/amaestramiento" className="text-[#A52A2A] underline hover:text-[#8B2323]">
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

        {/* Servicios Relacionados */}
        <RelatedServices currentService="Cambio de Cerraduras" />

        {/* CTA Final */}
        <section className="py-16 bg-[#A52A2A] text-white">
          <div className="container">
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

