export const faqs = [
  {
    id: 'what-is-ai-agent',
    question: 'What is an AI voice agent?',
    answer:
      'An AI voice agent is an autonomous system that can listen, speak, and hold natural phone conversations like a human. It uses speech recognition, large language models, and text-to-speech technology to understand callers, respond intelligently, maintain context, and take actions such as booking appointments or updating systems without relying on rigid scripts or human intervention.',
  },
  {
    id: 'how-it-works',
    question: 'How do GitaVox AI voice agents work?',
    answer:
      'GitaVox uses real-time conversational AI with low-latency speech recognition, LLM-powered conversation understanding, and natural text-to-speech. Our platform features ~600ms latency for responsive interactions, ultra-realistic voices built from real performance data, and proprietary turn-taking models that know when to speak and listen.',
  },
  {
    id: 'how-to-create',
    question: 'How do I create an AI voice agent with GitaVox?',
    answer:
      "Creating a voice agent is easy! Schedule a free discovery call where we'll discuss your business needs, identify use cases, and design a custom solution. Our team handles the setup, integration with your existing systems, and provides comprehensive training.",
  },
  {
    id: 'phone-number',
    question: 'Can I connect the agent to my existing phone number?',
    answer:
      'Yes. GitaVox supports integration with any telephony system through SIP trunking, making it easy to connect your existing phone numbers. We work with all major providers including Twilio, Vonage, and custom telephony solutions.',
  },
  {
    id: 'ai-call-center',
    question: 'What is an AI call center powered by GitaVox?',
    answer:
      'An AI call center built on GitaVox is a next-generation voice automation platform that handles inbound and outbound calls at scale. It functions as AI receptionists, intelligent IVR systems, and outbound calling agents, perfect for customer support, appointment scheduling, and lead qualification.',
  },
  {
    id: 'industries',
    question: 'What industries does GitaVox serve?',
    answer:
      'GitaVox serves a wide range of industries including restaurants, fitness & gyms, healthcare, real estate, retail & e-commerce, and travel & hospitality. Our AI agents can be customized for any industry that handles customer phone interactions.',
  },
  {
    id: 'pricing',
    question: 'How much does GitaVox cost?',
    answer:
      'GitaVox offers flexible pricing based on your specific needs, call volume, and feature requirements. Schedule a discovery call to receive a customized quote tailored to your business. We offer transparent pricing with no hidden fees.',
  },
  {
    id: 'trial',
    question: 'Is there a free trial available?',
    answer:
      'Yes! We offer a free discovery call and demo to show you how GitaVox can transform your business communications. Contact us to schedule your personalized demonstration and experience our AI voice agents in action.',
  },
] as const;

export const channels = [
  {
    id: 'voice',
    icon: 'Phone',
    title: 'Voice Call',
    description: 'Deliver natural, human-like phone conversations at scale.',
  },
  {
    id: 'chat',
    icon: 'MessageSquare',
    title: 'Chat',
    description: 'Deploy AI-powered conversations across web and in-app chat experiences.',
  },
  {
    id: 'sms',
    icon: 'MessageCircle',
    title: 'SMS',
    description: 'Engage customers through reliable, compliant text messaging workflows.',
  },
  {
    id: 'api',
    icon: 'Code',
    title: 'API',
    description: 'Build and orchestrate custom communication experiences through a flexible API.',
  },
] as const;

export const integrations = [
  'Twilio',
  'Vonage',
  'Go High Level',
  'n8n',
  '8n8',
  'Custom LLM',
  'Make',
  'Zapier',
  'Slack',
  'HubSpot',
  'Salesforce',
  'Google Calendar',
] as const;
