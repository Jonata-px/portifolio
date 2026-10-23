export const SiteDomain = "jfcoder.com";

export const SITE_BASE_URL = `https://${SiteDomain}`;

export const WHATSAPP_NUMBER = "5511917613909";
export const WHATSAPP_DISPLAY = "+55 11 91761-3909";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
