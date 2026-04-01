/** Calendly discovery-call booking URL. Set via VITE_CALENDLY_DISCOVERY_URL in .env. */
const raw = import.meta.env.VITE_CALENDLY_DISCOVERY_URL;
export const CALENDLY_DISCOVERY_URL =
  (typeof raw === 'string' ? raw.trim() : '') || 'https://calendly.com/admin-gitavox/30min';
