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

export default function AvisoLegal() {
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
              <span className="text-gray-900">Aviso Legal</span>
            </nav>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                De conformidad con lo establecido en la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se facilita la siguiente información:
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">1. DATOS IDENTIFICATIVOS</h2>
              <p>
                Usted está visitando la página web www.cerrajerosenchamartin.madrid, titularidad de <strong>{APP_BUSINESS_LEGAL_NAME}</strong>, con domicilio social en <strong>{APP_LEGAL_ADDRESS}</strong>, con NIF <strong>{APP_NIF}</strong>, en adelante, el TITULAR.
              </p>
              <p>Puede contactar con el Titular por cualquiera de los siguientes medios:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Teléfono: <strong>{APP_PHONE}</strong></li>
                <li>Correo electrónico de contacto: <strong>{APP_EMAIL}</strong></li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">2. USUARIOS</h2>
              <p>
                Mediante el presente documento ponemos en su conocimiento los términos y condiciones que regulan el uso del sitio web y/o app del Titular, así como de los servicios y contenidos asociados. Dicho uso implica la adquisición de la condición de "usuario" y, con dicha condición, una serie de derechos y obligaciones.
              </p>
              <p>
                A los efectos anteriormente descritos, le informamos que es de su responsabilidad acceder a las condiciones legales insertas en la presente web, así como, a las políticas de privacidad, cookies o en su caso, condiciones de venta y leerlas detenidamente. Recomendamos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Que visite las mismas cada vez que pretenda acceder o utilizar los servicios y contenidos del sitio y</li>
                <li>Que imprima o almacene en su sistema una copia.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">3. USO DEL PORTAL</h2>
              <p>
                Esta web proporciona el acceso a multitud de información, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a el Titular o a sus licenciantes a los que el Usuario puede tener acceso.
              </p>
              <p>
                El Usuario asume la responsabilidad del uso del portal en los términos que mediante la presente se establecen. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. En dicho registro, el Usuario será responsable de aportar información veraz y lícita.
              </p>
              <p>El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el Titular ofrece a través de su portal y, con carácter enunciativo pero no limitativo, a no emplearlos para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                <li>Difundir contenidos o propaganda racista, xenófoba, pornográfico-ilegal, de apología del terrorismo o atentatoria contra los derechos humanos.</li>
                <li>Provocar daños en los sistemas físicos y lógicos del Titular, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
                <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
                <li>Utilizar el sitio web ni las informaciones que en él se contienen con fines comerciales, políticos, publicitarios y para cualquier uso comercial, sobre todo en el envío de correos electrónicos no solicitados.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">4. PROTECCIÓN DE DATOS</h2>
              <p>
                Todo lo relativo al tratamiento de sus datos personales se encuentra recogido en la{" "}
                <Link href="/politica-privacidad" className="text-[#A52A2A] underline hover:text-[#8B2323]">
                  Política de Privacidad
                </Link>.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">5. CONTENIDOS. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
              <p>
                El Titular es propietario de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, fotografías, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad del Titular o bien de sus licenciantes.
              </p>
              <p>
                Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del Titular.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">6. EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
              <p>
                El Usuario reconoce que la utilización de la página web y de sus contenidos y servicios se desarrolla bajo su exclusiva responsabilidad. En concreto, a título meramente enunciativo, el Titular no asume ninguna responsabilidad en los siguientes ámbitos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La disponibilidad del funcionamiento de la página web, sus servicios y contenidos y su calidad o interoperabilidad.</li>
                <li>La finalidad para la que la página web sirva a los objetivos del Usuario.</li>
                <li>La infracción de la legislación vigente por parte del Usuario o terceros y, en concreto, de los derechos de propiedad intelectual e industrial que sean titularidad de otras personas o entidades.</li>
                <li>La existencia de códigos maliciosos o cualquier otro elemento informático dañino que pudiera causar el sistema informático del Usuario o de terceros.</li>
                <li>El acceso fraudulento a los contenidos o servicios por terceros no autorizados.</li>
                <li>Los daños producidos a equipos informáticos durante el acceso a la página web.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">7. MODIFICACIÓN DE ESTE AVISO LEGAL Y DURACIÓN</h2>
              <p>
                El Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tantos contenidos y servicios que se presten a través de la misma, como la forma en la que estos aparezcan representados o localizados en su portal.
              </p>
              <p>
                La vigencia de las citadas condiciones irá en función de su exposición y estarán vigentes hasta que sean modificadas por otras debidamente publicadas.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">8. ENLACES</h2>
              <p>
                En el caso de que en www.cerrajerosenchamartin.madrid se incluyesen enlaces o hipervínculos hacia otros sitios de Internet, el Titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos ni asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">9. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
              <p>
                La relación entre el Titular y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de la ciudad de Madrid.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

