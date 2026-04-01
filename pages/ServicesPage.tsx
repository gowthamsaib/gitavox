import React from 'react';
import { ServicesSection } from '../components/sections/ServicesSection';

export const ServicesPage: React.FC = () => {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-8">
            Services
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            End-to-End <span className="text-gradient">AI Consultancy</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Work with our elite team of engineers and data scientists to build the future of your company.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-outfit font-bold text-center mb-12 text-slate-900 dark:text-white">
            Why Choose GitaVox?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">99.99%</div>
              <div className="text-slate-600 dark:text-slate-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">&lt;500ms</div>
              <div className="text-slate-600 dark:text-slate-400">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">24/7</div>
              <div className="text-slate-600 dark:text-slate-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
