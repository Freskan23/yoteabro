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
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { Link } from "wouter";
import React, { Suspense, lazy } from "react";
import { useDynamicPricing } from "@/hooks/useDynamicPricing";

const ServicesCarousel = lazy(() => import("@/components/home/ServicesCarousel"));
const LocationSection = lazy(() => import("@/components/home/LocationSection"));
const BrandsSection = lazy(() => import("@/components/BrandsSection"));
const StatsCounter = lazy(() => import("@/components/StatsCounter"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const InteractiveCoverageMap = lazy(() => import("@/components/InteractiveCoverageMap"));
const QuickContactForm = lazy(() => import("@/components/QuickContactForm"));
const PriceCalculator = lazy(() => import("@/components/PriceCalculator"));

// Fallback skeleton or minimalist loader
const SectionLoader = () => <div className="h-60 w-full bg-gray-50 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">Cargando experiencia yoteabro...</div>;

export default function Home() {
  const { currentPrice, isNormalHours } = useDynamicPricing();

  const zones = [
    { name: "El Viso", url: "/cerrajeros-el-viso" },
    { name: "Prosperidad", url: "/cerrajeros-prosperidad" },
    { name: "Ciudad Jardín", url: "/cerrajeros-ciudad-jardin" },
    { name: "Hispanoamérica", url: "/cerrajeros-hispanoamerica" },
    { name: "Nueva España", url: "/cerrajeros-nueva-espana" },
    { name: "Castilla", url: "/cerrajeros-castilla" },
  ];

  const faqs = [
    {
      question: "¿Llegáis rápido a Castilla o Hispanoamérica?",
      answer:
        `Sí, tenemos técnicos situados estratégicamente en puntos clave de Chamartín. De media, tardamos 20 minutos en llegar a tu puerta en El Viso, Prosperidad, Ciudad Jardín, Hispanoamérica, Nueva España o Castilla.`,
    },
    {
      question: "¿Cuánto cuesta la apertura de puertas?",
      answer:
        `En yoteabro apostamos por la transparencia. Te damos un precio cerrado por teléfono para evitar sorpresas. No cobramos desplazamiento y nuestras tarifas son las más competitivas del barrio.`,
    },
    {
      question: "¿Hacéis cambios de bombillo antibumping?",
      answer:
        "Es nuestra especialidad. Instalamos los mejores sistemas de seguridad para que duermas tranquilo en tu casa de Chamartín. Protección real contra el robo.",
    },
    {
      question: "¿Atendéis urgencias?",
      answer:
        "Estamos a la vuelta de la esquina. Si vives en Chamartín, probablemente seamos los cerrajeros más rápidos que puedas encontrar.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <SEOHead />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#293241]">
          {/* Background Image / Overlay con foto de Chamartín */}
          <div className="absolute inset-0 z-0">
            <img
              src="/chamartin_street_ponzano_v2_1770201309405.png"
              alt="Cerrajeros en Chamartín Madrid - Calle Ponzano barrio de Chamartín"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#293241]/95 via-[#293241]/80 to-transparent"></div>
          </div>

          {/* Animated Background - floating keys and locks */}
          <AnimatedHeroBackground />

          <div className="container relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Columna Izquierda: Copy Persuasivo + CTA Masivo */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#EE6C4D]/10 border border-[#EE6C4D]/30 backdrop-blur-md">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE6C4D] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EE6C4D]"></span>
                  </span>
                  <span className="text-[#EE6C4D] font-black text-xs tracking-widest uppercase">Cerrajeros Reales 24h en Chamartín</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-2 italic">
                  <span className="block text-4xl md:text-5xl font-extrabold text-[#EE6C4D] mb-4 not-italic">¿Te has quedado fuera?</span>
                  Cerrajeros <br />
                  <span className="text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">CHAMARTÍN</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-medium leading-tight mb-8">
                  Somos <strong className="text-white font-black italic">yoteabro</strong>. Tu cerrajero de confianza en el barrio. Llegamos en <span className="text-[#EE6C4D] font-black underline decoration-4 decoration-[#EE6C4D]/50">20 minutos</span> a cualquier punto de Chamartín.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#EE6C4D] hover:bg-[#d85c3d] text-white text-2xl font-black px-12 py-10 rounded-2xl shadow-[0_20px_50px_-10px_rgba(238,108,77,0.5)] transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <a href={`tel:${APP_PHONE}`} className="flex items-center gap-4">
                      <Phone className="h-10 w-10 animate-shake" />
                      <div className="flex flex-col items-start text-left">
                        <span className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Llama ahora</span>
                        <span className="leading-none">{APP_PHONE_DISPLAY}</span>
                      </div>
                    </a>
                  </Button>

                  <div className="flex items-center gap-8 px-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-white font-black text-lg">
                        <Clock className="h-5 w-5 text-[#EE6C4D]" />
                        <span>20 MIN</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Llegada media</span>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 text-white font-black text-lg">
                        <Shield className="h-5 w-5 text-[#EE6C4D]" />
                        <span>100% LEGAL</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Factura oficial</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {[
                  { title: "Apertura Urgente", subtitle: "Sin romper tu puerta", color: "#EE6C4D", icon: <HomeIcon className="h-7 w-7" /> },
                  { title: "Cerraduras", subtitle: "Sistemas Antibumping", color: "#3D5A80", icon: <Lock className="h-7 w-7" /> },
                  { title: "Servicio 24h", subtitle: "Noches y Festivos", color: "#EE6C4D", icon: <Clock className="h-7 w-7" /> }
                ].map((item, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2 cursor-pointer">
                    <div className="relative flex items-center gap-6">
                      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shadow-2xl text-white`} style={{ backgroundColor: item.color }}>
                        {item.icon}
                      </div>
                      <div>
                        <h2 className="text-white font-black text-xl uppercase tracking-tighter italic">{item.title}</h2>
                        <p className="text-gray-400 font-bold text-sm tracking-wide">{item.subtitle}</p>
                      </div>
                      <ArrowRight className="ml-auto h-6 w-6 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Suspense fallback={<SectionLoader />}>
          <ServicesCarousel />
        </Suspense>

        {/* Stats Counter Section */}
        <Suspense fallback={<SectionLoader />}>
          <StatsCounter />
        </Suspense>

        {/* Why Choose Us Section */}
        <section id="ventajas" className="py-24 bg-white overflow-hidden">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative z-10">
                <h2 className="text-6xl font-black mb-8 text-[#293241] uppercase italic tracking-tighter leading-[0.9]">
                  Tu vecino en el <br /><span className="text-[#EE6C4D] drop-shadow-sm">Santiago Bernabéu</span>
                </h2>
                <p className="text-2xl text-gray-600 mb-12 font-medium leading-snug max-w-xl">
                  En <strong className="text-[#293241]">yoteabro</strong> no somos una centralita fría de internet. Somos cerrajeros que viven y trabajan en <span className="text-[#293241] font-black underline decoration-[#EE6C4D] decoration-4">Chamartín</span>.
                </p>
                <div className="space-y-8">
                  {[
                    { title: "Presupuesto cerrado", desc: "Te damos el precio final por teléfono. Sin sorpresas, sin abusos.", icon: <CheckCircle className="h-8 w-8" /> },
                    { title: "Apertura sin daños", desc: "Expertos en ganzuado y técnicas limpias. Tu puerta quedará perfecta.", icon: <Shield className="h-8 w-8" /> }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 group">
                      <div className="h-16 w-16 rounded-2xl bg-[#EE6C4D]/10 flex items-center justify-center text-[#EE6C4D] group-hover:bg-[#EE6C4D] group-hover:text-white transition-all">
                        {feat.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-[#293241] uppercase tracking-tighter italic">{feat.title}</h3>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Fondo decorativo */}
                <div className="absolute -inset-10 bg-[#EE6C4D]/10 rounded-full blur-[100px] opacity-60"></div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#EE6C4D] to-[#293241] rounded-[3rem] blur-2xl opacity-20 transition duration-500 group-hover:opacity-40"></div>
                  <img
                    src="/yoteabro_technician_branded.webp"
                    alt="Cerrajero profesional YOTEABRO en Chamartín Madrid - Servicio 24 horas"
                    className="relative rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-[4/5] w-full"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-10 -right-4 bg-[#293241] p-8 rounded-[2rem] shadow-2xl text-white transform rotate-3 border-4 border-[#EE6C4D] flex flex-col items-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EE6C4D] mb-2 leading-none">Confianza Local</p>
                    <p className="text-3xl font-black italic uppercase leading-none">+20 años</p>
                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase">Abriendo Chamartín</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Coverage Map Section */}
        <Suspense fallback={<SectionLoader />}>
          <InteractiveCoverageMap />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        {/* Tools Section: Calculator & Quick Contact */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#EE6C4D] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                Herramientas útiles
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-[#293241] uppercase italic tracking-tighter leading-none">
                Calcula tu <span className="text-[#EE6C4D]">presupuesto</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Suspense fallback={<SectionLoader />}>
                <PriceCalculator />
              </Suspense>
              <Suspense fallback={<SectionLoader />}>
                <QuickContactForm />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Sección NAP y Mapa */}
        <Suspense fallback={<SectionLoader />}>
          <LocationSection />
        </Suspense>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl font-black mb-6 text-[#293241] uppercase italic tracking-tighter leading-none">
                Preguntas <span className="text-[#EE6C4D]">Frecuentes</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium">
                Todo lo que necesitas saber antes de llamar a tu cerrajero en Chamartín.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-10 hover:shadow-xl hover:shadow-gray-200 transition-all group"
                >
                  <div className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#EE6C4D] group-hover:text-white transition-colors text-gray-500 font-black">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-[#293241] uppercase tracking-tighter italic">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-bold text-lg">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Premium */}
        {/* Final CTA Section */}
        <section className="py-32 bg-gray-50">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#293241] p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
                {/* Background Pattern - Rebel & Zen */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                  {/* Zen Dot Pattern */}
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
                  </div>
                  {/* Rebel Typographic Element */}
                  <div className="absolute -bottom-20 -right-20 text-[25rem] font-black text-white italic opacity-[0.02] rotate-[-15deg] leading-none">
                    24H
                  </div>
                  <div className="absolute -top-20 -left-20 text-[25rem] font-black text-[#EE6C4D] italic opacity-[0.02] rotate-[15deg] leading-none">
                    OPEN
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <span className="bg-[#EE6C4D] text-[#293241] px-6 py-2 rounded-full font-black text-sm uppercase tracking-[0.3em] mb-10 italic">
                    Emergencias Chamartín 24h
                  </span>

                  <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic leading-[0.85] tracking-tighter mb-16">
                    ¿Necesitas <br />
                    <span className="text-[#EE6C4D]">abrir ya</span>?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-16">
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
                      <p className="text-[#EE6C4D] text-sm font-black uppercase tracking-widest mb-1">Precio hoy</p>
                      <p className="text-7xl font-black text-white italic leading-none">{currentPrice}€</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
                      <p className="text-[#EE6C4D] text-sm font-black uppercase tracking-widest mb-1">Servicio</p>
                      <p className="text-4xl font-black text-white italic uppercase leading-tight">
                        {isNormalHours ? "COMERCIAL" : "URGENTE 24H"}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${APP_PHONE}`}
                    className="group relative inline-flex items-center justify-center"
                  >
                    <div className="absolute -inset-4 bg-[#EE6C4D] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <span className="text-7xl md:text-9xl font-black text-white hover:text-[#EE6C4D] transition-colors tracking-tighter flex items-center gap-6">
                      <Phone className="h-10 w-10 md:h-20 md:w-20" />
                      {APP_PHONE_DISPLAY}
                    </span>
                  </a>

                  <div className="mt-16 flex items-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-sm">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                    </span>
                    Técnicos de guardia en tu calle ahora mismo
                  </div>
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
