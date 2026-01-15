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
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: <HomeIcon className="h-12 w-12 text-[#FF6B35]" />,
      title: "Apertura de puertas",
      description:
        "¿Te has dejado las llaves en casa? Abrimos puertas en todo Leganés desde 90€. Sin romper, rápido y barato.",
      image: "/servicio-apertura-puertas-3d.jpg",
    },
    {
      icon: <Lock className="h-12 w-12 text-[#FF6B35]" />,
      title: "Cambio de cerraduras",
      description:
        "Cambiamos tu cerradura antigua por una de alta seguridad. Ideal para los pisos de Zarzaquemada y San Nicasio.",
      image: "/servicio-cerraduras-3d.jpg",
    },
    {
      icon: <Key className="h-12 w-12 text-[#FF6B35]" />,
      title: "Cambio de bombín",
      description:
        "Protege tu hogar contra el bumping. Instalamos bombines anti-robo en el acto. Duerme tranquilo hoy mismo.",
      image: "/servicio-llaves-3d.jpg",
    },
    {
      icon: <Settings className="h-12 w-12 text-[#FF6B35]" />,
      title: "Amaestramiento",
      description:
        "Una sola llave para todo. La solución perfecta para las comunidades de vecinos de Leganés y empresas del polígono.",
      image: "/servicio-domicilio-3d.jpg",
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
      question: "¿Cuánto cobra un cerrajero por abrir una puerta?",
      answer:
        `En ${APP_BUSINESS_NAME}, el servicio de apertura de puertas cuesta 90€ en horario normal (lunes a viernes de 08:00 a 19:00h) y 120€ fuera de este horario (noches, fines de semana y festivos). No cobramos desplazamiento. El precio se actualiza automáticamente según la hora.`,
    },
    {
      question: "¿Cuánto vale cambiar un bombín de una puerta?",
      answer:
        "El precio del cambio de bombín depende del tipo de seguridad que necesites. Ofrecemos bombines desde modelos básicos hasta sistemas de alta seguridad con tecnología antibumping y llaves incopiables. Contacta con nosotros para un presupuesto personalizado.",
    },
    {
      question: "¿Cómo saber si un cerrajero es de confianza?",
      answer:
        `Un cerrajero de confianza debe ofrecer presupuestos claros antes de comenzar, tener experiencia demostrable, trabajar con herramientas profesionales y ofrecer garantías en sus servicios. En ${APP_BUSINESS_NAME} cumplimos con todos estos requisitos y contamos con excelentes valoraciones de nuestros clientes.`,
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
              src="/images/hero-nano-banana.jpg"
              alt="Seguridad avanzada y cerrajería profesional"
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
                  Tu seguridad, <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C]">
                    nuestra prioridad
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
                    <a href={`tel:${APP_PHONE}`} className="flex items-center gap-3">
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

                {/* Tarjeta 2: Cerraduras */}
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

                {/* Tarjeta 3: Urgencias */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
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
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                  src="/images/cerrajero-trabajando.jpg"
                  alt="Cerrajero profesional trabajando"
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

        {/* CTA Final */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="bg-[#004E89] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-10"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  ¿Necesitas un cerrajero urgente?
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-blue-100">
                  No esperes más. Estamos a una llamada de distancia.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-xl px-12 py-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <a href={`tel:${APP_PHONE}`}>
                    <Phone className="mr-3 h-8 w-8" />
                    Llamar al {APP_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
