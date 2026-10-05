import React from 'react';
import { 
  contactInfo, 
  credentialBadges, 
  metricHighlights 
} from '../data/portfolioData';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Play, 
  FileText, 
  Printer, 
  ShieldCheck, 
  Cpu, 
  GraduationCap, 
  Clock, 
  Cloud, 
  Activity, 
  Database, 
  Server, 
  Compass, 
  FileCode, 
  Layers 
} from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';

interface HeroSectionProps {
  onOpenVideoModal: () => void;
  onOpenRecruiterDrawer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVideoModal,
  onOpenRecruiterDrawer
}) => {
  // Helper to resolve icon by name
  const renderIcon = (name: string, size = 16) => {
    switch (name) {
      case 'Clock': return <Clock size={size} />;
      case 'GraduationCap': return <GraduationCap size={size} />;
      case 'Cpu': return <Cpu size={size} />;
      case 'Cloud': return <Cloud size={size} />;
      case 'Activity': return <Activity size={size} />;
      case 'Database': return <Database size={size} />;
      case 'Server': return <Server size={size} />;
      case 'ShieldCheck': return <ShieldCheck size={size} />;
      case 'Compass': return <Compass size={size} />;
      case 'FileCode': return <FileCode size={size} />;
      case 'Layers': return <Layers size={size} />;
      default: return <ShieldCheck size={size} />;
    }
  };

  return (
    <section className="section-wrapper hero-section no-print">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Portrait Card */}
          <div className="hero-portrait-col">
            <div className="glass-card portrait-card">
              <div className="portrait-image-wrapper">
                <img 
                  src={contactInfo.photoUrl} 
                  alt="Pavan Kumar Ghanta - Enterprise Architecture, Data & Software Architect"
                  className="portrait-img"
                  onError={(e) => {
                    // Fallback if local image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="portrait-gradient-overlay" />
                <div className="status-indicator-pill">
                  <span className="status-dot"></span>
                  <span className="status-text">Open to Enterprise Architecture and Director Engineering Roles</span>
                </div>
              </div>

              <div className="portrait-meta">
                <h3 className="candidate-name">{contactInfo.name}</h3>
                <p className="candidate-current-role">Data &amp; Software Architect | Enterprise Technology Leader</p>
                <div className="candidate-tenure">Cubic Transportation Systems &bull; 20+ Yrs Total</div>
                <div className="candidate-notice-pill">
                  <Clock size={12} />
                  <span>Notice Period: 2 Months</span>
                </div>

                <div className="contact-links-grid">
                  <a href={`tel:${contactInfo.phone}`} className="contact-item" title="Call directly">
                    <Phone size={13} className="contact-icon" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="contact-item" title="Send email">
                    <Mail size={13} className="contact-icon" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="contact-item">
                    <MapPin size={13} className="contact-icon" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <a 
                    href={contactInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-item contact-link" 
                    title="View LinkedIn Profile"
                  >
                    <LinkedInIcon size={13} className="contact-icon" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Headline & Narrative */}
          <div className="hero-narrative-col">
            <div className="target-role-pill">
              <span className="target-role-dot"></span>
              <span>{contactInfo.targetRole}</span>
            </div>

            <h1 className="hero-headline">
              Aligning Enterprise Technology Strategy with High-Scale Production Execution.
            </h1>

            <p className="hero-tagline">
              {contactInfo.tagline}
            </p>

            {/* Credential Badges Strip */}
            <div className="credential-badges-wrap">
              {credentialBadges.map((badge, idx) => (
                <div 
                  key={idx} 
                  className={`badge ${badge.highlight ? 'badge-highlight' : ''}`}
                >
                  {renderIcon(badge.iconName, 13)}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Executive Summary Points */}
            <div className="executive-summary-block">
              {contactInfo.executiveSummary.map((para, i) => (
                <p key={i} className="summary-paragraph">
                  {para}
                </p>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={onOpenVideoModal}
              >
                <Play size={16} fill="currentColor" />
                <span>Watch 60-Second Executive Pitch</span>
              </button>

              <button 
                className="btn btn-secondary"
                onClick={onOpenRecruiterDrawer}
              >
                <FileText size={16} />
                <span>Recruiter 60s Fast-Screen</span>
              </button>

              <button 
                className="btn btn-secondary"
                onClick={() => window.print()}
                title="Print official executive resume"
              >
                <Printer size={16} />
                <span>Print / PDF Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Metric Highlights Strip */}
        <div className="hero-metrics-strip">
          <div className="grid-4">
            {metricHighlights.map((metric, i) => (
              <div key={i} className="glass-card metric-card">
                <div className="metric-header">
                  <span className="metric-number">{metric.value}</span>
                  <div className="metric-icon-box">
                    {renderIcon(metric.iconName, 18)}
                  </div>
                </div>
                <div className="metric-title">{metric.label}</div>
                <div className="metric-subtext">{metric.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 48px;
          padding-bottom: 64px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 40px;
          align-items: start;
        }

        .portrait-card {
          padding: 16px;
          border-radius: var(--radius-lg);
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
        }

        .portrait-image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #0f172a;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.6);
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.4s ease;
        }

        .portrait-img:hover {
          transform: scale(1.02);
        }

        .portrait-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(2, 6, 23, 0.9) 100%);
          pointer-events: none;
        }

        .status-indicator-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(2, 6, 23, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(16, 185, 129, 0.4);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .status-text {
          font-size: 0.75rem;
          font-weight: 600;
          color: #a7f3d0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .portrait-meta {
          padding-top: 16px;
        }

        .candidate-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
        }

        .candidate-current-role {
          font-size: 0.875rem;
          color: var(--accent-cyan-light);
          font-weight: 600;
          margin-top: 2px;
        }

        .candidate-tenure {
          font-size: 0.775rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .contact-links-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.775rem;
          color: var(--text-secondary);
        }

        .contact-link {
          color: var(--accent-cyan-light);
          font-weight: 500;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .contact-icon {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .hero-narrative-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .target-role-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan-light);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          letter-spacing: 0.02em;
        }

        .target-role-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan);
        }

        .hero-headline {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .hero-tagline {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .credential-badges-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .executive-summary-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-left: 2px solid var(--accent-indigo);
          padding-left: 16px;
          margin-top: 4px;
        }

        .summary-paragraph {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .hero-metrics-strip {
          margin-top: 48px;
        }

        .metric-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .metric-number {
          font-size: 1.95rem;
          font-weight: 800;
          font-family: var(--font-sans);
          background: linear-gradient(135deg, #ffffff 40%, var(--accent-cyan-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .metric-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .metric-subtext {
          font-size: 0.775rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-headline {
            font-size: 2rem;
          }
          .portrait-image-wrapper {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
};
