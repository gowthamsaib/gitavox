import React from 'react';
import { Link } from 'react-router-dom';
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
import { Brain, Workflow } from 'lucide-react';
import { IconType } from 'react-icons';

interface Integration {
  name: string;
  icon: IconType;
  color: string;
}

const topRowIntegrations: Integration[] = [
  { name: 'Twilio', icon: SiTwilio, color: '#F22F46' },
  { name: 'Vonage', icon: SiVonage, color: '#000000' },
  { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
  { name: 'Make', icon: SiMake, color: '#6D3AEF' },
  { name: 'Zapier', icon: SiZapier, color: '#FF4A00' },
  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
];

const bottomRowIntegrations: Integration[] = [
  { name: 'HubSpot', icon: SiHubspot, color: '#FF7A59' },
  { name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0' },
  { name: 'Google Calendar', icon: SiGooglecalendar, color: '#4285F4' },
  { name: 'Go High Level', icon: Workflow as IconType, color: '#6366f1' },
  { name: 'Custom LLM', icon: Brain as IconType, color: '#8b5cf6' },
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            Seamless Integrations with Your Tech Stack
          </h2>
          <Link
            to="/integrations"
            className="inline-block px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
          >
            View All Integrations
          </Link>
        </div>

        {/* Integration Logos Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* First Row - Scroll Right */}
          <div className="flex gap-8 items-center mb-8 animate-scroll-right">
            {[...topRowIntegrations, ...topRowIntegrations].map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div key={`${integration.name}-${index}`} className="flex-shrink-0 group">
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 cursor-default">
                    <Icon
                      size={28}
                      className="opacity-50 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: integration.color }}
                    />
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap opacity-60 group-hover:opacity-100 group-hover:text-slate-900 dark:group-hover:text-white transition-all duration-300">
                      {integration.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row - Scroll Left */}
          <div className="flex gap-8 items-center animate-scroll-left">
            {[...bottomRowIntegrations, ...bottomRowIntegrations].map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div key={`${integration.name}-${index}-2`} className="flex-shrink-0 group">
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 cursor-default">
                    <Icon
                      size={28}
                      className="opacity-50 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: integration.color }}
                    />
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap opacity-60 group-hover:opacity-100 group-hover:text-slate-900 dark:group-hover:text-white transition-all duration-300">
                      {integration.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
