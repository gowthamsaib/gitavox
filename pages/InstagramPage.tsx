import React from 'react';
import { ExternalLink, Instagram } from 'lucide-react';

export const InstagramPage: React.FC = () => {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Instagram size={16} />
            Instagram
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            Follow <span className="text-gradient">GitaVox</span> on Instagram
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Get behind-the-scenes content, product demos, team culture, and visual insights into the world of AI voice technology.
          </p>
          <a
            href="https://instagram.com/gitavoxai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/25"
          >
            <Instagram size={20} />
            Visit Our Instagram Profile
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Why Follow Us */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-outfit font-bold text-center mb-12 text-slate-900 dark:text-white">
            What to Expect on Our Instagram
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-slate-200/80 dark:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Product Demos
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Watch quick demos showcasing our AI voice agents in action across different use cases.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-slate-200/80 dark:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Team Culture
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Meet the people building the future of conversational AI and see our team in action.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-slate-200/80 dark:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Visual Stories
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Engaging visual content that brings AI technology to life in easy-to-understand ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            Join Our Instagram Community
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Follow @gitavoxai for daily inspiration, product updates, and exclusive behind-the-scenes content.
          </p>
          <a
            href="https://instagram.com/gitavoxai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-2xl transition-all hover:scale-105"
          >
            <Instagram size={20} />
            Follow on Instagram
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default InstagramPage;
