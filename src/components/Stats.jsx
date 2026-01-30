import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ value, suffix, label, explanation, delay }) {
  const { count, ref } = useCountUp(value, 2000);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.44, 0, 0.56, 1] }}
      style={{
        textAlign: 'center',
        padding: '32px',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <div style={{
        fontSize: '56px',
        fontWeight: 700,
        color: '#1b1b21',
        lineHeight: 1,
        marginBottom: '12px',
        letterSpacing: '-0.02em'
      }}>
        {value < 1 ? '<1' : count}{suffix}
      </div>
      <div style={{
        fontSize: '18px',
        fontWeight: 600,
        color: '#1b1b21',
        marginBottom: '8px'
      }}>
        {label}
      </div>
      <div style={{
        fontSize: '14px',
        lineHeight: 1.5,
        color: 'rgba(27, 27, 33, 0.5)',
        maxWidth: '200px',
        margin: '0 auto'
      }}>
        {explanation}
      </div>
    </motion.div>
  );
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const stats = [
    {
      value: 1,
      suffix: '%',
      label: 'Shrink Rate',
      explanation: 'Loss from theft or damage vs 15% industry average for unattended retail'
    },
    {
      value: 99,
      suffix: '%',
      label: 'Detection Accuracy',
      explanation: 'Item recognition via sensor fusion (weight + vision + RFID)'
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Always Available',
      explanation: 'No downtime for restocking. Continuous cold-chain monitoring'
    }
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 0',
        background: '#fafaf8',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decoration */}
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        border: '2px solid rgba(27, 27, 33, 0.06)',
        borderRadius: '50%',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        transform: 'rotate(-45deg)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
          style={{
            background: '#ffffff',
            borderRadius: '32px',
            padding: '80px 60px',
            boxShadow: '0 4px 40px rgba(27, 27, 33, 0.05)',
            border: '1px solid rgba(27, 27, 33, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top right, rgba(122, 158, 126, 0.03) 0%, transparent 50%)',
            pointerEvents: 'none'
          }} />

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            position: 'relative',
            zIndex: 1
          }}>
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                {...stat}
                delay={0.2 + index * 0.15}
              />
            ))}
          </div>

          {/* Pilot Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(27, 27, 33, 0.08)',
              textAlign: 'center'
            }}
          >
            <p style={{
              fontSize: '14px',
              color: 'rgba(27, 27, 33, 0.5)',
              fontStyle: 'italic'
            }}>
              * Target metrics based on pilot simulations. Actual results may vary by location.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
