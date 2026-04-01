import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { CALENDLY_DISCOVERY_URL } from '../../config/calendly';
import { hero, audioQnaSection } from '../../data/site';
import CustomAudioPlayer from '../CustomAudioPlayer';

const AUDIO_SRC = `${import.meta.env.BASE_URL}${audioQnaSection.audioFilename}`;

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

    <div className="mt-24 max-w-5xl mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
      <div className="relative glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-xs text-slate-500 font-mono">LIVE DEMO — Q&A RECORDING</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-outfit font-bold text-slate-900 dark:text-white">
                {audioQnaSection.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {audioQnaSection.subline}
              </p>
            </div>
            <div className="p-4 bg-slate-100/80 dark:bg-white/5 rounded-xl border border-slate-200/80 dark:border-white/5">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mb-1">Summary</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{audioQnaSection.summary}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <CustomAudioPlayer src={AUDIO_SRC} autoplay={true} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
