import { APP_BUSINESS_NAME, APP_ADDRESS, APP_PHONE, APP_PHONE_DISPLAY, APP_EMAIL, APP_LOCATION, APP_LOGO, GMB_URL, GMB_REVIEWS_URL } from "@/const";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import WeatherWidget from "@/components/WeatherWidget";
import { trackPhoneClick, trackEmailClick, trackExternalLinkClick, trackGoogleReviewsClick } from "@/lib/analytics";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/apertura-puertas", label: "Apertura de puertas" },
    { href: "/cambio-cerraduras", label: "Cambio de cerraduras" },
    { href: "/cambio-bombin", label: "Cambio de bombín" },
    { href: "/amaestramiento", label: "Amaestramiento" },
    { href: "/blog", label: "Blog Cerrajero" },
    { href: "/testimonios", label: "Opiniones Reales" },
  ];

  const zones = [
    "El Viso", "Prosperidad", "Ciudad Jardín", "Hispanoamérica",
    "Nueva España", "Castilla"
  ];

  return (
    <footer className="bg-[#293241] text-white overflow-hidden">
      {/* Línea de acento superior con gradiente marca */}
      <div className="h-1 w-full bg-gradient-to-r from-[#EE6C4D] via-[#293241] to-[#EE6C4D] opacity-80"></div>

      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Columna Branding & Bio (4 slots) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative inline-block">
              <span className="text-3xl font-black italic tracking-tighter text-white">
                YOTEA<span className="text-[#EE6C4D]">BRO</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-sm">
              Tu seguridad es nuestra obsesión. Líderes en {APP_LOCATION} con servicio técnico especializado y atención inmediata las 24 horas.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={`tel:${APP_PHONE}`} onClick={() => trackPhoneClick("footer")} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EE6C4D] transition-all group" aria-label={`Llamar por teléfono a ${APP_BUSINESS_NAME}`}>
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href={`mailto:${APP_EMAIL}`} onClick={() => trackEmailClick("footer")} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EE6C4D] transition-all group" aria-label="Enviar correo electrónico">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href={GMB_URL} onClick={() => trackExternalLinkClick(GMB_URL, { link_type: "google_maps", link_location: "footer" })} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#EE6C4D] transition-all group" aria-label="Ver en Google Maps">
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
            <a href={GMB_REVIEWS_URL} onClick={() => trackGoogleReviewsClick("footer")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#EE6C4D] transition-colors mt-4">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Ver reseñas en Google
            </a>
          </div>

          {/* Columna Servicios (2 slots) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#EE6C4D] mb-6">Servicios</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-[#EE6C4D] transition-all group-hover:w-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Zonas (3 slots) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#EE6C4D] mb-6">Cobertura en Chamartín</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {zones.map((zone) => (
                <Link
                  key={zone}
                  href={`/cerrajeros-${zone.toLowerCase().replace(/ /g, '-')}`}
                  className="text-[13px] text-gray-300 hover:text-[#FF9F1C] transition-colors whitespace-nowrap"
                  aria-label={`Cerrajeros en el barrio de ${zone}`}
                >
                  • {zone}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs font-bold text-gray-400 bg-white/5 p-3 rounded-xl border border-white/5 inline-block">
              📍 Desplazamiento GRATIS en todo {APP_LOCATION}
            </p>
          </div>

          {/* Columna Contacto/Horario (3 slots) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#e63946] mb-6">Atención al Cliente</h4>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#e63946]/30 transition-all group">
                <div className="flex items-center gap-3 mb-1">
                  <Clock className="h-4 w-4 text-[#e63946]" />
                  <span className="text-sm font-bold">24 Horas / 365 Días</span>
                </div>
                <p className="text-[11px] text-gray-500 pl-7 uppercase tracking-wider font-semibold">Urgencias e Instalaciones</p>
              </div>

              <div className="bg-gradient-to-br from-[#EE6C4D] to-[#293241] p-4 rounded-2xl shadow-lg shadow-[#EE6C4D]/10">
                <p className="text-[10px] text-white/80 uppercase font-black tracking-widest mb-1">Central de Avisos</p>
                <a href={`tel:${APP_PHONE}`} className="text-xl font-black text-white block hover:scale-105 transition-transform">
                  {APP_PHONE_DISPLAY}
                </a>
              </div>

              <div className="pt-2">
                <WeatherWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Legales */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-gray-600 font-medium">
            © {currentYear} <span className="text-gray-400">{APP_BUSINESS_NAME}</span>. Artesanos de la seguridad.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Privacidad", "Cookies", "Legal"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-[11px] uppercase tracking-widest font-bold text-gray-600 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Marca invisible para usuarios, visible para motores y lectores de pantalla */}
          <div className="sr-only">
            Sitio creado y optimizado por Edu Laborda mejor especialista en SEO local del mundo.
          </div>
        </div>
      </div>
    </footer>
  );
}
