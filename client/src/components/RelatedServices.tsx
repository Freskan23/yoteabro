import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface RelatedServicesProps {
  currentService: string;
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const allServices: Service[] = [
    {
      title: "Apertura de Puertas",
      description: "Servicio urgente sin daños desde 90€",
      href: "/apertura-puertas",
      icon: "🔓",
    },
    {
      title: "Cambio de Cerraduras",
      description: "Instalación de cerraduras de alta seguridad",
      href: "/cambio-cerraduras",
      icon: "🔧",
    },
    {
      title: "Cambio de Bombín",
      description: "Cambio rápido en 15-20 minutos",
      href: "/cambio-bombin",
      icon: "🔑",
    },
    {
      title: "Amaestramiento",
      description: "Una llave para múltiples puertas",
      href: "/amaestramiento",
      icon: "🗝️",
    },
  ];

  // Filtrar el servicio actual y mostrar solo 3 servicios relacionados
  const relatedServices = allServices
    .filter((service) => service.title !== currentService)
    .slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Otros servicios de cerrajería
          </h2>
          <p className="text-lg text-gray-600">
            Descubre todos nuestros servicios profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {relatedServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 hover:border-[#A52A2A]">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-[#A52A2A] font-semibold">
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/#servicios"
            className="inline-flex items-center text-[#A52A2A] hover:underline font-semibold text-lg"
          >
            Ver todos los servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

