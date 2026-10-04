import React from 'react';
import { leadershipPrinciples } from '../data/portfolioData';
import { 
  Users, 
  TrendingUp, 
  FileCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  GitPullRequest,
  Sliders,
  DollarSign
} from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users size={22} />;
      case 'TrendingUp': return <TrendingUp size={22} />;
      case 'FileCheck': return <FileCheck size={22} />;
      case 'Target': return <Target size={22} />;
      case 'Award': return <Award size={22} />;
      default: return <ShieldCheck size={22} />;
    }
  };

  return (
    <section id="leadership" className="section-wrapper leadership-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <ShieldCheck size={14} />
            <span>Executive Governance &amp; Philosophy</span>
          </div>
          <h2 className="section-title">Core Leadership Principles &amp; Governance Style</h2>
          <p className="section-subtitle">
            Leading through influence without authority — unifying autonomous engineering pods, DBAs, DevOps, and C-suite leadership around deterministic engineering execution, Spec-Driven Development (SDD), and capital-efficient FinOps.
          </p>
        </div>

        {/* Operating Model Anchor Banner */}
        <div className="glass-card operating-model-banner">
          <div className="banner-left">
            <div className="banner-icon-box">
              <Sliders size={24} />
            </div>
            <div>
              <div className="banner-tag">Systems Engineering Operating Model</div>
              <h3 className="banner-title">Spec-Driven Development &amp; Architecture Governance</h3>
              <p className="banner-text">
                Formulated and presented an 11-slide Systems Engineering Operating Model establishing clear role boundaries between Architecture and Engineering Management. Replaced big-bang delivery ambiguity with deterministic design-approval gates, Jira/Confluence tracking, and Architecture Decision Records (ADRs).
              </p>
            </div>
          </div>
          <div className="banner-metrics-badge">
            <span className="metric-num">8-Role</span>
            <span className="metric-label">Cross-Functional RACI</span>
          </div>
        </div>

        {/* 5 Leadership Principles Grid */}
        <div className="leadership-principles-grid">
          {leadershipPrinciples.map((principle, idx) => (
            <div key={principle.id} className="glass-card leadership-card">
              <div className="card-top">
                <div className="leadership-icon-box">
                  {getIcon(principle.iconName)}
                </div>
                <div className="card-idx-badge">0{idx + 1}</div>
              </div>

              <h4 className="leadership-card-title">{principle.title}</h4>
              <p className="leadership-card-desc">{principle.description}</p>

              {/* Key Practices Chips */}
              <div className="key-practices-wrap">
                <span className="practices-label">Key Practices:</span>
                <div className="practices-chips">
                  {principle.keyPractices.map((practice, pIdx) => (
                    <span key={pIdx} className="practice-chip">
                      <CheckCircle2 size={11} className="chip-check-icon" />
                      <span>{practice}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Proof Point */}
              <div className="proof-point-box">
                <div className="proof-point-header">
                  <span className="proof-point-title">Enterprise Proof Point</span>
                </div>
                <p className="proof-point-desc">{principle.proofPoint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .operating-model-banner {
          padding: 24px 28px;
          margin-bottom: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          background: linear-gradient(135deg, rgba(18, 35, 63, 0.7), rgba(15, 23, 42, 0.8));
          border: 1px solid rgba(6, 182, 212, 0.35);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.12);
        }

        .banner-left {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          max-width: 82%;
        }

        .banner-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(6, 182, 212, 0.15);
          border: 1px solid rgba(6, 182, 212, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .banner-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 4px;
          font-weight: 700;
        }

        .banner-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .banner-text {
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .banner-metrics-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 14px 20px;
          background: rgba(11, 19, 41, 0.85);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-md);
          min-width: 140px;
          flex-shrink: 0;
        }

        .metric-num {
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 900;
          color: var(--accent-cyan);
          line-height: 1;
        }

        .metric-label {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 4px;
          text-align: center;
        }

        /* 5 Leadership Principles Grid */
        .leadership-principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .leadership-card {
          padding: 24px;
          background: rgba(15, 23, 42, 0.65);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all var(--transition-normal);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .leadership-card:hover {
          transform: translateY(-3px);
          border-color: rgba(6, 182, 212, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(6, 182, 212, 0.15);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .leadership-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-indigo-light);
        }

        .card-idx-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--accent-cyan);
          padding: 2px 8px;
          background: rgba(6, 182, 212, 0.1);
          border-radius: var(--radius-full);
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .leadership-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .leadership-card-desc {
          font-size: 0.825rem;
          color: #cbd5e1;
          line-height: 1.55;
          flex: 1;
        }

        .key-practices-wrap {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
        }

        .practices-label {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .practices-chips {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .practice-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #e2e8f0;
          line-height: 1.35;
        }

        .chip-check-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .proof-point-box {
          margin-top: 4px;
          padding: 10px 12px;
          background: rgba(6, 182, 212, 0.08);
          border-left: 3px solid var(--accent-cyan);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .proof-point-header {
          display: flex;
          align-items: center;
          margin-bottom: 3px;
        }

        .proof-point-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .proof-point-desc {
          font-size: 0.76rem;
          color: #e2e8f0;
          line-height: 1.4;
        }

        @media (max-width: 1100px) {
          .leadership-principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .operating-model-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .banner-left {
            max-width: 100%;
          }
          .leadership-principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
