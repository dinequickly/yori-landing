import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What does installation require?',
    answer: 'We handle everything. YORI units require a standard 240V power outlet and approximately 2m² of floor space. Our team manages delivery, setup, calibration, and staff training. Installation takes 2-4 hours and we schedule it to minimize disruption to your operations.'
  },
  {
    question: 'Who restocks the units?',
    answer: 'Our logistics team handles all restocking. We monitor inventory in real-time and schedule deliveries based on demand patterns. Most locations receive fresh stock daily or every other day. Cold-chain integrity is maintained throughout — from our kitchen to the customer\'s hand.'
  },
  {
    question: 'How do payments work?',
    answer: 'Customers tap their contactless card or phone to enter, grab what they need, and walk out. Payment is automatically processed and a digital receipt is emailed. We accept all major credit/debit cards, Apple Pay, and Google Pay. No app download required.'
  },
  {
    question: 'What about dietary info and allergens?',
    answer: 'Every item is clearly labeled with full ingredients, allergens, and nutritional information both on the packaging and on the shelf display. Our app (optional) allows users to filter by dietary requirements: vegan, gluten-free, dairy-free, nut-free, etc.'
  },
  {
    question: 'What happens if an item is mis-detected?',
    answer: 'Our sensor fusion system (weight + vision + RFID) achieves 99% accuracy. In the rare case of a discrepancy, customers can dispute charges through our 24/7 support line or via the emailed receipt. We investigate and resolve issues within 24 hours, with automatic refunds for confirmed errors.'
  },
  {
    question: 'How do you ensure food safety?',
    answer: 'Continuous temperature monitoring with automated alerts if anything drifts outside the 2-4°C range. All items have sell-by dates tracked digitally. Stock is rotated automatically (FIFO). We maintain full HACCP compliance and regular health inspections.'
  },
  {
    question: 'What support do you provide?',
    answer: '24/7 technical support hotline. Regular maintenance visits included. Remote monitoring of all systems. Replacement unit provided within 4 hours if needed. Dedicated account manager for enterprise clients.'
  }
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        borderBottom: '1px solid rgba(27, 27, 33, 0.08)',
        padding: '24px 0'
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          padding: 0
        }}
      >
        <span style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1b1b21',
          lineHeight: 1.4,
          flex: 1
        }}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            width: '28px',
            height: '28px',
            background: isOpen ? '#1b1b21' : 'rgba(27, 27, 33, 0.05)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.2s ease'
          }}
        >
          <ChevronDown 
            size={16} 
            style={{ 
              color: isOpen ? '#ffffff' : '#1b1b21',
              transition: 'color 0.2s ease'
            }} 
          />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'rgba(27, 27, 33, 0.6)',
              paddingTop: '16px',
              maxWidth: '90%'
            }}>
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      id="faq"
      style={{
        padding: '160px 0',
        background: '#fafaf8',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '80px',
          alignItems: 'flex-start'
        }}>
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
            style={{ position: 'sticky', top: '120px' }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              background: 'rgba(27, 27, 33, 0.05)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <HelpCircle size={28} style={{ color: '#1b1b21' }} />
            </div>
            
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
              FAQ
            </span>
            
            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              color: '#1b1b21'
            }}>
              Common questions
            </h2>
            
            <p style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(27, 27, 33, 0.6)',
              marginBottom: '32px'
            }}>
              Everything you need to know about partnering with YORI. 
              Can&apos;t find what you&apos;re looking for? Reach out directly.
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
                textDecoration: 'none',
                transition: 'gap 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '12px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '8px';
              }}
            >
              Contact support
              <span>→</span>
            </a>
          </motion.div>

          {/* Right Column - FAQ List */}
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
