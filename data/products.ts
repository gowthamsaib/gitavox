import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'voice-agents',
    name: 'AI Voice Agents',
    tagline: 'Calls that sound human. Results that are measurable.',
    description:
      'AI-powered phone agents that handle inbound support and outbound sales with natural, low-latency conversations. They understand intent, respond in under 600ms, manage interruptions, and take real actions — booking appointments, updating CRMs, and qualifying leads — without human involvement.',
    image: '',
    features: ['Sub-600ms Response', 'Multilingual (30+ Languages)', 'CRM & Calendar Integration', 'Inbound & Outbound', 'Interruption Handling', '24/7 Availability'],
  },
  {
    id: 'text-agents',
    name: 'AI Text Agents',
    tagline: 'Always-on chat across every channel your customers use.',
    description:
      'Intelligent text agents that engage customers across web chat, SMS, WhatsApp, and email — resolving queries, capturing leads, and booking meetings autonomously. They maintain context across channels and escalate to humans with full conversation history when needed.',
    image: '',
    features: ['Web, SMS & WhatsApp', 'Lead Capture & Qualification', 'Omnichannel Context', 'Human Escalation', 'Sentiment Detection', '24/7 Availability'],
  },
  {
    id: 'custom-agents',
    name: 'Custom AI Agents',
    tagline: 'Built around your workflows, not the other way around.',
    description:
      'AI agents designed specifically for your industry and internal processes. Scoped to your knowledge base, connected to your existing tools, and trained on your business logic — whether you need voice, text, or both. From healthcare intake to sales qualification, we build agents that fit your operation exactly.',
    image: '',
    features: ['Industry-Specific Training', 'Knowledge Base Scoped', 'Voice + Text Options', 'Works with Any CRM', 'Compliance-Ready', 'Fully Managed'],
  },
];
