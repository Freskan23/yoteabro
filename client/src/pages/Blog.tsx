import { APP_BUSINESS_NAME, APP_PHONE, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, Shield, Lock, Key, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

const blogPosts = [
  {
    id: "cerraduras-inteligentes-2026-chamartin",
    title: "Cerraduras Inteligentes 2026: La Revolución de la Seguridad en Chamartín",
    excerpt: "Las smart locks han llegado para quedarse. Descubre cómo abrir tu casa con el móvil, códigos temporales para invitados y control total desde cualquier lugar.",
    date: "2026-02-03",
    category: "Tecnología",
    icon: <Key className="h-6 w-6 text-[#EE6C4D]" />,
    image: "/blog-cerraduras-inteligentes.webp"
  },
  {
    id: "seguridad-biometrica-hogar-chamartin",
    title: "Seguridad Biométrica para tu Hogar en Chamartín: Huella y Reconocimiento Facial",
    excerpt: "Olvídate de las llaves para siempre. Los sistemas biométricos de 2026 ofrecen máxima seguridad y comodidad. Te explicamos cómo funcionan.",
    date: "2026-01-28",
    category: "Innovación",
    icon: <Shield className="h-6 w-6 text-[#EE6C4D]" />,
    image: "/blog-biometrico.webp"
  },
  {
    id: "ciberseguridad-cerraduras-conectadas",
    title: "Ciberseguridad y Cerraduras Conectadas: Cómo Proteger tu Smart Lock de Hackers",
    excerpt: "Tu cerradura inteligente puede ser hackeada si no la configuras bien. Guía de un cerrajero profesional para blindar tu hogar digital.",
    date: "2026-01-20",
    category: "Seguridad Digital",
    icon: <AlertTriangle className="h-6 w-6 text-[#EE6C4D]" />,
    image: "/blog-ciberseguridad.webp"
  },
  {
    id: "cerraduras-antibumping-chamartin-2026",
    title: "Cerraduras Antibumping en Chamartín 2026: La Guía Definitiva",
    excerpt: "El bumping sigue siendo la técnica favorita de los ladrones. Descubre qué bombines de última generación los detienen en seco.",
    date: "2026-01-15",
    category: "Prevención",
    icon: <Lock className="h-6 w-6 text-[#EE6C4D]" />,
    image: "/blog-cerradura-antibumping.webp"
  },
  {
    id: "puertas-antiokupa-chamartin-2026",
    title: "Puertas Anti-Okupa en Chamartín 2026: Protege tu Propiedad Vacía",
    excerpt: "Las ocupaciones ilegales han aumentado un 30% en Madrid. Te explicamos cómo blindar tu piso vacío con soluciones profesionales.",
    date: "2026-01-10",
    category: "Seguridad",
    icon: <Shield className="h-6 w-6 text-[#EE6C4D]" />,
    image: "/blog-puerta-antiokupa.webp"
  },
  {
    id: "cerrajero-urgente-chamartin-que-esperar",
    title: "Cerrajero Urgente en Chamartín: Qué Esperar y Cómo Evitar Estafas",
    excerpt: "¿Te has quedado fuera de casa? Aprende a distinguir un cerrajero profesional de uno fraudulento y cuánto deberías pagar realmente.",
    date: "2026-01-05",
    category: "Consejos",
    icon: <Key className="h-6 w-6 text-[#EE6C4D]" />,
    image: "/blog-cerrajero-urgente.webp"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001529]">
      <SEOHead
        title={`Blog de Seguridad y Cerrajería en ${APP_LOCATION} | ${APP_BUSINESS_NAME}`}
        description={`📰 Consejos de seguridad, avisos de robos y guías de cerrajería para los vecinos de ${APP_LOCATION}. Protege tu hogar con los mejores trucos profesionales.`}
        canonicalUrl="https://cerrajerosenchamartin.madrid/blog"
      />
      <Header />

      {/* Hero del Blog - Rebel & Zen */}
      <section className="relative py-24 overflow-hidden bg-[#001529]">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Zen Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
          </div>
          {/* Rebel Element */}
          <div className="absolute -top-10 -right-10 text-[20rem] font-black text-white italic opacity-[0.03] rotate-[15deg] leading-none">
            NEWS
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-[#EE6C4D]/10 text-[#EE6C4D] font-bold text-sm mb-6 border border-[#EE6C4D]/20">
              BLOG DE SEGURIDAD
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Consejos de seguridad para <span className="text-[#EE6C4D]">vecinos de Chamartín</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Guías prácticas, alertas de robos en la zona y trucos de cerrajero para proteger tu casa en El Viso, Castilla o Prosperidad.
            </p>
          </div>
        </div>
      </section>

      {/* Listado de Posts */}
      <section className="py-12 pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden backdrop-blur-sm">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001529] to-transparent opacity-60 z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    width="400"
                    height="250"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-[#001529]/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    {post.icon}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-blue-200/60 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="ml-auto text-[#EE6C4D] font-semibold px-2 py-0.5 rounded bg-[#EE6C4D]/10 border border-[#EE6C4D]/20">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#EE6C4D] transition-colors leading-tight">
                    <Link href={`/blog/${post.id}`}>
                      <span className="cursor-pointer">{post.title}</span>
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-blue-100/70 text-base mt-2 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.id}`}>
                    <div className="w-full">
                      <Button variant="ghost" className="w-full group/btn text-white hover:text-[#EE6C4D] hover:bg-white/5 justify-between border border-white/10 hover:border-[#EE6C4D]/30 cursor-pointer">
                        Leer artículo completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Rebel & Zen */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #EE6C4D 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}>
        </div>
        <div className="container text-center relative z-10">
          <div className="max-w-2xl mx-auto bg-[#001529] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Te preocupa la seguridad de tu barrio?</h2>
            <p className="text-xl text-blue-100/80 mb-8">
              Hacemos estudios de seguridad gratuitos en Chamartín. Llámanos y te decimos cómo mejorar tu puerta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#EE6C4D] hover:bg-[#d62828] text-white text-lg px-8 shadow-lg shadow-red-900/20">
                <a href={`tel:${APP_PHONE}`} className="flex items-center gap-2">
                  📞 Llamar ahora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
                <Link href="/#contacto">
                  <span className="cursor-pointer">Pedir presupuesto</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
