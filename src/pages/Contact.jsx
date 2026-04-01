import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: <Mail size={18}/>, label: 'Email', value: 'hello@gitavox.com', href: 'mailto:hello@gitavox.com' },
  { icon: <Clock size={18}/>, label: 'Response Time', value: 'Within 2 business hours', href: null },
  { icon: <MapPin size={18}/>, label: 'Operating Hours', value: 'Mon–Fri, 9am–6pm EST', href: null },
]

const reasons = [
  'Book a demo',
  'Get a custom quote',
  'Partnership inquiry',
  'Technical support',
  'Press / media',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', reason: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    // TODO: Wire to your backend / Formspree / EmailJS
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.orb}/>
        <div className="container">
          <span className="badge">Contact</span>
          <h1>Let's Talk</h1>
          <p>Whether you're ready to deploy or just exploring — we're happy to answer any questions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.left}>
              <div className={styles.infoCards}>
                {contactInfo.map(c => (
                  <div key={c.label} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{c.icon}</div>
                    <div>
                      <span className={styles.infoLabel}>{c.label}</span>
                      {c.href
                        ? <a href={c.href} className={styles.infoValue}>{c.value}</a>
                        : <span className={styles.infoValue}>{c.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.ctaAlt}>
                <MessageSquare size={20}/>
                <div>
                  <h4>Want a live demo instead?</h4>
                  <p>Book a 30-minute session and see Gitavox in action.</p>
                  <a href="/demo" className="btn-ghost" style={{marginTop: 8, display:'inline-flex'}}>
                    Book a Demo <ArrowRight size={13}/>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Message received!</h3>
                  <p>We'll get back to you at <strong>{form.email}</strong> within 2 business hours.</p>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label>Full Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" />
                      </div>
                      <div className={styles.field}>
                        <label>Work Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
                      </div>
                    </div>
                    <div className={styles.field}>
                      <label>Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name" />
                    </div>
                    <div className={styles.field}>
                      <label>Reason for Contact *</label>
                      <select name="reason" required value={form.reason} onChange={handleChange}>
                        <option value="">Select a reason...</option>
                        {reasons.map(r => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Message *</label>
                      <textarea
                        name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>
                    <button type="submit" className={`btn-primary ${styles.submitBtn}`} disabled={loading}>
                      {loading ? 'Sending…' : <>Send Message <ArrowRight size={16}/></>}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
