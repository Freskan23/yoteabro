import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  APP_BUSINESS_LEGAL_NAME,
  APP_LEGAL_ADDRESS,
  APP_NIF,
  APP_PHONE,
  APP_EMAIL,
} from "@/const";
import { Link } from "wouter";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

export default function PoliticaPrivacidad() {
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
              <span className="text-gray-900">Política de Privacidad</span>
            </nav>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                El objetivo de esta política es informar a los interesados acerca de los distintos tratamientos realizados por esta organización mediante la página web y que afecten a sus datos personales de conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. IDENTIFICACIÓN Y DATOS DE CONTACTO DEL RESPONSABLE</h2>
              <p>
                <strong>{APP_BUSINESS_LEGAL_NAME}</strong>, domiciliada en <strong>{APP_LEGAL_ADDRESS}</strong>, con NIF <strong>{APP_NIF}</strong>, teléfono de contacto <strong>{APP_PHONE}</strong> y correo electrónico <strong>{APP_EMAIL}</strong>.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. FINALIDADES DEL TRATAMIENTO</h2>
              <p>Trataremos los datos de carácter personal facilitados para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atender a las solicitudes, quejas e incidencias trasladadas a través de nuestros canales de contacto.</li>
                <li>Cumplir con las obligaciones legales que nos resulten directamente aplicables.</li>
                <li>Gestionar y enviarle el presupuesto solicitado.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. DERECHOS</h2>
              <p>
                Los interesados podrán ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiendo un escrito a <strong>{APP_EMAIL}</strong>.
              </p>
              <p>
                Puede presentar una reclamación ante la Agencia Española de Protección de Datos: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#A52A2A] underline">www.aepd.es</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
