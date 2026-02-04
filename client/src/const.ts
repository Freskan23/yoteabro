export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "YOTEABRO Cerrajeros Chamartín 24h | Urgencias 20 min";
export const APP_DESCRIPTION = "Cerrajeros en Chamartín 24 horas con YOTEABRO. Llegamos en 20 minutos. Apertura de puertas profesional. Más de 20 años de experiencia. Llama ahora.";

export const APP_LOGO = "/logo-yoteabro.webp";

// YOTEABRO - Business Information
export const APP_PHONE = "919932959";
export const APP_PHONE_DISPLAY = "919 932 959";
export const APP_EMAIL = "contacto@yoteabro.com";
export const APP_BUSINESS_NAME = "YOTEABRO";
export const APP_BUSINESS_LEGAL_NAME = "YOTEABRO S.L.";
export const APP_NIF = "B86047636";
export const APP_ADDRESS = "Calle de Alberto Alcocer, 43, 28016 Madrid (Chamartín)";
export const APP_LEGAL_ADDRESS = "Calle de Alberto Alcocer, 43, 28016 Madrid (Chamartín)";
export const APP_LOCATION = "Chamartín";
export const APP_SERVICE_AREA = "Chamartín y Norte de Madrid";

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
