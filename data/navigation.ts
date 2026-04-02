export const navigation = {
  products: [
    {
      name: 'AI Voice Agents',
      href: '/products#voice-agents',
      description: 'Inbound & outbound phone agents with sub-600ms response and natural conversation',
    },
    {
      name: 'AI Text Agents',
      href: '/products#text-agents',
      description: 'Always-on chat agents for web, WhatsApp, and SMS — 24/7 lead capture and support',
    },
    {
      name: 'Custom AI Agents',
      href: '/products#custom-agents',
      description: 'Fully bespoke agents built around your industry, workflows, and data',
    },
  ],
  solutions: [
    {
      name: 'Restaurants',
      href: '/solutions#restaurants',
      description: 'Reservations, orders, and customer service',
    },
    {
      name: 'Fitness & Gyms',
      href: '/solutions#gyms',
      description: 'Class booking and membership management',
    },
    {
      name: 'Healthcare',
      href: '/solutions#healthcare',
      description: 'Appointment scheduling and patient inquiries',
    },
    {
      name: 'Real Estate',
      href: '/solutions#realestate',
      description: 'Lead qualification and property viewings',
    },
    {
      name: 'Retail & E-commerce',
      href: '/solutions#retail',
      description: 'Customer support and order management',
    },
    {
      name: 'Travel & Hospitality',
      href: '/solutions#travel',
      description: 'Booking management and concierge services',
    },
  ],
  mainNav: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', hasDropdown: true },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
} as const;
