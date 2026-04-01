export const hero = {
  badge: 'AI Voice & Text Agents for B2B',
  headline: 'Your Business Deserves Agents',
  headlineHighlight: 'That Never Sleep',
  subline:
    'Replace your IVR. Reclaim your revenue. GitaVox deploys AI voice and text agents that handle calls, qualify leads, and book appointments — 24/7, without adding headcount.',
  ctaPrimary: 'Book a Free Demo',
  ctaSecondary: 'See How It Works',
  voiceEngineStatus: 'VOICE_ENGINE_STATUS: OPERATIONAL',
  voiceEngineSubtext: 'Processing real-time semantic intent...',
  voiceEngineCardTitle: 'VoxFlow Live Audio Buffer',
  intentLabel: 'Detected Intent: Appointment_Booking',
  demoQuote: '"Sure, I can help you find a spot for your PT session on Tuesday."',
  stats: [
    { label: 'Latency', value: '420ms', icon: 'Phone' as const },
    { label: 'Uptime', value: '99.99%', icon: 'Database' as const },
    { label: 'Token Efficiency', value: '94%', icon: 'Zap' as const },
  ],
} as const;

export const productsSection = {
  title: 'Flagship',
  titleHighlight: 'Products',
  subline: 'In-house built solutions designed for high-performance enterprise automation.',
  established: '',
  explore: 'Explore',
} as const;

export const roadmapSection = {
  title: 'AI Roadmap',
  titleHighlight: 'Q1 2026',
  subline: 'Our current development cycles and deployed high-impact strategic initiatives.',
  targetOutcome: 'Target Outcome:',
} as const;

export const audioQnaSection = {
  title: 'Hear GitaVox in Action',
  subline: 'Visitor asks, AI answers – how GitaVox fits your business.',
  summary: 'Visitor questions → AI explains GitaVox and use cases across industries.',
  audioFilename: 'qna-gitavox-demo.wav',
} as const;

export const servicesSection = {
  title: 'End-to-End',
  titleHighlight: 'AI Consultancy',
  ctaTitle: 'Start Your Transformation',
  ctaSubline: 'Work with our elite team of engineers and data scientists to build the future of your company.',
  firstNamePlaceholder: 'First name',
  lastNamePlaceholder: 'Last name',
  emailPlaceholder: 'company@email.com',
  notePlaceholder: 'Optional note (e.g. preferred time)',
  ctaButton: 'Schedule Discovery Call',
  ctaContinue: 'Continue to calendar',
  thanksMessage: "Thanks! We've received your details and will reach out shortly to schedule your discovery call.",
} as const;

export const footer = {
  tagline:
    'GitaVox builds AI voice and text agents that work 24/7 — so your team can focus on what humans do best.',
  labs: [
    { label: 'VoxFlow', href: '/products#voxflow' },
    { label: 'Conversa', href: '/products#conversa' },
    { label: 'Custom AI', href: '/products#custom-ai-agents' },
  ],
  contact: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gitavox-inc', external: true },
    { label: 'Email Us', href: 'mailto:admin@gitavox.tech', external: false },
    { label: 'Privacy Policy', href: '/privacy', external: false },
    { label: 'Terms of Service', href: '/terms', external: false },
  ],
  copyright: '© 2026 GitaVox Technologies. All rights reserved.',
  coords: { lat: '', lng: '' },
} as const;
