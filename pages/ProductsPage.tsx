import React from 'react';
import { ProductsSection } from '../components/sections/ProductsSection';

export const ProductsPage: React.FC = () => {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Products
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            Flagship <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
            In-house built solutions designed for high-performance enterprise automation.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Integration Showcase */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-outfit font-bold mb-12 text-slate-900 dark:text-white">
            Seamlessly Integrates with Your Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-4xl font-bold text-slate-400">Twilio</div>
            <div className="text-4xl font-bold text-slate-400">Vonage</div>
            <div className="text-4xl font-bold text-slate-400">n8n</div>
            <div className="text-4xl font-bold text-slate-400">Zapier</div>
            <div className="text-4xl font-bold text-slate-400">Make</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Schedule a discovery call to discuss which product fits your business needs.
          </p>
          <a
            href="https://calendly.com/admin-gitavox/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 active:scale-95"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
