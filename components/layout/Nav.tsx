import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarPlus, ChevronDown } from 'lucide-react';
import { MAX_WIDTH_CONTAINER } from '../../config/app';
import { CALENDLY_DISCOVERY_URL } from '../../config/calendly';
import { navigation } from '../../data/navigation';
import { ThemeToggle } from '../ThemeToggle';

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-slate-200/80 dark:border-white/5">
        <div className={`${MAX_WIDTH_CONTAINER} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={`${import.meta.env.BASE_URL}favicon.png`}
                alt=""
                className="w-8 h-8"
                width={32}
                height={32}
                aria-hidden
              />
              <span className="text-2xl font-outfit font-extrabold tracking-tight">
                Gita<span className="text-blue-500">Vox</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${isActive('/') ? 'text-blue-500' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link
                  to="/products"
                  className={`text-sm font-medium transition-colors uppercase tracking-wider inline-flex items-center gap-1 ${isActive('/products') ? 'text-blue-500' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
                >
                  Products <ChevronDown size={14} />
                </Link>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-card border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 shadow-xl">
                    {navigation.products.map((product) => (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="block px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                      >
                        <div className="font-semibold text-slate-900 dark:text-white text-sm">
                          {product.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {product.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <Link
                  to="/solutions"
                  className={`text-sm font-medium transition-colors uppercase tracking-wider inline-flex items-center gap-1 ${isActive('/solutions') ? 'text-blue-500' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
                >
                  Solutions <ChevronDown size={14} />
                </Link>
                {isSolutionsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 glass-card border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 shadow-xl">
                    {navigation.solutions.map((sol) => (
                      <Link
                        key={sol.name}
                        to={sol.href}
                        className="block px-4 py-3 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                      >
                        <div className="font-semibold text-slate-900 dark:text-white text-sm">
                          {sol.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {sol.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${isActive('/pricing') ? 'text-blue-500' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${isActive('/contact') ? 'text-blue-500' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
              >
                Contact
              </Link>

              <ThemeToggle size={20} className="p-2.5 rounded-full bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 transition-all dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 dark:hover:text-white" />

              <a
                href={CALENDLY_DISCOVERY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25"
              >
                <CalendarPlus size={18} strokeWidth={2.5} aria-hidden />
                Book a Demo
              </a>
            </div>

            {/* Mobile header icons */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle size={22} className="p-2 rounded-full bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 dark:hover:text-white" />
              <button
                type="button"
                onClick={() => setIsMenuOpen((o) => !o)}
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden glass-card pt-24 px-6 flex flex-col gap-4 bg-gray-50/95 dark:bg-[#030712]/95 text-slate-900 dark:text-slate-100 overflow-y-auto pb-10"
          role="dialog"
          aria-label="Mobile menu"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-outfit font-bold">Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-2xl font-outfit font-bold">Products</Link>
          <Link to="/solutions" onClick={() => setIsMenuOpen(false)} className="text-2xl font-outfit font-bold">Solutions</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="text-2xl font-outfit font-bold">Pricing</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-outfit font-bold">Contact</Link>

          <div className="border-t border-slate-200/50 dark:border-white/5 pt-6 mt-2">
            <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 font-semibold">
              Connect
            </div>
            <a
              href="https://www.linkedin.com/company/gitavox-inc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-outfit font-semibold text-slate-700 dark:text-slate-300 block mb-4"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:admin@gitavox.tech"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-outfit font-semibold text-slate-700 dark:text-slate-300 block"
            >
              Email Us
            </a>
          </div>

          <a
            href={CALENDLY_DISCOVERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full py-4 bg-blue-600 rounded-2xl text-lg font-bold text-white mt-4"
          >
            <CalendarPlus size={22} strokeWidth={2.5} aria-hidden />
            Book a Demo
          </a>
        </div>
      )}
    </>
  );
};
