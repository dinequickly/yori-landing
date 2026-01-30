import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  BarChart3, 
  Leaf 
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Higher satisfaction',
    description: 'Give tenants, students, and employees 24/7 access to fresh, healthy options.',
    outcome: '+40% amenity satisfaction scores'
  },
  {
    icon: TrendingUp,
    title: 'Incremental revenue',
    description: 'Turn underutilized square meters into a revenue stream with zero capital investment.',
    outcome: '£2,000-4,000 per unit/month'
  },
  {
    icon: Clock,
    title: 'Reduced staffing',
    description: 'No cashiers, no checkout staff, no inventory management on your end.',
    outcome: '100% automated operation'
  },
  {
    icon: Shield,
    title: 'Low shrink + audit trail',
    description: 'Every item tracked with 99% accuracy. Complete transaction history.',
    outcome: '<1% loss rate vs 15% industry avg'
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    description: 'See what sells, when, and to whom. Data-driven assortment optimization.',
    outcome: 'Live dashboard + weekly reports'
  },
  {
    icon: Leaf,
    title: 'Sustainable operations',
    description: 'Precise demand forecasting reduces food waste. Eco-friendly packaging.',
    outcome: '60% less waste than traditional'
  }
];

export function Benefits() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="features"
      style={{
        padding: '160px 0',
        background: '#f5f5f0',
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
            Why YORI
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#1b1b21'
          }}>
            Built for operators, not just shoppers
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(27, 27, 33, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We handle the complexity. You get the benefits: happier tenants, 
            new revenue, and zero operational overhead.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.44, 0, 0.56, 1] 
              }}
              style={{
                background: '#ffffff',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(27, 27, 33, 0.06)',
                transition: 'all 0.3s cubic-bezier(0.44, 0, 0.56, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(27, 27, 33, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '52px',
                height: '52px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <benefit.icon size={24} style={{ color: '#1b1b21' }} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '10px',
                color: '#1b1b21'
              }}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'rgba(27, 27, 33, 0.6)',
                marginBottom: '16px'
              }}>
                {benefit.description}
              </p>

              {/* Outcome Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 14px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1b1b21'
              }}>
                {benefit.outcome}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
