import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Scan, Thermometer, BarChart2, Shield, Lock, Eye } from 'lucide-react';

const techPanels = [
  {
    title: 'Sensor fusion precision',
    description: 'Weight sensors, optical recognition, and RFID work together to identify every item with 99% accuracy.',
    details: [
      'Computer vision tracks hand movements',
      'Weight sensors verify item removal',
      'RFID tags as backup verification'
    ],
    icon: Scan,
    imageText: 'Sensor Fusion Diagram'
  },
  {
    title: 'Freshness guaranteed',
    description: 'Continuous temperature monitoring ensures optimal conditions. Automated alerts if anything drifts.',
    details: [
      '2-4°C precise temperature control',
      'Real-time cold-chain monitoring',
      'Automatic stock rotation alerts'
    ],
    icon: Thermometer,
    imageText: 'Temperature Monitoring'
  },
  {
    title: 'Analytics dashboard',
    description: 'See exactly what sells, when, and to whom. Optimize your assortment with real data.',
    details: [
      'Real-time sales tracking',
      'Demand forecasting AI',
      'Weekly performance reports'
    ],
    icon: BarChart2,
    imageText: 'Analytics Dashboard'
  }
];

export function Technology() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="technology"
      style={{
        padding: '160px 0',
        background: '#fafaf8',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Japanese Grid */}
      <div className="japanese-grid" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
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
            Technology
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#1b1b21'
          }}>
            Powered by advanced sensor fusion
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(27, 27, 33, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Multiple detection systems work in harmony to identify every item 
            with unmatched precision — no biometrics, no cameras on people.
          </p>
        </motion.div>

        {/* Tech Panels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {techPanels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.44, 0, 0.56, 1] 
              }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '80px',
                alignItems: 'center',
                direction: index % 2 === 1 ? 'rtl' : 'ltr'
              }}
            >
              {/* Image */}
              <div style={{ direction: 'ltr' }}>
                <div style={{
                  width: '100%',
                  minHeight: '450px',
                  background: 'linear-gradient(135deg, #f0f0ec 0%, #e8e8e3 100%)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.08)'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: '24px',
                    border: '2px dashed rgba(27, 27, 33, 0.1)',
                    borderRadius: '16px'
                  }} />
                  <div style={{ textAlign: 'center', zIndex: 1 }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: 'rgba(27, 27, 33, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <panel.icon size={36} style={{ color: '#1b1b21' }} />
                    </div>
                    <span style={{
                      color: 'rgba(27, 27, 33, 0.5)',
                      fontSize: '13px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em'
                    }}>
                      {panel.imageText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ direction: 'ltr' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: 'rgba(27, 27, 33, 0.05)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <panel.icon size={24} style={{ color: '#1b1b21' }} />
                </div>
                
                <h3 style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  marginBottom: '20px',
                  color: '#1b1b21'
                }}>
                  {panel.title}
                </h3>
                
                <p style={{
                  fontSize: '18px',
                  lineHeight: 1.7,
                  color: 'rgba(27, 27, 33, 0.6)',
                  marginBottom: '24px'
                }}>
                  {panel.description}
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {panel.details.map((detail, i) => (
                    <li 
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '15px',
                        color: '#1b1b21',
                        fontWeight: 500
                      }}
                    >
                      <span style={{
                        width: '6px',
                        height: '6px',
                        background: '#1b1b21',
                        borderRadius: '50%'
                      }} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy & Security Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.44, 0, 0.56, 1] }}
          style={{
            marginTop: '120px',
            padding: '60px',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid rgba(27, 27, 33, 0.08)',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shield size={24} style={{ color: '#1b1b21' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1b1b21'
                }}>PCI-DSS Compliant</div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(27, 27, 33, 0.5)'
                }}>Payment security</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Lock size={24} style={{ color: '#1b1b21' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1b1b21'
                }}>GDPR Ready</div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(27, 27, 33, 0.5)'
                }}>Data protection</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Eye size={24} style={{ color: '#1b1b21' }} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1b1b21'
                }}>No Facial Recognition</div>
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(27, 27, 33, 0.5)'
                }}>Privacy first</div>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '15px',
            color: 'rgba(27, 27, 33, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our cameras only track hand movements near products, never faces. 
            No biometric data is stored. Payment data is tokenized and encrypted.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
