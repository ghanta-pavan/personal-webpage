import React, { useState } from 'react';
import { careerStages } from '../data/portfolioData';
import { 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Target, 
  Building2, 
  Calendar, 
  Award,
  Sparkles
} from 'lucide-react';

export const CareerLadder: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>('da'); // Default to current Data Architect role

  const currentStage = careerStages.find(s => s.id === selectedStageId) || careerStages[6];

  return (
    <section id="career-ladder" className="section-wrapper career-ladder-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <TrendingUp size={14} />
            <span>20-Year Evolution</span>
          </div>
          <h2 className="section-title">Career Progression &amp; Architectural Growth Path</h2>
          <p className="section-subtitle">
            A consistent 20-year trajectory of expanding scope — progressing from algorithmic engineering and distributed banking systems to multi-cloud data lakehouse leadership and enterprise architecture.
          </p>
        </div>

        {/* Horizontal Ladder Stepper */}
        <div className="stepper-scroll-container">
          <div className="stepper-track">
            {careerStages.map((stage) => {
              const isSelected = stage.id === selectedStageId;
              const isCurrent = stage.isCurrent;
              const isTarget = stage.isTarget;

              return (
                <button
                  key={stage.id}
                  className={`step-node-btn ${isSelected ? 'selected' : ''} ${isCurrent ? 'current' : ''} ${isTarget ? 'target' : ''}`}
                  onClick={() => setSelectedStageId(stage.id)}
                >
                  <div className="step-badge-number">
                    {isTarget ? (
                      <Target size={14} />
                    ) : isCurrent ? (
                      <Sparkles size={14} />
                    ) : (
                      <span>0{stage.stepNumber}</span>
                    )}
                  </div>
                  <div className="step-node-info">
                    <span className="step-node-title">{stage.title}</span>
                    <span className="step-node-period">{stage.period}</span>
                  </div>
                  {isCurrent && <span className="current-pill">Current</span>}
                  {isTarget && <span className="target-pill">Target</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="glass-card stage-detail-card">
          <div className="stage-detail-header">
            <div className="stage-title-group">
              <div className="stage-level-tag">
                <Award size={13} />
                <span>Level: {currentStage.level}</span>
              </div>
              <h3 className="stage-active-title">{currentStage.title}</h3>
              <div className="stage-company-meta">
                <span className="meta-item">
                  <Building2 size={14} />
                  <span>{currentStage.company}</span>
                </span>
                <span className="meta-divider">&bull;</span>
                <span className="meta-item">
                  <Calendar size={14} />
                  <span>{currentStage.period}</span>
                </span>
              </div>
            </div>

            {currentStage.isCurrent && (
              <div className="badge badge-highlight active-indicator">
                <CheckCircle2 size={14} />
                <span>Active Executive Role</span>
              </div>
            )}

            {currentStage.isTarget && (
              <div className="badge badge-indigo active-indicator">
                <Target size={14} />
                <span>Target Executive Horizon</span>
              </div>
            )}
          </div>

          <div className="stage-body-content">
            <p className="stage-description-text">
              {currentStage.description}
            </p>

            <div className="stage-footer-callout">
              <div className="callout-icon-box">
                <ChevronRight size={16} />
              </div>
              <div className="callout-text">
                <strong>Architectural Trajectory: </strong>
                {currentStage.stepNumber < 5 
                  ? "Formative 15-year tenure at Cognizant building enterprise reliability for JPMC & Credit Suisse." 
                  : currentStage.stepNumber < 8 
                    ? "Strategic high-scale transit architecture, AWS data lakehouse engineering, and cross-cloud CDC modernization at Cubic." 
                    : "Ready to drive enterprise-wide portfolio alignment, cloud migration economics, and engineering excellence as Enterprise Architect / VP."
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stepper-scroll-container {
          overflow-x: auto;
          padding-bottom: 16px;
          margin-bottom: 24px;
          -webkit-overflow-scrolling: touch;
        }

        .stepper-track {
          display: flex;
          gap: 10px;
          min-width: 900px;
          padding: 4px;
        }

        .step-node-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-card);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          position: relative;
        }

        .step-node-btn:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .step-node-btn.selected {
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95));
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .step-node-btn.current {
          border-color: rgba(16, 185, 129, 0.5);
        }

        .step-node-btn.target {
          border-color: rgba(99, 102, 241, 0.5);
        }

        .step-badge-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.1);
          width: 24px;
          height: 24px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-node-btn.target .step-badge-number {
          color: var(--accent-indigo-light);
          background: rgba(99, 102, 241, 0.15);
        }

        .step-node-btn.current .step-badge-number {
          color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.15);
        }

        .step-node-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .step-node-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .step-node-period {
          font-size: 0.675rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .current-pill, .target-pill {
          position: absolute;
          top: 8px;
          right: 8px;
          font-size: 0.625rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .current-pill {
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .target-pill {
          background: rgba(99, 102, 241, 0.15);
          color: var(--accent-indigo-light);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .stage-detail-card {
          padding: 32px;
          border: 1px solid var(--border-active);
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.85));
        }

        .stage-detail-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
          gap: 16px;
        }

        .stage-title-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .stage-level-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan-light);
          font-family: var(--font-mono);
        }

        .stage-active-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stage-company-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .meta-divider {
          color: var(--text-muted);
        }

        .stage-description-text {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .stage-footer-callout {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-card);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .callout-icon-box {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .stage-detail-header {
            flex-direction: column;
          }
          .stage-active-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};
