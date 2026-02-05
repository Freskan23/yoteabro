import { useState, useEffect, useRef } from "react";
import { Star, Quote, MapPin } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  zone: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María G.",
    zone: "Prosperidad",
    rating: 5,
    text: "Me quedé fuera de casa a las 2 de la madrugada. En 15 minutos estaban aquí. Profesionales y precio justo. ¡Gracias!",
    date: "Hace 3 días",
    service: "Apertura urgente",
  },
  {
    id: 2,
    name: "Carlos R.",
    zone: "El Viso",
    rating: 5,
    text: "Excelente servicio. Cambiaron el bombín de mi puerta blindada sin problemas. Muy recomendables.",
    date: "Hace 1 semana",
    service: "Cambio de bombín",
  },
  {
    id: 3,
    name: "Ana P.",
    zone: "Ciudad Jardín",
    rating: 5,
    text: "Rápidos, limpios y honestos. El precio que me dijeron por teléfono fue exactamente lo que pagué. Así da gusto.",
    date: "Hace 2 semanas",
    service: "Apertura de puerta",
  },
  {
    id: 4,
    name: "Javier M.",
    zone: "Hispanoamérica",
    rating: 5,
    text: "Intentaron entrar en mi casa y necesitaba cambiar la cerradura urgentemente. Vinieron en 20 min y me instalaron una cerradura de alta seguridad.",
    date: "Hace 3 semanas",
    service: "Cerradura de seguridad",
  },
  {
    id: 5,
    name: "Laura S.",
    zone: "Nueva España",
    rating: 5,
    text: "Muy profesionales. Me explicaron todas las opciones y me recomendaron la que mejor se adaptaba a mi presupuesto.",
    date: "Hace 1 mes",
    service: "Cambio de cerradura",
  },
  {
    id: 6,
    name: "Pedro L.",
    zone: "Castilla",
    rating: 5,
    text: "Servicio impecable. Llegaron puntuales, trabajaron rápido y dejaron todo limpio. Sin duda repetiré.",
    date: "Hace 1 mes",
    service: "Amaestramiento",
  },
];

function AnimatedStars({ rating, delay = 0 }: { rating: number; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 transition-all duration-300 ${
            isVisible && i < rating
              ? "text-yellow-400 fill-yellow-400 animate-star-pop"
              : "text-gray-200"
          }`}
          style={{ animationDelay: `${i * 100}ms` }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <div
      className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Quote icon decoration */}
      <Quote className="absolute top-4 right-4 h-12 w-12 text-gray-100 group-hover:text-[#EE6C4D]/10 transition-colors" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="font-black text-[#293241] text-lg">{testimonial.name}</h4>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <MapPin className="h-3 w-3" />
              <span>{testimonial.zone}</span>
            </div>
          </div>
          <AnimatedStars rating={testimonial.rating} delay={index * 200} />
        </div>

        {/* Service badge */}
        <span className="inline-block px-3 py-1 bg-[#EE6C4D]/10 text-[#EE6C4D] text-xs font-bold rounded-full mb-4">
          {testimonial.service}
        </span>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed mb-4">"{testimonial.text}"</p>

        {/* Date */}
        <p className="text-sm text-gray-400">{testimonial.date}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EE6C4D] font-black text-xs uppercase tracking-[0.4em] mb-4 block">
            Lo que dicen nuestros vecinos
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#293241] uppercase italic tracking-tighter leading-none mb-6">
            Opiniones <span className="text-[#EE6C4D]">reales</span>
          </h2>
          <p className="text-xl text-gray-500">
            Más de 1.500 vecinos de Chamartín ya confían en yoteabro
          </p>
        </div>

        {/* Google rating summary */}
        <div className="flex items-center justify-center gap-6 mb-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-black text-[#293241]">4.9</span>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400">Google Reviews</span>
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <div className="text-center">
            <p className="text-2xl font-black text-[#293241]">+150</p>
            <p className="text-xs text-gray-400">Reseñas verificadas</p>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=yoteabro+chamartin+opiniones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#EE6C4D] font-bold hover:underline"
          >
            Ver todas las opiniones en Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
