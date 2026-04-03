import React, { useState, useEffect, useRef } from 'react';
import { Mic, User, Sparkles } from 'lucide-react';
import { CustomAudioPlayer } from '../CustomAudioPlayer';
import { demoTranscript, demoSummary } from '../../data/demoTranscript';
import { audioQnaSection } from '../../data/site';
import { CALENDLY_DISCOVERY_URL } from '../../config/calendly';

export const DemoSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  // Index of the last transcript line whose timestamp has been passed
  const activeIndex = demoTranscript.reduce<number>((acc, line, i) => {
    return currentTime >= line.time ? i : acc;
  }, -1);

  // Auto-scroll the active transcript line into view
  useEffect(() => {
    if (activeLineRef.current && transcriptRef.current) {
      activeLineRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeIndex]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Live Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-4">
            {audioQnaSection.title}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {audioQnaSection.subline}
          </p>
        </div>

        {/* Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />
          <div className="relative glass-card rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden">

            {/* Title bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/80 dark:border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                GITAVOX_AGENT_STATUS: LIVE
              </div>
            </div>

            {/* Two-column body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 dark:divide-white/5">

              {/* Left — audio player */}
              <div className="p-8 flex flex-col gap-6">
                {/* Agent identity */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mic size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">Aria</p>
                    <p className="text-xs text-slate-500">GitaVox AI Voice Agent</p>
                  </div>
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                    Live
                  </span>
                </div>

                <CustomAudioPlayer
                  src={`/${audioQnaSection.audioFilename}`}
                  onTimeUpdate={setCurrentTime}
                  onEnded={() => setIsEnded(true)}
                />

                {/* Stats strip */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { label: 'Language', value: 'English' },
                    { label: 'Latency',  value: '~420ms'  },
                    { label: 'Uptime',   value: '99.99%'  },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/5"
                    >
                      <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                      <p className="text-sm font-mono font-bold text-slate-900 dark:text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — transcript */}
              <div className="p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Transcript
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
                  </span>
                </div>

                <div
                  ref={transcriptRef}
                  className="flex-1 overflow-y-auto space-y-3 max-h-72 pr-1"
                  style={{ scrollbarWidth: 'thin' }}
                >
                  {demoTranscript.slice(0, activeIndex + 1).map((line, i) => {
                    const isActive = i === activeIndex;

                    return (
                      <div
                        key={i}
                        ref={isActive ? activeLineRef : null}
                        className="flex gap-3 animate-fade-in"
                      >
                        {/* Speaker icon */}
                        <div
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 ${
                            line.speaker === 'agent'
                              ? 'bg-blue-500/20 text-blue-500'
                              : 'bg-purple-500/20 text-purple-500'
                          }`}
                        >
                          {line.speaker === 'agent' ? <Mic size={12} /> : <User size={12} />}
                        </div>

                        {/* Bubble */}
                        <div
                          className={`flex-1 p-3 rounded-xl text-sm transition-colors duration-300 ${
                            isActive
                              ? 'bg-blue-500/10 border border-blue-500/20 text-slate-900 dark:text-white'
                              : 'bg-slate-100/60 dark:bg-white/5 border border-transparent text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          <span
                            className={`text-xs font-semibold block mb-1 ${
                              line.speaker === 'agent' ? 'text-blue-500' : 'text-purple-500'
                            }`}
                          >
                            {line.speaker === 'agent' ? 'Aria (AI Agent)' : 'Prospect'}
                          </span>
                          {line.text}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Call summary — slides in when audio ends */}
            <div
              className={`border-t border-slate-200/80 dark:border-white/5 overflow-hidden transition-all duration-700 ${
                isEnded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={15} className="text-amber-500" />
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Call Summary
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5">
                    <p className="text-xs text-slate-500 mb-1">Detected Intent</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{demoSummary.intent}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-xs text-slate-500 mb-1">Outcome</p>
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400">{demoSummary.outcome}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5">
                    <p className="text-xs text-slate-500 mb-1">Industries Covered</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{demoSummary.industries.join(', ')}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-xs text-slate-500 mb-1">Sentiment</p>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{demoSummary.sentiment}</p>
                  </div>
                </div>
                <p className="text-center text-sm text-slate-500 mt-5">
                  Want an agent like this for your business?{' '}
                  <a
                    href={CALENDLY_DISCOVERY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Book a free demo →
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
