import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Award, Clock, MapPin, Layers, UserCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const { leadership } = COMPANY_DETAILS;

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Background Elements */}
      <div className="hero-bg-overlay"></div>
      <div className="glow-spot glow-1"></div>
      <div className="glow-spot glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Tagline Badge */}
          <div className="hero-badge-row">
            <span className="badge badge-emerald">
              <ShieldCheck size={15} /> Company-Owned Heavy Trailer Fleet
            </span>
            <span className="badge badge-cyan">
              <Award size={15} /> 18+ Years Heavy Freight Operations
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            GARUDAN LOGISTICS & <br />
            <span className="text-highlight">HEAVY TRAILER FREIGHT</span>
          </h1>

          <p className="hero-description">
            Specialized fleet of heavy trailers, double axle high-bed carriers, and bulk liquid tankers under the leadership of Managing Director <strong>{leadership.name}</strong>. Direct linehaul freight across South India & Pan-India routes.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button className="btn-primary hero-btn" onClick={onOpenQuote}>
              <Truck size={20} /> Request Trailer Quote <ArrowRight size={18} />
            </button>

            <a href="#fleet" className="btn-secondary hero-btn">
              <Layers size={19} /> Explore Garudan Fleet
            </a>
          </div>

          {/* Quick Contact Banner */}
          <div className="contact-placeholder-banner">
            <div className="placeholder-icon">
              <MapPin size={18} />
            </div>
            <div className="placeholder-text">
              <strong>Namakkal Central Dispatch:</strong> {COMPANY_DETAILS.contactInfo.address} • Direct Line: <strong>{COMPANY_DETAILS.contactInfo.primaryPhone}</strong>
            </div>
          </div>
        </div>

        {/* Hero Visual Card with Real Fleet Photo */}
        <div className="hero-visual-col">
          <div className="hero-main-card glass-card">
            <div className="hero-img-container">
              <img src="/images/garudan-5525-trailer.jpg" alt="Garudan Heavy Duty Trailer" className="hero-truck-img" />
              <div className="hero-img-badge">
                <ShieldCheck size={14} /> Garudan Heavy Duty 5525 Super-Duty Trailer
              </div>
            </div>
            
            <div className="hero-owner-strip">
              <img src={leadership.image} alt={leadership.name} className="mini-owner-avatar" />
              <div className="owner-strip-text">
                <span className="owner-strip-name"><UserCheck size={14} /> {leadership.name}</span>
                <span className="owner-strip-role">{leadership.title}</span>
              </div>
              <a href={`tel:${leadership.phone}`} className="mini-call-btn">
                Call Direct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Grid */}
      <div className="container hero-stats-container">
        <div className="hero-stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper orange">
              <Truck size={28} />
            </div>
            <div className="stat-number">{COMPANY_DETAILS.stats.tripsCompleted}</div>
            <div className="stat-label">Trailer Runs Completed</div>
            <div className="stat-sub">Across 28+ States</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper cyan">
              <Clock size={28} />
            </div>
            <div className="stat-number">{COMPANY_DETAILS.stats.onTimeRate}</div>
            <div className="stat-label">On-Time SLA Record</div>
            <div className="stat-sub">Direct Linehaul Dispatch</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper emerald">
              <ShieldCheck size={28} />
            </div>
            <div className="stat-number">{COMPANY_DETAILS.stats.activeFleet}</div>
            <div className="stat-label">Active Heavy Fleet</div>
            <div className="stat-sub">Company Owned & Operated</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper amber">
              <Award size={28} />
            </div>
            <div className="stat-number">{COMPANY_DETAILS.stats.safetyRating}</div>
            <div className="stat-label">Safety Compliance</div>
            <div className="stat-sub">Zero Cargo Damage</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 24px 0 48px 0;
          overflow: hidden;
          background: linear-gradient(180deg, #070a11 0%, #0b111e 100%);
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 15% 25%, rgba(255, 85, 0, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(0, 229, 255, 0.06) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(7, 10, 17, 0.65), rgba(7, 10, 17, 0.95)),
            url('/images/garudan-fleet-pair.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.25;
          z-index: 1;
        }
        .glow-1 {
          width: 500px;
          height: 500px;
          background: rgba(255, 85, 0, 0.15);
          top: -100px;
          left: -100px;
        }
        .glow-2 {
          width: 600px;
          height: 600px;
          background: rgba(0, 229, 255, 0.12);
          bottom: -150px;
          right: -150px;
        }
        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 40px;
        }
        .hero-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: 3.2rem;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        .text-highlight {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-amber) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 620px;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .hero-description strong {
          color: #ffffff;
        }
        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }
        .hero-btn {
          font-size: 1rem;
          padding: 16px 28px;
        }
        .contact-placeholder-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background: rgba(255, 170, 0, 0.08);
          border: 1px dashed rgba(255, 170, 0, 0.4);
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          color: #f1f5f9;
          max-width: 650px;
        }
        .placeholder-icon {
          color: var(--accent-amber);
          display: flex;
          align-items: center;
        }
        
        /* Hero Visual Card */
        .hero-visual-col {
          position: relative;
        }
        .hero-main-card {
          border: 1px solid rgba(255, 170, 0, 0.3);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }
        .hero-img-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        .hero-truck-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .hero-main-card:hover .hero-truck-img {
          transform: scale(1.05);
        }
        .hero-img-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(10, 16, 28, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: var(--accent-emerald);
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .hero-owner-strip {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: rgba(15, 23, 42, 0.95);
        }
        .mini-owner-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary);
        }
        .owner-strip-text {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .owner-strip-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .owner-strip-role {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .mini-call-btn {
          padding: 8px 14px;
          background: var(--primary);
          color: #ffffff;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .mini-call-btn:hover {
          transform: translateY(-2px);
        }

        .hero-stats-container {
          position: relative;
          z-index: 2;
        }
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .stat-card {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
        }
        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .stat-icon-wrapper.orange {
          background: rgba(255, 85, 0, 0.15);
          color: var(--primary);
        }
        .stat-icon-wrapper.cyan {
          background: rgba(0, 229, 255, 0.15);
          color: var(--accent-cyan);
        }
        .stat-icon-wrapper.emerald {
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
        }
        .stat-icon-wrapper.amber {
          background: rgba(255, 170, 0, 0.15);
          color: var(--accent-amber);
        }
        .stat-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-weight: 600;
          color: #e2e8f0;
          font-size: 0.9rem;
          margin-bottom: 2px;
        }
        .stat-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
