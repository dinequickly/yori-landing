import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Check, ArrowRight, Mail } from 'lucide-react';

const locationTypes = [
  'University / Campus',
  'Corporate Office',
  'Residential Building',
  'Hospital / Healthcare',
  'Transport Hub',
  'Other'
];

const footfallRanges = [
  '< 500 people/day',
  '500 - 1,000 people/day',
  '1,000 - 2,500 people/day',
  '2,500 - 5,000 people/day',
  '> 5,000 people/day'
];

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    locationType: '',
    city: '',
    footfall: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        padding: '160px 0',
        background: '#1b1b21',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(255,255,255,0.02) 48px, rgba(255,255,255,0.02) 50px),
          repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.02) 48px, rgba(255,255,255,0.02) 50px)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: '#fafafa'
          }}>
            Ready to bring YORI to your space?
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'rgba(250, 250, 250, 0.6)',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Join the UK&apos;s most innovative food retailers. 
            Tell us about your space and we&apos;ll get back to you within 24 hours.
          </p>

          {/* Process Steps */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            {['Site check', 'Proposal', 'Pilot'].map((step, index) => (
              <div key={step} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px'
                }}>
                  <span style={{
                    width: '20px',
                    height: '20px',
                    background: '#1b1b21',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#ffffff'
                  }}>
                    {index + 1}
                  </span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#fafafa'
                  }}>
                    {step}
                  </span>
                </div>
                {index < 2 && (
                  <ArrowRight size={16} style={{ color: 'rgba(250, 250, 250, 0.3)' }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.44, 0, 0.56, 1] }}
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            background: '#fafafa',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)'
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(27, 27, 33, 0.05)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Check size={32} style={{ color: '#1b1b21' }} />
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                marginBottom: '12px',
                color: '#1b1b21'
              }}>
                Message sent!
              </h3>
              <p style={{
                fontSize: '16px',
                color: 'rgba(27, 27, 33, 0.6)'
              }}>
                We&apos;ll be in touch within 24 hours to discuss your space.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1b1b21',
                    marginBottom: '8px'
                  }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(27, 27, 33, 0.1)',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1b1b21'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(27, 27, 33, 0.1)'}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1b1b21',
                    marginBottom: '8px'
                  }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(27, 27, 33, 0.1)',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1b1b21'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(27, 27, 33, 0.1)'}
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1b1b21',
                  marginBottom: '8px'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid rgba(27, 27, 33, 0.1)',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                    background: '#ffffff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1b1b21'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(27, 27, 33, 0.1)'}
                  placeholder="you@company.com"
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1b1b21',
                    marginBottom: '8px'
                  }}>
                    Location Type
                  </label>
                  <select
                    name="locationType"
                    required
                    value={formData.locationType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(27, 27, 33, 0.1)',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease',
                      background: '#ffffff',
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231b1b21' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1b1b21'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(27, 27, 33, 0.1)'}
                  >
                    <option value="">Select type</option>
                    {locationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1b1b21',
                    marginBottom: '8px'
                  }}>
                    City / Postcode
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '2px solid rgba(27, 27, 33, 0.1)',
                      borderRadius: '12px',
                      fontSize: '15px',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1b1b21'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(27, 27, 33, 0.1)'}
                    placeholder="London / SW1A 1AA"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#1b1b21',
                  marginBottom: '8px'
                }}>
                  Estimated Daily Footfall
                </label>
                <select
                  name="footfall"
                  required
                  value={formData.footfall}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '2px solid rgba(27, 27, 33, 0.1)',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease',
                    background: '#ffffff',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231b1b21' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1b1b21'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(27, 27, 33, 0.1)'}
                >
                  <option value="">Select range</option>
                  {footfallRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '18px',
                  background: '#1b1b21',
                  color: '#fafafa',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = '#2d2d35';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1b1b21';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{
                      width: '18px',
                      height: '18px',
                      border: '2px solid rgba(250, 250, 250, 0.3)',
                      borderTopColor: '#fafafa',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    Request a pilot
                    <ArrowRight size={18} />
                  </>
                )}
              </button>

              <style>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </form>
          )}

          {/* Direct Email */}
          <div style={{
            marginTop: '32px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(27, 27, 33, 0.08)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: 'rgba(27, 27, 33, 0.5)',
              marginBottom: '12px'
            }}>
              Prefer email?
            </p>
            <a
              href="mailto:hello@yorifood.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1b1b21',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none'
              }}
            >
              <Mail size={16} />
              hello@yorifood.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
