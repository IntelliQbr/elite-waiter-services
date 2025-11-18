export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "https://placehold.co/128x128/E1E7EF/1F2937?text=App";

// Contact Information
export const PHONE = "+5515991667415";
export const WHATSAPP = "+5515991667415";
export const EMAIL = "contato@elitewaiter.com";
export const LOCATION = "Sorocaba Interior e São Paulo região metropolitana";

// Social Media
export const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/elitwaiter/",
  linkedin: "https://www.linkedin.com/in/elite-waiter-1b77b7399",
  facebook: "https://www.facebook.com/elitewaiter",
};

// WhatsApp Link
export const getWhatsAppLink = (message = "Olá! Gostaria de agendar um serviço.") => {
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = WHATSAPP.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

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
