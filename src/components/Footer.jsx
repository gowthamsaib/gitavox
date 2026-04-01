import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="9" fill="#0A0A0F"/>
                <rect width="32" height="32" rx="9" stroke="rgba(77,255,210,0.3)" strokeWidth="1"/>
                <circle cx="16" cy="16" r="7" fill="none" stroke="#4DFFD2" strokeWidth="1.5"/>
                <circle cx="16" cy="16" r="2.5" fill="#4DFFD2"/>
              </svg>
              <span>Gitavox</span>
            </Link>
            <p className={styles.tagline}>
              AI Voice &amp; Text Agents<br/>for B2B Companies.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter/X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4>Product</h4>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/use-cases">Use Cases</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/demo">Book a Demo</Link>
            </div>
            <div className={styles.col}>
              <h4>Solutions</h4>
              <Link to="/use-cases#sales">Sales Automation</Link>
              <Link to="/use-cases#support">Customer Support</Link>
              <Link to="/use-cases#scheduling">Appointment Scheduling</Link>
              <Link to="/use-cases#lead">Lead Qualification</Link>
            </div>
            <div className={styles.col}>
              <h4>Company</h4>
              <Link to="/contact">Contact Us</Link>
              <a href="mailto:hello@gitavox.com">hello@gitavox.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Gitavox. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
