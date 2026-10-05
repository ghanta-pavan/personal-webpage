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
    "Leadership: Influence Without Authority & Pod Unification",
    "Leadership: Spec-Driven Development (SDD) & Systems Engineering Operating Model",
    "Leadership: Strategic FinOps & Executive Cost Advisory (~70% Ingestion Cut)",
    "Leadership: Architecture Review Boards (ARBs) & Blameless Post-Mortems",
    "Enterprise Lakehouse (AWS S3, Glue, Spark, Athena)",
    "Streaming Platforms (Apache Kafka, AWS MSK, Flink, Kinesis)",
    "Database Migration & CDC (AWS DMS, Oracle GoldenGate)",
    "Cross-Cloud Ingestion (Azure-to-AWS VPN, ~70% Spend Cut)",
    "Cloud-Native & Serverless (Lambda, EventBridge, DynamoDB)",
    "Infrastructure as Code (Terraform Modular IaC)",
    "Programming (Python, Java 8+, Spring Boot, Angular, TypeScript)",
    "Mainframe Modernization (COBOL, PL1, CICS, JCL to Cloud)",
    "DevOps & Security (Docker, Jenkins, SonarQube, Fortify SCA)",
    "Identity Federation (IAM Identity Center, Cognito SAML/OIDC)",
    "Generative AI & RAG (Claude Code, GitHub Copilot, Defect RCA)",
    "Transit Fare, Payments & B2B Vertical Ownership (20+ Epics)",
    "Tier-1 Banking Modernization (JPMC - MMSY, Credit Suisse)"
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
                alt="Pavan Kumar Ghanta - Data & Software Architect"
                className="drawer-avatar"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <h5 className="candidate-name-text">{contactInfo.name}</h5>
                <p className="candidate-target-text">{contactInfo.targetRole}</p>
                <span className="candidate-status-tag">Notice Period: 2 Months</span>
              </div>
            </div>

            <div className="quick-stats-grid">
              <div className="quick-stat-box">
                <Clock size={14} className="stat-icon" />
                <span className="stat-val">2 Months</span>
                <span className="stat-label">Notice Period</span>
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

          {/* Core Leadership Principles & Governance Style */}
          <div className="drawer-card">
            <h4 className="card-section-title">Core Leadership Principles &amp; Governance</h4>
            <div className="drawer-leadership-list">
              <div className="drawer-leadership-item">
                <span className="leadership-num">01</span>
                <div className="leadership-item-text">
                  <strong>Influence Without Authority &amp; Pod Unification:</strong> Aligns autonomous engineering pods, DBAs, DevOps, and C-suite leadership around high-stakes architecture shifts.
                </div>
              </div>
              <div className="drawer-leadership-item">
                <span className="leadership-num">02</span>
                <div className="leadership-item-text">
                  <strong>Strategic FinOps as 1st-Class Citizen:</strong> Formulated executive strategy proving cross-cloud VPN and Kinesis pipelines cut recurring AWS data ingestion expenses by ~70%.
                </div>
              </div>
              <div className="drawer-leadership-item">
                <span className="leadership-num">03</span>
                <div className="leadership-item-text">
                  <strong>Spec-Driven Development (SDD) &amp; Operating Model:</strong> Formulated an 11-slide Systems Engineering Operating Model with clear role boundaries, 8-role RACI, stage gates, and Confluence ADRs.
                </div>
              </div>
              <div className="drawer-leadership-item">
                <span className="leadership-num">04</span>
                <div className="leadership-item-text">
                  <strong>Pragmatic Technology Stewardship:</strong> Rigorous trade-off evaluations (TCO, latency SLAs, operational complexity) rather than industry hype.
                </div>
              </div>
              <div className="drawer-leadership-item">
                <span className="leadership-num">05</span>
                <div className="leadership-item-text">
                  <strong>Talent Multiplier &amp; Mentorship:</strong> Mentored 15+ senior engineers/leads; instituted blameless post-mortems and ARBs that reduced recurring production regressions by 40%.
                </div>
              </div>
            </div>
          </div>

          {/* Hard Numbers / Key Wins */}
          <div className="drawer-card">
            <h4 className="card-section-title">Verified Enterprise Wins</h4>
            <ul className="drawer-wins-list">
              <li>
                <strong>B2B Program Vertical Ownership:</strong> Architect-of-record across 20+ Jira epics and capabilities (program configuration, funds-pool billing, low-balance notifications, and FedEx partner shipping integration).
              </li>
              <li>
                <strong>~70% Recurring Spend Reduction:</strong> Cross-cloud connectivity and streaming trade-off analysis proving managed Site-to-Site VPN and Kinesis cuts ~70% recurring network and streaming spend vs Direct Connect and MSK.
              </li>
              <li>
                <strong>750+ Line Migration Runbook:</strong> 8-role RACI framework and AWS DMS vs. GoldenGate decision matrix adopted across DBA and DevOps teams.
              </li>
              <li>
                <strong>45+ Change Designs:</strong> Confluence-tracked architectural specifications across B2B billing, concession integrations, and fraud controls.
              </li>
              <li>
                <strong>AI-Assisted SDLC Velocity:</strong> Integrated GitHub Copilot and Claude/Claude Code across engineering squads, shortening delivery cycles.
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
              <a 
                href="./resume.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-full"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                <FileText size={15} />
                <span>Open Standalone resume.html</span>
              </a>
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

        .drawer-leadership-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .drawer-leadership-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 10px;
          background: rgba(15, 23, 42, 0.4);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .leadership-num {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 2px 6px;
          border-radius: var(--radius-full);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .leadership-item-text {
          font-size: 0.8rem;
          color: #cbd5e1;
          line-height: 1.45;
        }

        .leadership-item-text strong {
          color: var(--text-primary);
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
