export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "YOTEABRO Cerrajeros Chamartín 24h | Urgencias 20 min";
export const APP_DESCRIPTION = "Cerrajeros en Chamartín 24 horas con YOTEABRO. Llegamos en 20 minutos. Apertura de puertas profesional. Más de 20 años de experiencia. Llama ahora.";

export const APP_LOGO = "/logo-yoteabro.webp";

// YOTEABRO - Business Information
export const APP_PHONE = "919932967";
export const APP_PHONE_DISPLAY = "919 932 967";
export const APP_EMAIL = "contacto@yoteabro.com";
export const APP_BUSINESS_NAME = "YOTEABRO";
export const APP_BUSINESS_LEGAL_NAME = "YOTEABRO S.L.";
export const APP_NIF = "B86047636";
export const APP_ADDRESS = "Av. de Alberto Alcocer, 43, 28016 Madrid (Chamartín)";
export const APP_LEGAL_ADDRESS = "Av. de Alberto Alcocer, 43, 28016 Madrid (Chamartín)";
export const APP_LOCATION = "Chamartín";
export const APP_SERVICE_AREA = "Chamartín y Norte de Madrid";

// Google My Business URLs
export const GMB_CID = "5097645925446451796";
export const GMB_PLACE_ID = "0xd4229007b93f6d7:0x46be79f5f0f40254";
export const GMB_URL = "https://www.google.com/maps?cid=5097645925446451796";
export const GMB_REVIEWS_URL = "https://www.google.com/search?hl=es-ES&gl=es&q=YoteaBRO+-+Cerrajeros+Chamart%C3%ADn+24+horas,+Av.+de+Alberto+Alcocer,+43,+Chamart%C3%ADn,+28016+Madrid&ludocid=5097645925446451796&lsig=AB86z5WVCLEoZ09Cn4wRlahwmI_8#lrd=0xd4229007b93f6d7:0x46be79f5f0f40254,3";
export const GMB_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.7403445743757!2d-3.6801481999999996!3d40.45888360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229007b93f6d7%3A0x46be79f5f0f40254!2sYoteaBRO%20-%20Cerrajeros%20Chamart%C3%ADn%2024%20horas!5e0!3m2!1ses!2ses!4v1770509400511!5m2!1ses!2ses";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
