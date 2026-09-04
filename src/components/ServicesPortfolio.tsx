import React from 'react';
import { Truck, ShieldAlert, Boxes, Ship, Zap, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesProps {
  onOpenQuote: () => void;
}

export const ServicesPortfolio: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck': return <Truck size={28} />;
      case 'ShieldAlert': return <ShieldAlert size={28} />;
      case 'Boxes': return <Boxes size={28} />;
      case 'Ship': return <Ship size={28} />;
      case 'Zap': return <Zap size={28} />;
      default: return <Truck size={28} />;
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-cyan">
            <Award size={14} /> Heavy Trailer Logistics Solutions
          </span>
          <h2>Double & Triple Axle Services Offered</h2>
          <p>Specialized double axle, triple axle, and ISO container freight transport engineered for heavy industrial supply chains.</p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((srv) => (
            <div key={srv.id} className="service-card glass-card">
              {srv.badge && <span className="service-badge">{srv.badge}</span>}
              <div className="service-icon-box">{getIcon(srv.iconName)}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.shortDesc}</p>

              <div className="service-highlights">
                {srv.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle size={14} className="h-icon" /> {h}
                  </div>
                ))}
              </div>

              <button className="btn-secondary service-btn" onClick={onOpenQuote}>
                Book This Trailer Service <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background: #070a11;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        .service-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .service-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255, 85, 0, 0.15);
          border: 1px solid rgba(255, 85, 0, 0.4);
          color: var(--primary);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
        }
        .service-icon-box {
          width: 56px;
          height: 56px;
          background: rgba(255, 85, 0, 0.12);
          color: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 85, 0, 0.2);
        }
        .service-title {
          font-size: 1.35rem;
          margin-bottom: 10px;
        }
        .service-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-highlights {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #e2e8f0;
        }
        .h-icon { color: var(--accent-emerald); }
        .service-btn {
          margin-top: auto;
          width: 100%;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
