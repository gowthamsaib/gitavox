import React, { useState } from 'react';
import { Mail, Clock, Linkedin, CalendarPlus, CheckCircle, AlertCircle } from 'lucide-react';
import { CALENDLY_DISCOVERY_URL } from '../config/calendly';

const FORM_EMAIL = 'admin@gitavox.tech';

const inputClass =
  'w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500 transition-colors text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm';

const reasons = [
  'Book a demo',
  'Get a custom quote',
  'Partnership inquiry',
  'Technical support',
  'Press / media',
  'Other',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', reason: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');
    try {
      // Using Formspree fallback — replace with your own endpoint or Formspree ID
      const res = await fetch('https://formspree.io/f/mvzroakd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `GitaVox Contact: ${form.reason || 'General Enquiry'}` }),
      });
      if (res.ok) {
        setFormState('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setFormState('error');
      setErrorMsg('Something went wrong. Please email us directly at admin@gitavox.tech');
    }
  };

  return (
    <main id="main-content">
      {/* Hero */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            Contact
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-extrabold mb-6 text-slate-900 dark:text-white">
            Let's Talk
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Whether you're ready to deploy or just exploring — we're happy to answer any questions.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Left panel */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Info cards */}
            <div className="glass-card rounded-3xl border border-slate-200/80 dark:border-white/5 overflow-hidden divide-y divide-slate-200/80 dark:divide-white/5">
              <div className="flex items-center gap-4 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Email</p>
                  <a href={`mailto:${FORM_EMAIL}`} className="text-sm font-medium text-slate-900 dark:text-white hover:text-blue-500 transition-colors">
                    {FORM_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">Response Time</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Within 2 business hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/gitavox-inc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
                  >
                    gitavox-inc ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Prefer a call? */}
            <div className="glass-card rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <CalendarPlus size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Prefer a live demo?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Book a 30-minute session and see GitaVox agents in action — tailored to your use case.
                  </p>
                  <a
                    href={CALENDLY_DISCOVERY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Book a Free Demo →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-white/5">
              {formState === 'success' ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="animate-success-tick w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 ring-4 ring-green-500/20">
                    <CheckCircle className="w-9 h-9 text-green-500" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-outfit font-bold text-slate-900 dark:text-white mb-3">Message received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                    We'll get back to you at <strong className="text-slate-700 dark:text-slate-200">{form.email}</strong> within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', email: '', company: '', reason: '', message: '' }); }}
                    className="mt-6 text-sm text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-outfit font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">We read every message and respond personally.</p>

                  {formState === 'error' && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm mb-6">
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Full Name *" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Work Email</label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="Work Email *" className={inputClass} />
                      </div>
                    </div>
                    <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company Name" className={inputClass} />
                    <select name="reason" required value={form.reason} onChange={handleChange} className={inputClass}>
                      <option value="">Reason for contact *</option>
                      {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message *"
                      className={`${inputClass} resize-none`}
                    />
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      No spam. Your info is used only to respond to your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
