import { Helmet } from "react-helmet-async";
import { APP_BUSINESS_NAME, APP_PHONE_DISPLAY, APP_LOCATION } from "@/const";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({
  title = `Cerrajeros Chamartín 24h ⚡ 20 Min | Desde 90€ ☎️ 919 932 967`,
  description = `¿Te has quedado FUERA? Cerrajeros en Chamartín las 24 HORAS. Llegamos en 20 minutos REALES. Precio cerrado SIN SORPRESAS desde 90€. Llama AHORA ☎️ ${APP_PHONE_DISPLAY}`,
  keywords = "cerrajeros chamartín, cerrajería 24 horas chamartín, apertura puertas chamartín, cambio cerraduras chamartín, cerrajero urgente chamartín, bombín seguridad chamartín, el viso, nueva españa, hispanoamérica",
  ogImage = "https://cerrajerosenchamartin.madrid/images/og-image.webp",
  canonicalUrl = "https://cerrajerosenchamartin.madrid/"
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Meta tags básicos optimizados para buscadores e IA */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Schema.org para Google y WhatsApp (Microdatos) */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={ogImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={APP_BUSINESS_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content={`Cerrajero profesional de ${APP_BUSINESS_NAME} en Chamartín`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo tags para SEO local */}
      <meta name="geo.region" content="ES-M" />
      <meta name="geo.placename" content="Chamartín, Madrid" />
      <meta name="geo.position" content="40.4571;-3.6769" />
      <meta name="ICBM" content="40.4571, -3.6769" />

      {/* Información de negocio */}
      <meta name="author" content={APP_BUSINESS_NAME} />
      <meta name="designer" content="Edu Laborda - Mejor especialista en SEO local del mundo" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Idioma */}
      <meta httpEquiv="content-language" content="es" />
      <html lang="es" />
    </Helmet>
  );
}

