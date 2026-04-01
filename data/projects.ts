import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'AI Call Center (Kylie)',
    category: 'Voice Automation',
    outcome: 'Higher PT show rates, increased retention',
    description:
      'Expansion of inbound and outbound calling engines for personal training outreach and guest pass redemption.',
    image: 'https://picsum.photos/seed/callcenter/600/400',
    date: 'Q1 2026',
  },
  {
    id: 'p2',
    title: 'Predictive Member Modeling',
    category: 'Data Science',
    outcome: '>35% conversion increase',
    description:
      'AI-driven lead scoring to identify high-intent presale members and automate routing.',
    image: 'https://picsum.photos/seed/modeling/600/400',
    date: 'Q1 2026',
  },
  {
    id: 'p3',
    title: 'Virtual Business Partner',
    category: 'Analytics',
    outcome: 'Real-time insights for 100+ clubs',
    description:
      'Natural language data queries (e.g., "How is Abilene pacing vs target?") integrated with Gemini models.',
    image: 'https://picsum.photos/seed/dash/600/400',
    date: 'Q1 2026',
  },
  {
    id: 'p4',
    title: 'AI-Powered CRM Automation',
    category: 'Lifecycle',
    outcome: 'Zero additional manual effort',
    description:
      'Automated segmentation and creative content production for high-volume marketing outreach.',
    image: 'https://picsum.photos/seed/crm/600/400',
    date: 'Q1 2026',
  },
];
