import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
    APP_BUSINESS_NAME,
    APP_PHONE,
    APP_PHONE_DISPLAY,
    APP_EMAIL,
    APP_ADDRESS,
    APP_LOCATION
} from "@/const";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    ChevronRight,
    Home as HomeIcon,
    Shield,
    CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export default function Contacto() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEOHead
                title={`Contacta con ${APP_BUSINESS_NAME} | Cerrajeros en Chamartín 24h`}
                description={`¿Necesitas un cerrajero en Chamartín? Contacta con nosotros. Atendemos todo el distrito. Atención inmediata 24 horas para urgencias.`}
                canonicalUrl="https://cerrajerosenchamartin.madrid/contacto"
            />
            <Header />

            <main className="flex-1">
                {/* Hero / Breadcrumb - Rebel & Zen */}
                <section className="relative py-20 bg-[#293241] overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                        {/* Zen Dot Pattern */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
                        </div>
                        {/* Rebel Element */}
                        <div className="absolute top-0 right-0 text-[15rem] font-black text-white italic opacity-[0.03] rotate-[15deg] leading-none">
                            HELLO
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE6C4D]/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>

                    <div className="container relative z-10">
                        <nav className="flex items-center text-sm text-gray-400 mb-8">
                            <Link href="/" className="hover:text-white flex items-center transition-colors">
                                <HomeIcon className="h-4 w-4 mr-2" />
                                Inicio
                            </Link>
                            <ChevronRight className="h-4 w-4 mx-3" />
                            <span className="text-[#EE6C4D] font-bold">Contacto</span>
                        </nav>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight italic">
                            Estamos para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE6C4D] to-[#3D5A80]">ayudarte</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Atención al cliente y servicio técnico de cerrajería en Chamartín.
                            Respondemos al instante, sin esperas y con la máxima transparencia.
                        </p>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="py-24 bg-white relative">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-32">
                            {/* Card Teléfono */}
                            <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-gray-100 hover:scale-[1.02] transition-transform flex flex-col items-center text-center">
                                <div className="bg-[#EE6C4D]/10 p-5 rounded-3xl mb-6">
                                    <Phone className="h-8 w-8 text-[#EE6C4D]" />
                                </div>
                                <h3 className="text-xl font-black text-[#293241] mb-2 uppercase tracking-tighter">Llámanos ahora</h3>
                                <p className="text-gray-500 mb-6 text-sm">Disponible 24h para urgencias en Chamartín</p>
                                <a href={`tel:${APP_PHONE}`} onClick={() => trackPhoneClick("contact_page")} className="text-2xl font-black text-[#EE6C4D] hover:opacity-80 transition-opacity italic">
                                    {APP_PHONE_DISPLAY}
                                </a>
                            </div>

                            {/* Card Email */}
                            <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-gray-100 hover:scale-[1.02] transition-transform flex flex-col items-center text-center">
                                <div className="bg-[#3D5A80]/10 p-5 rounded-3xl mb-6">
                                    <Mail className="h-8 w-8 text-[#3D5A80]" />
                                </div>
                                <h3 className="text-xl font-black text-[#293241] mb-2 uppercase tracking-tighter">Email directo</h3>
                                <p className="text-gray-500 mb-6 text-sm">Para presupuestos y consultas no urgentes</p>
                                <a href={`mailto:${APP_EMAIL}`} onClick={() => trackEmailClick("contact_page")} className="text-lg font-bold text-[#3D5A80] hover:opacity-80 transition-opacity">
                                    {APP_EMAIL}
                                </a>
                            </div>

                            {/* Card Ubicación */}
                            <div className="bg-white rounded-[32px] p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-gray-100 hover:scale-[1.02] transition-transform flex flex-col items-center text-center">
                                <div className="bg-[#EE6C4D]/10 p-5 rounded-3xl mb-6">
                                    <MapPin className="h-8 w-8 text-[#EE6C4D]" />
                                </div>
                                <h3 className="text-xl font-black text-[#293241] mb-2 uppercase tracking-tighter">Atención Local</h3>
                                <p className="text-gray-500 mb-6 text-sm">Distrito de Chamartín</p>
                                <p className="font-bold text-gray-800 tracking-tight">
                                    {APP_ADDRESS}
                                </p>
                            </div>
                        </div>

                        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Info de contacto y horarios */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-4xl font-black text-[#293241] mb-6 italic tracking-tight">Atención <span className="text-[#EE6C4D]">Empresarial</span></h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        Ofrecemos servicios integrales de cerrajería para comunidades de vecinos, locales comerciales y empresas en todos los barrios de Chamartín.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="text-green-500 h-5 w-5" />
                                            <span className="font-bold text-gray-700">Factura Oficial</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="text-green-500 h-5 w-5" />
                                            <span className="font-bold text-gray-700">Garantía por Escrito</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="text-green-500 h-5 w-5" />
                                            <span className="font-bold text-gray-700">Seguro RC</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="text-green-500 h-5 w-5" />
                                            <span className="font-bold text-gray-700">Técnicos Homologados</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-white p-3 rounded-2xl shadow-sm">
                                            <Clock className="h-6 w-6 text-[#EE6C4D]" />
                                        </div>
                                        <h3 className="text-2xl font-black text-[#293241] uppercase tracking-tighter">Atención al Cliente</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                            <span className="font-bold text-gray-900">Lunes a Viernes (Mañanas)</span>
                                            <span className="text-gray-600">09:30 – 14:00</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                            <span className="font-bold text-gray-900">Lunes a Viernes (Tardes)</span>
                                            <span className="text-gray-600">17:00 – 20:00</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                            <span className="font-bold text-gray-900">Sábados</span>
                                            <span className="text-gray-600">10:00 – 14:00</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="font-black text-[#EE6C4D] uppercase italic">Servicio Urgente</span>
                                            <span className="font-black text-[#EE6C4D]">24 HORAS / 365 DÍAS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mapa */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-[#3D5A80]/5 rounded-[3rem] transform -rotate-2"></div>
                                <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.7403445743757!2d-3.6801481999999996!3d40.45888360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229007b93f6d7%3A0x46be79f5f0f40254!2sYoteaBRO%20-%20Cerrajeros%20Chamart%C3%ADn%2024%20horas!5e0!3m2!1ses!2ses!4v1770509400511!5m2!1ses!2ses"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Ubicación de ${APP_BUSINESS_NAME} en Google Maps`}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sellos de confianza */}
                <section className="py-20 bg-gray-50">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                            <div className="flex flex-col items-center gap-3 uppercase font-black tracking-widest text-xs text-center text-gray-500">
                                <Shield className="h-8 w-8 mb-2" />
                                Seguridad<br />Garantizada
                            </div>
                            <div className="flex flex-col items-center gap-3 uppercase font-black tracking-widest text-xs text-center text-gray-500">
                                <Clock className="h-8 w-8 mb-2" />
                                Llegamos en<br />20 Minutos
                            </div>
                            <div className="flex flex-col items-center gap-3 uppercase font-black tracking-widest text-xs text-center text-gray-500">
                                <CheckCircle className="h-8 w-8 mb-2" />
                                Precios<br />Cerrados
                            </div>
                            <div className="flex flex-col items-center gap-3 uppercase font-black tracking-widest text-xs text-center text-gray-500">
                                <Phone className="h-8 w-8 mb-2" />
                                Atención<br />Local 24h
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
