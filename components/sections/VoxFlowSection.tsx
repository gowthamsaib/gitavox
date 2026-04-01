import React from 'react';
import { Phone, Database, Zap } from 'lucide-react';
import { hero } from '../../data/site';
import VoiceWave from '../VoiceWave';

const iconMap = { Phone, Database, Zap } as const;

export const VoxFlowSection: React.FC = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
      <div className="relative glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-xs text-slate-500 font-mono">{hero.voiceEngineStatus}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-outfit font-bold text-slate-900 dark:text-white">
                {hero.voiceEngineCardTitle}
              </h2>
              <p className="text-slate-500 text-sm">{hero.voiceEngineSubtext}</p>
            </div>
            <VoiceWave />
            <div className="p-4 bg-slate-100/80 dark:bg-white/5 rounded-xl border border-slate-200/80 dark:border-white/5 space-y-2">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">{hero.intentLabel}</p>
              <p className="text-sm italic text-slate-600 dark:text-slate-300">{hero.demoQuote}</p>
            </div>
          </div>
          <div className="space-y-4">
            {hero.stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <div
                  key={stat.label}
                  className="flex items-center justify-between p-4 bg-slate-100/80 dark:bg-white/5 rounded-xl border border-slate-200/80 dark:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-blue-500 w-5 h-5" />
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);
