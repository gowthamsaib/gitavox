import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall, MessageSquare, CalendarCheck, Filter, Headphones, BarChart2 } from 'lucide-react'
import styles from './UseCases.module.css'

const cases = [
  {
    id: 'sales',
    icon: <PhoneCall size={24} />,
    label: 'Sales',
    title: 'Automated Outbound Sales',
    desc: 'Your AI voice agent dials your prospect list, delivers a personalized pitch, handles common objections, and books qualified meetings directly into your reps\' calendars — without human involvement.',
    outcomes: ['3× more dials per day vs. human SDRs', 'Consistent messaging across every call', 'Real-time CRM updates after each call', 'Automatic follow-up sequence trigger'],
    industries: ['SaaS', 'Insurance', 'Real Estate', 'Financial Services'],
  },
  {
    id: 'support',
    icon: <Headphones size={24} />,
    label: 'Customer Support',
    title: '24/7 Tier-1 Support Agent',
    desc: 'Handle billing questions, password resets, order status, and product FAQs instantly — over voice or text. Complex issues are escalated with a full transcript so human agents have full context.',
    outcomes: ['Resolve 60–70% of tickets without a human', 'Response time: < 2 seconds', 'Consistent tone & policy compliance', 'Multilingual support out of the box'],
    industries: ['E-commerce', 'SaaS', 'Fintech', 'Healthcare'],
  },
  {
    id: 'scheduling',
    icon: <CalendarCheck size={24} />,
    label: 'Scheduling',
    title: 'Appointment & Meeting Booking',
    desc: 'From inbound calls to outbound reminder sequences, your scheduling agent coordinates availability, sends confirmations, handles reschedules, and reduces no-shows automatically.',
    outcomes: ['40% reduction in no-show rates', 'Integrated with Google, Outlook, HubSpot', 'Outbound reminder calls & SMS', '2-way calendar sync'],
    industries: ['Healthcare', 'Legal', 'Real Estate', 'Consulting'],
  },
  {
    id: 'lead',
    icon: <Filter size={24} />,
    label: 'Lead Qualification',
    title: 'Inbound Lead Qualification',
    desc: 'When a new lead fills out a form or calls in, your agent immediately engages them — asks qualifying questions, scores the lead, routes hot leads to the right rep, and logs everything in your CRM.',
    outcomes: ['Engage leads within seconds of form submit', 'Custom qualification criteria', 'Automatic CRM enrichment', 'Hot/warm/cold routing logic'],
    industries: ['B2B SaaS', 'Agencies', 'Staffing', 'Education'],
  },
  {
    id: 'collections',
    icon: <BarChart2 size={24} />,
    label: 'Collections',
    title: 'Payment & Collections Outreach',
    desc: 'Send proactive payment reminders via voice or text, collect card details securely, negotiate payment plans, and reduce DSO without putting humans on uncomfortable calls.',
    outcomes: ['Reduce overdue receivables by 35%+', 'PCI-compliant call flows', 'Flexible payment plan scripting', 'Escalation to human for disputes'],
    industries: ['Fintech', 'Healthcare', 'SaaS', 'Utilities'],
  },
  {
    id: 'surveys',
    icon: <MessageSquare size={24} />,
    label: 'Surveys & Feedback',
    title: 'Post-interaction Surveys',
    desc: 'Automatically survey customers after a call, support ticket, or delivery — via voice or SMS. Collect NPS, CSAT, and qualitative feedback at scale with no manual follow-up.',
    outcomes: ['5× higher response rate vs. email surveys', 'Instant sentiment analysis', 'Auto-tag negative experiences', 'Weekly insight digest'],
    industries: ['E-commerce', 'Hospitality', 'SaaS', 'Healthcare'],
  },
]

export default function UseCases() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.orb}/>
        <div className="container">
          <span className="badge">Use Cases</span>
          <h1>Your AI Agent, Built for<br/><span className="grad-text">Your Workflow</span></h1>
          <p>Gitavox agents are purpose-trained for specific B2B jobs. Pick your use case and we'll deploy an agent that nails it.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.caseList}>
            {cases.map((c, i) => (
              <div key={c.id} id={c.id} className={`${styles.caseRow} ${i % 2 === 1 ? styles.reversed : ''}`}>
                <div className={styles.caseContent}>
                  <div className={styles.caseIcon}>{c.icon}</div>
                  <span className={styles.caseLabel}>{c.label}</span>
                  <h2>{c.title}</h2>
                  <p>{c.desc}</p>
                  <ul className={styles.outcomes}>
                    {c.outcomes.map(o => (
                      <li key={o}>
                        <span className={styles.check}>✓</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link to="/demo" className="btn-primary" style={{alignSelf:'flex-start', marginTop: 8}}>
                    Explore this use case <ArrowRight size={15}/>
                  </Link>
                </div>
                <div className={styles.caseViz}>
                  <div className={styles.vizCard}>
                    <div className={styles.vizTop}>
                      <div className={styles.vizIcon}>{c.icon}</div>
                      <span>Gitavox Agent — {c.label}</span>
                      <span className={styles.liveTag}>Live</span>
                    </div>
                    <div className={styles.industries}>
                      <p className={styles.indLabel}>Common Industries</p>
                      <div className={styles.tags}>
                        {c.industries.map(ind => (
                          <span key={ind} className={styles.tag}>{ind}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.metricsRow}>
                      <div className={styles.metric}>
                        <span className={styles.metricVal}>24/7</span>
                        <span className={styles.metricLabel}>Availability</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricVal}>∞</span>
                        <span className={styles.metricLabel}>Scale</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricVal}>48h</span>
                        <span className={styles.metricLabel}>Go Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Don't see your use case?</h2>
            <p>Gitavox agents can be custom-trained for nearly any B2B workflow. Let's talk about yours.</p>
            <Link to="/contact" className="btn-primary">
              Talk to Our Team <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
