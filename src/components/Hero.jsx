import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Leaf, Zap } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
  };

  const proofChips = [
    { icon: Clock, label: '24/7 availability' },
    { icon: Leaf, label: 'Fresh daily' },
    { icon: Zap, label: 'No checkout' },
  ];

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '172px',
        paddingBottom: '128px',
        overflow: 'hidden',
        background: '#fafaf8'
      }}
    >
      {/* Japanese Grid Background */}
      <div className="japanese-grid" />
      
      {/* Abstract Geometric Decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.44, 0, 0.56, 1] }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          border: '1px solid rgba(27, 27, 33, 0.08)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.44, 0, 0.56, 1] }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(27, 27, 33, 0.05)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="container"
      >
        <div style={{
          textAlign: 'center',
          maxWidth: '872px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#1b1b21',
              color: '#fafafa',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.02em',
              marginBottom: '28px'
            }}
          >
            Launching UK 2026
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.44, 0, 0.56, 1] }}
            style={{
              fontSize: 'clamp(48px, 8vw, 84px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginBottom: '32px',
              color: '#1b1b21'
            }}
          >
            Never close.{" "}
            <span style={{ color: '#1b1b21', fontStyle: 'italic' }}>Never compromise.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.44, 0, 0.56, 1] }}
            style={{
              fontSize: '20px',
              lineHeight: 1.7,
              color: 'rgba(27, 27, 33, 0.6)',
              marginBottom: '48px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            AI-powered Smart Stores delivering premium fresh food 24/7. 
            No staff. No queues. Just grab what you need and go.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.44, 0, 0.56, 1] }}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '64px'
            }}
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              style={{
                padding: '18px 36px',
                background: '#1b1b21',
                color: '#fafafa',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '17px',
                transition: 'all 0.25s cubic-bezier(0.44, 0, 0.56, 1)',
                boxShadow: '0 4px 20px rgba(27, 27, 33, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 30px rgba(27, 27, 33, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(27, 27, 33, 0.15)';
              }}
            >
              Partner with us
            </a>
            <a
              href="#features"
              onClick={(e) => scrollToSection(e, '#features')}
              style={{
                padding: '18px 36px',
                background: 'transparent',
                color: '#1b1b21',
                border: '2px solid #1b1b21',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '17px',
                transition: 'all 0.25s cubic-bezier(0.44, 0, 0.56, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#1b1b21';
                e.target.style.color = '#fafafa';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#1b1b21';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Explore features
            </a>
          </motion.div>

          {/* Proof Chips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.44, 0, 0.56, 1] }}
            style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {proofChips.map((chip, index) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(27, 27, 33, 0.7)',
                  fontSize: '15px',
                  fontWeight: 500
                }}
              >
                <chip.icon size={18} style={{ color: '#1b1b21' }} />
                <span>{chip.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.44, 0, 0.56, 1] }}
          style={{
            width: '100%',
            maxWidth: '900px',
            margin: '80px auto 0',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{
            width: '100%',
            minHeight: '500px',
            background: 'linear-gradient(135deg, #f0f0ec 0%, #e8e8e3 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: '24px',
              border: '2px dashed rgba(27, 27, 33, 0.1)',
              borderRadius: '16px'
            }} />
            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'rgba(27, 27, 33, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <span style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: '#1b1b21'
                }}>Y</span>
              </div>
              <span style={{
                color: 'rgba(27, 27, 33, 0.5)',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Hero Image / 3D Render
              </span>
              <p style={{
                color: 'rgba(27, 27, 33, 0.4)',
                fontSize: '13px',
                marginTop: '8px'
              }}>
                Smart Store in a modern office environment
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
