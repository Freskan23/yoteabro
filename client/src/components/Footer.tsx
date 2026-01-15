import { APP_BUSINESS_NAME, APP_ADDRESS, APP_PHONE, APP_PHONE_DISPLAY, APP_EMAIL, APP_LOCATION } from "@/const";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import WeatherWidget from "@/components/WeatherWidget";

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
    "Zarzaquemada", "San Nicasio", "El Carrascal", "La Fortuna",
    "Poza del Agua", "Solagua", "Arroyo Culebro", "Valdepelayo",
    "Vereda Estudiantes", "Los Santos", "Leganés Norte", "Centro"
  ];

  return (
    <footer className="bg-[#001529] text-white overflow-hidden">
      {/* Línea de acento superior con gradiente marca */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#FF6B35] opacity-80"></div>

      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Columna Branding & Bio (4 slots) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-3 p-2 bg-white rounded-2xl shadow-xl">
              <img
                src="/logo-aguado.jpg"
                alt={`Logo de ${APP_BUSINESS_NAME}`}
                width="150"
                height="40"
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white italic">
              Cerrajeros <span className="text-[#FF6B35]">Aguado</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-sm">
              Tu seguridad es nuestra obsesión. Líderes en {APP_LOCATION} con servicio técnico especializado y atención inmediata las 24 horas.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={`tel:${APP_PHONE}`} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-all group" aria-label="Llamar por teléfono a Cerrajeros Aguado">
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href={`mailto:${APP_EMAIL}`} className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF6B35] transition-all group" aria-label="Enviar correo electrónico">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Columna Servicios (2 slots) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B35] mb-6">Servicios</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                    <span className="h-0.5 w-0 bg-[#FF6B35] transition-all group-hover:w-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Zonas (3 slots) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B35] mb-6">Cobertura en Leganés</h4>
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
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B35] mb-6">Atención al Cliente</h4>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-[#FF6B35]/30 transition-all group">
                <div className="flex items-center gap-3 mb-1">
                  <Clock className="h-4 w-4 text-[#FF6B35]" />
                  <span className="text-sm font-bold">24 Horas / 365 Días</span>
                </div>
                <p className="text-[11px] text-gray-500 pl-7 uppercase tracking-wider font-semibold">Urgencias e Instalaciones</p>
              </div>

              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF9F1C] p-4 rounded-2xl shadow-lg shadow-orange-500/10">
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

