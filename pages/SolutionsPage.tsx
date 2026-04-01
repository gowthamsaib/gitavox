import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Utensils, Dumbbell, HeartPulse, Building2, ShoppingBag, Plane, CheckCircle } from 'lucide-react';
import { CALENDLY_DISCOVERY_URL } from '../config/calendly';

const solutions = [
  {
    id: 'restaurants',
    icon: Utensils,
    name: 'Restaurants & Hospitality',
    tagline: 'Never miss a reservation again',
    desc: 'Your AI agent handles table bookings, answers menu questions, manages waitlists, and sends confirmation texts — even during peak hours when your staff is slammed.',
    outcomes: ['Handle 100% of inbound reservation calls', 'Reduce no-shows with automated reminders', 'Upsell specials and events on every call'],
    color: 'from-orange-500/10 to-red-500/10',
    border: 'border-orange-500/20',
    accent: 'text-orange-500',
  },
  {
    id: 'gyms',
    icon: Dumbbell,
    name: 'Fitness & Gyms',
    tagline: 'Automate memberships and class bookings',
    desc: 'Let members book classes, pause memberships, ask about pricing, and get facility info — 24/7 via voice or text. Your front desk handles only what truly needs a human.',
    outcomes: ['Automated class booking & cancellations', 'Membership inquiry handling', 'Reduce front desk call volume by 60%+'],
    color: 'from-green-500/10 to-teal-500/10',
    border: 'border-green-500/20',
    accent: 'text-green-500',
  },
  {
    id: 'healthcare',
    icon: HeartPulse,
    name: 'Healthcare & Clinics',
    tagline: 'Patient scheduling without the hold music',
    desc: 'Schedule appointments, send reminders, handle prescription refill inquiries, and collect patient info — compliantly and conversationally.',
    outcomes: ['HIPAA-compliant conversation flows', 'Appointment reminders cut no-shows by 40%', 'After-hours coverage with live escalation'],
    color: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
    accent: 'text-blue-500',
  },
  {
    id: 'realestate',
    icon: Building2,
    name: 'Real Estate',
    tagline: 'Qualify leads before your agents pick up',
    desc: 'Instantly respond to inbound property enquiries, qualify buyer intent, schedule viewings, and follow up with cold leads on autopilot.',
    outcomes: ['Instant response to every inbound lead', 'Pre-qualify buyers with custom scripts', 'Automated viewing scheduling & reminders'],
    color: 'from-purple-500/10 to-violet-500/10',
    border: 'border-purple-500/20',
    accent: 'text-purple-500',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    name: 'Retail & E-commerce',
    tagline: 'Support at scale, without scaling your team',
    desc: 'Handle order status, returns, product questions, and complaints via voice and text — across all your channels, automatically.',
    outcomes: ['Resolve 65%+ of tickets without a human', 'Order tracking & status updates on demand', 'Smart escalation to human agents'],
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20',
    accent: 'text-pink-500',
  },
  {
    id: 'travel',
    icon: Plane,
    name: 'Travel & Hospitality',
    tagline: 'Concierge service at every price point',
    desc: 'Handle booking inquiries, itinerary changes, check-in reminders, and guest services — so your team focuses on experience, not logistics.',
    outcomes: ['Manage booking changes & cancellations', 'Proactive pre-trip communication', 'Multi-language guest support'],
    color: 'from-sky-500/10 to-indigo-500/10',
    border: 'border-sky-500/20',
    accent: 'text-sky-500',
  },
];

export const SolutionsPage: React.FC = () => {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Solutions by Industry
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold mb-8 leading-tight text-slate-900 dark:text-white">
            Built for Your <span className="text-gradient">Industry</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every GitaVox agent is trained for your specific workflows, language, and customer expectations — not a generic chatbot.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                id={sol.id}
                className={`glass-card rounded-3xl p-8 border ${sol.border} bg-gradient-to-br ${sol.color} hover:scale-[1.02] transition-all`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/80 dark:bg-white/10 flex items-center justify-center mb-6 ${sol.accent}`}>
                  <Icon size={24} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${sol.accent} mb-2 block`}>
                  {sol.name}
                </span>
                <h3 className="text-2xl font-outfit font-bold mb-3 text-slate-900 dark:text-white">
                  {sol.tagline}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {sol.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {sol.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle size={15} className={`${sol.accent} flex-shrink-0 mt-0.5`} />
                      {o}
                    </li>
                  ))}
                </ul>
                <a
                  href={CALENDLY_DISCOVERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-semibold text-sm ${sol.accent} hover:gap-3 transition-all`}
                >
                  Book a demo for {sol.name} <ChevronRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50/50 dark:bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-outfit font-bold mb-6 text-slate-900 dark:text-white">
            Don't see your industry?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            GitaVox agents can be trained for almost any B2B workflow. Get in touch and we'll scope a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_DISCOVERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 active:scale-95"
            >
              Book a Free Discovery Call
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-200/80 border border-slate-300 font-bold rounded-2xl hover:bg-slate-300/80 transition-all dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;
