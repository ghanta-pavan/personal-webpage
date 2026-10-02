import React from 'react';
import { contactInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Printer, 
  ArrowUp
} from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container no-print">
      <div className="container footer-inner">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-text">PG</span>
            </div>
            <h4 className="footer-name">{contactInfo.name}</h4>
            <p className="footer-tagline-text">{contactInfo.tagline}</p>
            <div className="footer-status-pill">
              <span className="dot"></span>
              <span>Available for Enterprise Architecture and Director Engineering</span>
            </div>
          </div>

          <div className="footer-nav-col">
            <h5 className="footer-heading">Platform Navigation</h5>
            <div className="footer-links-list">
              <a href="#career-ladder">20-Year Career Ladder</a>
              <a href="#architecture">Architecture Deep Dives</a>
              <a href="#experience">Experience &amp; Projects</a>
              <a href="#genai-lab">GenAI &amp; RAG Lab</a>
              <a href="#competencies">Competency Matrix</a>
            </div>
          </div>

          <div className="footer-contact-col">
            <h5 className="footer-heading">Direct Contact &amp; Actions</h5>
            <div className="footer-contact-list">
              <a href={`tel:${contactInfo.phone}`} className="footer-contact-link">
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="footer-contact-link">
                <Mail size={14} />
                <span>{contactInfo.email}</span>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <LinkedInIcon size={14} />
                <span>LinkedIn Profile</span>
              </a>
              <button 
                className="btn btn-outline-cyan btn-sm footer-print-btn"
                onClick={() => window.print()}
              >
                <Printer size={14} />
                <span>Print Official Resume</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #020617;
          border-top: 1px solid var(--border-subtle);
          padding-top: 64px;
          padding-bottom: 32px;
          margin-top: 48px;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .footer-logo {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #020617;
          font-weight: 800;
          font-family: var(--font-mono);
          margin-bottom: 12px;
        }

        .footer-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .footer-tagline-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-top: 6px;
          max-width: 480px;
          line-height: 1.5;
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          font-size: 0.75rem;
          color: var(--accent-emerald);
          font-weight: 600;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .footer-status-pill .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
        }

        .footer-heading {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          color: var(--accent-cyan-light);
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }

        .footer-links-list,
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list a {
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--accent-cyan-light);
        }

        .footer-contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.825rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-contact-link:hover {
          color: var(--accent-cyan-light);
        }

        .footer-print-btn {
          margin-top: 6px;
          align-self: flex-start;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          font-size: 0.775rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.775rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }

        .back-to-top-btn:hover {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
};
