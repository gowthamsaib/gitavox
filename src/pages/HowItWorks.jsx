import { Link } from 'react-router-dom'
import { ArrowRight, Phone, MessageSquare, Zap, Settings, BarChart2, RefreshCw } from 'lucide-react'
import styles from './HowItWorks.module.css'

const steps = [
  {
    n: '01',
    icon: <Phone size={22} />,
    title: 'Discovery Call',
    subtitle: 'We listen before we build',
    desc: 'We start with a 30-minute call to understand your business, your workflow, and the exact problems you want your agent to solve. No generic templates — every agent is purpose-built.',
    details: [
      'Map your current conversation flows',
      'Define success metrics (call-to-meeting rate, CSAT, etc.)',
      'Identify your CRM, calendar, and tools',
      'Agree on voice, persona, and tone',
    ],
  },
  {
    n: '02',
    icon: <Settings size={22} />,
    title: 'Agent Design & Training',
    subtitle: 'Built around your brand',
    desc: 'Our team designs your agent\'s conversation flows, trains it on your scripts, FAQs, product knowledge, and objection-handling playbooks. Your agent sounds like your best rep — not a bot.',
    details: [
      'Custom conversation tree design',
      'Script and FAQ ingestion',
      'Voice selection and persona tuning',
      'Edge case & fallback handling',
    ],
  },
  {
    n: '03',
    icon: <Zap size={22} />,
    title: 'Integration & Testing',
    subtitle: 'Plugged into your stack',
    desc: 'We connect your agent to your CRM, calendar, helpdesk, or any other tool you use. Then we run extensive test calls before anything touches a real customer.',
    details: [
      'CRM sync (HubSpot, Salesforce, Pipedrive, etc.)',
      'Calendar integration (Google, Outlook)',
      'Webhooks & API connections',
      'Full QA testing with your team',
    ],
  },
  {
    n: '04',
    icon: <RefreshCw size={22} />,
    title: 'Go Live in 48 Hours',
    subtitle: 'Fast deployment, zero disruption',
    desc: 'Once testing passes, your agent goes live. We monitor the first 100 interactions closely, make real-time adjustments, and ensure performance is exactly where it needs to be.',
    details: [
      'Staged rollout (soft launch → full launch)',
      'Real-time monitoring by our team',
      'Rapid iteration based on live data',
      'Handoff training for your internal team',
    ],
  },
  {
    n: '05',
    icon: <BarChart2 size={22} />,
    title: 'Ongoing Optimization',
    subtitle: 'Your agent keeps getting better',
    desc: 'We don\'t disappear after launch. Every week, we review performance data, identify drop-off points, test script variations, and improve conversion — continuously.',
    details: [
      'Weekly performance reports',
      'A/B script testing',
      'Proactive recommendations',
      'Monthly strategy review',
    ],
  },
]

const integrations = [
  'HubSpot', 'Salesforce', 'Pipedrive', 'Google Calendar',
  'Outlook', 'Slack', 'Zendesk', 'Intercom',
  'Calendly', 'Twilio', 'WhatsApp', 'Stripe',
]

const techSpecs = [
  { label: 'Latency', value: '< 500ms', note: 'Response time for voice' },
  { label: 'Uptime SLA', value: '99.9%', note: 'Enterprise plan guarantee' },
  { label: 'Languages', value: '30+', note: 'Supported out of the box' },
  { label: 'Concurrent Calls', value: 'Unlimited', note: 'No throttling at scale' },
  { label: 'Data Retention', value: 'Configurable', note: 'Custom per your policy' },
  { label: 'Compliance', value: 'SOC 2', note: 'Type II in progress' },
]

export default function HowItWorks() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.orb} />
        <div className="container">
          <span className="badge">How It Works</span>
          <h1>From Discovery to<br /><span className="grad-text">Deployed Agent</span></h1>
          <p>A transparent, repeatable process that gets your AI agent live and performing — in days, not months.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepLeft}>
                  <div className={styles.stepNum}>{s.n}</div>
                  {i < steps.length - 1 && <div className={styles.connector} />}
                </div>
                <div className={styles.stepBody}>
                  <div className={styles.stepIcon}>{s.icon}</div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepSub}>{s.subtitle}</span>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <ul className={styles.details}>
                      {s.details.map(d => (
                        <li key={d}>
                          <span className={styles.check}>→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.intSection}`}>
        <div className={styles.intOrb} />
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="badge">Integrations</span>
            <h2>Connects to the Tools You Already Use</h2>
            <p>Your agent plugs into your existing stack — no ripping and replacing anything.</p>
          </div>
          <div className={styles.intGrid}>
            {integrations.map(i => (
              <div key={i} className={styles.intChip}>{i}</div>
            ))}
            <div className={`${styles.intChip} ${styles.more}`}>+ More</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="badge">Technical Specs</span>
            <h2>Built for Reliability at Scale</h2>
          </div>
          <div className={styles.specsGrid}>
            {techSpecs.map(s => (
              <div key={s.label} className={`card ${styles.specCard}`}>
                <span className={styles.specValue}>{s.value}</span>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specNote}>{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Ready to see it in action?</h2>
            <p>Watch a live demo of a Gitavox agent in action — then we'll scope yours.</p>
            <Link to="/demo" className="btn-primary">
              Book a Live Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
