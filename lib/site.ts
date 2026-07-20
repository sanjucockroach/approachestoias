export const SITE_URL = "https://approachestoias.com";
export const SITE_NAME = "Approaches to IAS";
export const SITE_TAGLINE = "UPSC and Beyond";
export const CONTACT_EMAIL = "hello@approachestoias.com";
export const TELEGRAM_URL = "https://t.me/approachestoias";

// Replace this single value when the confirmed business number is supplied.
export const WHATSAPP_NUMBER = "917620811812";

export function whatsappUrl(context = "your services") {
  const message = `Hi Approaches to IAS, I would like to know more about ${context}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/services", label: "Our Services" },
  { href: "/products", label: "Our Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const TRUST_SIGNALS = [
  {
    value: "UPSC-aligned",
    label: "Built around the CSE syllabus and academy workflows",
  },
  {
    value: "End-to-end",
    label: "Content, educators, community, websites, and products",
  },
  {
    value: "Aspirant-first",
    label: "Every deliverable is judged by learning value",
  },
] as const;
