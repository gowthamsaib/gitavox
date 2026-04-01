import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'voxflow',
    name: 'VoxFlow',
    tagline: 'The Human Voice of AI',
    description:
      'Our premier voice agent engine capable of handling natural, low-latency conversations for inbound support and outbound sales.',
    image: 'https://picsum.photos/seed/voice/800/600',
    features: ['Low Latency ( < 800ms)', 'Emotional Intelligence', 'CRM Integration', 'Multilingual'],
  },
  {
    id: 'conversa',
    name: 'Conversa',
    tagline: 'No-Code Intelligence',
    description:
      'A visual flow builder for creating multi-channel AI assistants. Deploy to Web, WhatsApp, and Telegram in minutes.',
    image: 'https://picsum.photos/seed/chat/800/600',
    features: ['Visual Flow Editor', 'LLM Agnostic', 'Real-time Analytics', 'Lead Generation'],
  },
  {
    id: 'custom-ai-agents',
    name: 'Custom AI Agents',
    tagline: 'Tailored to Your Business',
    description:
      'AI agents built for your workflows and industry. Knowledge-base scoped, integrated with your tools, and ready for voice or chat.',
    image: 'https://picsum.photos/seed/agents/800/600',
    features: ['Industry-Specific', 'Knowledge-Base Scoped', 'CRM & Calendar Integration', '24/7'],
  },
];
