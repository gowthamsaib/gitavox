import React from 'react';
import { Check, X } from 'lucide-react';

const solutions = [
  {
    type: 'Traditional IVR',
    label: 'Other Solution',
    description: 'Primarily Used For Call Routing Through Pre-Defined, Touch-Tone Menu Options',
    features: [
      { text: 'Natural, Human-Like Conversations', supported: false },
      { text: 'Fast Setup With Minimal Configuration', supported: false },
      { text: 'Handles Edge Cases And Unexpected Inputs', supported: false },
      { text: 'Supports Complex, Multi-Turn And Outbound Use Cases', supported: false },
    ],
    highlighted: false,
  },
  {
    type: 'IVA Voice Agent',
    label: 'Other Solution',
    description: 'Powered by NLP and Intent Mapping',
    features: [
      { text: 'Natural, Human-Like Conversations', supported: true },
      { text: 'Fast Setup With Minimal Configuration', supported: true },
      { text: 'Handles Edge Cases And Unexpected Inputs', supported: false },
      { text: 'Supports Complex, Multi-Turn And Outbound Use Cases', supported: false },
    ],
    highlighted: false,
  },
  {
    type: '3rd Gen Voice AI',
    label: 'Our Solution',
    description: 'Powered by LLMs',
    features: [
      { text: 'Natural, Human-Like Conversations', supported: true },
      { text: 'Fast Setup With Minimal Configuration', supported: true },
      { text: 'Handles Edge Cases And Unexpected Inputs', supported: true },
      { text: 'Supports Complex, Multi-Turn And Outbound Use Cases', supported: true },
    ],
    highlighted: true,
  },
];

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            What is <span className="text-gradient">GitaVox</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            LLM based, humanlike, voice-first conversational AI platform
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.type}
              className={`relative group ${solution.highlighted ? 'md:-translate-y-4' : ''}`}
            >
              {solution.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              )}
              <div
                className={`relative rounded-3xl p-8 border transition-all ${
                  solution.highlighted
                    ? 'border-blue-500/50 dark:border-blue-400/30 bg-gradient-to-br from-blue-600 to-purple-700 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900'
                    : 'glass-card border-slate-200/80 dark:border-white/10'
                }`}
              >
                {/* Header */}
                <div className="mb-8">
                  <div
                    className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                      solution.highlighted
                        ? 'text-blue-400'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {solution.label}
                  </div>
                  <h3
                    className={`text-2xl font-outfit font-bold mb-3 ${
                      solution.highlighted
                        ? 'text-white'
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {solution.type}
                  </h3>
                  <p
                    className={`text-sm ${
                      solution.highlighted
                        ? 'text-slate-300'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {solution.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.supported
                            ? solution.highlighted
                              ? 'bg-blue-500/20'
                              : 'bg-green-500/20'
                            : 'bg-red-500/20'
                        }`}
                      >
                        {feature.supported ? (
                          <Check
                            className={`w-3 h-3 ${
                              solution.highlighted ? 'text-blue-400' : 'text-green-600'
                            }`}
                          />
                        ) : (
                          <X className="w-3 h-3 text-red-600" />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          solution.highlighted
                            ? 'text-slate-200'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            See 3rd generation voice AI handling real business conversations
          </p>
          <a
            href="/solutions"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 active:scale-95"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};
