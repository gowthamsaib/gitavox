import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/HeroSection';
import { VoxFlowSection } from '../components/sections/VoxFlowSection';
import { ComparisonSection } from '../components/sections/ComparisonSection';
import { ChannelsSection } from '../components/sections/ChannelsSection';
import { IntegrationsSection } from '../components/sections/IntegrationsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CALENDLY_DISCOVERY_URL } from '../config/calendly';
import { ArrowRight, CheckCircle } from 'lucide-react';

const trustPoints = [
  'Deploy in 48 hours — no lengthy onboarding',
  '24/7 coverage across voice, SMS, and chat',
  'Integrates with your CRM, calendar, and helpdesk',
  'Custom-trained on your scripts and FAQs',
];

export const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <VoxFlowSection />
      <ComparisonSection />

      {/* Trust bar */}
      <section className="py-16 px-6 bg-slate-50/50 dark:bg-white/[0.02] border-y border-slate-200/80 dark:border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <ChannelsSection />
      <IntegrationsSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
            <div className="relative glass-card rounded-3xl p-12 border border-slate-200/80 dark:border-white/10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                Get Started
              </div>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
                Ready to Deploy Your First Agent?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
                Book a free 30-minute demo. We'll show you exactly how a GitaVox agent would work for your specific use case — no pressure, all value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY_DISCOVERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Book a Free Demo
                </a>
                <Link
                  to="/solutions"
                  className="px-8 py-4 bg-slate-200/80 border border-slate-300 font-bold rounded-2xl hover:bg-slate-300/80 transition-all flex items-center justify-center gap-2 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white"
                >
                  Explore Use Cases <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
