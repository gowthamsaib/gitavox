import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Phone, Users, CheckCircle, User, UserCircle, Mail, MessageSquare, CalendarPlus } from 'lucide-react';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { FORMSPREE_DISCOVERY_FORM_ID } from '../../config/forms';
import { CALENDLY_DISCOVERY_URL } from '../../config/calendly';
import { services } from '../../data/services';
import { servicesSection } from '../../data/site';

const iconMap = { Monitor, Phone, Users } as const;

const inputClass =
  'w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-12 pr-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';
const textareaClass =
  'w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-12 pr-6 py-4 resize-none focus:outline-none focus:border-blue-500 transition-colors text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';
const iconWrapClass = 'absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none';
const iconWrapTextareaClass = 'absolute left-4 top-4 text-slate-400 dark:text-slate-500 pointer-events-none';

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

function loadCalendlyScript(): void {
  if (document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)) return;
  const s = document.createElement('script');
  s.src = CALENDLY_SCRIPT;
  s.async = true;
  document.body.appendChild(s);
}

async function submitToFormspree(formId: string, form: HTMLFormElement): Promise<{ ok: boolean; error?: string }> {
  if (!formId.trim()) return { ok: false, error: 'Form not configured' };
  try {
    const formData = new FormData(form);
    // Tag with email destination so Formspree routes correctly
    formData.append('_replyto', formData.get('email') as string);
    formData.append('_subject', 'GitaVox Discovery Call Request');
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { errors?: Array<{ message?: string }> };
      const msg = Array.isArray(data.errors)
        ? data.errors.map((e) => e.message).filter(Boolean).join(', ')
        : null;
      return { ok: false, error: msg || 'Submission failed. Please email admin@gitavox.tech directly.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error. Please email admin@gitavox.tech directly.' };
  }
}

export const ServicesSection: React.FC = () => {
  const [step, setStep] = useState<'form' | 'calendly'>('form');
  const [prefill, setPrefill] = useState<{ firstName: string; lastName: string; email: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === 'calendly' && CALENDLY_DISCOVERY_URL) {
      loadCalendlyScript();
    }
  }, [step]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const { ok, error: err } = await submitToFormspree(FORMSPREE_DISCOVERY_FORM_ID, form);
    setSubmitting(false);
    if (ok) {
      const firstName = (form.querySelector('[name="firstName"]') as HTMLInputElement)?.value?.trim() ?? '';
      const lastName = (form.querySelector('[name="lastName"]') as HTMLInputElement)?.value?.trim() ?? '';
      const email = (form.querySelector('[name="email"]') as HTMLInputElement)?.value?.trim() ?? '';
      setPrefill({ firstName, lastName, email });
      form.reset();
      setStep('calendly');
    } else {
      setError(err ?? 'Something went wrong. Please try again.');
    }
  }

  const base = CALENDLY_DISCOVERY_URL.split('?')[0]?.trim() || '';
  const params = prefill
    ? `?firstName=${encodeURIComponent(prefill.firstName)}&lastName=${encodeURIComponent(prefill.lastName)}&email=${encodeURIComponent(prefill.email)}`
    : '';
  const calUrl = base ? `${base}${params}` : '';

  return (
    <section id="services" className="py-32 px-6">
      <div className={`${MAX_WIDTH_CONTAINER} mx-auto flex flex-col md:flex-row gap-12`}>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-outfit font-extrabold mb-8 text-slate-900 dark:text-white">
            {servicesSection.title} <br />
            <span className="text-blue-500">{servicesSection.titleHighlight}</span>
          </h2>
          <div className="space-y-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-1/2">
          <div
            className={`glass-card rounded-3xl p-8 h-full border flex flex-col justify-center items-center text-center ${
              step === 'calendly' && !CALENDLY_DISCOVERY_URL
                ? 'border-green-300 shadow-xl shadow-green-500/15 dark:border-white/5 dark:shadow-none'
                : 'border-slate-200/80 dark:border-white/5'
            }`}
          >
            {step === 'form' ? (
              <>
                <h3 className="text-3xl font-outfit font-bold mb-4 text-slate-900 dark:text-white">
                  {servicesSection.ctaTitle}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8">{servicesSection.ctaSubline}</p>
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
                  {error ? (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm text-left">
                      {error}
                    </div>
                  ) : null}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label htmlFor="firstName" className="sr-only">First name</label>
                      <User size={20} className={iconWrapClass} aria-hidden />
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        required
                        placeholder={servicesSection.firstNamePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="lastName" className="sr-only">Last name</label>
                      <UserCircle size={20} className={iconWrapClass} aria-hidden />
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        required
                        placeholder={servicesSection.lastNamePlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <Mail size={20} className={iconWrapClass} aria-hidden />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder={servicesSection.emailPlaceholder}
                      className={inputClass}
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="note" className="sr-only">Note</label>
                    <MessageSquare size={20} className={iconWrapTextareaClass} aria-hidden />
                    <textarea
                      id="note"
                      name="note"
                      rows={3}
                      placeholder={servicesSection.notePlaceholder}
                      className={textareaClass}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CalendarPlus size={20} strokeWidth={2.5} aria-hidden />
                    {submitting ? 'Sending…' : servicesSection.ctaContinue}
                  </button>
                </form>
              </>
            ) : (
              <div className="w-full flex flex-col">
                {CALENDLY_DISCOVERY_URL ? (
                  <>
                    <h3 className="text-2xl font-outfit font-bold mb-4 text-slate-900 dark:text-white">
                      Pick a time
                    </h3>
                    <div
                      ref={calendlyContainerRef}
                      className="calendly-inline-widget min-w-[320px] w-full h-[630px]"
                      data-url={calUrl}
                    />
                    <a
                      href={calUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 mt-2"
                    >
                      Open in new tab
                    </a>
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="animate-success-tick w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 ring-4 ring-green-500/20"
                      aria-hidden
                    >
                      <CheckCircle className="w-9 h-9 text-green-500" strokeWidth={2.5} />
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md">
                      {servicesSection.thanksMessage}
                    </p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="mt-6 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  Back to form
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
