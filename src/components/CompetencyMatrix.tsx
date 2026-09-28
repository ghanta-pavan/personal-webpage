import React from 'react';
import { competencies } from '../data/portfolioData';
import { 
  Database, 
  Cloud, 
  Layers, 
  Shield, 
  Server, 
  BrainCircuit, 
  CheckCircle2 
} from 'lucide-react';

export const CompetencyMatrix: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Database': return <Database size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Shield': return <Shield size={20} />;
      case 'Server': return <Server size={20} />;
      case 'BrainCircuit': return <BrainCircuit size={20} />;
      default: return <Database size={20} />;
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
          .competencies-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .competencies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
