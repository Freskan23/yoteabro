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
  title = `Cerrajeros en ${APP_LOCATION} 24h ⚡ Urgencias | ${APP_BUSINESS_NAME}`,
  description = `🔑 Cerrajeros en ${APP_LOCATION} 24 horas. Apertura de puertas desde 90€, cambio de cerraduras y bombines de seguridad. ⚡ Llegamos en 20-30 min. ☎️ ${APP_PHONE_DISPLAY}. Servicio profesional y garantizado en toda la zona de Majadahonda, Boadilla, Pozuelo y Las Rozas.`,
  keywords = "cerrajeros majadahonda, cerrajería 24 horas majadahonda, apertura puertas majadahonda, cambio cerraduras majadahonda, cerrajero urgente majadahonda, bombín seguridad majadahonda",
  ogImage = "https://cerrajeromajadahonda.madrid/images/og-image.webp",
  canonicalUrl = "https://cerrajeromajadahonda.madrid/"
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={APP_BUSINESS_NAME} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content="Cerrajero profesional de Cerrajería Aguado en Majadahonda" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo tags para SEO local */}
      <meta name="geo.region" content="ES-M" />
      <meta name="geo.placename" content="Majadahonda" />
      <meta name="geo.position" content="40.4739;-3.8722" />
      <meta name="ICBM" content="40.4739, -3.8722" />

      {/* Información de negocio */}
      <meta name="author" content={APP_BUSINESS_NAME} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Idioma */}
      <meta httpEquiv="content-language" content="es" />
      <html lang="es" />
    </Helmet>
  );
}

