import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APP_BUSINESS_LEGAL_NAME, APP_EMAIL } from "@/const";
import { Link } from "wouter";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-100 py-4">
          <div className="container">
            <nav className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#A52A2A] flex items-center">
                <HomeIcon className="h-4 w-4 mr-1" />
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900">Política de Cookies</span>
            </nav>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                Esta página web utiliza cookies técnicas con la finalidad de optimizar el sitio web y asegurar su correcto funcionamiento. No recaba ni cede datos de carácter personal de los usuarios.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca su dispositivo y recuerde información sobre su visita.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Tipos de cookies que utilizamos</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">Cookies técnicas</h3>
              <p>
                Son aquellas imprescindibles para el correcto funcionamiento de la página. Permiten la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Gestión de cookies</h2>
              <p>
                Puede configurar su navegador para aceptar o rechazar cookies. La mayoría de navegadores aceptan cookies automáticamente, pero puede modificar la configuración para rechazarlas si lo prefiere.
              </p>
              <p>
                A continuación, le facilitamos enlaces sobre cómo configurar las cookies en los principales navegadores:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#A52A2A] underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#A52A2A] underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-[#A52A2A] underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#A52A2A] underline">Microsoft Edge</a></li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Más información</h2>
              <p>
                Para obtener más información acerca del uso de cookies, puede contactar con nosotros en <strong>{APP_EMAIL}</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
