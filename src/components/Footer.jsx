import { Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#technology' },
    { label: 'Locations', href: '#locations' },
    { label: 'Pricing', href: '#contact' }
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#contact' }
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Security', href: '#' }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function Footer() {
  const scrollToSection = (e, href) => {
    if (href.startsWith('#') && href !== '#') {
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
    }
  };

  return (
    <footer style={{
      background: '#1b1b21',
      padding: '80px 0 40px',
      borderTop: '1px solid rgba(250, 250, 250, 0.06)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Column */}
          <div>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#fafafa',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                display: 'inline-block',
                marginBottom: '16px'
              }}
            >
              YORI
            </a>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(250, 250, 250, 0.5)',
              marginBottom: '24px',
              maxWidth: '280px'
            }}>
              Redefining automated dining with AI-powered Smart Stores. 
              Fresh food, any hour, anywhere.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(250, 250, 250, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(250, 250, 250, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(250, 250, 250, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <social.icon size={18} style={{ color: '#fafafa' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#fafafa',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {category}
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      style={{
                        color: 'rgba(250, 250, 250, 0.5)',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.2s ease',
                        display: 'inline-block'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#fafafa';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(250, 250, 250, 0.5)';
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '40px',
          borderTop: '1px solid rgba(250, 250, 250, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(250, 250, 250, 0.4)'
          }}>
            © 2026 YORI. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: 'rgba(250, 250, 250, 0.4)'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: 'rgba(250, 250, 250, 0.15)',
              borderRadius: '50%'
            }} />
            Launching UK 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
