import React from 'react';
import { Link } from 'react-router-dom';
import { CardsSlider } from '@/components/ui/cards-slider-shadcnui';
import { MAX_WIDTH_CONTAINER } from '@/config/app';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className={`${MAX_WIDTH_CONTAINER} mx-auto`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            What is <span className="text-gradient">GitaVox</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            LLM based, humanlike, voice-first conversational AI platform
          </p>
        </div>

        {/* Card Slider */}
        <CardsSlider />

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            See 3rd generation voice AI handling real business conversations
          </p>
          <Link
            to="/solutions"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 active:scale-95"
          >
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};
