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
  Wrench,
  CheckCircle,
  MapPin,
  Star,
  Lock,
  Key,
  Home as HomeIcon,
  Settings,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";

export default function Home() {
  const { currentPrice, isNormalHours } = useDynamicPricing();
  const services = [
    {
      icon: <HomeIcon className="h-12 w-12 text-[#FF6B35]" />,
      title: "Apertura de Puertas",
      description: "¿Te has dejado las llaves en casa? Abrimos puertas en todo Leganés desde 90€. Sin romper, rápido y barato.",
      image: "/servicio-apertura-puertas-3d.webp",
      link: "/apertura-puertas",
    },
    {
      icon: <Clock className="h-12 w-12 text-[#FF6B35]" />,
      title: "Urgencias 24 Horas",
      description: "Servicio urgente disponible las 24 horas en Leganés. Llegamos en menos de 20 minutos.",
      image: "/servicio-domicilio-3d.webp",
      link: "/urgencias-24h",
    },
    {
      icon: <Lock className="h-12 w-12 text-[#FF6B35]" />,
      title: "Cambio de Cerraduras",
      description: "Cambiamos tu cerradura antigua por una de alta seguridad. Ideal para Zarzaquemada y San Nicasio.",
      image: "/servicio-cerraduras-3d.webp",
      link: "/cambio-cerraduras",
    },
    {
      icon: <Key className="h-12 w-12 text-[#FF6B35]" />,
      title: "Cambio de Bombín",
      description: "Protege tu hogar contra el bumping. Instalamos bombines antirrobo en el acto. Duerme tranquilo.",
      image: "/servicio-llaves-3d.webp",
      link: "/cambio-bombin",
    },
    {
      icon: <Settings className="h-12 w-12 text-[#FF6B35]" />,
      title: "Amaestramiento de Llaves",
      description: "Una sola llave para todo. La solución perfecta para comunidades de vecinos y empresas de Leganés.",
      image: "/servicio-domicilio-3d.webp",
      link: "/amaestramiento",
    },
  ];

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
              src="/images/hero-nano-banana.webp"
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
                        <h3 className="text-white font-bold text-lg">Apertura de Puertas</h3>
                        <p className="text-gray-400 text-sm">Sin daños • Llegada en 20 min</p>
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
                        <h3 className="text-white font-bold text-lg">Cambio de Cerraduras</h3>
                        <p className="text-gray-400 text-sm">Alta seguridad • Antibumping</p>
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
                        <h3 className="text-white font-bold text-lg">Urgencias 24 Horas</h3>
                        <p className="text-gray-400 text-sm">Noches • Festivos • Fines de semana</p>
                      </div>
                      <ArrowRight className="ml-auto h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-[#001529]">
                Servicios de Cerrajería en Leganés
              </h2>
              <p className="text-xl text-gray-600">
                Soluciones profesionales para tu hogar o negocio. Calidad garantizada.
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <Link href={service.link}>
                      <Card
                        className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer h-full"
                      >
                        <div className="h-48 overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                          <img
                            src={service.image}
                            alt={service.title}
                            width="400"
                            height="300"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute bottom-4 left-4 z-20">
                            <div className="bg-white/90 p-2 rounded-lg shadow-sm backdrop-blur-sm">
                              {service.icon}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-3 text-[#001529] group-hover:text-[#FF6B35] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {service.description}
                          </p>
                          <div className="mt-4 flex items-center text-[#FF6B35] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                            Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 mt-8">
                <CarouselPrevious className="relative translate-y-0 left-0 hover:bg-[#FF6B35] hover:text-white border-gray-200" />
                <CarouselNext className="relative translate-y-0 right-0 hover:bg-[#FF6B35] hover:text-white border-gray-200" />
              </div>
              <div className="flex md:hidden justify-center gap-2 mt-6">
                <div className="flex gap-1">
                  {services.map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                  ))}
                </div>
              </div>
            </Carousel>
          </div>
        </section>

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

        {/* Sección NAP y Mapa */}
        <section id="ubicacion" className="py-20 bg-white overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#001529] mb-4">
                    ¿Dónde estamos? <span className="text-[#FF6B35]">Visítanos</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Estamos en el corazón de Leganés, dentro de la emblemática Galería Sanabria. Ven a vernos para duplicado de llaves o asesoramiento en seguridad.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                    <div className="bg-[#FF6B35]/10 p-3 rounded-xl group-hover:bg-[#FF6B35] transition-colors">
                      <MapPin className="h-6 w-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Dirección</h3>
                      <p className="text-gray-600">{APP_ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                    <div className="bg-[#004E89]/10 p-3 rounded-xl group-hover:bg-[#004E89] transition-colors">
                      <Phone className="h-6 w-6 text-[#004E89] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Teléfono de contacto</h3>
                      <p className="text-gray-600">{APP_PHONE_DISPLAY}</p>
                      <p className="text-xs text-[#FF6B35] font-semibold uppercase mt-1">Atención 24 Horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] group">
                    <div className="bg-[#FF6B35]/10 p-3 rounded-xl group-hover:bg-[#FF6B35] transition-colors">
                      <Clock className="h-6 w-6 text-[#FF6B35] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Horario de Taller</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:30 - 14:00 y 17:00 - 20:00</p>
                      <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-[#004E89]/5 rounded-[2.5rem] transform -rotate-2"></div>
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.4102923583685!2d-3.765664323445839!3d40.32213196140683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189874cb306a7%3A0x673c68383e2da02e!2sAv.%20de%20Fuenlabrada%2C%2037%2C%2028912%20Legan%C3%A9s%2C%20Madrid!5e0!3m2!1ses!2ses!4v1705326500000!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Cerrajería Aguado en Leganés"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas */}
        <BrandsSection />

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
