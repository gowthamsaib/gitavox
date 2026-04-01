import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { integrations, categories, IntegrationCategory } from '../data/integrations';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';

export const IntegrationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory>('all');

  const filteredIntegrations =
    selectedCategory === 'all'
      ? integrations
      : integrations.filter((int) => int.category === selectedCategory);

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Integrations
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
            Connect <span className="text-gradient">GitaVox</span> to Your Tech Stack
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Integrate with any CRM, telephony provider, automation platform, and AI models
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              Talk to Sales
            </Link>
            <a
              href="#integrations-grid"
              className="px-8 py-4 bg-slate-200/80 border border-slate-300 font-bold rounded-2xl hover:bg-slate-300/80 transition-all dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              Browse Integrations
            </a>
          </div>
        </div>
      </section>

      {/* Scrolling Logo Banner */}
      <section className="py-12 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden py-4">
            {/* Scrolling Row */}
            <div className="flex gap-8 items-center animate-scroll-banner">
              {[...integrations, ...integrations].map((integration, index) => {
                const Icon = integration.icon;
                return (
                  <div
                    key={`${integration.id}-${index}`}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10"
                  >
                    <Icon size={24} className="text-slate-600 dark:text-slate-400" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll-banner {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-banner {
            animation: scroll-banner 40s linear infinite;
            display: flex;
          }
        `}</style>
      </section>

      {/* Integrations Grid with Sidebar */}
      <section id="integrations-grid" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Categories Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id as IntegrationCategory)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Integration Cards Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration) => {
                  const Icon = integration.icon;
                  return (
                    <div
                      key={integration.id}
                      className="group glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all"
                    >
                      {/* Icon + Status Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                        </div>
                        {integration.status === 'official' && (
                          <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                            <CheckCircle size={14} />
                            <span>Official</span>
                          </div>
                        )}
                        {integration.status === 'coming-soon' && (
                          <div className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400">
                            <Clock size={14} />
                            <span>Soon</span>
                          </div>
                        )}
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                        {integration.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        {integration.description}
                      </p>

                      {/* Learn More Link */}
                      <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            Don't see your integration?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            We're constantly adding new integrations. Contact us to request a specific integration
            or build a custom connector.
          </p>
          <Link
            to="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            Request Integration
          </Link>
        </div>
      </section>
    </main>
  );
};

export default IntegrationsPage;
