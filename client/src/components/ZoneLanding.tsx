import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import { APP_PHONE, APP_PHONE_DISPLAY, APP_BUSINESS_NAME } from "@/const";

interface ZoneLandingProps {
  zoneName: string;
  zoneDescription: string;
  zoneMapUrl: string; // URL del iframe de Google Maps centrado en la zona
  commonProblems: string[]; // Lista de problemas comunes en esa zona (ej: "Cerraduras antiguas en San Nicasio")
}

export default function ZoneLanding({
  zoneName,
  zoneDescription,
  zoneMapUrl,
  commonProblems,
}: ZoneLandingProps) {

  // Scroll to top al montar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Cerrajeros {zoneName} 24 Horas | {APP_BUSINESS_NAME}</title>
        <meta
          name="description"
          content={`Cerrajeros urgentes en ${zoneName}, Chamartín. Llegamos en 20 minutos. Apertura de puertas, cambio de cerraduras y urgencias 24h en ${zoneName}. Precio cerrado.`}
        />
        <link rel="canonical" href={`https://cerrajerosenchamartin.madrid/cerrajeros-${zoneName.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>

      <Header />

      <main>
        {/* Hero Local - Rebel & Zen */}
        <section className="relative bg-[#293241] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            {/* Zen Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
            </div>
            {/* Rebel Element - Animated Zone Name (diagonal, right half, moving up) */}
            <div className="absolute top-0 right-0 w-[55%] h-full">
              <div className="absolute -top-20 -bottom-20 -right-20 left-0 flex flex-col items-center justify-center gap-8 rotate-[-20deg] animate-scroll-up">
                <span className="text-[7rem] md:text-[12rem] lg:text-[16rem] font-black text-white/10 italic leading-none whitespace-nowrap">
                  {zoneName.toUpperCase()}
                </span>
                <span className="text-[7rem] md:text-[12rem] lg:text-[16rem] font-black text-white/10 italic leading-none whitespace-nowrap">
                  {zoneName.toUpperCase()}
                </span>
                <span className="text-[7rem] md:text-[12rem] lg:text-[16rem] font-black text-white/10 italic leading-none whitespace-nowrap">
                  {zoneName.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C4D]/20 border border-[#EE6C4D]/50 text-[#EE6C4D] text-sm font-bold mb-6">
                <MapPin className="h-4 w-4" />
                Servicio en {zoneName}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cerrajeros en <span className="text-[#EE6C4D]">{zoneName}</span> 24 Horas
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {zoneDescription} Llegamos a cualquier calle de {zoneName} en menos de 20 minutos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#EE6C4D] hover:bg-[#d62828] text-white text-lg px-8 py-6 shadow-lg shadow-orange-500/20"
                >
                  <a href={`tel:${APP_PHONE}`}>
                    <Phone className="mr-2 h-6 w-6 animate-pulse" />
                    Llamar ahora: {APP_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas Comunes en la Zona */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Servicio especializado para vecinos de {zoneName}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Conocemos perfectamente las cerraduras y puertas más comunes en {zoneName}.
                  Llevamos años trabajando en el barrio y sabemos cómo solucionar tus problemas de forma rápida y económica.
                </p>

                <ul className="space-y-4">
                  {commonProblems.map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-[#004E89] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mapa Local */}
              <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100">
                <iframe
                  src={zoneMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de cerrajeros en ${zoneName}`}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final - Rebel & Zen */}
        <section className="relative py-20 bg-[#EE6C4D] text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.1]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
          </div>
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Vives en {zoneName}?</h2>
            <p className="text-xl mb-8 opacity-90">Estamos a la vuelta de la esquina. Llámanos y estaremos ahí en menos de 20 minutos.</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#EE6C4D] hover:bg-gray-100 text-lg px-8 py-6"
            >
              <a href={`tel:${APP_PHONE}`}>
                <Phone className="mr-2 h-6 w-6" />
                Presupuesto Gratis: {APP_PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
