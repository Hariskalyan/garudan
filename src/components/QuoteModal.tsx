import React, { useState } from 'react';
import { X, Truck, CheckCircle2, ArrowRight, Phone, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    cargoType: 'Double Axle Trailer (28T)',
    weight: '15 - 30 Tons',
    pickupDate: '',
    name: '',
    mobile: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const messageText = `Freight Quote Inquiry:
- Pickup: ${formData.pickup}
- Destination: ${formData.destination}
- Trailer Type: ${formData.cargoType}
- Cargo Weight: ${formData.weight}
- Target Date: ${formData.pickupDate || 'Immediate'}
${formData.notes ? `- Notes: ${formData.notes}` : ''}`;

    try {
      const response = await fetch('/.netlify/functions/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim() || 'Quote Requester',
          email: formData.email.trim() || 'quote-inquiry@garudantrans.com',
          phone: formData.mobile.trim(),
          message: messageText
        }),
      });

      const result = await response.json();
      if (response.ok && result.success !== false) {
        console.log('✅ [EMAIL SENT SUCCESSFULLY]', result.message || 'Quote inquiry mail sent to dispatch team!');
      } else {
        console.error('❌ [EMAIL SENDING FAILED]', result.message || 'Failed to send quote email.');
      }
    } catch (err) {
      console.warn('⚠️ [NETWORK / LOCAL DEV]: Could not reach /.netlify/functions/send-mail (Run with `npx netlify dev` to test backend functions locally):', err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card glass-card">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-badge">
              <CheckCircle2 size={54} className="icon-emerald" />
            </div>
            <h2>Trailer Freight Quote Requested!</h2>
            <p className="success-desc">
              Your inquiry for <strong>{formData.pickup || 'Origin'}</strong> to <strong>{formData.destination || 'Destination'}</strong> has been routed to Garudan Dispatch Central.
            </p>

            <div className="summary-box">
              <div className="sum-item">
                <span>Trailer Category:</span> <strong>{formData.cargoType}</strong>
              </div>
              <div className="sum-item">
                <span>Cargo Weight:</span> <strong>{formData.weight}</strong>
              </div>
              <div className="sum-item">
                <span>Contact Mobile:</span> <strong>{formData.mobile || COMPANY_DETAILS.contactInfo.primaryPhone}</strong>
              </div>
            </div>

            <button className="btn-primary w-full mt-6" onClick={handleReset}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="modal-form-container">
            <div className="modal-header-box">
              <span className="badge badge-emerald">
                <Truck size={14} /> Trailer Quote Engine
              </span>
              <h2>Request Double & Triple Axle Freight Quote</h2>
              <p>Garudan Brothers Transport • Fast Dispatch & Transparent Pricing</p>
            </div>

            <form onSubmit={handleSubmit} className="quote-modal-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label><MapPin size={14} /> Pickup City / Bay *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai Port Yard"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label><MapPin size={14} /> Destination City / Bay *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi NCR Depot"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Trailer / Container Type</label>
                  <select
                    value={formData.cargoType}
                    onChange={(e) => setFormData({ ...formData, cargoType: e.target.value })}
                    className="form-input"
                  >
                    <option value="Double Axle Flatbed (28T)">Double Axle Flatbed (28T)</option>
                    <option value="Triple Axle Heavy Trailer (42T)">Triple Axle Heavy Trailer (42T)</option>
                    <option value="20ft Twin ISO Container Chassis">20ft Twin ISO Container Chassis</option>
                    <option value="40ft High Cube Container Chassis">40ft High Cube Container Chassis</option>
                    <option value="Triple Axle Lowbed (55T)">Triple Axle Lowbed (55T)</option>
                    <option value="Multi-Axle Heavy Hydraulic (100T)">Multi-Axle Heavy Hydraulic (100T)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Approx Cargo Weight</label>
                  <select
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="form-input"
                  >
                    <option value="Up to 15 Tons">Up to 15 Tons</option>
                    <option value="15 - 28 Tons (Double Axle)">15 - 28 Tons (Double Axle)</option>
                    <option value="28 - 42 Tons (Triple Axle)">28 - 42 Tons (Triple Axle)</option>
                    <option value="42 - 60 Tons Heavy">42 - 60 Tons Heavy</option>
                    <option value="60+ Tons Multi-Axle">60+ Tons Multi-Axle</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label><Phone size={14} /> Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile No. for Quick Call"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Target Loading Date</label>
                  <input
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full mt-4" disabled={submitting}>
                {submitting ? 'Sending Request...' : 'Request Official Freight Quote'} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(4, 7, 13, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-card {
          width: 100%;
          max-width: 620px;
          background: #0e1526;
          border: 1px solid rgba(255, 85, 0, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          padding: 36px;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .modal-close-btn:hover {
          background: rgba(255, 85, 0, 0.2);
          color: #ffffff;
        }
        .modal-header-box h2 {
          font-size: 1.8rem;
          margin: 10px 0 4px 0;
        }
        .modal-header-box p {
          color: var(--text-muted);
          font-size: 0.88rem;
          margin-bottom: 24px;
        }
        .quote-modal-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .modal-success {
          text-align: center;
          padding: 20px 0;
        }
        .icon-emerald { color: var(--accent-emerald); }
        .modal-success h2 {
          font-size: 1.8rem;
          margin: 16px 0 8px 0;
        }
        .success-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 24px;
        }
        .summary-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
          font-size: 0.88rem;
        }
        .sum-item {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
        }
        .sum-item strong { color: #ffffff; }

        @media (max-width: 600px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
