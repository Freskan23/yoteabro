import { useState, useEffect, useRef } from "react";
import { Star, Quote, MapPin } from "lucide-react";
import { GMB_REVIEWS_URL } from "@/const";
import { trackGoogleReviewsClick } from "@/lib/analytics";

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
            href={GMB_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGoogleReviewsClick("testimonials")}
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:scale-105 transition-all"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-bold text-[#293241]">Ver todas las opiniones en Google</span>
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
