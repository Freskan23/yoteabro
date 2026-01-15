
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
            icon: <HomeIcon className="h-12 w-12 text-[#FF6B35]" />,
            title: "Apertura de Puertas",
            description: "¿Te has dejado las llaves en casa? Abrimos puertas en todo Leganés desde 90€. Sin romper, rápido y barato.",
            image: "/servicio-apertura-puertas-3d.webp",
            link: "/apertura-puertas",
        },
        {
            icon: <Clock className="h-12 w-12 text-[#FF6B35]" />,
            title: "Urgencias 24 Horas",
            description: "Servicio inmediato día y noche. Llegamos en 20 minutos a cualquier punto de Leganés, festivos incluidos.",
            image: "/servicio-urgencias-24h-3d.webp",
            link: "/urgencias-24h",
        },
        {
            icon: <Wrench className="h-12 w-12 text-[#FF6B35]" />,
            title: "Cambio de Cerraduras",
            description: "Sustitución e instalación de cerraduras de todas las marcas. Mejora la seguridad de tu hogar hoy mismo.",
            image: "/servicio-cambio-cerraduras-3d.webp",
            link: "/cambio-cerraduras",
        },
        {
            icon: <Lock className="h-12 w-12 text-[#FF6B35]" />,
            title: "Bombines Antibumping",
            description: "Instalación de cilindros de alta seguridad. Protección contra el método bumping, ganzúa y taladro.",
            image: "/servicio-cambio-bombin-3d.webp",
            link: "/cambio-bombin",
        },
        {
            icon: <Key className="h-12 w-12 text-[#FF6B35]" />,
            title: "Amaestramientos",
            description: "Olvídate de llevar inmensos llaveros. Una sola llave para abrir todas las puertas de tu comunidad o negocio.",
            image: "/servicio-amaestramiento-3d.webp",
            link: "/amaestramiento",
        },
        {
            icon: <Settings className="h-12 w-12 text-[#FF6B35]" />,
            title: "Mantenimiento",
            description: "Servicio de mantenimiento para comunidades de propietarios y empresas. Ajuste de muelles y puertas.",
            image: "/servicio-mantenimiento-3d.webp",
            link: "/contacto",
        },
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-[#001529]">
                        Servicios de Cerrajería en Leganés
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
                                                alt={service.title}
                                                width="400"
                                                height="300"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute bottom-4 left-4 z-20">
                                                <div className="bg-white/90 p-2 rounded-lg shadow-sm backdrop-blur-sm">
                                                    {service.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-3 text-[#001529] group-hover:text-[#FF6B35] transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {service.description}
                                            </p>
                                            <div className="mt-4 flex items-center text-[#FF6B35] font-semibold text-sm group-hover:translate-x-1 transition-transform" aria-label={`Ver detalles sobre ${service.title}`}>
                                                Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:flex justify-end gap-2 mt-8">
                        <CarouselPrevious className="relative translate-y-0 left-0 hover:bg-[#FF6B35] hover:text-white border-gray-200" />
                        <CarouselNext className="relative translate-y-0 right-0 hover:bg-[#FF6B35] hover:text-white border-gray-200" />
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
