import { useState } from "react";
import { Star, MapPin, Calendar, Filter } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import SEOHead from "@/components/SEOHead";

export default function Testimonios() {
  const [selectedService, setSelectedService] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const services = ["all", ...Array.from(new Set(testimonials.map(t => t.service)))];
  const locations = ["all", ...Array.from(new Set(testimonials.map(t => t.location)))];

  const filteredTestimonials = testimonials.filter(t => {
    const serviceMatch = selectedService === "all" || t.service === selectedService;
    const locationMatch = selectedLocation === "all" || t.location === selectedLocation;
    return serviceMatch && locationMatch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <SEOHead
        title="Opiniones de Clientes - 97 Reseñas Reales | Cerrajería Aguado Leganés"
        description="Lee las 97 opiniones reales de nuestros clientes en Leganés. Valoración 5.0 estrellas en apertura de puertas, cambio de cerraduras, bombines y amaestramiento."
        canonicalUrl="https://cerrajerosdeleganes.madrid/testimonios"
      />

      <main className="min-h-screen bg-gray-50 pb-12">
        {/* Hero Section con Imagen */}
        <div className="relative h-[300px] md:h-[400px] mb-12">
          <img
            src="/testimonios-hero.png"
            alt="Cerrajero profesional con cliente satisfecho en Leganés"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-4">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Opiniones de Nuestros Clientes
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold">5.0</span>
                <span className="opacity-90">({testimonials.length} reseñas)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lee las experiencias reales de nuestros clientes en Leganés y alrededores.
              Más de 97 familias y empresas confían en nosotros para sus servicios de cerrajería.
            </p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-semibold text-gray-900">Filtrar opiniones</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Por servicio
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                >
                  <option value="all">Todos los servicios</option>
                  {services.slice(1).map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Por zona
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
                >
                  <option value="all">Todas las zonas</option>
                  {locations.slice(1).map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Mostrando <span className="font-semibold">{filteredTestimonials.length}</span> opiniones
            </div>
          </div>

          {/* Grid de testimonios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} formatDate={formatDate} />
            ))}
          </div>

          {/* CTA Final */}
          <div className="mt-16 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              ¿Necesitas un cerrajero de confianza?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Únete a las 97 familias que ya confían en nosotros
            </p>
            <a
              href="tel:614040443"
              className="inline-block bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Llamar ahora: 614 040 443
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

function TestimonialCard({ testimonial, formatDate }: { testimonial: Testimonial; formatDate: (date: string) => string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
          {testimonial.service}
        </span>
      </div>

      {/* Texto de la reseña */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        {testimonial.text}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{testimonial.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(testimonial.date)}</span>
        </div>
      </div>
    </div>
  );
}

