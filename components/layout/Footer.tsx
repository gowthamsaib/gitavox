import React from 'react';
import { Link } from 'react-router-dom';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { footer } from '../../data/site';

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'VoxFlow', href: '/products#voxflow' },
    { label: 'Conversa', href: '/products#conversa' },
    { label: 'Custom AI Agents', href: '/products#custom-ai-agents' },
  ],
};

export const Footer: React.FC = () => (
  <footer className="py-20 px-6 border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#010409]">
    <div className={`${MAX_WIDTH_CONTAINER} mx-auto grid grid-cols-1 md:grid-cols-4 gap-12`}>
      {/* Brand */}
      <div className="col-span-1 md:col-span-2">
        <Link to="/" className="flex items-center gap-2.5 mb-6">
          <img
            src={`${import.meta.env.BASE_URL}favicon.png`}
            alt=""
            className="w-7 h-7"
            width={28}
            height={28}
            aria-hidden
          />
          <span className="text-xl font-outfit font-bold tracking-tight text-slate-900 dark:text-white">
            Gita<span className="text-blue-500">Vox</span>
          </span>
        </Link>
        <p className="text-slate-500 text-sm max-w-sm mb-8">{footer.tagline}</p>
        <a
          href="https://www.linkedin.com/company/gitavox-inc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Follow us on LinkedIn ↗
        </a>
      </div>

      {/* Company links */}
      <div>
        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Company
        </h5>
        <ul className="space-y-4 text-sm text-slate-500">
          {footerLinks.company.map(({ label, href }) => (
            <li key={label}>
              <Link to={href} className="hover:text-blue-500 transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact & legal */}
      <div>
        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Contact
        </h5>
        <ul className="space-y-4 text-sm text-slate-500">
          {footer.contact.map((item) => (
            <li key={item.label}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </a>
              ) : item.href.startsWith('mailto:') ? (
                <a href={item.href} className="hover:text-blue-500 transition-colors">
                  {item.label}
                </a>
              ) : (
                <Link to={item.href} className="hover:text-blue-500 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div
      className={`${MAX_WIDTH_CONTAINER} mx-auto pt-12 mt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-600`}
    >
      <p>{footer.copyright}</p>
      <div className="flex gap-6">
        <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
      </div>
    </div>
  </footer>
);
