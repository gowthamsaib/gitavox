import React from 'react';
import { Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RoadmapSection } from '../components/sections/RoadmapSection';

export const RoadmapPage: React.FC = () => {
  return (
    <main id="main-content">
      <SEO
        title="Product Roadmap | GitaVox"
        description="See what's coming next at GitaVox — multimodal AI agents, real-time translation, emotion AI, and enterprise-scale deployments. Q1 2026 and beyond."
        path="/roadmap"
      />
      {/* Page Header with Enhanced Design */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-10 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Product Roadmap
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            Innovation <span className="text-gradient">Timeline</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Strategic initiatives and development milestones driving GitaVox into the future of conversational AI.
          </p>
        </div>
      </section>

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Future Vision - Enhanced Design */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
            <div className="relative glass-card rounded-3xl p-12 border border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-outfit font-bold text-slate-900 dark:text-white">
                  Future Vision
                </h2>
              </div>
            <div className="space-y-6 text-slate-600 dark:text-slate-400">
              <p className="text-lg">
                Looking beyond Q1 2026, GitaVox is committed to pushing the boundaries of conversational AI. Our vision includes:
              </p>
              <ul className="space-y-4 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                  <span><strong className="text-slate-900 dark:text-white">Multimodal AI:</strong> Integrating vision and text capabilities for richer interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2" />
                  <span><strong className="text-slate-900 dark:text-white">Real-time Translation:</strong> Breaking language barriers with instant multilingual support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                  <span><strong className="text-slate-900 dark:text-white">Emotion AI:</strong> Understanding and responding to customer emotions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-2" />
                  <span><strong className="text-slate-900 dark:text-white">Enterprise Scale:</strong> Supporting millions of concurrent conversations</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoadmapPage;
