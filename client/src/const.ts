export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "Cerrajeros Leganés Aguado 24h | Urgencias 20 min";
export const APP_DESCRIPTION = "Cerrajeros en Leganés 24 horas. Llegamos en 20 minutos. Apertura de puertas desde 90€. Profesionales con más de 20 años de experiencia. Llama ahora.";

export const APP_LOGO = "/logo-aguado.jpg";

// Cerrajería Aguado - Business Information
export const APP_PHONE = "+34 614 040 443";
export const APP_PHONE_DISPLAY = "614 040 443";
export const APP_EMAIL = "aguado@cerrajerosleganes.madrid";
export const APP_BUSINESS_NAME = "Cerrajeros Leganés Aguado";
export const APP_BUSINESS_LEGAL_NAME = "CERRAJERIA AGUADO, S.L.";
export const APP_NIF = "B86047636";
export const APP_ADDRESS = "Av. de Fuenlabrada, 37, local 34 (Galería Sanabria), 28912 Leganés, Madrid";
export const APP_LEGAL_ADDRESS = "C/ SANTILLANA DEL MAR, 14, 28660, BOADILLA DEL MONTE, MADRID";
export const APP_LOCATION = "Leganés";
export const APP_SERVICE_AREA = "Leganés y Zona Sur de Madrid";

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
