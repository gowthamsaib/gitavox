export const navigation = {
  products: [
    {
      name: 'VoxFlow',
      href: '/products#voxflow',
      description: 'Automated inbound & outbound voice calls with natural AI conversations',
    },
    {
      name: 'Conversa',
      href: '/products#conversa',
      description: 'No-code AI chatbot builder for web, WhatsApp, and SMS',
    },
    {
      name: 'Custom AI Agents',
      href: '/products#custom-ai-agents',
      description: 'Fully bespoke AI agents trained on your workflows and data',
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
