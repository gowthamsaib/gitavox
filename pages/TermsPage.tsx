import React from 'react';
import { SEO } from '../components/SEO';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-outfit font-bold text-slate-900 dark:text-white mb-4">{title}</h2>
    <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export const TermsPage: React.FC = () => (
  <main id="main-content">
    <SEO
      title="Terms of Service | GitaVox"
      description="Read the GitaVox Terms of Service. Understand your rights and responsibilities when using our AI voice and text agent services."
      path="/terms"
    />
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-outfit font-extrabold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-sm text-slate-500">Last updated: January 2026 &nbsp;·&nbsp; GitaVox Technologies</p>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of GitaVox Technologies' website and AI agent services. By engaging our services, you agree to these Terms. If you do not agree, do not use our services.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 p-3 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
            <strong>Note:</strong> This is a working draft. GitaVox recommends having a qualified legal professional review these terms before they are relied upon for compliance purposes.
          </p>
        </div>

        <Section title="1. Services">
          <p>GitaVox provides AI voice and text agent services for B2B companies, including but not limited to: outbound and inbound call automation, lead qualification, appointment scheduling, and customer support automation.</p>
          <p>The specific scope, deliverables, and pricing for each engagement are agreed upon separately in a Service Agreement or Statement of Work ("SOW").</p>
        </Section>

        <Section title="2. Client Responsibilities">
          <p>You agree to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate information during onboarding and throughout the engagement</li>
            <li>Ensure your use of our services complies with applicable laws, including telemarketing and data protection regulations in your jurisdiction</li>
            <li>Not use our services for illegal, harmful, or deceptive purposes</li>
            <li>Obtain any required consents from end users before deploying AI agents to interact with them</li>
          </ul>
        </Section>

        <Section title="3. Payment & Billing">
          <p>Payment terms are specified in your individual Service Agreement. Unless otherwise agreed:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Invoices are due within 14 days of issue</li>
            <li>Late payments may incur interest at 1.5% per month</li>
            <li>GitaVox reserves the right to suspend services for accounts more than 30 days past due</li>
          </ul>
        </Section>

        <Section title="4. Cancellation & Refunds">
          <p>Monthly plans may be cancelled with 14 days' written notice before the next billing cycle. Annual plans may be cancelled with 30 days' notice; unused months are non-refundable unless otherwise stated in your SOW.</p>
          <p>Setup and onboarding fees are non-refundable once work has commenced.</p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>GitaVox retains ownership of all underlying technology, models, and platform infrastructure. You retain ownership of your data, scripts, and any content you provide to us.</p>
          <p>We grant you a limited, non-exclusive licence to use the services as described in your SOW for the duration of the engagement.</p>
        </Section>

        <Section title="6. Confidentiality">
          <p>Both parties agree to keep confidential any non-public information shared during the engagement. This obligation survives termination of the service relationship for a period of 2 years.</p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>To the maximum extent permitted by law, GitaVox shall not be liable for indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability in any matter shall not exceed the fees paid by you in the 3 months preceding the claim.</p>
        </Section>

        <Section title="8. Changes to These Terms">
          <p>We may update these Terms periodically. Material changes will be communicated via email or notice on our website. Continued use of our services after the effective date constitutes acceptance of the updated Terms.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>These Terms are governed by the laws of the jurisdiction in which GitaVox Technologies is registered. Any disputes shall be resolved through good-faith negotiation, and if unresolved, through binding arbitration.</p>
        </Section>

        <Section title="10. Contact">
          <p>For questions about these Terms, contact us at <a href="mailto:admin@gitavox.tech" className="text-blue-500 hover:underline">admin@gitavox.tech</a>.</p>
        </Section>
      </div>
    </section>
  </main>
);

export default TermsPage;
