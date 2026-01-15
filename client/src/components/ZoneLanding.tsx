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
          content={`Cerrajeros urgentes en ${zoneName}, Leganés. Llegamos en 20 minutos. Apertura de puertas, cambio de cerraduras y urgencias 24h en ${zoneName}. Precio cerrado.`}
        />
        <link rel="canonical" href={`https://cerrajerosdeleganes.madrid/cerrajeros-${zoneName.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>

      <Header />

      <main>
        {/* Hero Local */}
        <section className="relative bg-[#001529] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            {/* Usamos un patrón o imagen genérica de fondo oscurecida */}
            <div className="w-full h-full bg-[url('/hero-cerrajero.webp')] bg-cover bg-center"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/50 text-[#FF6B35] text-sm font-bold mb-6">
                <MapPin className="h-4 w-4" />
                Servicio en {zoneName}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cerrajeros en <span className="text-[#FF6B35]">{zoneName}</span> 24 Horas
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {zoneDescription} Llegamos a cualquier calle de {zoneName} en menos de 20 minutos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-lg px-8 py-6 shadow-lg shadow-orange-500/20"
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

        {/* CTA Final */}
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">¿Vives en {zoneName}?</h2>
            <p className="text-gray-600 mb-8">Estamos a la vuelta de la esquina. Llámanos y estaremos ahí antes de que te des cuenta.</p>
            <Button
              asChild
              size="lg"
              className="bg-[#004E89] hover:bg-[#003366] text-white px-8"
            >
              <a href={`tel:${APP_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Pedir presupuesto gratis
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
