import { Link } from 'react-router-dom'
import { ArrowRight, Phone, MessageSquare, Zap, Shield, Globe, TrendingUp, CheckCircle, Play, ChevronRight } from 'lucide-react'
import styles from './Home.module.css'

// ---------- Hero ----------
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOrb1} />
      <div className={styles.heroOrb2} />
      <div className={`${styles.heroGrid} grid-bg`} />

      <div className="container">
        <div className={styles.heroInner}>
          <span className={`badge animate-fade-up`}>
            <span className={styles.dot} />
            AI Agents for B2B — Live & Deployed
          </span>

          <h1 className={`${styles.heroTitle} animate-fade-up delay-1`}>
            Your Business Needs<br />
            Agents That <span className="grad-text">Never Sleep</span>
          </h1>

          <p className={`${styles.heroSub} animate-fade-up delay-2`}>
            Gitavox deploys AI voice and text agents that handle sales calls, support tickets,
            lead qualification, and appointment scheduling — 24/7, across every channel,
            without adding headcount.
          </p>

          <div className={`${styles.heroCta} animate-fade-up delay-3`}>
            <Link to="/demo" className="btn-primary">
              Book a Free Demo <ArrowRight size={16} />
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>

          <div className={`${styles.heroStats} animate-fade-up delay-4`}>
            {[
              { label: 'Calls Handled / Day', value: '50,000+' },
              { label: 'Avg. Handle Time', value: '< 2 min' },
              { label: 'Deployment Time', value: '48 hrs' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agent preview card */}
        <div className={`${styles.agentCard} animate-fade-up delay-5`}>
          <div className={styles.agentHeader}>
            <div className={styles.agentAvatar}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4DFFD2" strokeWidth="1.8">
                <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
              </svg>
            </div>
            <div>
              <p className={styles.agentName}>Aria — Gitavox Voice Agent</p>
              <p className={styles.agentStatus}><span className={styles.liveDot}/>Live • Outbound Sales</p>
            </div>
            <div className={styles.waveform}>
              {[4,8,12,7,10,5,9,13,6,11,8,4,10,7,12].map((h, i) => (
                <div key={i} className={styles.bar} style={{ height: h * 2.4 + 'px', animationDelay: i * 0.07 + 's' }} />
              ))}
            </div>
          </div>
          <div className={styles.transcript}>
            <div className={styles.msgAgent}>Hi! This is Aria from Acme Corp. I'm reaching out about upgrading your current plan — do you have 2 minutes?</div>
            <div className={styles.msgUser}>Sure, go ahead.</div>
            <div className={styles.msgAgent}>Great! Based on your usage, you qualify for our Enterprise tier which includes priority support and unlimited seats...</div>
            <div className={styles.typing}><span/><span/><span/></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- Logos ----------
const logos = ['Acme Corp', 'TechScale', 'VentureFlow', 'CoreSales', 'PeakOps', 'NexaTech']

function LogoBar() {
  return (
    <section className={styles.logoBar}>
      <div className="container">
        <p className={styles.logoLabel}>Trusted by fast-growing B2B companies</p>
        <div className={styles.logos}>
          {logos.map(l => (
            <div key={l} className={styles.logoItem}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- What We Do ----------
const services = [
  {
    icon: <Phone size={22} />, title: 'AI Voice Agents',
    desc: 'Human-sounding agents that make and receive calls — handling objections, booking meetings, and qualifying leads with natural conversation.',
    features: ['Outbound & inbound calls', 'Custom voice & persona', 'CRM sync in real-time', 'Multi-language support'],
  },
  {
    icon: <MessageSquare size={22} />, title: 'AI Text Agents',
    desc: 'Intelligent chat agents deployed across SMS, WhatsApp, email, and web — responding instantly and escalating when needed.',
    features: ['Omnichannel deployment', 'Context-aware replies', 'Smart escalation logic', 'Template & freeform modes'],
  },
]

function WhatWeDo() {
  return (
    <section className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className="badge">Services</span>
          <h2>Two Powerful Agent Types.<br />One Unified Platform.</h2>
          <p>Whether your team needs voice or text — Gitavox builds, trains, and deploys agents that represent your brand perfectly.</p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map(s => (
            <div key={s.title} className={`card ${styles.serviceCard}`}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <ul className={styles.featureList}>
                {s.features.map(f => (
                  <li key={f}><CheckCircle size={14} />{f}</li>
                ))}
              </ul>
              <Link to="/demo" className="btn-ghost">
                Get started <ChevronRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Benefits ----------
const benefits = [
  { icon: <Zap size={20}/>, title: 'Deploy in 48 Hours', desc: 'From discovery call to live agent in under 2 days. No lengthy implementations.' },
  { icon: <Globe size={20}/>, title: '24/7 Global Coverage', desc: 'Your agents work nights, weekends, and holidays — across every time zone.' },
  { icon: <TrendingUp size={20}/>, title: 'Infinite Scalability', desc: 'Handle 1 or 100,000 conversations simultaneously without hiring a single rep.' },
  { icon: <Shield size={20}/>, title: 'Enterprise-Grade Security', desc: 'SOC 2 compliant infrastructure. Your data is encrypted at rest and in transit.' },
]

function Benefits() {
  return (
    <section className={`section ${styles.benefits}`}>
      <div className={styles.benefitsOrb} />
      <div className="container">
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsLeft}>
            <span className="badge">Why Gitavox</span>
            <h2>Built for Revenue Teams That Move Fast</h2>
            <p>We handle the AI complexity so your team can focus on strategy, not maintenance. Every agent is tuned to your workflow and improves over time.</p>
            <Link to="/demo" className="btn-primary" style={{marginTop: 8}}>
              Start a Conversation <ArrowRight size={16}/>
            </Link>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map(b => (
              <div key={b.title} className={`card ${styles.benefitCard}`}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- Use Cases preview ----------
const cases = [
  { label: 'Sales', title: 'Automated Outbound Sales', desc: 'Call cold lists, handle objections, book demos — without a BDR.' },
  { label: 'Support', title: '24/7 Customer Support', desc: 'Resolve tier-1 issues instantly. Escalate the rest with full context.' },
  { label: 'Scheduling', title: 'Appointment Booking', desc: 'Coordinate meetings, confirmations, and reminders automatically.' },
  { label: 'Leads', title: 'Lead Qualification', desc: 'Score and route inbound leads before your sales team picks up.' },
]

function UseCasesPreview() {
  return (
    <section className={`section ${styles.usecases}`}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className="badge">Use Cases</span>
          <h2>What Can Your Agent Do?</h2>
          <p>Gitavox agents are purpose-built for core B2B workflows.</p>
        </div>
        <div className={styles.caseGrid}>
          {cases.map((c, i) => (
            <div key={c.label} className={`card ${styles.caseCard}`} style={{animationDelay: i * 0.08 + 's'}}>
              <span className={styles.caseLabel}>{c.label}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.caseLink}>
          <Link to="/use-cases" className="btn-secondary">
            View All Use Cases <ArrowRight size={15}/>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---------- How It Works mini ----------
function HowItWorksMini() {
  const steps = [
    { n: '01', title: 'Discovery Call', desc: 'We learn your workflow, tone, and goals.' },
    { n: '02', title: 'Agent Training', desc: 'We build and train your agent with your scripts, FAQs, and data.' },
    { n: '03', title: 'Live in 48 hrs', desc: 'Your agent goes live. We monitor, tune, and improve.' },
  ]
  return (
    <section className={`section ${styles.howMini}`}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className="badge">Process</span>
          <h2>From Zero to Agent in 3 Steps</h2>
        </div>
        <div className={styles.stepsRow}>
          {steps.map((s, i) => (
            <div key={s.n} className={styles.step}>
              <div className={styles.stepNum}>{s.n}</div>
              {i < 2 && <div className={styles.stepLine}/>}
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.caseLink}>
          <Link to="/how-it-works" className="btn-ghost">
            Deep dive into the process <ArrowRight size={14}/>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---------- CTA ----------
function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaOrb}/>
      <div className="container">
        <div className={styles.ctaBox}>
          <span className="badge">Get Started</span>
          <h2>Ready to Deploy Your First Agent?</h2>
          <p>Book a free 30-minute demo. We'll show you exactly how Gitavox works for your specific use case — no pressure, just value.</p>
          <div className={styles.ctaButtons}>
            <Link to="/demo" className="btn-primary">
              Book a Free Demo <ArrowRight size={16}/>
            </Link>
            <Link to="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <WhatWeDo />
      <Benefits />
      <UseCasesPreview />
      <HowItWorksMini />
      <CTA />
    </>
  )
}
