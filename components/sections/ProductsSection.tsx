import React from 'react';
import { ChevronRight, Phone, MessageSquare, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { products } from '../../data/products';
import { productsSection } from '../../data/site';

export const ProductsSection: React.FC = () => (
  <section id="products" className="py-32 px-6">
    <div className={`${MAX_WIDTH_CONTAINER} mx-auto`}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-outfit font-extrabold mb-4 text-slate-900 dark:text-white">
            {productsSection.title} <span className="text-blue-500">{productsSection.titleHighlight}</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl">{productsSection.subline}</p>
        </div>
        <div className="hidden md:block">
          <span className="text-slate-500 dark:text-slate-600 text-sm font-mono">
            {productsSection.established}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative glass-card rounded-3xl p-8 hover:bg-slate-100/80 dark:hover:bg-white/[0.08] transition-all border border-slate-200/80 dark:border-white/5 hover:border-blue-500/30"
          >
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              {product.id === 'voxflow' ? <Phone /> : product.id === 'custom-ai-agents' ? <Bot /> : <MessageSquare />}
            </div>
            <h3 className="text-3xl font-outfit font-bold mb-2 text-slate-900 dark:text-white">
              {product.name}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 uppercase tracking-wider">
              {product.tagline}
            </p>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
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
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent dark:from-[#030712]" />
            </div>
            <Link
              to={`/products#${product.id}`}
              className="flex items-center gap-2 text-slate-900 dark:text-white font-bold group-hover:gap-4 transition-all hover:text-blue-500"
            >
              {productsSection.explore} {product.name} <ChevronRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
