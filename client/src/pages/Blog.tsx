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
    id: "robos-trasteros-leganes-norte",
    title: "Oleada de robos en trasteros de Leganés Norte: Cómo protegerte",
    excerpt: "¿Vives en la zona de la Ronda Norte? Los trasteros son el nuevo objetivo. Descubre qué cerraduras resisten a los ladrones.",
    date: "2025-10-20",
    category: "Seguridad",
    icon: <Shield className="h-6 w-6 text-[#FF6B35]" />,
    image: "/servicio-cerraduras-3d.jpg"
  },
  {
    id: "cerraduras-antibumping-zarzaquemada",
    title: "El peligro de las llaves antiguas en los pisos de Zarzaquemada",
    excerpt: "La mayoría de bloques en Zarzaquemada tienen cerraduras de hace 20 años. El bumping las abre en segundos. ¿Es tu caso?",
    date: "2025-10-18",
    category: "Prevención",
    icon: <Lock className="h-6 w-6 text-[#FF6B35]" />,
    image: "/servicio-apertura-puertas-3d.jpg"
  },
  {
    id: "seguridad-chalets-arroyo-culebro",
    title: "Guía de seguridad para chalets en Arroyo Culebro y Valdepelayo",
    excerpt: "Vivir en un chalet es genial, pero requiere seguridad extra. Cerrojos, escudos y alarmas para dormir tranquilo.",
    date: "2025-10-15",
    category: "Hogar",
    icon: <Key className="h-6 w-6 text-[#FF6B35]" />,
    image: "/servicio-domicilio-3d.jpg"
  },
  {
    id: "llaves-coche-parquesur",
    title: "¿Perdiste las llaves del coche en Parquesur? No entres en pánico",
    excerpt: "Te explicamos paso a paso qué hacer si te quedas tirado en el parking del centro comercial. Soluciones rápidas.",
    date: "2025-10-12",
    category: "Emergencias",
    icon: <AlertTriangle className="h-6 w-6 text-[#FF6B35]" />,
    image: "/servicio-llaves-3d.jpg"
  },
  {
    id: "puertas-okupas-leganes",
    title: "Puertas Anti-Okupa: La solución para pisos vacíos en San Nicasio",
    excerpt: "Si tienes un piso cerrado en la zona antigua, cuidado. Las puertas anti-okupa son tu mejor inversión.",
    date: "2025-10-10",
    category: "Seguridad",
    icon: <Shield className="h-6 w-6 text-[#FF6B35]" />,
    image: "/servicio-cerraduras-3d.jpg"
  },
  {
    id: "bombines-seguridad-baratos",
    title: "¿Bombines de seguridad baratos? Lo barato sale caro",
    excerpt: "Analizamos las marcas que venden en ferreterías de barrio vs. lo que realmente instala un profesional.",
    date: "2025-10-08",
    category: "Consejos",
    icon: <Lock className="h-6 w-6 text-[#FF6B35]" />,
    image: "/servicio-apertura-puertas-3d.jpg"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-[#001529]">
      <SEOHead
        title={`Blog de Seguridad y Cerrajería en ${APP_LOCATION} | ${APP_BUSINESS_NAME}`}
        description={`📰 Consejos de seguridad, avisos de robos y guías de cerrajería para los vecinos de ${APP_LOCATION}. Protege tu hogar con los mejores trucos profesionales.`}
        canonicalUrl="https://cerrajerosdeleganes.madrid/blog"
      />
      <Header />

      {/* Hero del Blog */}
      <section className="relative py-24 overflow-hidden">
        {/* Fondo con efectos de luz */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004E89]/20 rounded-full blur-3xl translate-y-1/2"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] font-bold text-sm mb-6 border border-[#FF6B35]/20">
              BLOG DE SEGURIDAD
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Consejos de seguridad para <span className="text-[#FF6B35]">vecinos de Leganés</span>
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed">
              Guías prácticas, alertas de robos en la zona y trucos de cerrajero para proteger tu casa en Zarzaquemada, San Nicasio o Arroyo Culebro.
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
                    <span className="ml-auto text-[#FF6B35] font-semibold px-2 py-0.5 rounded bg-[#FF6B35]/10 border border-[#FF6B35]/20">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-[#FF6B35] transition-colors leading-tight">
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
                      <Button variant="ghost" className="w-full group/btn text-white hover:text-[#FF6B35] hover:bg-white/5 justify-between border border-white/10 hover:border-[#FF6B35]/30 cursor-pointer">
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

      {/* CTA Final */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF6B35]/5"></div>
        <div className="container text-center relative z-10">
          <div className="max-w-2xl mx-auto bg-[#001529] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Te preocupa la seguridad de tu barrio?</h2>
            <p className="text-xl text-blue-100/80 mb-8">
              Hacemos estudios de seguridad gratuitos en Leganés. Llámanos y te decimos cómo mejorar tu puerta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white text-lg px-8 shadow-lg shadow-orange-900/20">
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
