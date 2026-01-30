import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#technology', label: 'Technology' },
    { href: '#locations', label: 'Locations' },
    { href: '#faq', label: 'FAQ' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        zIndex: 9999,
        background: isScrolled 
          ? 'rgba(250, 250, 248, 0.95)' 
          : 'rgba(250, 250, 248, 0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(27, 27, 33, 0.08)',
        boxShadow: isScrolled 
          ? '0 4px 24px rgba(27, 27, 33, 0.08)' 
          : '0 4px 24px rgba(27, 27, 33, 0.04)',
        transition: 'all 0.3s cubic-bezier(0.44, 0, 0.56, 1)'
      }}
    >
      <div className="container" style={{ height: '100%' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}>
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#1b1b21',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.6'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            YORI
          </a>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px'
          }}>
            {/* Nav Links - Desktop */}
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '36px',
              alignItems: 'center',
              margin: 0,
              padding: 0
            }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    style={{
                      color: '#1b1b21',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '15px',
                      transition: 'color 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'rgba(27, 27, 33, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#1b1b21';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              style={{
                padding: '12px 24px',
                background: '#1b1b21',
                color: '#fafafa',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '15px',
                transition: 'all 0.2s cubic-bezier(0.44, 0, 0.56, 1)',
                boxShadow: '0 4px 16px rgba(27, 27, 33, 0.12)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(27, 27, 33, 0.2)';
                e.target.style.background = '#2d2d35';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px rgba(27, 27, 33, 0.12)';
                e.target.style.background = '#1b1b21';
              }}
            >
              Partner with us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            background: 'rgba(250, 250, 248, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(27, 27, 33, 0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{
                color: '#1b1b21',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '18px',
                padding: '12px 0'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            style={{
              padding: '16px 24px',
              background: '#1b1b21',
              color: '#fafafa',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 600,
              textAlign: 'center',
              marginTop: '8px'
            }}
          >
            Partner with us
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
