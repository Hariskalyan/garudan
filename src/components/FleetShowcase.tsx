import React, { useState } from 'react';
import { Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FLEET_DATA } from '../data/mockData';

interface FleetShowcaseProps {
  onOpenQuote: () => void;
}

export const FleetShowcase: React.FC<FleetShowcaseProps> = ({ onOpenQuote }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredFleet = filter === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter((item) => item.category === filter);

  return (
    <section id="fleet" className="section-padding fleet-section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-emerald">
            <Truck size={14} /> Double & Triple Axle Trailer Fleet
          </span>
          <h2>Garudan Trailers & Container Fleet</h2>
          <p>Explore our company-owned Double Axle Trailers, Triple Axle Heavy Trailers, and 20ft & 40ft High Cube Container Chassis.</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {[
            { id: 'all', label: 'All Fleet Trailers' },
            { id: 'double-axle', label: 'Double Axle Trailers' },
            { id: 'triple-axle', label: 'Triple Axle Trailers' },
            { id: 'container', label: 'Container Chassis Trailers' },
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
              <div className="card-image-wrapper">
                <img src={vehicle.image} alt={vehicle.name} className="fleet-img" />
                <div className="image-overlay"></div>
                <span className={`status-tag ${vehicle.status === 'Available' ? 'available' : 'on-route'}`}>
                  <span className="dot"></span> {vehicle.status}
                </span>
                <span className="category-tag">{vehicle.category.replace('-', ' ').toUpperCase()}</span>
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
                    <span className="spec-label">Bed / Chassis Length</span>
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
                  <button className="btn-secondary w-full" onClick={onOpenQuote}>
                    Book This Trailer <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 4px 20px rgba(255, 85, 0, 0.35);
        }
        .fleet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 32px;
        }
        .fleet-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
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
        .status-tag.on-route {
          background: rgba(255, 170, 0, 0.85);
          color: #ffffff;
          backdrop-filter: blur(8px);
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
        }
        .category-tag {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.05em;
        }
        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .vehicle-title {
          font-size: 1.25rem;
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
          font-size: 0.92rem;
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

        @media (max-width: 768px) {
          .fleet-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
