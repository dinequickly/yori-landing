import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Smartphone, Hand, DoorOpen } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Walk in',
    description: 'Tap your card or phone to enter. No app download required.',
    icon: DoorOpen,
    detail: 'Contactless entry with any NFC-enabled device'
  },
  {
    number: '02',
    title: 'Grab',
    description: 'Pick up whatever you need. Our sensors track everything.',
    icon: Hand,
    detail: 'AI computer vision + weight sensors detect each item'
  },
  {
    number: '03',
    title: 'Walk out',
    description: 'Simply leave. You\'re charged automatically. Receipt via email.',
    icon: Smartphone,
    detail: 'Auto-billed to your card. Digital receipt in seconds'
  }
];

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        padding: '160px 0',
        background: '#fafaf8',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: '#1b1b21',
            color: '#fafafa',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            How It Works
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#1b1b21'
          }}>
            Three steps to fresh food
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(27, 27, 33, 0.6)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            No lines. No scanning. No waiting. Just grab and go.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.44, 0, 0.56, 1] 
              }}
              style={{
                background: '#ffffff',
                padding: '48px 40px',
                borderRadius: '24px',
                border: '1px solid rgba(27, 27, 33, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.44, 0, 0.56, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(27, 27, 33, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(27, 27, 33, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(27, 27, 33, 0.08)';
              }}
            >
              {/* Step Number */}
              <span style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                fontSize: '14px',
                fontWeight: 700,
                color: 'rgba(122, 158, 126, 0.4)',
                letterSpacing: '0.05em'
              }}>
                {step.number}
              </span>

              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                transition: 'transform 0.3s ease'
              }}>
                <step.icon size={28} style={{ color: '#1b1b21' }} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '12px',
                color: '#1b1b21'
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '16px',
                lineHeight: 1.6,
                color: 'rgba(27, 27, 33, 0.6)',
                marginBottom: '16px'
              }}>
                {step.description}
              </p>

              {/* Detail Line */}
              <p style={{
                fontSize: '14px',
                lineHeight: 1.5,
                color: '#1b1b21',
                fontWeight: 500
              }}>
                {step.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
