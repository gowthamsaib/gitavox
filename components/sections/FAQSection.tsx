import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 'what-is-ai-agent',
    question: 'What is an AI voice agent?',
    answer:
      'An AI voice agent is an autonomous system that can listen, speak, and hold natural phone conversations like a human. It uses speech recognition, large language models, and text-to-speech technology to understand callers, respond intelligently, maintain context, and take actions such as booking appointments or updating systems without relying on rigid scripts or human intervention.',
  },
  {
    id: 'how-it-works',
    question: 'How do GitaVox AI voice agents work?',
    answer:
      'GitaVox uses real-time conversational AI with low-latency speech recognition, LLM-powered conversation understanding, and natural text-to-speech. Our platform features ~600ms latency for responsive interactions, ultra-realistic voices built from real performance data, and proprietary turn-taking models that know when to speak and listen, creating seamless, human-like conversations.',
  },
  {
    id: 'how-to-create',
    question: 'How do I create an AI voice agent with GitaVox?',
    answer:
      "Creating a voice agent is easy! Schedule a free discovery call where we'll discuss your business needs, identify use cases, and design a custom solution. Our team handles the setup, integration with your existing systems, and provides comprehensive training. You can be up and running with automated voice conversations in as little as 2-3 weeks.",
  },
  {
    id: 'phone-number',
    question: 'Can I connect the agent to my existing phone number?',
    answer:
      'Yes. GitaVox supports integration with any telephony system through SIP trunking, making it easy to connect your existing phone numbers. We work with all major providers including Twilio, Vonage, and custom telephony solutions, allowing you to deploy your AI voice agent without changing your infrastructure.',
  },
  {
    id: 'ai-call-center',
    question: 'What is an AI call center powered by GitaVox?',
    answer:
      "An AI call center built on GitaVox is a next-generation voice automation platform that handles inbound and outbound calls at scale. It can function as AI receptionists, intelligent IVR systems, and outbound calling agents, managing phone-based interactions with natural conversations and autonomous task execution. It's perfect for customer support, appointment scheduling, lead qualification, and more.",
  },
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white">
            Common Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border-b border-slate-200 dark:border-white/10 ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full py-6 px-4 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openId === faq.id && (
                <div className="px-4 pb-6 animate-fadeIn">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Have more questions?{' '}
            <a
              href="/services"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              Schedule a discovery call
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};
