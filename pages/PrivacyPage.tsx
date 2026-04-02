import React from 'react';
import { SEO } from '../components/SEO';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-outfit font-bold text-slate-900 dark:text-white mb-4">{title}</h2>
    <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export const PrivacyPage: React.FC = () => (
  <main id="main-content">
    <SEO
      title="Privacy Policy | GitaVox"
      description="Read the GitaVox Privacy Policy. Learn how we collect, use, and protect your data when you use our AI voice and text agent platform."
      path="/privacy"
    />
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-outfit font-extrabold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: January 2026 &nbsp;·&nbsp; GitaVox Technologies</p>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm leading-relaxed">
            This Privacy Policy explains how GitaVox Technologies ("GitaVox", "we", "us", or "our") collects, uses, and protects information you provide when using our website and services. Please read it carefully. If you have questions, contact us at <a href="mailto:admin@gitavox.tech" className="text-blue-500 hover:underline">admin@gitavox.tech</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 p-3 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
            <strong>Note:</strong> This is a working draft. GitaVox recommends having a qualified legal professional review this policy before it is relied upon for compliance purposes.
          </p>
        </div>

        <Section title="1. Information We Collect">
          <p>We collect information you provide directly, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, email address, company name, and phone number submitted via our contact or booking forms</li>
            <li>Messages and notes you include when reaching out to us</li>
            <li>Call recordings and transcripts generated through our AI agent services (with your consent)</li>
          </ul>
          <p>We also collect limited technical data automatically, such as browser type, pages visited, and approximate location via IP address, through standard analytics tools.</p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your enquiries and schedule discovery calls</li>
            <li>Deliver and improve our AI voice and text agent services</li>
            <li>Send you relevant service updates (you can opt out at any time)</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
        </Section>

        <Section title="3. Third-Party Services">
          <p>We use the following third-party tools to deliver our services. Each has its own privacy policy:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Calendly</strong> — for scheduling discovery calls</li>
            <li><strong>Formspree</strong> — for processing contact form submissions</li>
            <li><strong>Twilio / telephony providers</strong> — for voice agent delivery</li>
            <li><strong>Analytics tools</strong> — for understanding site usage (no personally identifiable data)</li>
          </ul>
        </Section>

        <Section title="4. Data Retention">
          <p>We retain your contact information for as long as necessary to fulfil the purposes described in this policy, or as required by law. Call recordings and transcripts are retained per the terms agreed with each client and deleted upon request.</p>
        </Section>

        <Section title="5. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict our processing of your data</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>To exercise any of these rights, contact <a href="mailto:admin@gitavox.tech" className="text-blue-500 hover:underline">admin@gitavox.tech</a>.</p>
        </Section>

        <Section title="6. Security">
          <p>We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse. Our infrastructure uses industry-standard encryption in transit and at rest.</p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>We may update this policy from time to time. We'll notify you of material changes by updating the date at the top of this page. Continued use of our services after changes constitutes acceptance.</p>
        </Section>

        <Section title="8. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Email: <a href="mailto:admin@gitavox.tech" className="text-blue-500 hover:underline">admin@gitavox.tech</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/company/gitavox-inc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/company/gitavox-inc</a></li>
          </ul>
        </Section>
      </div>
    </section>
  </main>
);

export default PrivacyPage;
