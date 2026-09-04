import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Transport Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!trimmedPhone) {
      setErrorMessage('Please enter your phone number.');
      return;
    }
    if (!trimmedMessage) {
      setErrorMessage('Please enter your enquiry message.');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          message: trimmedMessage,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success !== false) {
        console.log('✅ [EMAIL SENT SUCCESSFULLY]', result.message || 'Contact enquiry mail sent successfully!');
        setSubmitted(true);
      } else {
        console.error('❌ [EMAIL SENDING FAILED]', result.message || 'Failed to send contact enquiry.');
        setErrorMessage(result.message || 'Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      console.warn('⚠️ [NETWORK / LOCAL DEV]: Could not reach /.netlify/functions/send-mail (Run with `npx netlify dev` to test backend functions locally):', error);
      setErrorMessage('Unable to reach mail service. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-cyan">
            <Phone size={14} /> Direct Dispatch Hotline
          </span>
          <h2>Contact Garudan Brothers Transport</h2>
          <p>Get in touch with our central fleet dispatch office for booking, vehicle availability, or customized freight contracts.</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Details & Mobile Number Placeholder Box */}
          <div className="contact-info-card glass-card">
            <h3 className="card-title">Central Dispatch Office</h3>
            <p className="card-subtitle">Operational 24 Hours / 7 Days a Week</p>

            {/* Note highlighting future mobile numbers */}
            <div className="contact-editable-notice">
              <AlertCircle size={18} className="notice-icon" />
              <div>
                <strong>Phone & Mobile Numbers Slot:</strong>
                <p>Mobile numbers & direct dispatch lines can be easily updated in <code>mockData.ts</code>.</p>
              </div>
            </div>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon orange">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="info-label">Primary Mobile / Hotline</div>
                  <div className="info-val">{COMPANY_DETAILS.contactInfo.primaryPhone}</div>
                  <span className="editable-contact-badge mt-1">Ready for your Mobile No.</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon amber">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="info-label">Secondary Mobile / Dispatch</div>
                  <div className="info-val">{COMPANY_DETAILS.contactInfo.secondaryPhone}</div>
                  <span className="editable-contact-badge mt-1">Ready for Alternate No.</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon emerald">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="info-label">Official Email</div>
                  <div className="info-val">{COMPANY_DETAILS.contactInfo.email}</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon cyan">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="info-label">Central Terminal & Yard</div>
                  <div className="info-val">{COMPANY_DETAILS.contactInfo.address}</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon orange">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="info-label">Operating Schedule</div>
                  <div className="info-val">{COMPANY_DETAILS.contactInfo.operatingHours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="contact-form-card glass-card">
            <h3 className="card-title">Send a Quick Message</h3>
            <p className="card-subtitle">Our dispatch team responds within 15 minutes.</p>

            {submitted ? (
              <div className="success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Message Received Successfully!</h4>
                <p>Thank you for reaching out to <strong>Garudan Brothers Transport</strong>. Our senior logistics coordinator will call you back shortly.</p>
                <button className="btn-secondary mt-4" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {errorMessage && (
                  <div className="error-banner" style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#fca5a5', padding: '10px 14px', borderRadius: '6px', fontSize: '0.86rem' }}>
                    {errorMessage}
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Inquiry Type</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    >
                      <option value="General Transport Inquiry">General Transport Inquiry</option>
                      <option value="Full Truckload (FTL) Booking">Full Truckload (FTL) Booking</option>
                      <option value="Heavy Machinery Transport">Heavy Machinery ODC Transport</option>
                      <option value="Cold Storage Reefer Run">Cold Storage Reefer Run</option>
                      <option value="Port Container Drayage">Port Container Drayage</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message / Freight Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe pickup city, destination, cargo weight, and preferred loading date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full" disabled={submitting}>
                  <Send size={18} /> {submitting ? 'Sending Enquiry...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: #090e19;
        }
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .contact-info-card, .contact-form-card {
          padding: 40px;
        }
        .card-title {
          font-size: 1.6rem;
          margin-bottom: 4px;
        }
        .card-subtitle {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 24px;
        }
        .contact-editable-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: rgba(255, 170, 0, 0.1);
          border: 1px dashed rgba(255, 170, 0, 0.5);
          border-radius: var(--radius-sm);
          padding: 14px;
          margin-bottom: 28px;
          font-size: 0.84rem;
          color: #fef08a;
        }
        .notice-icon {
          color: var(--accent-amber);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .info-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-icon.orange { background: rgba(255, 85, 0, 0.15); color: var(--primary); }
        .info-icon.amber { background: rgba(255, 170, 0, 0.15); color: var(--accent-amber); }
        .info-icon.emerald { background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); }
        .info-icon.cyan { background: rgba(0, 229, 255, 0.15); color: var(--accent-cyan); }

        .info-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 2px;
        }
        .info-val {
          font-weight: 700;
          color: #ffffff;
          font-size: 1.05rem;
        }
        .mt-1 { margin-top: 4px; }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .form-group label {
          font-size: 0.84rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .form-input {
          width: 100%;
          padding: 12px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-sm);
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition);
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 12px rgba(255, 85, 0, 0.2);
        }
        select.form-input option {
          background: #0e1526;
          color: #ffffff;
        }

        .success-box {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .success-icon {
          color: var(--accent-emerald);
          margin-bottom: 16px;
        }
        .success-box h4 {
          font-size: 1.4rem;
          margin-bottom: 10px;
        }
        .success-box p {
          color: var(--text-muted);
          font-size: 0.95rem;
          max-width: 400px;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
