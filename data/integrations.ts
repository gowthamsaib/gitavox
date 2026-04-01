import { IconType } from 'react-icons';
import {
  SiTwilio,
  SiVonage,
  SiN8N,
  SiMake,
  SiZapier,
  SiSlack,
  SiHubspot,
  SiGooglecalendar,
  SiSalesforce,
} from 'react-icons/si';
import { Brain, Workflow, Calendar } from 'lucide-react';

export interface Integration {
  id: string;
  name: string;
  icon: IconType;
  category: IntegrationCategory;
  description: string;
  status: 'official' | 'coming-soon' | 'community';
  color: string;
}

export type IntegrationCategory =
  | 'telephony'
  | 'automation'
  | 'crm'
  | 'calendar'
  | 'ai-llm'
  | 'communication'
  | 'all';

export const integrations: Integration[] = [
  {
    id: 'twilio',
    name: 'Twilio',
    icon: SiTwilio,
    category: 'telephony',
    description: 'Connect voice agents with Twilio for inbound/outbound calls, SMS, and programmable voice.',
    status: 'official',
    color: '#F22F46',
  },
  {
    id: 'vonage',
    name: 'Vonage',
    icon: SiVonage,
    category: 'telephony',
    description: 'Integrate with Vonage APIs for global voice, SMS, and video communications.',
    status: 'official',
    color: '#000000',
  },
  {
    id: 'go-high-level',
    name: 'Go High Level',
    icon: Workflow as IconType,
    category: 'crm',
    description: 'Seamlessly sync leads, contacts, and automate workflows with Go High Level CRM.',
    status: 'official',
    color: '#6366f1',
  },
  {
    id: 'n8n',
    name: 'n8n',
    icon: SiN8N,
    category: 'automation',
    description: 'Build powerful workflow automations connecting GitaVox with 400+ apps via n8n.',
    status: 'official',
    color: '#EA4B71',
  },
  {
    id: 'custom-llm',
    name: 'Custom LLM',
    icon: Brain as IconType,
    category: 'ai-llm',
    description: 'Bring your own LLM (OpenAI, Claude, Gemini, Llama) for tailored AI conversations.',
    status: 'official',
    color: '#8b5cf6',
  },
  {
    id: 'make',
    name: 'Make',
    icon: SiMake,
    category: 'automation',
    description: 'Automate workflows and integrate with 1000+ apps using Make (formerly Integromat).',
    status: 'official',
    color: '#6D3AEF',
  },
  {
    id: 'zapier',
    name: 'Zapier',
    icon: SiZapier,
    category: 'automation',
    description: 'Connect GitaVox to 5000+ apps with no-code Zapier automation workflows.',
    status: 'official',
    color: '#FF4A00',
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: SiSlack,
    category: 'communication',
    description: 'Send notifications, transcripts, and alerts directly to your Slack workspace.',
    status: 'official',
    color: '#4A154B',
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    icon: SiHubspot,
    category: 'crm',
    description: 'Sync call data, update contacts, and log activities automatically in HubSpot CRM.',
    status: 'official',
    color: '#FF7A59',
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    icon: SiSalesforce,
    category: 'crm',
    description: 'Integrate with Salesforce to update leads, log calls, and automate sales workflows.',
    status: 'official',
    color: '#00A1E0',
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    icon: SiGooglecalendar,
    category: 'calendar',
    description: 'Book appointments and check availability directly through Google Calendar integration.',
    status: 'official',
    color: '#4285F4',
  },
  {
    id: 'cal-com',
    name: 'Cal.com',
    icon: Calendar as IconType,
    category: 'calendar',
    description: 'Schedule meetings and sync bookings with Cal.com open-source scheduling.',
    status: 'official',
    color: '#111827',
  },
];

export const categories = [
  { id: 'all', label: 'All Integrations' },
  { id: 'telephony', label: 'Telephony' },
  { id: 'automation', label: 'Automation Platform' },
  { id: 'crm', label: 'CRM' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'ai-llm', label: 'AI & LLM' },
  { id: 'communication', label: 'Communication' },
] as const;
