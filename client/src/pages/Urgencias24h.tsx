import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    APP_BUSINESS_NAME,
    APP_LOCATION,
    APP_PHONE,
    APP_PHONE_DISPLAY,
} from "@/const";
import {
    Phone,
    Clock,
    Shield,
    Zap,
    CheckCircle,
    MapPin,
    Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedServices from "@/components/RelatedServices";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import BrandsSection from "@/components/BrandsSection";
import { Link } from "wouter";

export default function Urgencias24h() {
    const benefits = [
        "✅ Llegada en 20 minutos garantizada",
        "✅ Disponible las 24 horas del día",
        "✅ Atendemos noches, festivos y fines de semana",
        "✅ Precios transparentes y sin sorpresas",
        "✅ Cerrajeros homologados y locales de Leganés",
        "✅ Herramientas de última tecnología",
    ];

    const faqItems = [
        {
            question: "¿Cuánto tardáis realmente en llegar para una urgencia?",
            answer: "Garantizamos una llegada en menos de 20 minutos en el casco urbano de Leganés y barrios periféricos. Tenemos unidades móviles siempre preparadas."
        },
        {
            question: "¿Atendéis en festivos y de madrugada?",
            answer: "Sí, nuestro servicio es real 24/7. No importa si es Nochebuena, un domingo a las 3 AM o un festivo local de Leganés, siempre habrá un cerrajero disponible."
        },
        {
            question: "¿El precio es cerrado antes de ir?",
            answer: "Absolutamente. Te damos un presupuesto cerrado por teléfono basado en tu descripción (ej: 'llaves puestas por dentro', 'cerradura rota'). Sin sorpresas al finalizar el trabajo."
        },
        {
            question: "¿Qué pasa si no podéis abrir mi puerta?",
            answer: "Llevamos más de 20 años abriendo todo tipo de cerraduras, desde las más antiguas hasta las acorazadas digitales. Si hay una solución, la encontraremos sin causar daños innecesarios."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <SEOHead
                title={`Cerrajero Urgente Leganés ⚡ 20 Min | Aguado 24h ⭐ 5.0`}
                description={`🚨 ¿Te has quedado fuera? Cerrajero Urgente en Leganés. Llegamos en 20 min reales. Apertura de puertas y cerraduras sin daños. Precio cerrado ☎️ ¡Llama ya!`}
                canonicalUrl="https://cerrajerosdeleganes.madrid/urgencias-24h"
            />
            <Header />

            <main>
                {/* Breadcrumb */}
                <section className="bg-gray-50 py-4">
                    <div className="container">
                        <nav className="text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#A52A2A]">
                                Inicio
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 font-medium">Urgencias 24 Horas</span>
                        </nav>
                    </div>
                </section>

                {/* Hero Urgencias */}
                <section className="relative bg-gradient-to-br from-[#A52A2A] to-[#8B0000] text-white py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                    <div className="container relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/30 animate-pulse">
                            <Zap className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            <span className="font-bold uppercase tracking-wider text-sm">Servicio Urgente Leganés</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Cerrajeros Urgencias 24 Horas en Leganés <br />
                            <span className="text-yellow-400">Llegamos en 20 Minutos</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto">
                            Servicio de cerrajería rápido y económico disponible las 24h, 365 días al año. Aperturas, cambios de cerraduras y reparaciones inmediatas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-[#A52A2A] hover:bg-gray-100 text-2xl px-10 py-8 rounded-2xl shadow-xl shadow-black/20 font-bold"
                            >
                                <a href={`tel:${APP_PHONE}`}>
                                    <Phone className="mr-3 h-8 w-8" />
                                    {APP_PHONE_DISPLAY}
                                </a>
                            </Button>
                        </div>
                        <div className="mt-8 flex items-center justify-center gap-4 text-sm font-medium opacity-90">
                            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> Sin desplazamiento</span>
                            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> Precio cerrado</span>
                        </div>
                    </div>
                </section>

                {/* Copy Principal */}
                <section className="py-16 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 italic">
                                "Servicio urgente de cerrajería disponible 24 horas en Leganés. Llegamos en menos de 20 minutos para que nada detenga tu día."
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-8">
                                ¿Te has quedado fuera de casa de madrugada? ¿Has perdido las llaves un domingo por la tarde? No te preocupes. En <strong>{APP_BUSINESS_NAME}</strong> entendemos que las emergencias no tienen horario. Por eso contamos con unidades móviles distribuidas estratégicamente por todo {APP_LOCATION} para darte una respuesta inmediata.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios */}
                <section className="py-16 bg-gray-50">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">¿Por qué somos los cerrajeros 24h más rápidos de Leganés?</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                            <span className="text-[#A52A2A] font-bold">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                                <img
                                    src="/hero-cerrajero.webp"
                                    alt="Cerrajero urgente profesional en Leganés"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold italic text-lg text-shadow">"Estamos a la vuelta de la esquina. Tu tranquilidad es nuestra prioridad."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cobertura Local */}
                <section className="py-16 bg-white">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#001529]">Atención inmediata en todos los barrios</h2>
                            <p className="text-lg text-gray-600 mt-4">Nuestros técnicos están situados cerca de:</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {["Zarzaquemada", "San Nicasio", "Leganés Norte", "Arroyo Culebro", "El Carrascal", "La Fortuna", "Vereda de los Estudiantes", "Barrio de Solagua"].map((barrio, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                                    <MapPin className="h-5 w-5 text-[#A52A2A]" />
                                    {barrio}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Intermedio */}
                <section className="py-12 bg-gray-900 text-white">
                    <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold">¿Necesitas ayuda ahora mismo?</h2>
                            <p className="text-gray-400 mt-2 text-lg">Te damos precio cerrado por teléfono para evitar sorpresas.</p>
                        </div>
                        <Button asChild size="lg" className="bg-[#A52A2A] hover:bg-[#8B0000] text-xl px-10 py-8">
                            <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2">
                                <Phone className="h-6 w-6" /> {APP_PHONE_DISPLAY}
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Marcas */}
                <BrandsSection />

                {/* FAQ Personalizada */}
                <FAQSection items={faqItems} title="Dudas sobre el Servicio de Urgencias" />

                {/* Servicios Relacionados */}
                <RelatedServices currentService="Urgencias 24 Horas" />

            </main>

            <Footer />
        </div>
    );
}
