import React from 'react';
import { Phone, Award, UserCheck, CheckCircle, Truck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export const OwnerSection: React.FC = () => {
  const { leadership } = COMPANY_DETAILS;

  return (
    <section id="leadership" className="section-padding owner-section">
      <div className="container">
        <div className="owner-card glass-card">
          <div className="owner-image-col">
            <div className="portrait-frame">
              <img 
                src={leadership.image} 
                alt={leadership.name} 
                className="owner-portrait" 
              />
              <div className="badge-verified">
                <UserCheck size={16} /> Verified Managing Director
              </div>
            </div>
          </div>

          <div className="owner-info-col">
            <div className="badge badge-amber">
              <Award size={14} /> Executive Leadership & Fleet Management
            </div>
            
            <h2 className="owner-name">{leadership.name}</h2>
            <p className="owner-title">{leadership.title} — Garudan Logistics & Transport</p>

            <blockquote className="owner-quote">
              "{leadership.bio}"
            </blockquote>

            <div className="commitments-grid">
              <div className="commitment-item">
                <CheckCircle size={18} className="icon-emerald" />
                <div>
                  <strong>Company-Owned Heavy Fleet:</strong> Direct management of double axle trailers, triple axle heavy haulers, and specialized tankers.
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle size={18} className="icon-emerald" />
                <div>
                  <strong>Direct Managing Director Oversight:</strong> Personal monitoring by T. Naveen (MD) for fast booking, zero middleman delay, and direct driver coordination.
                </div>
              </div>
            </div>

            <div className="owner-cta-bar">
              <a href={`tel:${leadership.phone.replace(/\s+/g, '')}`} className="btn-primary">
                <Phone size={18} /> Contact MD ({leadership.name}): {leadership.phone}
              </a>
              <a href="#quote" className="btn-secondary">
                <Truck size={18} /> Transport Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .owner-section {
          background: linear-gradient(180deg, #0b111e 0%, #070a11 100%);
          position: relative;
        }
        .owner-card {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 48px;
          padding: 40px;
          align-items: center;
          border: 1px solid rgba(255, 170, 0, 0.2);
          background: linear-gradient(135deg, rgba(20, 30, 50, 0.7) 0%, rgba(10, 16, 28, 0.9) 100%);
        }
        .portrait-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
          border: 2px solid rgba(255, 170, 0, 0.3);
        }
        .owner-portrait {
          width: 100%;
          height: 440px;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.5s ease;
        }
        .portrait-frame:hover .owner-portrait {
          transform: scale(1.03);
        }
        .badge-verified {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: var(--accent-emerald);
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.82rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .owner-name {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 12px;
          margin-bottom: 2px;
        }
        .owner-title {
          font-size: 1.05rem;
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 20px;
        }
        .owner-quote {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #cbd5e1;
          background: rgba(255, 255, 255, 0.03);
          border-left: 4px solid var(--primary);
          padding: 18px 24px;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 24px;
          font-style: italic;
        }
        .commitments-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }
        .commitment-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.94rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .commitment-item strong {
          color: #f8fafc;
        }
        .icon-emerald {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .owner-cta-bar {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .owner-card {
            grid-template-columns: 1fr;
            padding: 24px;
          }
          .owner-portrait {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
};
