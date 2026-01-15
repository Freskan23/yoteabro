import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  APP_BUSINESS_NAME,
  APP_LOCATION,
  APP_PHONE,
  APP_PHONE_DISPLAY,
  APP_ADDRESS,
} from "@/const";
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Star,
  Lock,
  Home as HomeIcon,
  ArrowRight,
  CheckCircle,
  Wrench,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import React, { Suspense, lazy } from "react";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";

const ServicesCarousel = lazy(() => import("@/components/home/ServicesCarousel"));
const LocationSection = lazy(() => import("@/components/home/LocationSection"));
const BrandsSection = lazy(() => import("@/components/BrandsSection"));

// Fallback skeleton or minimalist loader
const SectionLoader = () => <div className="h-60 w-full bg-gray-50 flex items-center justify-center text-gray-300">Cargando...</div>;

export default function Home() {
  const { currentPrice, isNormalHours } = useDynamicPricing();

  const whyChooseUs = [
    {
      icon: <Clock className="h-10 w-10 text-[#FF6B35]" />,
      title: "Atención rápida y eficaz",
      description:
        "Llegamos volando a cualquier punto de Leganés. Desde La Fortuna hasta Arroyo Culebro en menos de 20 minutos.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-[#FF6B35]" />,
      title: "Profesionales con experiencia",
      description:
        "Somos cerrajeros de barrio, de los de toda la vida. Conocemos cada puerta y cada cerradura de nuestra ciudad.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#FF6B35]" />,
      title: "Soluciones hechas a medida",
      description:
        "Ya sea una puerta blindada antigua o una acorazada moderna, tenemos la solución exacta que necesitas.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#FF6B35]" />,
      title: "Transparencia y confianza",
      description:
        "Precio cerrado por teléfono. Sin letra pequeña ni sustos en la factura. Honestidad pepinera 100%.",
    },
  ];

  const zones = [
    { name: "Zarzaquemada", url: "/cerrajeros-zarzaquemada" },
    { name: "San Nicasio", url: "/cerrajeros-san-nicasio" },
    { name: "El Carrascal", url: "/cerrajeros-el-carrascal" },
    { name: "La Fortuna", url: "/cerrajeros-la-fortuna" },
    { name: "Leganés Norte", url: "/cerrajeros-leganes-norte" },
    { name: "Arroyo Culebro", url: "/cerrajeros-arroyo-culebro" },
    { name: "Valdepelayo", url: "/cerrajeros-valdepelayo" },
    { name: "Vereda de los Estudiantes", url: "/cerrajeros-vereda-estudiantes" },
    { name: "Los Santos", url: "/cerrajeros-los-santos" },
    { name: "Solagua", url: "/cerrajeros-solagua" },
    { name: "Poza del Agua", url: "/cerrajeros-poza-del-agua" },
    { name: "Centro", url: "/cerrajeros-centro" },
  ];

  const faqs = [
    {
      question: "¿Cuánto cobra un cerrajero por abrir una puerta en Leganés?",
      answer:
        `En ${APP_BUSINESS_NAME}, el servicio de apertura de puertas cuesta 90€ en horario normal (lunes a viernes de 08:00 a 19:00h) y 120€ fuera de este horario (noches, fines de semana y festivos). No cobramos desplazamiento.`,
    },
    {
      question: "¿Qué marcas de cerraduras instaláis?",
      answer:
        "Trabajamos con todas las marcas típicas y de confianza: Tesa, Mottura, Ezcurra, FAC, Mul-T-Lock, Cisa, Fichet, Corbin, Lince y Mauer. Tenemos repuestos originales para darte la mayor seguridad.",
    },
    {
      question: "¿Cuánto tardáis en llegar a mi barrio?",
      answer:
        "Garantizamos una llegada en 20 minutos a cualquier zona de Leganés, desde Zarzaquemada hasta Arroyo Culebro o San Nicasio. Nuestras unidades móviles están siempre operativas.",
    },
    {
      question: "¿Hacéis cambios de bombín antibumping?",
      answer:
        "Sí, es uno de nuestros servicios más demandados. Instalamos cilindros de alta seguridad que protegen contra el bumping, el ganzuado y la extracción técnica.",
    },
    {
      question: "¿Se puede pagar con tarjeta?",
      answer:
        "Sí, todos nuestros cerrajeros llevan datáfono móvil para que puedas pagar con tarjeta de crédito o débito sin problemas una vez terminado el trabajo.",
    },
    {
      question: "¿Abrís puertas sin romper la cerradura?",
      answer:
        "Nuestra prioridad es la apertura limpia. Gracias a herramientas profesionales y 20 años de experiencia, abrimos la mayoría de puertas sin causar daños ni al marco ni a la cerradura original.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main>
        {/* Hero Section Nano Banana */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#001529]">
          {/* Imagen de fondo cinematográfica */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-moderno-aguado.webp"
              alt="Seguridad avanzada y cerrajería profesional"
              width="1920"
              height="1080"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-60"
            />
            {/* Gradiente dramático para integrar imagen y contenido */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001529] via-[#001529]/80 to-transparent"></div>
          </div>

          <div className="container relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Columna Izquierda: Copy Persuasivo + CTA Masivo */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B35]"></span>
                  </span>
                  <span className="text-[#FF6B35] font-bold text-sm tracking-wide uppercase">Servicio Urgente 24h</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Cerrajeros <span className="text-[#FF6B35]">Leganés</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C]">
                    Urgencias 24h
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
                  Cerrajeros en <strong className="text-white font-semibold">{APP_LOCATION}</strong>. Llegamos en <span className="text-[#FF6B35] font-bold">20 minutos</span>. Sin daños, sin sorpresas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-xl px-10 py-8 rounded-2xl shadow-[0_0_40px_-10px_rgba(255,107,53,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,107,53,0.6)] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <a href={`tel:${APP_PHONE}`} className="flex items-center gap-3" aria-label={`Llamar a Cerrajeros Aguado al ${APP_PHONE_DISPLAY}`}>
                      <Phone className="h-8 w-8 animate-pulse" />
                      <div className="flex flex-col items-start text-left">
                        <span className="text-xs font-medium opacity-90 uppercase tracking-wider">Llamar ahora</span>
                        <span className="font-bold leading-none">{APP_PHONE_DISPLAY}</span>
                      </div>
                    </a>
                  </Button>

                  <div className="flex items-center gap-6 px-6 text-gray-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#FF6B35]" />
                      <span>Disponibles 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#FF6B35]" />
                      <span>Garantía total</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Tarjetas Flotantes Glassmorphism (Inspirado en competencia pero mejorado) */}
              <div className="lg:col-span-5 space-y-4 perspective-1000">
                {/* Tarjeta 1: Apertura */}
                <Link href="/apertura-puertas">
                  <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-[#FF6B35] flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <HomeIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg">Apertura de Puertas</h2>
                        <p className="text-gray-200 text-sm">Sin daños • Llegada en 20 min</p>
                      </div>
                      <ArrowRight className="ml-auto h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>

                {/* Tarjeta 2: Cerraduras */}
                <Link href="/cambio-cerraduras">
                  <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#004E89]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-[#004E89] flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Lock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg">Cambio de Cerraduras</h2>
                        <p className="text-gray-200 text-sm">Alta seguridad • Antibumping</p>
                      </div>
                      <ArrowRight className="ml-auto h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>

                {/* Tarjeta 3: Urgencias */}
                <Link href="/urgencias-24h">
                  <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg">Urgencias 24 Horas</h2>
                        <p className="text-gray-200 text-sm">Noches • Festivos • Fines de semana</p>
                      </div>
                      <ArrowRight className="ml-auto h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Lazy) */}
        <Suspense fallback={<SectionLoader />}>
          <ServicesCarousel />
        </Suspense>

        {/* Why Choose Us Section */}
        <section id="ventajas" className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#001529]">
                  ¿Por qué elegirnos en Leganés?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  No somos una franquicia ni un intermediario. Somos cerrajeros locales comprometidos con nuestros vecinos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="bg-[#FF6B35]/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-[#001529]">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FF6B35]/20 rounded-3xl transform rotate-3"></div>
                <img
                  src="/hero-cerrajero.webp"
                  alt="Cerrajero profesional de Cerrajería Aguado trabajando en Leganés"
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
                />
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="font-bold text-[#001529] mb-1">
                    "Rápidos y muy profesionales"
                  </p>
                  <p className="text-sm text-gray-500">
                    - Carlos M., vecino de Zarzaquemada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones Section */}
        <section id="zonas" className="py-20 bg-[#001529] text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Llegamos a todos los barrios de Leganés
              </h2>
              <p className="text-xl text-gray-300">
                Conocemos cada rincón de la ciudad. Desde el centro hasta los nuevos desarrollos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {zones.map((zone, index) => (
                zone.url ? (
                  <Link key={index} href={zone.url}>
                    <div className="flex items-center gap-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer group">
                      <MapPin className="h-5 w-5 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-white group-hover:text-[#FF6B35] transition-colors">{zone.name}</span>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 bg-white/5 rounded-lg backdrop-blur-sm opacity-70"
                  >
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-gray-300">{zone.name}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Sección NAP y Mapa (Lazy) */}
        <Suspense fallback={<SectionLoader />}>
          <LocationSection />
        </Suspense>

        {/* Marcas (Lazy) */}
        <Suspense fallback={<SectionLoader />}>
          <BrandsSection />
        </Suspense>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#001529]">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-600">
                Resolvemos tus dudas sobre nuestros servicios de cerrajería.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-bold mb-3 text-[#001529] flex items-start gap-3">
                    <span className="text-[#FF6B35] text-xl">?</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Premium */}
        <section className="py-24 bg-white">
          <div className="container px-4">
            <div className="relative bg-[#001529] rounded-[48px] p-12 md:p-20 text-center text-white overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,21,41,0.4)]">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#004E89]/20 rounded-full blur-[120px] -ml-64 -mb-64"></div>

              <div className="relative z-10 max-w-4xl mx-auto">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#FF9F1C] text-sm font-black uppercase tracking-[0.3em] mb-8">
                  Atención Inmediata 24h
                </span>
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight italic">
                  ¿Necesitas un <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C]">cerrajero</span> urgente?
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-widest text-[#FF6B35] font-black mb-1">Tarifa Actual</p>
                    <p className="text-3xl font-black italic">Desde {currentPrice}€</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-widest text-[#FF6B35] font-black mb-1">Tipo de Servicio</p>
                    <p className="text-sm font-bold uppercase tracking-tighter">
                      {isNormalHours ? "Horario Comercial" : "Urgencia 24 Horas"}
                    </p>
                  </div>
                </div>

                <p className="text-xl md:text-2xl mb-12 text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  No pierdas tiempo con intermediarios. Llama directamente a <span className="text-white font-bold">Aguado</span> y estaremos en tu puerta en menos de 20 minutos.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <Button
                    asChild
                    size="lg"
                    className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C] hover:scale-105 text-white text-2xl font-black px-12 py-10 rounded-full shadow-[0_20px_40px_-10px_rgba(255,107,53,0.5)] transition-all duration-500 overflow-hidden"
                  >
                    <a href={`tel:${APP_PHONE}`}>
                      {/* Efecto de brillo en el botón */}
                      <div className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-[45deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000"></div>
                      <Phone className="mr-4 h-9 w-9 group-hover:rotate-12 transition-transform" />
                      Llamar {APP_PHONE_DISPLAY}
                    </a>
                  </Button>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Técnicos de guardia disponibles ahora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
