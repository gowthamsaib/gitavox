import { Link } from 'react-router-dom'
import { Check, ArrowRight, HelpCircle } from 'lucide-react'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Starter',
    tagline: 'For teams exploring AI automation',
    price: 'Custom',
    note: 'Starting from $999/mo',
    highlight: false,
    features: [
      '1 AI agent (voice or text)',
      'Up to 1,000 conversations/mo',
      'Onboarding & training included',
      '1 integration (CRM, calendar)',
      'Email support',
      'Monthly performance report',
    ],
    cta: 'Book a Demo',
  },
  {
    name: 'Growth',
    tagline: 'For scaling revenue teams',
    price: 'Custom',
    note: 'Starting from $2,499/mo',
    highlight: true,
    features: [
      'Up to 3 AI agents (voice + text)',
      'Up to 10,000 conversations/mo',
      'Custom voice & persona',
      'Up to 5 integrations',
      'Priority support + Slack channel',
      'Weekly analytics dashboard',
      'A/B script testing',
    ],
    cta: 'Book a Demo',
  },
  {
    name: 'Enterprise',
    tagline: 'For high-volume operations',
    price: 'Custom',
    note: 'Fully bespoke pricing',
    highlight: false,
    features: [
      'Unlimited agents',
      'Unlimited conversations',
      'Dedicated account manager',
      'Unlimited integrations + API access',
      '24/7 SLA-backed support',
      'Real-time analytics & custom reports',
      'White-label available',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
  },
]

const faqs = [
  {
    q: 'How is Gitavox pricing structured?',
    a: 'We price based on your specific use case, conversation volume, number of agents, and integrations needed. All plans include setup, training, and ongoing optimization — you\'re not buying software, you\'re getting a managed AI service.',
  },
  {
    q: 'Do I get locked into a contract?',
    a: 'We offer monthly and annual plans. Annual plans include a discount. We recommend starting monthly to validate ROI before committing long-term.',
  },
  {
    q: 'What does "conversations" mean?',
    a: 'A conversation is one complete interaction — a full phone call or a text thread from first message to resolution. We don\'t charge per minute or per message within a conversation.',
  },
  {
    q: 'What\'s included in setup and onboarding?',
    a: 'Every plan includes a discovery call, agent training with your data and scripts, integration setup, and a testing phase before going live. Most clients are live within 48 hours of the discovery call.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. As your usage grows, we\'ll recommend the right tier. There\'s no migration complexity — it\'s the same platform, more capacity.',
  },
]

export default function Pricing() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.orb} />
        <div className="container">
          <span className="badge">Pricing</span>
          <h1>Transparent, Value-Based Pricing</h1>
          <p>Every plan is custom-scoped to your business. No seat fees. No per-minute charges. Just outcomes.</p>
        </div>
      </section>

      <section className={`section ${styles.plans}`}>
        <div className="container">
          <div className={styles.grid}>
            {plans.map(p => (
              <div key={p.name} className={`${styles.card} ${p.highlight ? styles.highlighted : ''}`}>
                {p.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.cardTop}>
                  <h3>{p.name}</h3>
                  <p className={styles.tagline}>{p.tagline}</p>
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>{p.price}</span>
                    <span className={styles.note}>{p.note}</span>
                  </div>
                </div>
                <ul className={styles.features}>
                  {p.features.map(f => (
                    <li key={f}>
                      <Check size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/demo" className={p.highlight ? 'btn-primary' : 'btn-secondary'} style={{justifyContent:'center'}}>
                  {p.cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            All plans include agent setup, training, and initial integrations. Pricing is determined after a free discovery call.
          </p>
        </div>
      </section>

      <section className={`section ${styles.faq}`}>
        <div className="container">
          <div className={styles.faqHead}>
            <span className="badge">FAQs</span>
            <h2>Common Pricing Questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <details key={i} className={styles.faqItem}>
                <summary>
                  <span>{f.q}</span>
                  <HelpCircle size={16} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Not sure which plan fits?</h2>
            <p>Book a free 30-min call. We'll recommend the right scope based on your volume and goals.</p>
            <Link to="/demo" className="btn-primary">
              Book a Free Discovery Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
