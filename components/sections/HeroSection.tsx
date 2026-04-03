import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { CALENDLY_DISCOVERY_URL } from '../../config/calendly';
import { hero } from '../../data/site';

export const HeroSection: React.FC = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden">
    <div className={`${MAX_WIDTH_CONTAINER} mx-auto text-center`}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
        </span>
        {hero.badge}
      </div>
      <h1 className="text-5xl md:text-8xl font-outfit font-extrabold mb-8 leading-tight tracking-tight text-slate-900 dark:text-white">
        {hero.headline} <br />
        <span className="text-gradient">{hero.headlineHighlight}</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
        {hero.subline}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={CALENDLY_DISCOVERY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
        >
          {hero.ctaPrimary} <ChevronRight size={20} />
        </a>
        <Link
          to="/solutions"
          className="px-10 py-5 bg-slate-200/80 border border-slate-300 font-bold rounded-2xl hover:bg-slate-300/80 transition-all flex items-center justify-center gap-2 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white"
        >
          {hero.ctaSecondary} <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);
