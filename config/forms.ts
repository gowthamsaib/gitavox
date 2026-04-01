/** Formspree discovery form ID. Set via VITE_FORMSPREE_DISCOVERY_FORM_ID in .env. Default: mvzroakd. */
const raw = import.meta.env.VITE_FORMSPREE_DISCOVERY_FORM_ID;
export const FORMSPREE_DISCOVERY_FORM_ID =
  (typeof raw === 'string' ? raw.trim() : '') || 'mvzroakd';
