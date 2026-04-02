import React from 'react';
import { SEO } from '../components/SEO';
import { ProductsSection } from '../components/sections/ProductsSection';
import { IntegrationsSection } from '../components/sections/IntegrationsSection';

export const ProductsPage: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="AI Voice & Text Agent Products | GitaVox"
        description="Explore GitaVox's three AI agent products: AI Voice Agents for phone calls, AI Text Agents for chat and SMS, and Custom AI Agents built around your business workflows."
        path="/products"
      />
      {/* Products Section — includes its own "Flagship Products" heading */}
      <div className="pt-24">
        <ProductsSection />
      </div>

      {/* Integrations with animated logos */}
      <IntegrationsSection />

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
