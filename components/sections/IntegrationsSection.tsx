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
                <div
                  key={`${integration.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all">
                    <Icon
                      size={32}
                      className="text-slate-600 dark:text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">
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
                <div
                  key={`${integration.name}-${index}-2`}
                  className="flex-shrink-0 group"
                >
                  <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all">
                    <Icon
                      size={32}
                      className="text-slate-600 dark:text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">
                      {integration.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          display: flex;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};
