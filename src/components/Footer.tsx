import React from 'react';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <div className="logo-icon">
                <Truck size={24} color="#ffffff" />
              </div>
              <div className="logo-text">
                <span className="brand-name">GARUDAN BROTHERS</span>
                <span className="brand-sub">TRANSPORT & LOGISTICS</span>
              </div>
            </a>

            <p className="footer-about">
              Specialized nationwide Double Axle, Triple Axle Trailer, and ISO Container Freight transport partner powering industrial supply chains across India.
            </p>

            <div className="contact-placeholder-pill">
              <Phone size={14} className="icon-amber" />
              <span>Mobile & Hotline Ready to Configure</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Freight Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Trailer Transport */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Double Axle Trailer Freight</a></li>
              <li><a href="#services">Triple Axle Heavy Run</a></li>
              <li><a href="#services">Container Chassis Drayage</a></li>
            </ul>
          </div>

          {/* Column 4: Central Office */}
          <div className="footer-col">
            <h4 className="footer-heading">Central Dispatch Yard</h4>
            <div className="footer-contact-info">
              <p><MapPin size={15} /> {COMPANY_DETAILS.contactInfo.address}</p>
              <p><Phone size={15} /> {COMPANY_DETAILS.contactInfo.primaryPhone}</p>
              <p><Mail size={15} /> {COMPANY_DETAILS.contactInfo.email}</p>
              <div className="dispatch-tag mt-3">
                <span className="pulse-dot"></span> 24/7 Dispatch Control
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Garudan Brothers Transport. All Rights Reserved.</p>
          <div className="footer-sub-links">
            <a href="#contact">Contact & Mobile Numbers</a>
            <a href="#">Fleet Safety Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #04060b;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 80px 0 30px 0;
          color: var(--text-muted);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .footer-about {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 340px;
        }
        .contact-placeholder-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(255, 170, 0, 0.1);
          border: 1px dashed rgba(255, 170, 0, 0.4);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--accent-amber);
        }
        .icon-amber { color: var(--accent-amber); }
        .footer-heading {
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 20px;
          position: relative;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.88rem;
        }
        .footer-links a {
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .footer-contact-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.88rem;
        }
        .footer-contact-info p {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .dispatch-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--accent-emerald);
          font-weight: 600;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.82rem;
        }
        .footer-sub-links {
          display: flex;
          gap: 20px;
        }
        .footer-sub-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
