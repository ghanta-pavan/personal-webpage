import React from 'react';
import { competencies, domainExpertise } from '../data/portfolioData';
import { 
  Database, 
  Cloud, 
  Layers, 
  Shield, 
  Server, 
  BrainCircuit, 
  Briefcase,
  Award,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CompetencyMatrix: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Shield': return <Shield size={20} />;
      case 'Server': return <Server size={20} />;
      case 'BrainCircuit': return <BrainCircuit size={20} />;
      default: return <Briefcase size={20} />;
    }
  };

  return (
    <section id="competencies" className="section-wrapper competencies-section no-print">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Shield size={14} />
            <span>Enterprise Breadth</span>
          </div>
          <h2 className="section-title">Core Competencies &amp; Technical Governance</h2>
          <p className="section-subtitle">
            A balanced enterprise matrix spanning distributed systems design, cloud-native data platforms, legacy modernization, and technical governance.
          </p>
        </div>

        {/* Highlighted Domain Expertise Tile Strip */}
        <div className="glass-card domain-expertise-strip">
          <div className="domain-strip-header">
            <div className="domain-strip-title">
              <Briefcase size={16} className="text-accent" />
              <span>Specialized Domain &amp; Industry Expertise</span>
            </div>
            <span className="domain-strip-badge">8 Core Business Domains</span>
          </div>
          <div className="domain-tiles-cloud">
            {domainExpertise.map((domain, dIdx) => (
              <div key={dIdx} className="domain-tile">
                <span className="domain-tile-bullet">◆</span>
                <span className="domain-tile-text">{domain}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="competencies-grid">
          {competencies.map((comp, idx) => (
            <div key={idx} className="glass-card competency-card">
              <div className="competency-header">
                <div className="competency-icon-box">
                  {getIcon(comp.iconName)}
                </div>
                <h4 className="competency-domain">{comp.domain}</h4>
              </div>

              <ul className="competency-skills-list">
                {comp.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <CheckCircle2 size={14} className="skill-check-icon" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .domain-expertise-strip {
          padding: 20px 24px;
          margin-bottom: 28px;
          background: rgba(18, 35, 63, 0.45);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-md);
        }

        .domain-strip-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .domain-strip-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .text-accent {
          color: var(--accent-cyan);
        }

        .domain-strip-badge {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          padding: 2px 8px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .domain-tiles-cloud {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .domain-tile {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(18, 35, 63, 0.85);
          border: 1px solid rgba(6, 182, 212, 0.25);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.825rem;
          font-weight: 600;
          color: #e2e8f0;
          transition: all 0.2s ease;
        }

        .domain-tile:hover {
          border-color: var(--accent-cyan);
          background: rgba(18, 35, 63, 1);
          transform: translateY(-1px);
        }

        .domain-tile-bullet {
          color: var(--accent-cyan);
          font-size: 0.65rem;
        }

        .competencies-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .competency-card {
          padding: 24px;
          background: rgba(15, 23, 42, 0.65);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .competency-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .competency-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .competency-domain {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .competency-skills-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.825rem;
          color: #cbd5e1;
          line-height: 1.45;
        }

        .skill-check-icon {
          color: var(--accent-cyan);
          margin-top: 2px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .domain-tiles-cloud {
            grid-template-columns: repeat(2, 1fr);
          }
          .competencies-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .domain-tiles-cloud {
            grid-template-columns: 1fr;
          }
          .competencies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
