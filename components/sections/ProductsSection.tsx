import React, { useState } from 'react';
import { ChevronRight, Phone, MessageSquare, Cpu, X, CalendarDays } from 'lucide-react';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { CALENDLY_DISCOVERY_URL } from '../../config/calendly';
import { products } from '../../data/products';
import { productsSection } from '../../data/site';

const productIcons: Record<string, React.ReactNode> = {
  'voice-agents': <Phone size={56} strokeWidth={1.5} />,
  'text-agents': <MessageSquare size={56} strokeWidth={1.5} />,
  'custom-agents': <Cpu size={56} strokeWidth={1.5} />,
};

const productGradients: Record<string, string> = {
  'voice-agents': 'from-blue-600/20 via-cyan-500/10 to-transparent',
  'text-agents': 'from-purple-600/20 via-pink-500/10 to-transparent',
  'custom-agents': 'from-emerald-600/20 via-teal-500/10 to-transparent',
};

const productIconColors: Record<string, string> = {
  'voice-agents': 'text-blue-400',
  'text-agents': 'text-purple-400',
  'custom-agents': 'text-emerald-400',
};

interface BookingDialogProps {
  product: (typeof products)[0];
  onClose: () => void;
}

const BookingDialog: React.FC<BookingDialogProps> = ({ product, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    <div
      className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400"
      >
        <X size={18} />
      </button>

      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${productGradients[product.id]} border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 ${productIconColors[product.id]}`}>
        {productIcons[product.id]}
      </div>

      <h3 className="text-2xl font-outfit font-bold mb-2 text-slate-900 dark:text-white">
        Explore {product.name}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">
        Book a free 30-minute call with our team. We'll walk you through how {product.name.toLowerCase()} can work for your business and outline a tailored setup.
      </p>

      <a
        href={CALENDLY_DISCOVERY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        <CalendarDays size={18} />
        Book a Free Call
      </a>

      <button
        onClick={onClose}
        className="mt-3 w-full px-6 py-3 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
      >
        Maybe later
      </button>
    </div>
  </div>
);

export const ProductsSection: React.FC = () => {
  const [dialogProduct, setDialogProduct] = useState<(typeof products)[0] | null>(null);

  return (
    <section id="products" className="py-32 px-6">
      <div className={`${MAX_WIDTH_CONTAINER} mx-auto`}>
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-outfit font-extrabold mb-4 text-slate-900 dark:text-white">
            {productsSection.title} <span className="text-blue-500">{productsSection.titleHighlight}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl">{productsSection.subline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              id={product.id}
              className="group relative glass-card rounded-3xl p-8 hover:bg-slate-100/80 dark:hover:bg-white/[0.08] transition-all border border-slate-200/80 dark:border-white/5 hover:border-blue-500/30 flex flex-col"
            >
              <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${productGradients[product.id]} border border-slate-200/50 dark:border-white/5 flex items-center justify-center mb-6 ${productIconColors[product.id]} group-hover:scale-[1.02] transition-transform duration-500`}>
                {productIcons[product.id]}
              </div>

              <h3 className="text-2xl font-outfit font-bold mb-2 text-slate-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-xs mb-4 uppercase tracking-wider">
                {product.tagline}
              </p>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed text-sm flex-1">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setDialogProduct(product)}
                className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:gap-4 transition-all hover:text-blue-500 mt-auto"
              >
                {productsSection.explore} {product.name} <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {dialogProduct && (
        <BookingDialog product={dialogProduct} onClose={() => setDialogProduct(null)} />
      )}
    </section>
  );
};
