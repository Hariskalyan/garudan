import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Award, Clock, MapPin, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
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
              <ShieldCheck size={15} /> Double & Triple Axle Trailer Specialist
            </span>
            <span className="badge badge-cyan">
              <Award size={15} /> 18+ Years Transport Operations
            </span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            GARUDAN BROTHERS <br />
            <span className="text-highlight">TRANSPORT & LOGISTICS</span>
          </h1>

          <p className="hero-description">
            Specialized fleet of Double Axle Trailers, Triple Axle Heavy Trailers, 20ft & 40ft High Cube Container Chassis for heavy industry, port drayage, and pan-India freight delivery.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <button className="btn-primary hero-btn" onClick={onOpenQuote}>
              <Truck size={20} /> Request Trailer Quote <ArrowRight size={18} />
            </button>

            <a href="#services" className="btn-secondary hero-btn">
              <Layers size={19} /> View Freight Services
            </a>
          </div>

          {/* Quick Contact Banner */}
          <div className="contact-placeholder-banner">
            <div className="placeholder-icon">
              <MapPin size={18} />
            </div>
            <div className="placeholder-text">
              <strong>Namakkal Central Dispatch:</strong> {COMPANY_DETAILS.contactInfo.address} • Call <strong>{COMPANY_DETAILS.contactInfo.primaryPhone}</strong> / <strong>{COMPANY_DETAILS.contactInfo.secondaryPhone}</strong>
            </div>
          </div>
        </div>

        {/* Hero Stats Grid */}
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
            <div className="stat-label">Active Heavy Trailers</div>
            <div className="stat-sub">Double & Triple Axles</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-wrapper amber">
              <Award size={28} />
            </div>
            <div className="stat-number">{COMPANY_DETAILS.stats.safetyRating}</div>
            <div className="stat-label">Safety Compliance</div>
            <div className="stat-sub">ISO 9001 Certified</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding: 12px 0 36px 0;
          overflow: hidden;
          background: linear-gradient(180deg, #070a11 0%, #0b111e 100%);
        }
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 15% 25%, rgba(255, 85, 0, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(0, 229, 255, 0.06) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(7, 10, 17, 0.4), rgba(7, 10, 17, 0.95)),
            url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920');
          background-size: cover;
          background-position: center;
          opacity: 0.35;
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
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .hero-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: 3.5rem;
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
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 650px;
          margin-bottom: 36px;
          line-height: 1.6;
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
        .hero-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .stat-card {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
        }
        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
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
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-weight: 600;
          color: #e2e8f0;
          font-size: 0.95rem;
          margin-bottom: 2px;
        }
        .stat-sub {
          font-size: 0.78rem;
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
