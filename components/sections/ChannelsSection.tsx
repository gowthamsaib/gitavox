import React from 'react';
import { Phone, MessageSquare, MessageCircle, Code } from 'lucide-react';

const channels = [
  {
    id: 'voice',
    icon: Phone,
    title: 'Voice Call',
    description: 'Deliver natural, human-like phone conversations at scale.',
  },
  {
    id: 'chat',
    icon: MessageSquare,
    title: 'Chat',
    description: 'Deploy AI-powered conversations across web and in-app chat experiences.',
  },
  {
    id: 'sms',
    icon: MessageCircle,
    title: 'SMS',
    description: 'Engage customers through reliable, compliant text messaging workflows.',
  },
  {
    id: 'api',
    icon: Code,
    title: 'API',
    description: 'Build and orchestrate custom communication experiences through a flexible API.',
  },
];

export const ChannelsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4 text-slate-900 dark:text-white">
            True omni-channel communication.
          </h2>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {channels.map((channel, index) => (
            <div
              key={channel.id}
              className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <channel.icon className="w-8 h-8 text-slate-900 dark:text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-outfit font-bold mb-3 text-slate-900 dark:text-white">
                {channel.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
