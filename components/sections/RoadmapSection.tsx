import React from 'react';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { projects } from '../../data/projects';
import { roadmapSection } from '../../data/site';

export const RoadmapSection: React.FC = () => (
  <section id="roadmap" className="py-32 px-6 bg-slate-100/50 dark:bg-white/[0.01]" aria-labelledby="roadmap-heading">
    <div className={`${MAX_WIDTH_CONTAINER} mx-auto`}>
      <h2 id="roadmap-heading" className="sr-only">AI Roadmap Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 border border-slate-200/80 dark:border-white/5 hover:-translate-y-2 transition-transform"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mb-4">
              <span className="text-[10px] font-bold text-purple-500 dark:text-purple-400 uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-xl font-outfit font-bold mt-1 text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3">{project.description}</p>
            <div className="pt-4 border-t border-slate-200 dark:border-white/5">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {roadmapSection.targetOutcome}
              </p>
              <p className="text-xs font-bold text-green-600 dark:text-green-400">{project.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
