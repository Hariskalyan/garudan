import React, { useState } from 'react';
import { Truck, ArrowRight, CheckCircle2, Maximize2, X } from 'lucide-react';
import { FLEET_DATA } from '../data/mockData';
import type { FleetItem } from '../data/mockData';

interface FleetShowcaseProps {
  onOpenQuote: () => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModalImage, setActiveModalImage] = useState<FleetItem | null>(null);

  const filteredFleet = filter === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter((item) => item.category === filter);

  return (
    <section id="fleet" className="section-padding fleet-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">
            <Truck size={14} /> Company-Owned Heavy Fleet
          </span>
          <h2>Garudan Heavy Trailers & Express Carriers</h2>
          <p>Verified authentic fleet photos of Garudan Transport's heavy trailers, goods carriers, and bulk tankers operating pan-India.</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {[
            { id: 'all', label: 'All Garudan Fleet' },
            { id: 'triple-axle', label: 'Heavy Duty Trailers' },
            { id: 'double-axle', label: 'Express Goods Carriers' },
            { id: 'tanker', label: 'Gas & Liquid Tankers' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid">
          {filteredFleet.map((vehicle) => (
            <div key={vehicle.id} className="fleet-card glass-card">
              <div className="card-image-wrapper" onClick={() => setActiveModalImage(vehicle)}>
                <img src={vehicle.image} alt={vehicle.name} className="fleet-img" />
                <div className="image-overlay"></div>
                
                <span className={`status-tag ${vehicle.status === 'Available' ? 'available' : 'on-route'}`}>
                  <span className="dot"></span> {vehicle.status}
                </span>

                <button className="zoom-btn" title="View High-Res Photo">
                  <Maximize2 size={16} />
                </button>
              </div>

              <div className="card-body">
                <h3 className="vehicle-title">{vehicle.name}</h3>
                <p className="vehicle-desc">{vehicle.description}</p>

                {/* Spec Badges */}
                <div className="specs-grid">
                  <div className="spec-box">
                    <span className="spec-label">Payload Capacity</span>
                    <span className="spec-val">{vehicle.capacity}</span>
                  </div>
                  <div className="spec-box">
                    <span className="spec-label">Body / Chassis Type</span>
                    <span className="spec-val">{vehicle.length}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="features-list">
                  {vehicle.features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                      <CheckCircle2 size={14} className="check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <button className="btn-primary w-full" onClick={onOpenQuote}>
                    Book Transport Run <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Res Lightbox Modal */}
      {activeModalImage && (
        <div className="lightbox-backdrop" onClick={() => setActiveModalImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveModalImage(null)}>
              <X size={24} />
            </button>
            <img src={activeModalImage.image} alt={activeModalImage.name} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{activeModalImage.name}</h3>
              <p>{activeModalImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .fleet-section {
          background: #090e19;
        }
        .filter-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .filter-btn {
          padding: 10px 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          transition: var(--transition);
          cursor: pointer;
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 4px 20px rgba(255, 85, 0, 0.35);
        }
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }
        .fleet-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .card-image-wrapper {
          position: relative;
          height: 260px;
          overflow: hidden;
          cursor: pointer;
        }
        .fleet-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .fleet-card:hover .fleet-img {
          transform: scale(1.06);
        }
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14, 21, 38, 0.9) 0%, transparent 60%);
        }
        .status-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          text-transform: uppercase;
        }
        .status-tag.available {
          background: rgba(16, 185, 129, 0.85);
          color: #ffffff;
          backdrop-filter: blur(8px);
        }
        .zoom-btn {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-image-wrapper:hover .zoom-btn {
          opacity: 1;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }
        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .vehicle-title {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        .vehicle-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
          background: rgba(255, 255, 255, 0.03);
          padding: 12px;
          border-radius: var(--radius-sm);
        }
        .spec-label {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 2px;
        }
        .spec-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ffffff;
        }
        .features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 24px;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .check-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }
        .card-footer {
          margin-top: auto;
        }

        /* Lightbox Modal */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 8, 15, 0.92);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .lightbox-content {
          position: relative;
          max-width: 900px;
          width: 100%;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
        }
        .lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          color: #ffffff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }
        .lightbox-img {
          width: 100%;
          max-height: 60vh;
          object-fit: contain;
          background: #000000;
          display: block;
        }
        .lightbox-caption {
          padding: 24px;
        }
        .lightbox-caption h3 {
          font-size: 1.4rem;
          margin-bottom: 6px;
        }

        @media (max-width: 768px) {
          .fleet-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
