import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="9" fill="#0A0A0F"/>
      <rect width="32" height="32" rx="9" stroke="rgba(77,255,210,0.3)" strokeWidth="1"/>
      <circle cx="16" cy="16" r="7" fill="none" stroke="#4DFFD2" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="2.5" fill="#4DFFD2"/>
      <line x1="16" y1="9" x2="16" y2="7" stroke="#4DFFD2" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="16" y1="25" x2="16" y2="23" stroke="#4DFFD2" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9" y1="16" x2="7" y2="16" stroke="#4DFFD2" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="25" y1="16" x2="23" y2="16" stroke="#4DFFD2" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
    <span>Gitavox</span>
  </Link>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const navLinks = [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        <Logo />
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link to="/demo" className="btn-primary">
            Book a Demo
          </Link>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(l => (
            <Link key={l.href} to={l.href} className={styles.mobileLink}>
              {l.label}
            </Link>
          ))}
          <Link to="/demo" className="btn-primary" style={{ marginTop: 8 }}>
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  )
}
