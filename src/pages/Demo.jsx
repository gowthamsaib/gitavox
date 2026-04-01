import { useState } from 'react'
import { ArrowRight, CheckCircle, Phone, MessageSquare, Calendar, Users } from 'lucide-react'
import styles from './Demo.module.css'

const benefits = [
  { icon: <Phone size={16}/>, text: 'Live voice agent demonstration tailored to your use case' },
  { icon: <MessageSquare size={16}/>, text: 'See a text agent in action on a real workflow' },
  { icon: <Calendar size={16}/>, text: '30-minute session — no filler, all signal' },
  { icon: <Users size={16}/>, text: 'Talk to a real human who will scope your solution' },
]

const useCaseOptions = [
  'Outbound Sales Calls',
  'Inbound Customer Support',
  'Appointment Scheduling',
  'Lead Qualification',
  'Payment Collections',
  'Post-Interaction Surveys',
  'Other / Multiple',
]

export default function Demo() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', company: '', phone: '',
    teamSize: '', useCase: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // TODO: Replace with your form backend (e.g. Formspree, EmailJS, your own API)
    await new Promise(r => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <section className={styles.successPage}>
        <div className={styles.successBox}>
          <div className={styles.successIcon}><CheckCircle size={36} /></div>
          <h2>You're booked!</h2>
          <p>We'll send a calendar invite to <strong>{form.email}</strong> within the next hour. Our team will review your use case before the call so we can make the demo as relevant as possible.</p>
          <p className={styles.successSub}>In the meantime, explore how it works →</p>
          <a href="/how-it-works" className="btn-primary">Explore the Process <ArrowRight size={15}/></a>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.orb}/>
        <div className="container">
          <span className="badge">Free Demo</span>
          <h1>See Gitavox in Action</h1>
          <p>Book a 30-minute live demo. We'll show you exactly how an AI agent would work for your business — before you commit to anything.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Left: benefits */}
            <div className={styles.left}>
              <h3>What to expect</h3>
              <ul className={styles.benefits}>
                {benefits.map((b, i) => (
                  <li key={i}>
                    <span className={styles.bIcon}>{b.icon}</span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.testimonial}>
                <p>"We booked the demo on a Tuesday and had our first agent live by Thursday. The process was shockingly smooth."</p>
                <div className={styles.tAuthor}>
                  <div className={styles.tAvatar}>JM</div>
                  <div>
                    <span className={styles.tName}>James M.</span>
                    <span className={styles.tRole}>VP Sales, TechScale</span>
                  </div>
                </div>
              </div>

              <div className={styles.timing}>
                <div className={styles.timingRow}>
                  <span className={styles.timingLabel}>Duration</span>
                  <span className={styles.timingValue}>30 minutes</span>
                </div>
                <div className={styles.timingRow}>
                  <span className={styles.timingLabel}>Format</span>
                  <span className={styles.timingValue}>Zoom / Google Meet</span>
                </div>
                <div className={styles.timingRow}>
                  <span className={styles.timingLabel}>Response Time</span>
                  <span className={styles.timingValue}>Within 2 business hours</span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className={styles.formCard}>
              <h3>Book Your Demo</h3>
              <p className={styles.formSub}>Fill out the form and we'll reach out within 2 hours to schedule.</p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>First Name *</label>
                    <input name="firstName" required value={form.firstName} onChange={handleChange} placeholder="John" />
                  </div>
                  <div className={styles.field}>
                    <label>Last Name *</label>
                    <input name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Smith" />
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Work Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" />
                </div>

                <div className={styles.field}>
                  <label>Company Name *</label>
                  <input name="company" required value={form.company} onChange={handleChange} placeholder="Acme Corp" />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Phone Number</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className={styles.field}>
                    <label>Team Size</label>
                    <select name="teamSize" value={form.teamSize} onChange={handleChange}>
                      <option value="">Select...</option>
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>200+</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Primary Use Case *</label>
                  <select name="useCase" required value={form.useCase} onChange={handleChange}>
                    <option value="">Select a use case...</option>
                    {useCaseOptions.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div className={styles.field}>
                  <label>Anything specific you want to see?</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your current process, pain points, or what a successful outcome looks like..."
                  />
                </div>

                <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
                  {loading ? 'Submitting…' : <>Book My Demo <ArrowRight size={16}/></>}
                </button>

                <p className={styles.privacy}>
                  No spam. No sales pressure. Your info is used only to schedule and prepare your demo.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
