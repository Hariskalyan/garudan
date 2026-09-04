import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-icon">
              <Truck size={26} color="#ffffff" />
            </div>
            <div className="logo-text">
              <span className="brand-name">GARUDAN BROTHERS</span>
              <span className="brand-sub">TRANSPORT & LOGISTICS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="header-actions">
            <button className="btn-primary btn-sm" onClick={onOpenQuote}>
              Get Trailer Quote <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="btn-primary w-full mt-4" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
              >
                Get Trailer Quote
              </button>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(7, 10, 17, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
        }
        .header.scrolled {
          background: rgba(7, 10, 17, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-bottom-color: rgba(255, 85, 0, 0.2);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--primary) 0%, #d03a00 100%);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(255, 85, 0, 0.4);
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.15rem;
          letter-spacing: 0.02em;
          color: #ffffff;
          line-height: 1.1;
        }
        .brand-sub {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--primary);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
          margin-right: 28px;
        }
        .nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: var(--transition);
          position: relative;
          padding: 4px 0;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .btn-sm {
          padding: 10px 20px;
          font-size: 0.88rem;
        }
        .mobile-toggle {
          display: none;
          background: transparent;
          color: #ffffff;
          padding: 8px;
        }
        .mobile-menu {
          background: var(--bg-card);
          border-bottom: 1px solid var(--border-glass);
          padding: 20px 0;
        }
        .mobile-menu-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0 24px;
        }
        .mobile-nav-link {
          font-size: 1.05rem;
          color: var(--text-main);
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .w-full { width: 100%; }
        .mt-4 { margin-top: 16px; }
        
        @media (max-width: 992px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          .hide-mobile { display: none; }
        }
      `}</style>
    </>
  );
};
