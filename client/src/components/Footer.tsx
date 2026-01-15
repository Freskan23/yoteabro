import { APP_BUSINESS_NAME, APP_ADDRESS, APP_PHONE, APP_PHONE_DISPLAY, APP_EMAIL, APP_LOCATION } from "@/const";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import WeatherWidget from "@/components/WeatherWidget";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de contacto */}
          <div>
            <img src="/logo-aguado.jpg" alt={APP_BUSINESS_NAME} className="h-16 w-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{APP_BUSINESS_NAME}</h3>
            <p className="text-gray-300 mb-4">
              Cerrajeros profesionales en {APP_LOCATION} disponibles 24/7 para cualquier urgencia.
            </p>
            <div className="flex items-start gap-3 mb-3">
              <Phone className="h-5 w-5 text-[#A52A2A] flex-shrink-0 mt-1" />
              <div>
                <a
                  href={`tel:${APP_PHONE}`}
                  className="hover:text-[#A52A2A] transition-colors font-semibold"
                >
                  {APP_PHONE_DISPLAY}
                </a>
                <p className="text-sm text-gray-400">Disponible 24/7</p>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/apertura-puertas" className="hover:text-[#A52A2A] transition-colors">
                  Apertura de puertas
                </Link>
              </li>
              <li>
                <Link to="/cambio-cerraduras" className="hover:text-[#A52A2A] transition-colors">
                  Cambio de cerraduras
                </Link>
              </li>
              <li>
                <Link to="/cambio-bombin" className="hover:text-[#A52A2A] transition-colors">
                  Cambio de bombín
                </Link>
              </li>
              <li>
                <Link to="/amaestramiento" className="hover:text-[#A52A2A] transition-colors">
                  Amaestramiento
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#A52A2A] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonios" className="hover:text-[#A52A2A] transition-colors">
                  Opiniones de clientes
                </Link>
              </li>
            </ul>
          </div>

          {/* Horario y ubicación */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horario</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#A52A2A] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Abierto 24 horas</p>
                  <p className="text-sm">Todos los días del año</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Lun-Vie 08:00-19:00: 90€<br />
                    Fuera de horario: 120€
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#A52A2A] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm">{APP_ADDRESS}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <WeatherWidget />
              </div>
            </div>
          </div>

          {/* Zonas de servicio */}
          <div>
            <h3 className="text-lg font-bold mb-4">Zonas de Servicio</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/cerrajeros-zarzaquemada" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Zarzaquemada
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-san-nicasio" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros San Nicasio
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-el-carrascal" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros El Carrascal
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-la-fortuna" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros La Fortuna
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-leganes-norte" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Leganés Norte
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-arroyo-culebro" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Arroyo Culebro
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-valdepelayo" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Valdepelayo
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-vereda-estudiantes" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Vereda Estudiantes
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-los-santos" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Los Santos
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-solagua" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Solagua
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-poza-del-agua" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Poza del Agua
                </Link>
              </li>
              <li>
                <Link href="/cerrajeros-centro" className="hover:text-[#FF6B35] transition-colors">
                  • Cerrajeros Centro
                </Link>
              </li>
              <li className="text-[#FF6B35] font-semibold mt-3">
                Y todo {APP_LOCATION}
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {APP_BUSINESS_NAME}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/politica-privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/politica-cookies" className="hover:text-white transition-colors">
                Política de Cookies
              </Link>
              <Link href="/aviso-legal" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

