import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Building2, Home, ArrowRight } from 'lucide-react';

const locations = [
  {
    icon: GraduationCap,
    title: 'Universities',
    scenario: 'Late-night study sessions',
    description: 'Students pulling all-nighters need fuel. Dining halls close at 8pm — YORI never does.',
    metric: '3,000+ daily transactions',
    metricLabel: 'at peak locations',
    color: '#1b1b21'
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    scenario: 'Meeting-heavy schedules',
    description: 'Back-to-back calls and tight deadlines mean no time to leave the building for lunch.',
    metric: '40% revenue increase',
    metricLabel: 'vs traditional vending',
    color: '#1b1b21'
  },
  {
    icon: Home,
    title: 'Residential',
    scenario: 'Student accommodation',
    description: 'Modern tenants expect 24/7 amenities. Be the building that delivers.',
    metric: '+25 tenant satisfaction',
    metricLabel: 'NPS score improvement',
    color: '#1b1b21'
  }
];

export function Locations() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="locations"
      style={{
        padding: '160px 0',
        background: '#f5f5f0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Enso */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-80px',
        width: '320px',
        height: '320px',
        border: '2px solid rgba(27, 27, 33, 0.05)',
        borderRadius: '50%',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        transform: 'rotate(-45deg)',
        pointerEvents: 'none'
      }} />

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
            Locations
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#1b1b21'
          }}>
            Perfect for modern spaces
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(27, 27, 33, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            YORI Smart Stores fit seamlessly into any environment where people 
            need convenient access to quality food.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {locations.map((location, index) => (
            <motion.div
              key={location.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.44, 0, 0.56, 1] 
              }}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(27, 27, 33, 0.06)',
                transition: 'all 0.3s cubic-bezier(0.44, 0, 0.56, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(27, 27, 33, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #f0f0ec 0%, #e8e8e3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '16px',
                  border: '2px dashed rgba(27, 27, 33, 0.1)',
                  borderRadius: '12px'
                }} />
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'rgba(27, 27, 33, 0.05)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <location.icon size={28} style={{ color: '#1b1b21' }} />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '32px' }}>
                {/* Scenario Tag */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 12px',
                  background: 'rgba(27, 27, 33, 0.05)',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1b1b21',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em'
                }}>
                  {location.scenario}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#1b1b21'
                }}>
                  {location.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'rgba(27, 27, 33, 0.6)',
                  marginBottom: '24px'
                }}>
                  {location.description}
                </p>

                {/* Metric */}
                <div style={{
                  padding: '16px',
                  background: '#f5f5f0',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1b1b21'
                    }}>
                      {location.metric}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: 'rgba(27, 27, 33, 0.5)'
                    }}>
                      {location.metricLabel}
                    </div>
                  </div>
                  <ArrowRight size={20} style={{ color: '#1b1b21' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
