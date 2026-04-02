import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const CALENDLY_URL = 'https://calendly.com/admin-gitavox/30min';

const features = [
  '1 AI voice or text agent, custom-built for your business',
  'Up to 1,000 conversation minutes/month',
  'CRM or calendar integration included',
  'Live in 48 hours',
  'Weekly performance report',
  'Direct access to founding team',
];

export const PricingPage: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="Pricing | GitaVox Founder Offer — $800/mo"
        description="Simple, transparent pricing. One custom AI agent for your business — $800/month, 3-month minimum. Only 5 founder spots available this month."
        path="/pricing"
      />
      {/* Page Header */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
            Founder Offer · April 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
            Simple pricing.{' '}
            <span className="text-gradient">No surprises.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            We're onboarding our first 5 clients this month. One plan, full service.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-24 px-6">
        <div className="max-w-[480px] mx-auto">
          <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 p-8 hover:border-blue-500/30 transition-all">

            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Founder pricing — 5 spots only
            </div>

            {/* Price */}
            <div className="mb-2">
              <span className="text-6xl font-outfit font-extrabold text-slate-900 dark:text-white">$800</span>
              <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">/mo</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">3-month minimum engagement</p>
            <p className="text-slate-400 dark:text-slate-500 text-sm mb-8">+ $300 one-time setup fee</p>

            {/* Divider */}
            <div className="border-t border-slate-200/80 dark:border-white/10 mb-8" />

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center mt-0.5">
                    <Check size={11} className="text-blue-500" strokeWidth={3} />
                  </div>
                  <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-[1.02] active:scale-[0.98] text-base"
            >
              Book a Free Demo
            </a>

            {/* Scarcity */}
            <p className="text-center text-amber-600 dark:text-amber-400 text-sm font-semibold mt-4">
              3 of 5 spots remaining this month
            </p>
          </div>

          {/* Custom quote link */}
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-8">
            Need more volume or multiple agents?{' '}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Contact us for a custom quote <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
