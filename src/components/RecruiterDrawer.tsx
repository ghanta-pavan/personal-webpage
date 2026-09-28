import React from 'react';
import { contactInfo } from '../data/portfolioData';
import { 
  X, 
  Check, 
  Phone, 
  Mail, 
  Printer, 
  Award, 
  Briefcase, 
  Clock, 
  ShieldCheck,
  FileText
} from 'lucide-react';
import { LinkedInIcon } from './LinkedInIcon';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const screeningChecklist = [
    "Data & Solution Architecture",
    "Cross-Cloud & AWS Migration",
    "Data Lake & Streaming (Kafka/MSK/Kinesis)",
    "Application & Microservices Development",
    "Software Engineering Leadership",
    "Agile & Scrum Delivery Planning",
    "Java Full Stack Development",
    "Mainframe Modernization (Cobol/PL1 to Java)",
    "CI/CD Pipeline Management (Docker/Jenkins)",
    "AI & Generative AI Integration (RAG/LLM)",
    "Code Quality & Security (SonarQube, Fortify)",
    "Microservices Design (Strangler Fig)",
    "Stakeholder & Client Management",
    "Team Mentoring & Technical Governance"
  ];

  return (
    <div className="drawer-overlay no-print" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-title-group">
            <span className="drawer-eyebrow">Executive Screening Fast-Track</span>
            <h3 className="drawer-title">60-Second Recruiter Summary</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close Drawer">
            <X size={20} />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="drawer-content">
          {/* Target Role & Candidate Profile */}
          <div className="drawer-card">
            <h4 className="card-section-title">Candidate Profile</h4>
            <div className="candidate-quick-card">
              <img 
                src={contactInfo.photoUrl} 
                alt={contactInfo.name} 
                className="drawer-avatar"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <h5 className="candidate-name-text">{contactInfo.name}</h5>
                <p className="candidate-target-text">{contactInfo.targetRole}</p>
                <span className="candidate-status-tag">Open for Immediate Strategic Alignment</span>
              </div>
            </div>

            <div className="quick-stats-grid">
              <div className="quick-stat-box">
                <Clock size={14} className="stat-icon" />
                <span className="stat-val">20+ Years</span>
                <span className="stat-label">Total Exp</span>
              </div>
              <div className="quick-stat-box">
                <Award size={14} className="stat-icon" />
                <span className="stat-val">IIT Dhanbad</span>
                <span className="stat-label">M.Tech 2006</span>
              </div>
              <div className="quick-stat-box">
                <Briefcase size={14} className="stat-icon" />
                <span className="stat-val">Cubic &amp; Cognizant</span>
                <span className="stat-label">Enterprise Scope</span>
              </div>
            </div>
          </div>

          {/* Hard Numbers / Key Wins */}
          <div className="drawer-card">
            <h4 className="card-section-title">Verified Enterprise Wins</h4>
            <ul className="drawer-wins-list">
              <li>
                <strong>750+ Line Migration Runbook:</strong> 8-role RACI framework and AWS DMS vs. GoldenGate decision matrix.
              </li>
              <li>
                <strong>45+ Change Designs:</strong> Confluence-tracked architectural specifications across billing, concessions, and fraud.
              </li>
              <li>
                <strong>Cross-Cloud Ingestion:</strong> Azure-to-AWS Site-to-Site VPN CDC pipeline saving 40% initial network CAPEX.
              </li>
              <li>
                <strong>Sub-Second Flink Observability:</strong> Real-time hardware heartbeat processing shrinking MTTR from 45m to &lt;1.2s.
              </li>
              <li>
                <strong>Tier-1 Banking Modernization:</strong> Strangler Fig deconstruction for JPMC (money market) &amp; Credit Suisse (credit core).
              </li>
            </ul>
          </div>

          {/* Core Screening Checklist */}
          <div className="drawer-card">
            <h4 className="card-section-title">Technical Competencies Checklist</h4>
            <div className="screening-checklist-grid">
              {screeningChecklist.map((item, idx) => (
                <div key={idx} className="screening-item">
                  <div className="check-box">
                    <Check size={12} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Contact Actions */}
          <div className="drawer-card contact-card-drawer">
            <h4 className="card-section-title">Direct Recruitment Actions</h4>
            <div className="drawer-action-buttons">
              <a href={`tel:${contactInfo.phone}`} className="btn btn-secondary btn-full">
                <Phone size={15} />
                <span>Call +91-9163012196</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-secondary btn-full">
                <Mail size={15} />
                <span>Email Pavan Directly</span>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-full">
                <LinkedInIcon size={15} />
                <span>Connect on LinkedIn</span>
              </a>
              <button 
                className="btn btn-primary btn-full"
                onClick={() => {
                  onClose();
                  setTimeout(() => window.print(), 200);
                }}
              >
                <Printer size={15} />
                <span>Print Official Executive Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.7);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }

        .drawer-panel {
          width: 520px;
          max-width: 95vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.96);
          border-left: 1px solid var(--border-card);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(2, 6, 23, 0.5);
        }

        .drawer-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          font-weight: 700;
        }

        .drawer-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .drawer-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          border-radius: var(--radius-sm);
        }

        .drawer-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .drawer-card {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .card-section-title {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          color: var(--accent-cyan-light);
          font-weight: 700;
          margin-bottom: 14px;
          letter-spacing: 0.05em;
        }

        .candidate-quick-card {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .drawer-avatar {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          object-fit: cover;
          border: 1px solid var(--border-card);
        }

        .candidate-name-text {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .candidate-target-text {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .candidate-status-tag {
          display: inline-block;
          font-size: 0.7rem;
          color: var(--accent-emerald);
          font-weight: 600;
          margin-top: 2px;
        }

        .quick-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .quick-stat-box {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          padding: 10px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-icon {
          color: var(--accent-cyan);
        }

        .stat-val {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.675rem;
          color: var(--text-muted);
        }

        .drawer-wins-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.825rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .drawer-wins-list strong {
          color: var(--text-primary);
        }

        .screening-checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .screening-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.775rem;
          color: #cbd5e1;
        }

        .check-box {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .drawer-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn-full {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .screening-checklist-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
