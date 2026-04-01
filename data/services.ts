/** Icon keys map to Lucide icons in the component (Monitor, Phone, Users). */
export const services = [
  {
    title: 'Custom LLM Orchestration',
    desc: 'Integration with Gemini, GPT-4, and Claude for specialized business tasks.',
    icon: 'Monitor' as const,
  },
  {
    title: 'Voice AI Strategy',
    desc: 'Reducing overhead in call centers through 24/7 human-like voice agents.',
    icon: 'Phone' as const,
  },
  {
    title: 'Lifecycle Automation',
    desc: 'Predictive modeling to drive retention and lifetime value.',
    icon: 'Users' as const,
  },
] as const;
