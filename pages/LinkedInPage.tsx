import React from 'react';
import { ExternalLink, Linkedin } from 'lucide-react';

export const LinkedInPage: React.FC = () => {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Linkedin size={16} />
            LinkedIn
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            Connect with <span className="text-gradient">GitaVox</span> on LinkedIn
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Follow us for industry insights, product updates, AI innovation, and thought leadership in conversational AI.
          </p>
          <a
            href="https://linkedin.com/company/gitavox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
          >
            <Linkedin size={20} />
            Visit Our LinkedIn Profile
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Why Follow Us */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-outfit font-bold text-center mb-12 text-slate-900 dark:text-white">
            Why Follow GitaVox on LinkedIn?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-slate-200/80 dark:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Industry Insights
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Stay updated with the latest trends in AI, voice technology, and enterprise automation.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-slate-200/80 dark:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Product Updates
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Be the first to know about new features, releases, and platform improvements.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-slate-200/80 dark:border-white/10">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Thought Leadership
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Learn from our team's expertise in building scalable AI voice solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            Join Our Professional Network
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Connect with GitaVox and be part of the conversation shaping the future of AI-powered communication.
          </p>
          <a
            href="https://linkedin.com/company/gitavox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            Follow on LinkedIn
            <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default LinkedInPage;
