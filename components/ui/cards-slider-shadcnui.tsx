import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Smartphone, Sparkles, User, X } from 'lucide-react';
import { useState } from 'react';

interface Feature {
  text: string;
  supported: boolean;
}

interface DetailPoint {
  label: string;
  value: string;
}

interface CardData {
  id: number;
  type: string;
  label: string;
  description: string;
  features: Feature[];
  highlighted: boolean;
  details: {
    howItWorks: string;
    bestFor: string;
    limitation: string;
    points: DetailPoint[];
  };
}

const cards: CardData[] = [
  {
    id: 1,
    type: 'Traditional IVR',
    label: 'Legacy',
    description: 'Primarily Used For Call Routing Through Pre-Defined, Touch-Tone Menu Options',
    features: [
      { text: 'Natural, Human-Like Conversations', supported: false },
      { text: 'Fast Setup With Minimal Configuration', supported: false },
      { text: 'Handles Edge Cases And Unexpected Inputs', supported: false },
      { text: 'Supports Complex, Multi-Turn And Outbound Use Cases', supported: false },
    ],
    highlighted: false,
    details: {
      howItWorks: 'Plays pre-recorded voice prompts. Caller presses a digit (DTMF tone) to navigate a rigid menu tree.',
      bestFor: 'Simple call routing — direct callers to the right department, nothing more.',
      limitation: 'Cannot understand speech, context, or anything outside the menu tree.',
      points: [
        { label: 'Technology', value: 'DTMF tone detection' },
        { label: 'Input type', value: 'Keypad digits only' },
        { label: 'Context aware', value: 'No' },
        { label: 'Can handle edge cases', value: 'No' },
      ],
    },
  },
  {
    id: 2,
    type: 'IVA Voice Agent',
    label: 'Other Solutions',
    description: 'Powered by NLP and Intent Mapping',
    features: [
      { text: 'Natural, Human-Like Conversations', supported: true },
      { text: 'Fast Setup With Minimal Configuration', supported: true },
      { text: 'Handles Edge Cases And Unexpected Inputs', supported: false },
      { text: 'Supports Complex, Multi-Turn And Outbound Use Cases', supported: false },
    ],
    highlighted: false,
    details: {
      howItWorks: 'Uses NLP to detect intent from spoken/typed input and maps it to a predefined answer from its training data.',
      bestFor: 'FAQ automation within a fixed scope — return policies, hours, pricing.',
      limitation: 'Fails silently on anything outside trained intents. Cannot reason or adapt.',
      points: [
        { label: 'Technology', value: 'NLP + intent mapping' },
        { label: 'Input type', value: 'Voice / text' },
        { label: 'Context aware', value: 'Partial' },
        { label: 'Can handle edge cases', value: 'No' },
      ],
    },
  },
  {
    id: 3,
    type: '3rd Gen Voice AI',
    label: 'GitaVox',
    description: 'Powered by LLMs — Contextual, Human-Like Conversations That Convert',
    features: [
      { text: 'Natural, Human-Like Conversations', supported: true },
      { text: 'Fast Setup With Minimal Configuration', supported: true },
      { text: 'Handles Edge Cases And Unexpected Inputs', supported: true },
      { text: 'Supports Complex, Multi-Turn And Outbound Use Cases', supported: true },
    ],
    highlighted: true,
    details: {
      howItWorks: 'Powered by LLMs — understands full context, generates human-like responses, and takes real actions like booking, reminders, and tracking.',
      bestFor: 'Full customer service automation — inbound calls, outbound follow-ups, bookings, front-desk operations.',
      limitation: 'None within conversational scope. Handles any topic, any turn.',
      points: [
        { label: 'Technology', value: 'Large Language Models' },
        { label: 'Input type', value: 'Natural speech / text' },
        { label: 'Context aware', value: 'Yes — full multi-turn' },
        { label: 'Can handle edge cases', value: 'Yes' },
      ],
    },
  },
];

function IVRIllustration() {
  const dialKeys = [
    { n: '1', s: '' }, { n: '2', s: 'ABC' }, { n: '3', s: 'DEF' },
    { n: '4', s: 'GHI' }, { n: '5', s: 'JKL' }, { n: '6', s: 'MNO' },
    { n: '7', s: 'PQRS' }, { n: '8', s: 'TUV' }, { n: '9', s: 'WXYZ' },
    { n: '*', s: '' }, { n: '0', s: '+' }, { n: '#', s: '' },
  ];
  const routes = [
    { key: '1', label: 'Sales', active: false },
    { key: '2', label: 'Support', active: true },
    { key: '3', label: 'Accounting', active: false },
  ];

  return (
    <div className="h-full w-full bg-white flex items-center justify-center gap-2 px-3 py-2">
      {/* Person with phone */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
          <Smartphone className="w-4 h-4 text-slate-500" />
        </div>
        <div className="w-px h-3 bg-[#1e3a8a]" />
      </div>

      {/* Dialpad */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="border-2 border-[#1e3a8a] rounded-xl p-1.5 bg-white">
          <div className="grid grid-cols-3 gap-1">
            {dialKeys.map((k) => (
              <div key={k.n} className="w-6 h-6 flex flex-col items-center justify-center">
                <span className={`text-[9px] font-bold leading-none ${k.n === '2' ? 'text-[#3b82f6]' : 'text-[#1e3a8a]'}`}>{k.n}</span>
                {k.s && <span className="text-[4.5px] text-[#3b82f6] leading-none">{k.s}</span>}
              </div>
            ))}
          </div>
        </div>
        <span className="text-[6px] text-slate-500 mt-1">Welcome message</span>
      </div>

      {/* Connector lines + routes */}
      <div className="flex flex-col justify-center gap-2 flex-shrink-0">
        {routes.map((r) => (
          <div key={r.key} className="flex items-center gap-1.5">
            {/* Line */}
            <div className="flex items-center">
              <div className="w-4 h-px bg-[#1e3a8a]" />
              <span className="text-[7px] font-bold text-[#1e3a8a]">{r.key}</span>
              <div className="w-2 h-px bg-[#1e3a8a]" />
            </div>
            {/* Icon + label */}
            <div className="flex flex-col items-center gap-0.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${r.active ? 'bg-[#3b82f6] border-[#3b82f6]' : 'bg-white border-[#1e3a8a]'}`}>
                <User className={`w-3 h-3 ${r.active ? 'text-white' : 'text-[#1e3a8a]'}`} />
              </div>
              <span className={`text-[6px] font-semibold ${r.active ? 'text-[#3b82f6]' : 'text-[#1e3a8a]'}`}>{r.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IVAIllustration() {
  return (
    <div className="h-full w-full bg-[#f0f4f8] flex items-center justify-center p-2">
      <div className="w-full h-full bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#3b82f6] px-3 py-2 flex items-center justify-between flex-shrink-0">
          <span className="text-[8px] font-bold text-white">Support Chat</span>
          <span className="text-white text-[8px] font-bold">✕</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-hidden px-2 py-2 flex flex-col gap-1.5">
          {/* Agent identity */}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center flex-shrink-0">
              <span className="text-[7px]">🤖</span>
            </div>
            <span className="text-[7px] font-semibold text-slate-700">Sergent</span>
          </div>

          {/* Bot msg */}
          <div className="bg-slate-100 rounded-xl rounded-tl-sm px-2 py-1 max-w-[85%]">
            <p className="text-[6.5px] text-slate-700 leading-tight">Hi! I'm Sergent, your customer service bot.</p>
          </div>
          <div className="bg-slate-100 rounded-xl rounded-tl-sm px-2 py-1 max-w-[85%]">
            <p className="text-[6.5px] text-slate-700 leading-tight">Do you need any help today, Alex?</p>
          </div>

          {/* User msg */}
          <div className="self-end bg-blue-100 rounded-xl rounded-tr-sm px-2 py-1 max-w-[85%]">
            <p className="text-[6.5px] text-slate-700 leading-tight">What's the return policy for this product?</p>
          </div>

          {/* Bot scripted reply */}
          <div className="bg-slate-100 rounded-xl rounded-tl-sm px-2 py-1 max-w-[85%]">
            <p className="text-[6.5px] text-slate-700 leading-tight">Our return policy is 30 days from purchase.</p>
          </div>

          {/* User asks out of scope */}
          <div className="self-end bg-blue-100 rounded-xl rounded-tr-sm px-2 py-1 max-w-[85%]">
            <p className="text-[6.5px] text-slate-700 leading-tight">Can I get a refund after 45 days?</p>
          </div>

          {/* Bot can't answer */}
          <div className="bg-red-50 border border-red-200 rounded-xl rounded-tl-sm px-2 py-1 max-w-[85%]">
            <p className="text-[6.5px] text-red-600 leading-tight">Sorry, I didn't understand that. Can you try again?</p>
          </div>
        </div>

        {/* Input */}
        <div className="px-2 pb-2 flex-shrink-0">
          <div className="flex items-center border border-slate-200 rounded-full px-2 py-1 bg-slate-50">
            <span className="text-[6px] text-slate-400 flex-1">Type something to send...</span>
            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-[7px]">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GitaVoxIllustration() {
  const tasks = [
    { icon: '📅', label: 'Booking', msg: 'Appointment booked for Mon 10 AM ✓' },
    { icon: '🔔', label: 'Reminder', msg: 'Reminder sent to customer ✓' },
    { icon: '📦', label: 'Tracking', msg: 'Order #4821 out for delivery ✓' },
    { icon: '🏢', label: 'Front Desk', msg: 'Visitor checked in, host notified ✓' },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] flex flex-col justify-center px-3 py-2 gap-1.5">
      {/* AI label */}
      <div className="flex items-center gap-1.5 mb-0.5">
        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
          <span className="text-[8px]">✦</span>
        </div>
        <span className="text-[7px] font-bold text-blue-300 tracking-wide">ARIA — GitaVox AI Agent</span>
      </div>

      {tasks.map((t) => (
        <div key={t.label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-1">
          <span className="text-[10px] flex-shrink-0">{t.icon}</span>
          <div className="flex flex-col min-w-0">
            <span className="text-[5.5px] font-bold text-blue-400 uppercase tracking-wider">{t.label}</span>
            <span className="text-[6px] text-slate-300 leading-tight truncate">{t.msg}</span>
          </div>
        </div>
      ))}

      <p className="text-[5.5px] text-slate-500 text-center mt-0.5">Handles any request, any topic, in real-time</p>
    </div>
  );
}

const illustrations = [IVRIllustration, IVAIllustration, GitaVoxIllustration];

export function CardsSlider() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const hover = (id: number, val: boolean) =>
    setFlipped((prev) => ({ ...prev, [id]: val }));

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 items-stretch">
        {cards.map((card, i) => {
          const Illustration = illustrations[i];
          const isFlipped = !!flipped[card.id];

          return (
            <div
              key={card.id}
              className="flex flex-col"
              style={{ perspective: '1200px' }}
              onMouseEnter={() => hover(card.id, true)}
              onMouseLeave={() => hover(card.id, false)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d', position: 'relative' }}
                className="flex-1"
              >
                {/* FRONT */}
                <div style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }} className="h-full">
                  <Card
                    className={`group relative flex flex-col overflow-hidden rounded-3xl backdrop-blur-md transition-all duration-500 border h-full ${
                      card.highlighted
                        ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20'
                        : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                    style={{
                      background: card.highlighted
                        ? 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.15) 100%)'
                        : undefined,
                    }}
                  >
                    {!card.highlighted && (
                      <div className="absolute inset-0 bg-white dark:bg-slate-900/60 rounded-3xl" />
                    )}
                    {card.highlighted && (
                      <div className="absolute inset-0 rounded-3xl dark:bg-transparent bg-blue-50/80" />
                    )}

                    <div className="relative h-52 shrink-0 overflow-hidden z-10 rounded-t-3xl">
                      <Illustration />
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant={card.highlighted ? 'default' : 'secondary'}
                          className={card.highlighted ? 'bg-blue-600 text-white border-0' : 'bg-white/10 text-gray-300 border-white/10'}
                        >
                          {card.label}
                        </Badge>
                      </div>
                      {card.highlighted && (
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 border border-blue-500/30 px-2 py-1 rounded-full flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" /> Our Pick
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 p-5 flex flex-col flex-1">
                      <h3 className={`text-lg font-outfit font-bold leading-tight mb-1.5 ${card.highlighted ? 'text-blue-900 dark:text-white' : 'text-slate-800 dark:text-gray-200'}`}>
                        {card.type}
                      </h3>
                      <p className={`text-xs leading-relaxed mb-3 ${card.highlighted ? 'text-slate-600 dark:text-gray-400' : 'text-slate-500 dark:text-gray-400'}`}>
                        {card.description}
                      </p>
                      <ul className="space-y-1.5 flex-1">
                        {card.features.map((feature) => (
                          <li key={feature.text} className="flex items-start gap-2">
                            <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${feature.supported ? card.highlighted ? 'bg-blue-500/20' : 'bg-green-500/20' : 'bg-red-500/20'}`}>
                              {feature.supported ? (
                                <Check className={`w-2.5 h-2.5 ${card.highlighted ? 'text-blue-500' : 'text-green-500'}`} strokeWidth={3} />
                              ) : (
                                <X className="w-2.5 h-2.5 text-red-400" strokeWidth={3} />
                              )}
                            </div>
                            <span className={`text-xs leading-relaxed ${feature.supported ? card.highlighted ? 'text-slate-700 dark:text-gray-200' : 'text-slate-600 dark:text-gray-300' : 'text-slate-400 dark:text-gray-500'}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <p className={`mt-3 text-[10px] italic ${card.highlighted ? 'text-blue-400/60' : 'text-slate-400 dark:text-slate-600'}`}>Hover to learn more</p>
                    </div>
                  </Card>
                </div>

                {/* BACK */}
                <div
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', inset: 0 }}
                  className="h-full"
                >
                  <Card
                    className={`relative flex flex-col overflow-hidden rounded-3xl border h-full ${
                      card.highlighted
                        ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20'
                        : 'border-slate-200 dark:border-white/10'
                    }`}
                    style={{
                      background: card.highlighted
                        ? 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(124,58,237,0.2) 100%)'
                        : undefined,
                    }}
                  >
                    {!card.highlighted && (
                      <div className="absolute inset-0 bg-white dark:bg-slate-900/90 rounded-3xl" />
                    )}
                    {card.highlighted && (
                      <div className="absolute inset-0 rounded-3xl dark:bg-slate-900/80 bg-blue-50" />
                    )}

                    <div className="relative z-10 p-5 flex flex-col h-full">
                      {/* Back header */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className={`text-base font-outfit font-bold ${card.highlighted ? 'text-blue-900 dark:text-white' : 'text-slate-800 dark:text-white'}`}>
                          {card.type}
                        </h3>
                        <Badge
                          variant={card.highlighted ? 'default' : 'secondary'}
                          className={card.highlighted ? 'bg-blue-600 text-white border-0' : ''}
                        >
                          {card.label}
                        </Badge>
                      </div>

                      <div className="flex flex-col gap-3 flex-1 text-xs">
                        <div>
                          <p className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] mb-0.5">How it works</p>
                          <p className={`leading-relaxed ${card.highlighted ? 'text-slate-700 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>{card.details.howItWorks}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] mb-0.5">Best for</p>
                          <p className={`leading-relaxed ${card.highlighted ? 'text-slate-700 dark:text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>{card.details.bestFor}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] mb-0.5">Limitation</p>
                          <p className="leading-relaxed text-red-500 dark:text-red-400">{card.details.limitation}</p>
                        </div>
                        <div className="mt-auto pt-2 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-1.5">
                          {card.details.points.map((p) => (
                            <div key={p.label} className="bg-slate-50 dark:bg-white/5 rounded-lg px-2 py-1.5">
                              <p className="text-[9px] text-slate-400 dark:text-slate-500">{p.label}</p>
                              <p className={`text-[10px] font-semibold ${card.highlighted ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}>{p.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="mt-3 text-[10px] italic text-slate-400 dark:text-slate-600">Move cursor away to go back</p>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
