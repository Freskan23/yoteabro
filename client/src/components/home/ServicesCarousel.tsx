
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "wouter";
import {
    Home as HomeIcon,
    Clock,
    Wrench,
    Lock,
    Key,
    Settings,
    ArrowRight,
} from "lucide-react";

export default function ServicesCarousel() {
    const services = [
        {
            icon: <HomeIcon className="h-12 w-12 text-[#EE6C4D]" />,
            title: "Apertura de Puertas",
            description: "¿Te has dejado las llaves en casa? Abrimos puertas en todo Chamartín desde 90€. Sin romper, rápido y barato.",
            image: "/comic-apertura.webp",
            alt: "Cerrajero abriendo puerta en Chamartín Madrid - Servicio apertura puertas 24h",
            link: "/apertura-puertas",
        },
        {
            icon: <Clock className="h-12 w-12 text-[#EE6C4D]" />,
            title: "Urgencias 24 Horas",
            description: "Servicio inmediato día y noche. Llegamos en 20 minutos a cualquier punto de Chamartín, festivos incluidos.",
            image: "/comic-urgencias.webp",
            alt: "Cerrajero urgente 24 horas Chamartín - Llegamos en 20 minutos",
            link: "/urgencias-24h",
        },
        {
            icon: <Wrench className="h-12 w-12 text-[#EE6C4D]" />,
            title: "Cambio de Cerraduras",
            description: "Sustitución e instalación de cerraduras de todas las marcas. Mejora la seguridad de tu hogar hoy mismo.",
            image: "/comic-cerraduras.webp",
            alt: "Instalación de cerradura de seguridad en Chamartín Madrid",
            link: "/cambio-cerraduras",
        },
        {
            icon: <Lock className="h-12 w-12 text-[#EE6C4D]" />,
            title: "Bombines Antibumping",
            description: "Instalación de cilindros de alta seguridad. Protección contra el método bumping, ganzúa y taladro.",
            image: "/comic-bombines.webp",
            alt: "Bombín antibumping alta seguridad - Cerrajeros Chamartín",
            link: "/cambio-bombin",
        },
        {
            icon: <Key className="h-12 w-12 text-[#EE6C4D]" />,
            title: "Amaestramientos",
            description: "Olvídate de llevar inmensos llaveros. Una sola llave para abrir todas las puertas de tu comunidad o negocio.",
            image: "/comic-bombines.webp",
            alt: "Servicio de amaestramiento de llaves en Chamartín Madrid",
            link: "/amaestramiento",
        },
        {
            icon: <Settings className="h-12 w-12 text-[#EE6C4D]" />,
            title: "Mantenimiento",
            description: "Servicio de mantenimiento para comunidades de propietarios y empresas. Ajuste de muelles y puertas.",
            image: "/comic-cerraduras.webp",
            alt: "Mantenimiento de cerraduras y puertas en comunidades Chamartín",
            link: "/contacto",
        },
    ];

    return (
        <section id="servicios" className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Zen Dot Pattern background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #293241 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
            </div>
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black mb-4 text-[#293241] uppercase italic tracking-tighter">
                        Servicios de Cerrajería en <span className="text-[#EE6C4D]">Chamartín</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Soluciones profesionales para tu hogar o negocio. Calidad garantizada.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {services.map((service, index) => (
                            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <Link href={service.link}>
                                    <Card
                                        className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer h-full"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                            <img
                                                src={service.image}
                                                alt={service.alt}
                                                width="400"
                                                height="300"
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute bottom-4 left-4 z-20">
                                                <div className="bg-white/90 p-2 rounded-lg shadow-sm backdrop-blur-sm">
                                                    {service.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-black mb-3 text-[#293241] group-hover:text-[#EE6C4D] transition-colors uppercase tracking-tighter italic">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {service.description}
                                            </p>
                                            <div className="mt-4 flex items-center text-[#EE6C4D] font-bold text-sm group-hover:translate-x-1 transition-transform" aria-label={`Ver detalles sobre ${service.title}`}>
                                                Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:flex justify-end gap-2 mt-8">
                        <CarouselPrevious className="relative translate-y-0 left-0 hover:bg-[#EE6C4D] hover:text-white border-gray-200" />
                        <CarouselNext className="relative translate-y-0 right-0 hover:bg-[#EE6C4D] hover:text-white border-gray-200" />
                    </div>
                    <div className="flex md:hidden justify-center gap-2 mt-6">
                        <div className="flex gap-1">
                            {services.map((_, i) => (
                                <div key={i} className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
                            ))}
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
