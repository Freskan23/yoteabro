import { useState } from "react";
import { Star, MapPin, Calendar, Filter, Quote, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { APP_PHONE, APP_PHONE_DISPLAY, APP_BUSINESS_NAME } from "@/const";
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
        title="Opiniones y Reseñas Reales | YOTEABRO Chamartín ⭐⭐⭐⭐⭐"
        description="Descubre por qué somos los cerrajeros mejor valorados en Chamartín. Lee 97 opiniones reales sobre apertura de puertas, cambio de cerraduras y urgencias 24h."
        canonicalUrl="https://cerrajerosenchamartin.madrid/testimonios"
      />

      <main className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-[#EE6C4D]/30">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#EE6C4D]/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#293241]/10 blur-[120px] rounded-full" />
        </div>

        {/* Hero Section - Rebel & Zen */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            {/* Zen Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
            </div>
            {/* Rebel Element */}
            <div className="absolute top-0 right-0 text-[15rem] font-black text-white italic opacity-[0.02] rotate-[-15deg] leading-none">
              LOVE
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EE6C4D]/10 border border-[#EE6C4D]/20 text-[#EE6C4D] mb-6 backdrop-blur-md">
                <Star className="w-4 h-4 fill-[#EE6C4D]" />
                <span className="text-sm font-bold tracking-wider uppercase">97 Reseñas de 5 Estrellas</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">
                La confianza de todo <br />
                <span className="text-[#EE6C4D] italic">Chamartín</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
                No lo decimos nosotros, lo dicen nuestros clientes. Comprometidos con la rapidez,
                la transparencia y la seguridad en cada barrio de nuestro distrito.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {[
                  { label: "Puntuación", value: "5.0/5", icon: Star },
                  { label: "Reseñas", value: "97+", icon: MessageSquare },
                  { label: "Barrios", value: "6", icon: MapPin },
                  { label: "Garantía", value: "100%", icon: CheckCircle2 },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
                    <stat.icon className="w-5 h-5 text-[#EE6C4D] mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            {/* Advanced Glassmorphism Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-6xl mx-auto mb-16 p-6 md:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex items-center gap-4 text-white shrink-0">
                  <div className="p-3 rounded-xl bg-[#EE6C4D]/10 border border-[#EE6C4D]/20">
                    <Filter className="w-6 h-6 text-[#EE6C4D]" />
                  </div>
                  <div>
                    <h2 className="font-bold text-xl">Filtrar Experiencias</h2>
                    <p className="text-sm text-slate-500">Encuentra opiniones en tu zona</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Tipo de Servicio</label>
                    <div className="relative group">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-[#020617] border border-slate-800 text-white rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE6C4D]/50 transition-all cursor-pointer group-hover:border-slate-700"
                      >
                        <option value="all">Todos los trabajos</option>
                        {services.slice(1).map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <Star className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Barrio de Chamartín</label>
                    <div className="relative group">
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full bg-[#020617] border border-slate-800 text-white rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[#EE6C4D]/50 transition-all cursor-pointer group-hover:border-slate-700"
                      >
                        <option value="all">Todo el distrito</option>
                        {locations.slice(1).map(l => <option key={l} value={l}>{l}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Masonry-ish Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredTestimonials.map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <TestimonialCard testimonial={testimonial} formatDate={formatDate} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results Fallback */}
            {filteredTestimonials.length === 0 && (
              <div className="text-center py-20 bg-slate-900/40 border border-dashed border-slate-800 rounded-3xl">
                <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No se han encontrado reseñas</h3>
                <p className="text-slate-500">Prueba ajustando los filtros de búsqueda</p>
              </div>
            )}

            {/* Premium Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-32 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#EE6C4D] to-[#293241] blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-[#020617] border border-slate-800 rounded-[2.5rem] p-12 text-center overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Quote className="w-64 h-64 text-[#EE6C4D]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
                  Súmate a la tranquilidad <br />
                  de <span className="text-[#EE6C4D]">97 familias</span> satisfechas
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
                  Estamos a menos de 20 minutos de ti. Llámanos ahora y recibe un presupuesto cerrado sin compromiso en Chamartín.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href={`tel:${APP_PHONE}`}
                    className="flex items-center gap-3 bg-[#EE6C4D] hover:bg-[#c1121f] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#EE6C4D]/20"
                  >
                    {APP_PHONE_DISPLAY}
                  </a>
                  <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Servicio Activo 24h</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function TestimonialCard({ testimonial, formatDate }: { testimonial: Testimonial; formatDate: (date: string) => string }) {
  return (
    <div className="h-full flex flex-col bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:bg-slate-900/70 transition-all duration-500 group relative">
      <div className="absolute top-6 right-8 text-slate-800 group-hover:text-orange-500/10 transition-colors pointer-events-none">
        <Quote className="w-12 h-12 rotate-180" />
      </div>

      {/* Header Info */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-2xl font-black text-orange-500 border border-slate-700 shadow-inner">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-lg text-white group-hover:text-orange-500 transition-colors uppercase tracking-tight">{testimonial.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < testimonial.rating ? 'fill-orange-500 text-orange-500' : 'text-slate-800'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[10px] font-bold text-orange-400 uppercase tracking-widest">
          {testimonial.service}
        </div>
        <p className="text-slate-400 leading-relaxed text-[15px] mb-8 font-medium italic italic-none group-hover:text-slate-300 transition-colors">
          "{testimonial.text}"
        </p>
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
        <div className="flex items-center gap-2 text-slate-500">
          <MapPin className="w-4 h-4 text-orange-500/50" />
          <span className="text-xs font-bold uppercase tracking-widest">{testimonial.location}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-bold">{formatDate(testimonial.date)}</span>
        </div>
      </div>
    </div>
  );
}
